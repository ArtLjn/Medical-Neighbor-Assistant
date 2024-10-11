/*
@Time : 2024/10/4 下午3:53
@Author : ljn
@File : user
@Software: GoLand
*/

package server

import (
	user "back/app/user"
	"back/config"
	"back/pkg/custom_error"
	"back/pkg/data/bo"
	"back/pkg/data/model"
	"back/pkg/data/vo"
	"back/pkg/response"
	"back/pkg/token"
	"back/pkg/util"
	"fmt"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/xuri/excelize/v2"
)

func InitUserService(group *gin.RouterGroup) {
	userGroup := group.Group("/user")
	userGroup.POST("/login", Login)
	userGroup.POST("/adminLogin", AdminLoginS)
	userGroup.GET("/queryPatientInformation", QueryPatientInformation)
	userGroup.GET("/queryDoctorInformation", QueryDoctorInformation)
	userGroup.POST("/uploadUserMessage", UploadUserMessage)
	userGroup.PUT("/updatePatientInformation", UpdatePatientInformation)
	userGroup.PUT("/updatePhysicianInformation", UpdatePhysicianInformation)
	userGroup.GET("/logOut", LogOut)
	userGroup.GET("/verifyToken", VerifyToken)
	userGroup.GET("/queryUserMessage", QueryUserMessage)

}

// Login 登录接口
func Login(ctx *gin.Context) {
	var (
		receiver bo.LoginBo
	)
	if err := ctx.ShouldBindJSON(&receiver); err != nil {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(err.Error()).Build(ctx)
		return
	} else if err = bo.Validate(receiver); err != nil {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(err.Error()).Build(ctx)
		return
	}
	responseVo, err := user.AccountLogin(receiver)
	if err != nil {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(err.Error()).Build(ctx)
		return
	}
	response.PublicResponse.SetCode(custom_error.SuccessCode).SetMsg("success").SetData(responseVo).Build(ctx)
}

// QueryUserMessage 查询用户信息
func QueryUserMessage(ctx *gin.Context) {
	receiverCtxUser, exists := ctx.Get("user_message")
	userMessage, ok := receiverCtxUser.(model.Account)
	if !exists || !ok {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}
	var queryResponse vo.LoginResponseVo
	util.BeanUtil.CopyProperties(userMessage, &queryResponse)
	response.PublicResponse.SetCode(custom_error.SuccessCode).SetMsg("success").SetData(queryResponse).Build(ctx)
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
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(info).SetData(nil).Build(ctx)
		return
	}

	checkFileSuffix := strings.Split(file.Filename, ".")
	if checkFileSuffix[len(checkFileSuffix)-1] != "xlsx" {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg("上传的文件不符合规则").Build(ctx)
		return
	}

	// 打开上传的文件
	f, err := file.Open()
	if err != nil {
		response.PublicResponse.SetCode(custom_error.SystemErrorCode).SetMsg("无法打开文件").Build(ctx)
		return
	}
	defer f.Close()

	// 读取Excel文件
	excelFile, err := excelize.OpenReader(f)
	if err != nil {
		response.PublicResponse.SetCode(custom_error.SystemErrorCode).SetMsg("读取Excel文件失败").Build(ctx)
		return
	}

	// 读取第一个Sheet的内容
	rows, err := excelFile.GetRows("患者")
	if err != nil {
		response.PublicResponse.SetCode(custom_error.SystemErrorCode).SetMsg("读取Sheet1失败").Build(ctx)
		return
	}
	user.WritePatientToDB(rows)

	// 读取第二个Sheet的内容
	rows2, err := excelFile.GetRows("医师")
	if err != nil {
		response.PublicResponse.SetCode(custom_error.SystemErrorCode).SetMsg("读取Sheet2失败").Build(ctx)
		return
	}
	user.WritePhysicianToDB(rows2)
	response.PublicResponse.SetCode(custom_error.SuccessCode).SetMsg("后台持续为您导入中，请耐心等待").SetData(nil).Build(ctx)
}

// QueryPatientInformation 查询病人信息
func QueryPatientInformation(ctx *gin.Context) {
	response.PublicResponse.SetCode(custom_error.SuccessCode).SetMsg("success").SetData(user.QueryAllPatient()).Build(ctx)
}

// QueryDoctorInformation 查询医生信息
func QueryDoctorInformation(ctx *gin.Context) {
	response.PublicResponse.SetCode(custom_error.SuccessCode).SetMsg("success").SetData(user.QueryAllPhysician()).Build(ctx)
}

// UpdatePatientInformation 更新病人信息
func UpdatePatientInformation(ctx *gin.Context) {
	var patientMes bo.PatientUpdateMessage
	if err := ctx.ShouldBindJSON(&patientMes); err != nil {
		response.PublicResponse.NewBuildJsonError(ctx)
		return
	}
	if err := user.UpdatePatientMessage(patientMes); err != nil {
		response.PublicResponse.NewBuildJsonError(ctx)
		return
	}
	response.PublicResponse.SetCode(custom_error.SuccessCode).SetMsg("success").Build(ctx)
}

// UpdatePhysicianInformation 更新医生信息
func UpdatePhysicianInformation(ctx *gin.Context) {
	var physicianMes bo.PhysicianUpdateMessage
	if err := ctx.ShouldBindJSON(&physicianMes); err != nil {
		response.PublicResponse.NewBuildJsonError(ctx)
		return
	}
	if err := user.UpdatePhysician(physicianMes); err != nil {
		response.PublicResponse.NewBuildJsonError(ctx)
		return
	}
	response.PublicResponse.SetCode(custom_error.SuccessCode).SetMsg("success").Build(ctx)
}

// AdminLoginS 管理员登录
func AdminLoginS(ctx *gin.Context) {
	var receiver bo.AdminLoginBo
	if err := ctx.ShouldBindJSON(&receiver); err != nil {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(err.Error()).Build(ctx)
		return
	} else if err = bo.Validate(receiver); err != nil {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(err.Error()).Build(ctx)
		return
	} else if !user.AdminLogin(receiver) {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg("账号或密码错误").Build(ctx)
		return
	}
	response.PublicResponse.SetCode(custom_error.SuccessCode).SetMsg("success").SetData(map[string]interface{}{
		"token": token.TokenF.SaveToken(receiver.Username),
	}).Build(ctx)
}

// VerifyToken 验证token
func VerifyToken(ctx *gin.Context) {
	authorization := ctx.GetHeader("Authorization")
	if authorization == "" {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg("token不能为空").Build(ctx)
		return
	}
	parseUUID, err := token.TokenF.VerifyToken(authorization)
	if err != nil {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(err.Error()).Build(ctx)
		return
	}
	account := user.QueryUser(map[string]interface{}{
		"uuid": parseUUID,
	})
	if account == (model.Account{}) {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg("用户不存在").Build(ctx)
		return
	}
	// 将 UUID 存储在请求上下文中
	ctx.Set("uuid", parseUUID)
	ctx.Set("user_message", account)
	ctx.Next()
}

// LogOut 退出登录
func LogOut(ctx *gin.Context) {
	authorization := ctx.GetHeader("Authorization")
	if authorization == "" {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg("token不能为空").Build(ctx)
		return
	}

	token.TokenF.LogOutToken(authorization)
	response.PublicResponse.SetCode(custom_error.SuccessCode).SetMsg("success").Build(ctx)
}
