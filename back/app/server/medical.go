/*
@Time : 2024/10/4 下午3:52
@Author : ljn
@File : medical
@Software: GoLand
*/

package server

import "github.com/gin-gonic/gin"

func InitMedicalService(group *gin.RouterGroup) {
	medicalRouter := group.Group("medical")
	{
		medicalRouter.GET("/queryMedialRecordInformation", QueryMedialRecordInformation)
	}
}

// QueryMedialRecordInformation 查询病人病历信息
func QueryMedialRecordInformation(ctx *gin.Context) {

}
