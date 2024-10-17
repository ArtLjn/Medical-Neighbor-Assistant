/*
@Time : 2024/10/4 下午3:53
@Author : ljn
@File : user
@Software: GoLand
*/

package server

import (
	"back/app/user"
	"back/config"
	"back/pkg/custom_error"
	"back/pkg/data/bo"
	"back/pkg/data/model"
	"back/pkg/data/vo"
	"back/pkg/response"
	"back/pkg/role"
	"back/pkg/token"
	"back/pkg/util"
	"fmt"
	"strconv"
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
	userGroup.GET("/likeAccountByCV", LikeAccountByCV)
}

// Login 登录接口
func Login(ctx *gin.Context) {
	var (
		receiver bo.LoginBo
	)
	res := response.NewResponseBuild() // 每次请求创建新的 ResponseBuild 实例
	if err := ctx.ShouldBindJSON(&receiver); err != nil {
		res.SetCode(custom_error.ClientErrorCode).SetMsg(err.Error()).Build(ctx)
		return
	} else if err = bo.Validate(receiver); err != nil {
		res.SetCode(custom_error.ClientErrorCode).SetMsg(err.Error()).Build(ctx)
		return
	}
	responseVo, err := user.AccountLogin(receiver)
	if err != nil {
		res.SetCode(custom_error.ClientErrorCode).SetMsg(err.Error()).Build(ctx)
		return
	}
	res.SetCode(custom_error.SuccessCode).SetMsg("success").SetData(responseVo).Build(ctx)
}

// QueryUserMessage 查询用户信息
func QueryUserMessage(ctx *gin.Context) {
	res := response.NewResponseBuild() // 每次请求创建新的 ResponseBuild 实例
	receiverCtxUser, exists := ctx.Get("user_message")
	userMessage, ok := receiverCtxUser.(model.Account)
	if !exists || !ok {
		res.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}
	var queryResponse vo.LoginResponseVo
	util.BeanUtil.CopyProperties(userMessage, &queryResponse)
	res.SetCode(custom_error.SuccessCode).SetMsg("success").SetData(queryResponse).Build(ctx)
}

// UploadUserMessage 批量导入用户信息
func UploadUserMessage(ctx *gin.Context) {
	res := response.NewResponseBuild() // 每次请求创建新的 ResponseBuild 实例
	file, err := ctx.FormFile("file")
	if err != nil {
		res.NewBuildJsonError(ctx)
		return
	}

	u := config.LoadConfig.UploadRepo
	size, _ := util.ParseSize(u.MaxSize)
	if file.Size > size {
		info := fmt.Sprintf("上传文件大小不能大于%s", u.MaxSize)
		res.SetCode(custom_error.ClientErrorCode).SetMsg(info).SetData(nil).Build(ctx)
		return
	}

	checkFileSuffix := strings.Split(file.Filename, ".")
	if checkFileSuffix[len(checkFileSuffix)-1] != "xlsx" {
		res.SetCode(custom_error.ClientErrorCode).SetMsg("上传的文件不符合规则").Build(ctx)
		return
	}

	// 打开上传的文件
	f, err := file.Open()
	if err != nil {
		res.SetCode(custom_error.SystemErrorCode).SetMsg("无法打开文件").Build(ctx)
		return
	}
	defer f.Close()

	// 读取Excel文件
	excelFile, err := excelize.OpenReader(f)
	if err != nil {
		res.SetCode(custom_error.SystemErrorCode).SetMsg("读取Excel文件失败").Build(ctx)
		return
	}

	// 读取第一个Sheet的内容
	rows, err := excelFile.GetRows("患者")
	if err != nil {
		res.SetCode(custom_error.SystemErrorCode).SetMsg("读取Sheet1失败").Build(ctx)
		return
	}
	user.WritePatientToDB(rows)

	// 读取第二个Sheet的内容
	rows2, err := excelFile.GetRows("医师")
	if err != nil {
		res.SetCode(custom_error.SystemErrorCode).SetMsg("读取Sheet2失败").Build(ctx)
		return
	}
	user.WritePhysicianToDB(rows2)
	res.SetCode(custom_error.SuccessCode).SetMsg("后台持续为您导入中，请耐心等待").SetData(nil).Build(ctx)
}

// QueryPatientInformation 查询病人信息
func QueryPatientInformation(ctx *gin.Context) {
	res := response.NewResponseBuild() // 每次请求创建新的 ResponseBuild 实例
	page, _ := strconv.Atoi(ctx.DefaultQuery("page", "1"))
	size, _ := strconv.Atoi(ctx.DefaultQuery("size", "10"))
	res.SetCode(custom_error.SuccessCode).
		SetMsg("success").SetData(user.QueryPage(page, size, role.Patient)).Build(ctx)
}

