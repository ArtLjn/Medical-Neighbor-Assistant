/*
@Time : 2024/10/4 下午3:51
@Author : ljn
@File : drug
@Software: GoLand
*/

package server

import (
	"back/app/drug"
	"back/pkg/custom_error"
	"back/pkg/data"
	"back/pkg/data/model"
	"back/pkg/response"
	"errors"
	"fmt"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
	"log"
	"strconv"
)

func InitDrugService(group *gin.RouterGroup) {
	drugGroup := group.Group("/drug")
	drugGroup.GET("/queryPatientAgentDrugHistory", QueryPatientAgentDrugHistory)
	drugGroup.GET("/queryPhysiciansAgentHistoryRecord", QueryPhysiciansAgentHistoryRecord)
	drugGroup.GET("/queryDrugByID", QueryDrugByID)
	drugGroup.POST("/hospitalAgentDrugConfirmReceipt", HospitalAgentDrugConfirmReceipt)
	drugGroup.POST("/physiciansOrderAgentDrug", PhysiciansOrderAgentDrug)
	drugGroup.POST("/physiciansOrderDelivery", PhysiciansOrderDelivery)
	drugGroup.GET("/queryAllDrug", QueryAllDrug)
	drugGroup.GET("/queryDrugByMedicalId", QueryDrugByMedicalId)

}

// QueryPatientAgentDrugHistory 患者查询药品代买历史记录
func QueryPatientAgentDrugHistory(ctx *gin.Context) {
	receiverUserMes, exists := ctx.Get("user_message")
	if !exists {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}
	userMessage, ok := receiverUserMes.(model.Account)
	if !ok {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg("Invalid user message").Build(ctx)
		return
	}
	raw := ctx.DefaultQuery("raw", "0")
	p := ctx.DefaultQuery("page", "1")
	s := ctx.DefaultQuery("size", "1000000")
	if p == "" || s == "" {
		p = "1"
		s = "10000000"
	}
	page, _ := strconv.Atoi(p)
	size, _ := strconv.Atoi(s)
	drugList, err := drug.GetDrugRecord(raw, "patient", userMessage.UUID, page, size)
	if err != nil && !errors.Is(err, gorm.ErrRecordNotFound) {
		response.PublicResponse.SetCode(custom_error.SystemErrorCode).SetMsg(custom_error.SystemError).Build(ctx)
		return
	}
	response.PublicResponse.SetCode(custom_error.SuccessCode).SetMsg("success").SetData(drugList).Build(ctx)
}

// QueryPhysiciansAgentHistoryRecord 医师查询代卖药品历史记录
func QueryPhysiciansAgentHistoryRecord(ctx *gin.Context) {
	receiverUserMes, exists := ctx.Get("user_message")
	if !exists {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}

	userMessage, ok := receiverUserMes.(model.Account)
	if !ok {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg("Invalid user message").Build(ctx)
		return
	}

	raw := ctx.DefaultQuery("raw", "0")
	p := ctx.DefaultQuery("page", "1")
	s := ctx.DefaultQuery("size", "1000000")
	if p == "" || s == "" {
		p = "1"
		s = "10000000"
	}
	page, _ := strconv.Atoi(p)
	size, _ := strconv.Atoi(s)
	drugList, err := drug.GetDrugRecord(raw, "physician", userMessage.UUID, page, size)
	if err != nil && !errors.Is(err, gorm.ErrRecordNotFound) {
		response.PublicResponse.SetCode(custom_error.SystemErrorCode).SetMsg(custom_error.SystemError).Build(ctx)
		return
	}
	response.PublicResponse.SetCode(custom_error.SuccessCode).SetMsg("success").SetData(drugList).Build(ctx)
}

// HospitalAgentDrugConfirmReceipt 医院管理人员审核药品代买情况
func HospitalAgentDrugConfirmReceipt(ctx *gin.Context) {
	id := ctx.Query("id")
	if id == "" {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}
	drugRecord := drug.QueryDrugRecord(map[string]interface{}{
		"id": id,
	})
	if drugRecord != (model.Drug{}) && drugRecord.IsReceive {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg("Already receive").Build(ctx)
		return
	}
	if err := drug.HospitalAgentDrug(id); err != nil {
		response.PublicResponse.SetCode(custom_error.SystemErrorCode).SetMsg(err.Error()).Build(ctx)
		return
	}
	response.PublicResponse.SetCode(custom_error.SuccessCode).SetMsg("success").SetData(nil).Build(ctx)
}

