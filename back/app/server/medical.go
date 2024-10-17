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
	"back/pkg/data/model"
	"back/pkg/response"
	"github.com/gin-gonic/gin"
)

func InitMedicalService(group *gin.RouterGroup) {
	medicalRouter := group.Group("medical")
	{
		medicalRouter.GET("/queryMedialRecordInformation", QueryMedialRecordInformation)
		medicalRouter.POST("/medicalRegistration", MedicalRegistration)
		medicalRouter.GET("/queryMedicalByID", QueryMedicalByID)
	}
}

// QueryMedialRecordInformation 查询病人病历信息
func QueryMedialRecordInformation(ctx *gin.Context) {
	res := response.NewResponseBuild() // 每次请求创建新的 ResponseBuild 实例
	inquiryId := ctx.Query("inquiryId")
	if inquiryId == "" {
		res.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}
	medicalRecord := medical.QueryMedicalByCond(map[string]interface{}{
		"bind_inquiry_id": inquiryId,
	})
	if medicalRecord == (model.Medical{}) {
		res.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.NotFound).Build(ctx)
		return
	}
	res.SetCode(custom_error.SuccessCode).SetMsg("success").SetData(medicalRecord).Build(ctx)
}

// MedicalRegistration 就诊登记
func MedicalRegistration(ctx *gin.Context) {
	res := response.NewResponseBuild() // 每次请求创建新的 ResponseBuild 实例

	// 接收上下文中的用户信息
	receiverCtxUser, exists := ctx.Get("user_message")
	userMessage, ok := receiverCtxUser.(model.Account)
	if !exists || !ok {
		// 如果用户信息不存在或者类型不对，返回错误
		res.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}
	// 创建一个接收者结构体
	var receiver bo.MedicalUploadBo
	// 解析请求体中的数据到接收者结构体
	if err := ctx.ShouldBindJSON(&receiver); err != nil {
		// 如果解析失败，返回错误
		res.NewBuildJsonError(ctx)
		return
	} else if err = bo.Validate(receiver); err != nil {
		// 如果验证失败，返回错误
		res.SetCode(custom_error.ClientErrorCode).SetMsg(err.Error()).Build(ctx)
		return
	} else if err = medical.CreateMedicalF(receiver, userMessage.ChainAccount); err != nil {
		// 如果创建失败，返回错误
		res.SetCode(custom_error.ClientErrorCode).SetMsg(err.Error()).Build(ctx)
		return
	}
	// 返回成功
	res.NewBuildSuccess(ctx)
}

func QueryMedicalByID(ctx *gin.Context) {
	res := response.NewResponseBuild() // 每次请求创建新的 ResponseBuild 实例
	medicalId := ctx.Query("medicalId")
	if medicalId == "" {
		res.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}
	medicalRecord := medical.QueryMedicalByCond(map[string]interface{}{
		"id": medicalId,
	})
	if medicalRecord == (model.Medical{}) {
		res.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.NotFound).Build(ctx)
		return
	}
	res.SetCode(custom_error.SuccessCode).SetMsg("success").SetData(medicalRecord).Build(ctx)
}
