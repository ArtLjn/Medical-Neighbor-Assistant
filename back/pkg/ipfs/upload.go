package ipfs

import (
	"back/config"
	"back/pkg/response"
	"fmt"
	"github.com/gin-gonic/gin"
	shell "github.com/ipfs/go-ipfs-api"
	"mime/multipart"
	"regexp"
	"strconv"
	"strings"
	"sync"
)

// GinUploadImg 直接将文件上传到 IPFS
func GinUploadImg(ctx *gin.Context) {
	file, err := ctx.FormFile("file")
	u := config.LoadConfig.UploadRepo
	size, _ := ParseSize(u.MaxSize)
	res := response.ResponseBuild{}
	if err != nil {
		res.NewBuildJsonError(ctx)
		return
	} else if file.Size > size {
		info := fmt.Sprintf("上传文件大小不能大于%s", u.MaxSize)
		res.SetCode(400).SetMsg(info).SetData(nil).Build(ctx)
		return
	}
	originName := file.Filename
	lastDotIndex := strings.LastIndex(originName, ".")
	if lastDotIndex == -1 {
		res.SetCode(400).SetMsg("文件后缀获取失败").SetData(nil).Build(ctx)
		return
	}
	var mx sync.Mutex
	mx.Lock()
	defer mx.Unlock()
	// 调用 IPFS 上传函数
	cid, err := uploadToIPFS(file)
	if err != nil {
		res.SetCode(500).SetMsg("文件上传到 IPFS 失败").SetData(nil).Build(ctx)
		return
	}

	// 返回 IPFS CID
	res.SetCode(200).SetMsg("上传成功").SetData(u.Domain + cid).Build(ctx)
}

// ParseSize 解析类似 "10MB" 的大小字符串，并返回字节数
func ParseSize(sizeStr string) (int64, error) {
	// 移除字符串中的任何空格
	sizeStr = strings.TrimSpace(sizeStr)

	// 使用正则表达式匹配数字和单位
	re := regexp.MustCompile(`^(\d+)([A-Za-z]+)$`)
	matches := re.FindStringSubmatch(sizeStr)
	if len(matches) != 3 {
		return 0, fmt.Errorf("invalid size format: %s", sizeStr)
	}

	// 将数字解析为 int64
	size, err := strconv.ParseInt(matches[1], 10, 64)
	if err != nil {
		return 0, err
	}

	// 将单位转换为字节
	var bytes int64
	switch strings.ToUpper(matches[2]) {
	case "B":
		bytes = size
	case "KB":
		bytes = size * 1024
	case "MB":
		bytes = size * 1024 * 1024
	case "GB":
		bytes = size * 1024 * 1024 * 1024
	default:
		return 0, fmt.Errorf("unsupported size unit: %s", matches[2])
	}

	return bytes, nil
}

// uploadToIPFS 直接将文件流上传并固定到 IPFS
func uploadToIPFS(file *multipart.FileHeader) (string, error) {
	sh := shell.NewShell(config.LoadConfig.UploadRepo.Ipfs) // IPFS 节点地址

	srcFile, err := file.Open()
	if err != nil {
		return "", err
	}
	defer srcFile.Close()

	// 上传文件到 IPFS
	cid, err := sh.Add(srcFile)
	if err != nil {
		return "", err
	}

	// 固定文件
	err = sh.Pin(cid)
	if err != nil {
		return "", fmt.Errorf("文件上传成功，但固定失败: %v", err)
	}

	return cid, nil
}