// QueryDoctorInformation 查询医生信息
func QueryDoctorInformation(ctx *gin.Context) {
	res := response.NewResponseBuild() // 每次请求创建新的 ResponseBuild 实例
	page, _ := strconv.Atoi(ctx.DefaultQuery("page", "1"))
	size, _ := strconv.Atoi(ctx.DefaultQuery("size", "10"))
	res.SetCode(custom_error.SuccessCode).
		SetMsg("success").SetData(user.QueryPage(page, size, role.Physician)).Build(ctx)
}

// UpdatePatientInformation 更新病人信息
func UpdatePatientInformation(ctx *gin.Context) {
	res := response.NewResponseBuild() // 每次请求创建新的 ResponseBuild 实例
	var patientMes bo.PatientUpdateMessage
	if err := ctx.ShouldBindJSON(&patientMes); err != nil {
		res.NewBuildJsonError(ctx)
		return
	}
	if err := user.UpdatePatientMessage(patientMes); err != nil {
		res.NewBuildJsonError(ctx)
		return
	}
	res.SetCode(custom_error.SuccessCode).SetMsg("success").Build(ctx)
}

// UpdatePhysicianInformation 更新医生信息
func UpdatePhysicianInformation(ctx *gin.Context) {
	res := response.NewResponseBuild() // 每次请求创建新的 ResponseBuild 实例
	var physicianMes bo.PhysicianUpdateMessage
	if err := ctx.ShouldBindJSON(&physicianMes); err != nil {
		res.NewBuildJsonError(ctx)
		return
	}
	if err := user.UpdatePhysician(physicianMes); err != nil {
		res.NewBuildJsonError(ctx)
		return
	}
	res.SetCode(custom_error.SuccessCode).SetMsg("success").Build(ctx)
}

// AdminLoginS 管理员登录
func AdminLoginS(ctx *gin.Context) {
	var receiver bo.AdminLoginBo
	res := response.NewResponseBuild() // 每次请求创建新的 ResponseBuild 实例
	if err := ctx.ShouldBindJSON(&receiver); err != nil {
		res.SetCode(custom_error.ClientErrorCode).SetMsg(err.Error()).Build(ctx)
		return
	} else if err = bo.Validate(receiver); err != nil {
		res.SetCode(custom_error.ClientErrorCode).SetMsg(err.Error()).Build(ctx)
		return
	} else if !user.AdminLogin(receiver) {
		res.SetCode(custom_error.ClientErrorCode).SetMsg("账号或密码错误").Build(ctx)
		return
	}
	res.SetCode(custom_error.SuccessCode).SetMsg("success").SetData(map[string]interface{}{
		"token": token.TokenF.SaveToken(receiver.Username),
	}).Build(ctx)
}

// VerifyToken 验证token
func VerifyToken(ctx *gin.Context) {
	res := response.NewResponseBuild() // 每次请求创建新的 ResponseBuild 实例
	authorization := ctx.GetHeader("Authorization")
	if authorization == "" {
		res.SetCode(custom_error.ClientErrorCode).SetMsg("token不能为空").Build(ctx)
		return
	}
	parseUUID, err := token.TokenF.VerifyToken(authorization)
	if err != nil {
		res.SetCode(custom_error.ClientErrorCode).SetMsg(err.Error()).Build(ctx)
		return
	}
	account := user.QueryUser(map[string]interface{}{
		"uuid": parseUUID,
	})
	if account == (model.Account{}) {
		res.SetCode(custom_error.ClientErrorCode).SetMsg("用户不存在").Build(ctx)
		return
	}
	// 将 UUID 存储在请求上下文中
	ctx.Set("uuid", parseUUID)
	ctx.Set("user_message", account)
	ctx.Next()
}

// LogOut 退出登录
func LogOut(ctx *gin.Context) {
	res := response.NewResponseBuild() // 每次请求创建新的 ResponseBuild 实例
	authorization := ctx.GetHeader("Authorization")
	if authorization == "" {
		res.SetCode(custom_error.ClientErrorCode).SetMsg("token不能为空").Build(ctx)
		return
	}

	token.TokenF.LogOutToken(authorization)
	res.SetCode(custom_error.SuccessCode).SetMsg("success").Build(ctx)
}

func LikeAccountByCV(ctx *gin.Context) {
	res := response.NewResponseBuild() // 每次请求创建新的 ResponseBuild 实例
	cond, val := ctx.DefaultQuery("cond", "username"), ctx.DefaultQuery("val", "123")
	page, _ := strconv.Atoi(ctx.DefaultQuery("page", "1"))
	size, _ := strconv.Atoi(ctx.DefaultQuery("size", "10"))
	re := ctx.DefaultQuery("role", role.Patient)
	res.SetCode(custom_error.SuccessCode).
		SetMsg("success").SetData(user.LikeQuery(cond, val, page, size, re)).Build(ctx)
}
