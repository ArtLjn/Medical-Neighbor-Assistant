/*
@Time : 2024/10/4 下午3:53
@Author : ljn
@File : user
@Software: GoLand
*/

package user

import "github.com/gin-gonic/gin"

func InitUserService(group *gin.RouterGroup) {
	userGroup := group.Group("/user")
	{
		userGroup.POST("/login", Login)
		userGroup.GET("/queryPatientInformation", QueryPatientInformation)
		userGroup.GET("/queryDoctorInformation", QueryDoctorInformation)
		userGroup.GET("/queryMedialRecordInformation", QueryMedialRecordInformation)
	}
}

// Login 登录接口
func Login(ctx *gin.Context) {

}

// QueryPatientInformation 查询病人信息
func QueryPatientInformation(ctx *gin.Context) {

}

// QueryDoctorInformation 查询医生信息
func QueryDoctorInformation(ctx *gin.Context) {

}

// QueryMedialRecordInformation 查询病人病历信息
func QueryMedialRecordInformation(ctx *gin.Context) {

}
