package ipfs

import (
	"back/config"
	"back/pkg/custom_error"
	"back/pkg/response"
	"back/pkg/util"
	"fmt"
	"github.com/gin-gonic/gin"
	shell "github.com/ipfs/go-ipfs-api"
	"mime/multipart"
	"strings"
)


// GinUploadImg 直接将文件上传到 IPFS
func GinUploadImg(ctx *gin.Context) {
	file, err := ctx.FormFile("file")
	u := config.LoadConfig.UploadRepo
	size, _ := util.ParseSize(u.MaxSize)
	res := response.ResponseBuild{}
	if err != nil {
		res.NewBuildJsonError(ctx)
		return
	} else if file.Size > size {
		info := fmt.Sprintf("上传文件大小不能大于%s", u.MaxSize)
		res.SetCode(custom_error.ClientErrorCode).SetMsg(info).SetData(nil).Build(ctx)
		return
	}
	originName := file.Filename
	lastDotIndex := strings.LastIndex(originName, ".")
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
