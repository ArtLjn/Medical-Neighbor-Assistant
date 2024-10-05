/*
@Time : 2024/10/4 下午3:53
@Author : ljn
@File : user
@Software: GoLand
*/

package user

import (
	"back/app/user/service"
	"back/config"
	"back/pkg/data/bo"
	"back/pkg/data/model"
	"back/pkg/response"
	"back/pkg/util"
	"fmt"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/xuri/excelize/v2"
)

func InitUserService(group *gin.RouterGroup) {
	userGroup := group.Group("/user")
	{
		userGroup.POST("/login", Login)
		userGroup.GET("/queryPatientInformation", QueryPatientInformation)
		userGroup.GET("/queryDoctorInformation", QueryDoctorInformation)
		userGroup.POST("/uploadUserMessage", UploadUserMessage)
	}
}

// Login 登录接口
func Login(ctx *gin.Context) {
	var user bo.LoginBo
	if err := ctx.ShouldBindJSON(&user); err != nil {
		response.PublicResponse.SetCode(400).SetMsg(err.Error()).Build(ctx)
		return
	} else if err = bo.Validate(user); err != nil {
		response.PublicResponse.SetCode(400).SetMsg(err.Error()).Build(ctx)
		return
	}
	account := service.QueryUser(map[string]interface{}{
		"account":  user.Username,
		"password": user.Password,
	})
	if account == (model.Account{}) {
		response.PublicResponse.SetCode(400).SetMsg("账号或密码错误").Build(ctx)
		return
	}
	response.PublicResponse.SetCode(200).SetMsg("success").SetData(map[string]interface{}{
		"role":          account.Role,
		"chain_account": account.ChainAccount,
	}).Build(ctx)
}

// UploadUserMessage 批量导入用户信息
func UploadUserMessage(ctx *gin.Context) {
	file, err := ctx.FormFile("file")
	if err != nil {
		response.PublicResponse.NewBuildJsonError(ctx)
		return
	}

	u := config.LoadConfig.UploadRepo
	size, _ := util.ParseSize(u.MaxSize)
	if file.Size > size {
		info := fmt.Sprintf("上传文件大小不能大于%s", u.MaxSize)
		response.PublicResponse.SetCode(400).SetMsg(info).SetData(nil).Build(ctx)
		return
	}

	checkFileSuffix := strings.Split(file.Filename, ".")
	if checkFileSuffix[len(checkFileSuffix)-1] != "xlsx" {
		response.PublicResponse.SetCode(400).SetMsg("上传的文件不符合规则").Build(ctx)
		return
	}

	// 打开上传的文件
	f, err := file.Open()
	if err != nil {
		response.PublicResponse.SetCode(500).SetMsg("无法打开文件").Build(ctx)
		return
	}
	defer f.Close()

	// 读取Excel文件
	excelFile, err := excelize.OpenReader(f)
	if err != nil {
		response.PublicResponse.SetCode(500).SetMsg("读取Excel文件失败").Build(ctx)
		return
	}

	// 读取第一个Sheet的内容
	rows, err := excelFile.GetRows("患者")
	if err != nil {
		response.PublicResponse.SetCode(500).SetMsg("读取Sheet1失败").Build(ctx)
		return
	}
	service.WritePatientToDB(rows)

	// 读取第二个Sheet的内容
	rows2, err := excelFile.GetRows("医师")
	if err != nil {
		response.PublicResponse.SetCode(500).SetMsg("读取Sheet2失败").Build(ctx)
		return
	}
	service.WritePhysicianToDB(rows2)
	response.PublicResponse.SetCode(200).SetMsg("用户信息导入成功").SetData(nil).Build(ctx)
}

// QueryPatientInformation 查询病人信息
func QueryPatientInformation(ctx *gin.Context) {
	response.PublicResponse.SetCode(200).SetMsg("success").SetData(service.QueryAllPatient()).Build(ctx)
}

// QueryDoctorInformation 查询医生信息
func QueryDoctorInformation(ctx *gin.Context) {
	response.PublicResponse.SetCode(200).SetMsg("success").SetData(service.QueryAllPhysician()).Build(ctx)
}