// PhysiciansOrderAgentDrug 医师进行药品代买
func PhysiciansOrderAgentDrug(ctx *gin.Context) {
	receiverUserMes, exists := ctx.Get("user_message")
	userMessage := receiverUserMes.(model.Account)
	if !exists {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}
	id := ctx.Query("id")
	if id == "" {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}
	if err := drug.PhysicianAgentDrug(id, userMessage.UUID, userMessage.ChainAccount); err != nil {
		response.PublicResponse.SetCode(custom_error.SystemErrorCode).SetMsg(err.Error()).Build(ctx)
		return
	}
	response.PublicResponse.SetCode(custom_error.SuccessCode).SetMsg("success").Build(ctx)
}

// PhysiciansOrderDelivery 医师接单派送
func PhysiciansOrderDelivery(ctx *gin.Context) {
	receiverUserMes, exists := ctx.Get("user_message")
	userMessage := receiverUserMes.(model.Account)
	if !exists {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}
	id := ctx.Query("id")
	certificate := ctx.Query("certificate")
	if id == "" || certificate == "" {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}
	if err := drug.PhysicianDrugDelivery(id, certificate, userMessage.UUID, userMessage.ChainAccount); err != nil {
		response.PublicResponse.SetCode(custom_error.SystemErrorCode).SetMsg(err.Error()).Build(ctx)
		return
	}
	response.PublicResponse.SetCode(custom_error.SuccessCode).SetMsg("success").Build(ctx)
}

func QueryDrugByID(ctx *gin.Context) {
	id := ctx.Query("id")
	if id == "" {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}
	drugRecord := drug.QueryDrugAndAccountMessage(id)
	if drugRecord == nil {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg("No such drug").Build(ctx)
		return
	}
	response.PublicResponse.SetCode(custom_error.SuccessCode).SetMsg("success").SetData(drugRecord).Build(ctx)
}

func QueryDrugByMedicalId(ctx *gin.Context) {
	medicalId := ctx.Query("medical_id")
	if medicalId == "" {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}
	var (
		result     map[string]interface{}
		acc        = model.Account{}
		inquiry    = model.Inquiry{}
		medical    = model.Medical{}
		drugRecord = model.Drug{}
	)
	err := data.Db.Table(fmt.Sprintf("%s as d", drugRecord.TableName())).
		Select("i.patient, i.appointment_time, i.reserved_phone, i.physician, i.type, i.inquiry_detail, i.is_inquiry, i.is_reception, "+
			"m.diagnostic_description, m.inquiry_video, m.medical_img, d.hospital, d.create_time, d.already_buy, d.delivery_certificate, d.is_receive,"+
			"d.id as drug_id,"+
			"j.username as patient_username,j.sex as patient_sex,j.age as patient_age, p.username as physician_username").
		Joins(fmt.Sprintf("JOIN %s as m ON d.bind_medical = m.id", medical.TableName())).
		Joins(fmt.Sprintf("JOIN %s as i ON m.bind_inquiry_id = i.id", inquiry.TableName())).
		Joins(fmt.Sprintf("JOIN %s as j ON j.uuid = i.patient", acc.TableName())).
		Joins(fmt.Sprintf("JOIN %s as p ON p.uuid = i.physician", acc.TableName())).
		Where("d.bind_medical = ?", medicalId).Scan(&result).Error
	if err != nil {
		log.Printf("Error querying drug history for user %s: %v", medicalId, err)
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.NotFound).Build(ctx)
		return
	}
	response.PublicResponse.SetCode(custom_error.SuccessCode).SetMsg("success").SetData(result).Build(ctx)
}

func QueryAllDrug(ctx *gin.Context) {
	page, _ := strconv.Atoi(ctx.DefaultQuery("page", "1"))
	size, _ := strconv.Atoi(ctx.DefaultQuery("size", "10"))
	drugList, err := drug.QueryAllDrug(page, size)
	if err != nil {
		response.PublicResponse.SetCode(custom_error.SystemErrorCode).SetMsg(custom_error.SystemError).Build(ctx)
		return
	}
	response.PublicResponse.SetCode(custom_error.SuccessCode).SetMsg("success").SetData(drugList).Build(ctx)
}
