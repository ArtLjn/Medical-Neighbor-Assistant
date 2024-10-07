/*
@Time : 2024/10/4 下午3:52
@Author : ljn
@File : medical
@Software: GoLand
*/

package server

import (
	"back/app/Inquiry"
	"back/app/medical"
	"back/app/user"
	"back/pkg/custom_error"
	"back/pkg/data"
	"back/pkg/data/bo"
	"back/pkg/data/model"
	"back/pkg/response"
	"back/pkg/util"
	"github.com/gin-gonic/gin"
	"log"
	"time"
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
	inquiryId := ctx.Query("inquiryId")
	if inquiryId == "" {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}
	medicalRecord := medical.QueryMedicalByCond(map[string]interface{}{
		"bind_inquiry_id": inquiryId,
	})
	if medicalRecord == (model.Medical{}) {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.NotFound).Build(ctx)
		return
	}
	response.PublicResponse.SetCode(custom_error.SuccessCode).SetMsg("success").SetData(medicalRecord).Build(ctx)
}

// MedicalRegistration 就诊登记
func MedicalRegistration(ctx *gin.Context) {
	receiverCtxUser, exists := ctx.Get("user_message")
	userMessage, ok := receiverCtxUser.(model.Account)
	if !exists || !ok {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}
	var receiver bo.MedicalUploadBo
	if err := ctx.ShouldBindJSON(&receiver); err != nil {
		response.PublicResponse.NewBuildJsonError(ctx)
		return
	} else if err = bo.Validate(receiver); err != nil {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(err.Error()).Build(ctx)
		return
	}
	// 查询问诊记录并进行校验合法性
	inquiryRecord := Inquiry.QueryInquiryRecordByCond(map[string]interface{}{"id": receiver.BindInquiryID})
	if inquiryRecord == (model.Inquiry{}) {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.NotFound).Build(ctx)
		return
	} else if !inquiryRecord.IsReception {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg("未被接诊").Build(ctx)
		return
	} else if inquiryRecord.IsInquiry {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg("已经问诊完成，无需在进行登记").Build(ctx)
		return
	} else if medical.QueryMedicalByCond(map[string]interface{}{"bind_inquiry_id": receiver.BindInquiryID}) != (model.Medical{}) {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg("已经登记过病历").Build(ctx)
		return
	}
	// 创建病历
	medicalId, err := medical.CreateMedical(receiver, userMessage.ChainAccount)
	if err != nil {
		response.PublicResponse.SetCode(custom_error.SystemErrorCode).SetMsg(err.Error()).Build(ctx)
		return
	}

	// 如果患者需要代购药品
	if receiver.IsNeedByDrug {
		inquiryMsg := Inquiry.QueryInquiryRecordByCond(map[string]interface{}{
			"id": receiver.BindInquiryID,
		})
		if inquiryMsg == (model.Inquiry{}) {
			response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.NotFound).Build(ctx)
			return
		}
		physicianMessage := user.QueryUser(map[string]interface{}{
			"uuid": inquiryMsg.Physician,
		})
		patientMessage := user.QueryUser(map[string]interface{}{
			"uuid": inquiryMsg.Patient,
		})
		if physicianMessage == (model.Account{}) || patientMessage == (model.Account{}) {
			response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.NotFound).Build(ctx)
			return
		}
		// 创建药品
		drugReceiver := model.Drug{
			Patient:     inquiryMsg.Patient,
			Physician:   inquiryMsg.Physician,
			Hospital:    physicianMessage.Hospital,
			CreateTime:  time.Now().Format("2006-01-02 15:04:05"),
			BindMedical: medicalId,
			AlreadyBuy:  false,
			IsReceive:   false,
		}
		if err = data.Db.Create(&drugReceiver).Error; err != nil {
			log.Println(err)
			response.PublicResponse.SetCode(custom_error.SystemErrorCode).SetMsg("创建失败").Build(ctx)
			return
		}
		// 患者登记药品代买信息写入区块链
		r, e := util.IsSuccessMsg(util.CommonEqByUser(patientMessage.ChainAccount, "patientRegDrugDelivery", []interface{}{
			drugReceiver.ID,
			receiver.BindInquiryID,
		}))
		if !r && e != nil {
			response.PublicResponse.SetCode(custom_error.SystemErrorCode).SetMsg(e.Error()).Build(ctx)
			return
		}
	}
	response.PublicResponse.NewBuildSuccess(ctx)
}
