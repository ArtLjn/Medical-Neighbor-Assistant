package ipfs

import (
	"back/config"
	"back/pkg/custom_error"
	"back/pkg/response"
	"back/pkg/util"
	"fmt"
	"github.com/mr-tron/base58"
	"io"
	"math/rand"
	"mime/multipart"
	"os"
	"path/filepath"
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
	cid, err := uploadToIPFSBackUp(file)
	if err != nil {
		res.SetCode(custom_error.SystemErrorCode).SetMsg("文件上传到 IPFS 失败").SetData(nil).Build(ctx)
		return
	}

	// 返回 IPFS CID
	res.SetCode(custom_error.SuccessCode).SetMsg("上传成功").SetData(cid).Build(ctx)
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

// uploadToIPFSBackUp 直接将文件流上传并固定到 IPFS，同时在本地保存一个副本
func uploadToIPFSBackUp(file *multipart.FileHeader) (string, error) {
	// 创建一个 IPFS 客户端
	u := config.LoadConfig.UploadRepo
	var pseudoCID string
	// 尝试上传到 IPFS
	cid, err := uploadToIPFS(file)
	if err != nil {
		// 如果上传失败，生成一个伪 CID
		pseudoCID = generatePseudoCID()
	} else {
		pseudoCID = cid
	}

	// 打开文件
	srcFile, err := file.Open()
	if err != nil {
		return "", fmt.Errorf("打开文件失败: %v", err)
	}
	defer srcFile.Close()

	// 在本地保存一个以 cid 为名称的副本
	localPath := filepath.Join(u.BackUp, pseudoCID) // 设定保存路径
	dstFile, err := os.Create(localPath)
	if err != nil {
		return "", fmt.Errorf("创建本地副本失败: %v", err)
	}
	defer dstFile.Close()

	// 重置源文件指针到开头
	_, err = srcFile.Seek(0, 0)
	if err != nil {
		return "", fmt.Errorf("重置文件指针失败: %v", err)
	}

	// 将内容写入本地文件
	_, err = io.Copy(dstFile, srcFile)
	if err != nil {
		return "", fmt.Errorf("保存本地副本失败: %v", err)
	}

	return config.LoadConfig.Server.ProxyUrl + pseudoCID, nil
}

// generatePseudoCID 生成一个伪 CID
func generatePseudoCID() string {
	// 生成一个随机字节数组，长度应与 IPFS CID 长度一致
	bytes := make([]byte, 32) // IPFS V0 CID 通常为 32 字节
	_, _ = rand.Read(bytes)

	// Base58 编码，并添加前缀
	return "Qm" + base58.Encode(bytes)
}
