/*
@Time : 2024/10/4 下午3:52
@Author : ljn
@File : medical
@Software: GoLand
*/

package server

import (
	"back/app/medical"
	"back/pkg/custom_error"
	"back/pkg/data/bo"
	"back/pkg/response"
	"github.com/gin-gonic/gin"
)

func InitMedicalService(group *gin.RouterGroup) {
	medicalRouter := group.Group("medical")
	{
		medicalRouter.GET("/queryMedialRecordInformation", QueryMedialRecordInformation)
		medicalRouter.POST("/medicalRegistration", MedicalRegistration)
	}
}

// QueryMedialRecordInformation 查询病人病历信息
func QueryMedialRecordInformation(ctx *gin.Context) {

}

// MedicalRegistration 就诊登记
func MedicalRegistration(ctx *gin.Context) {
	var receiver bo.MedicalUploadBo
	if err := ctx.ShouldBindJSON(&receiver); err != nil {
		response.PublicResponse.NewBuildJsonError(ctx)
		return
	} else if err = bo.Validate(receiver); err != nil {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(err.Error()).Build(ctx)
		return
	} else if err = medical.CreateMedical(receiver); err != nil {
		response.PublicResponse.SetCode(custom_error.SystemErrorCode).SetMsg(custom_error.SystemError).Build(ctx)
		return
	}
	response.PublicResponse.NewBuildSuccess(ctx)
}
