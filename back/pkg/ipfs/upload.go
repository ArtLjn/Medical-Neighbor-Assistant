package ipfs

import (
	"back/config"
	"back/pkg/custom_error"
	"back/pkg/response"
	"back/pkg/util"
	"fmt"
	"mime/multipart"
	"strings"

	"github.com/gin-gonic/gin"
	shell "github.com/ipfs/go-ipfs-api"
)

// GinUploadImg 直接将文件上传到 IPFS
func GinUploadImg(ctx *gin.Context) {
	res := response.ResponseBuild{}
	// 获取一个名为file的文件
	file, err := ctx.FormFile("file")
	// 读取配置文件中的上传配置
	u := config.LoadConfig.UploadRepo
	size, _ := util.ParseSize(u.MaxSize)
	if err != nil {
		res.NewBuildJsonError(ctx)
		return
		// 判断文件大小是否超过限制
	} else if file.Size > size {
		info := fmt.Sprintf("上传文件大小不能大于%s", u.MaxSize)
		res.SetCode(custom_error.ClientErrorCode).SetMsg(info).SetData(nil).Build(ctx)
		return
	}
	// 获取文件名称
	originName := file.Filename
	// 获取文件后缀
	lastDotIndex := strings.LastIndex(originName, ".")
	// 如果文件没有后缀，则返回错误
	if lastDotIndex == -1 {
		res.SetCode(custom_error.ClientErrorCode).SetMsg("文件后缀获取失败").SetData(nil).Build(ctx)
		return
	}
	// 调用 IPFS 上传函数
	cid, err := uploadToIPFS(file)
	if err != nil {
		res.SetCode(custom_error.SystemErrorCode).SetMsg("文件上传到 IPFS 失败").SetData(nil).Build(ctx)
		return
	}

	// 返回 IPFS CID
	res.SetCode(custom_error.SuccessCode).SetMsg("上传成功").SetData(u.Domain + cid).Build(ctx)
}

// uploadToIPFS 直接将文件流上传并固定到 IPFS
func uploadToIPFS(file *multipart.FileHeader) (string, error) {
	// 创建一个 IPFS 客户端
	sh := shell.NewShell(config.LoadConfig.UploadRepo.Ipfs) // IPFS 节点地址

	// 打开文件
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
