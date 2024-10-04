/*
@Time : 2024/10/4 下午3:53
@Author : ljn
@File : user
@Software: GoLand
*/

package user

import (
	"back/app/user/service"
	"back/pkg/data/bo"
	"back/pkg/data/model"
	"back/pkg/response"
	"github.com/gin-gonic/gin"
)

func InitUserService(group *gin.RouterGroup) {
	userGroup := group.Group("/user")
	{
		userGroup.POST("/login", Login)
		userGroup.GET("/queryPatientInformation", QueryPatientInformation)
		userGroup.GET("/queryDoctorInformation", QueryDoctorInformation)
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
	return
}

// QueryPatientInformation 查询病人信息
func QueryPatientInformation(ctx *gin.Context) {

}

// QueryDoctorInformation 查询医生信息
func QueryDoctorInformation(ctx *gin.Context) {

}
