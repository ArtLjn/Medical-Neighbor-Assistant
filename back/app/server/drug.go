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
	"back/pkg/util"
	"errors"
	"fmt"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
	"log"
)

func InitDrugService(group *gin.RouterGroup) {
	drugGroup := group.Group("/drug")
	{
		drugGroup.GET("/queryPatientAgentDrugHistory", QueryPatientAgentDrugHistory)
		drugGroup.GET("/queryPhysiciansAgentHistoryRecord", QueryPhysiciansAgentHistoryRecord)
		drugGroup.GET("/queryDrugByID", QueryDrugByID)
		drugGroup.POST("/hospitalAgentDrugConfirmReceipt", HospitalAgentDrugConfirmReceipt)
		drugGroup.POST("/physiciansOrderAgentDrug", PhysiciansOrderAgentDrug)
		drugGroup.POST("/physiciansOrderDelivery", PhysiciansOrderDelivery)
		drugGroup.GET("/queryAllDrug", QueryAllDrug)
		drugGroup.GET("/queryDrugByMedicalId", QueryDrugByMedicalId)
	}
}

const (
	DrugAlreadyBy      = "1" // 已经购买
	DrugNotBy          = "2" // 未购买
	AlreadyCertificate = "3" // 已经派送
	NotCertificate     = "4" // 未派送
	FinishDrug         = "5" // 已经完成
)

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
	drugList, err := queryDrugRecord(raw, "patient", userMessage.UUID)
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
	drugList, err := queryDrugRecord(raw, "physician", userMessage.UUID)
	if err != nil && !errors.Is(err, gorm.ErrRecordNotFound) {
		response.PublicResponse.SetCode(custom_error.SystemErrorCode).SetMsg(custom_error.SystemError).Build(ctx)
		return
	}
	response.PublicResponse.SetCode(custom_error.SuccessCode).SetMsg("success").SetData(drugList).Build(ctx)
}

func queryDrugRecord(raw, cond, val string) ([]map[string]interface{}, error) {
	//query := data.Db.Model(&model.Drug{}).Where(fmt.Sprintf("%s = ?", cond), val)
	var (
		acc        = model.Account{}
		inquiry    = model.Inquiry{}
		medical    = model.Medical{}
		drugRecord = model.Drug{}
		results    []map[string]interface{}
	)
	query := data.Db.Table(fmt.Sprintf("%s as d", drugRecord.TableName())).
		Select("i.patient, i.appointment_time, i.reserved_phone, i.physician, i.type, i.inquiry_detail, i.is_inquiry, i.is_reception, "+
			"m.diagnostic_description, m.inquiry_video, m.medical_img, d.hospital, d.create_time, d.already_buy, d.delivery_certificate, d.is_receive,"+
			"d.id as drug_id,"+
			"j.username as patient_username,j.sex as patient_sex,j.age as patient_age, p.username as physician_username").
		Joins(fmt.Sprintf("JOIN %s as m ON d.bind_medical = m.id", medical.TableName())).
		Joins(fmt.Sprintf("JOIN %s as i ON m.bind_inquiry_id = i.id", inquiry.TableName())).
		Joins(fmt.Sprintf("JOIN %s as j ON j.uuid = i.patient", acc.TableName())).
		Joins(fmt.Sprintf("JOIN %s as p ON p.uuid = i.physician", acc.TableName())).
		Where(fmt.Sprintf("d.%s = ?", cond), val)
	//switch raw {
	//case DrugAlreadyBy:
	//	query = query.Where("already_buy = ?", true)
	//case DrugNotBy:
	//	query = query.Where("already_buy = ?", false)
	//case AlreadyCertificate:
	//	query = query.Where("delivery_certificate IS NOT NULL").Where("delivery_certificate != ''").Where("is_receive = ?", false)
	//case NotCertificate:
	//	query = query.Where("already_buy = ?", true).Where("delivery_certificate = ''")
	//case FinishDrug:
	//	query = query.Where("is_receive = ?", true)
	//default:
	//	// 未定义或空的 `raw` 参数可以返回一个默认查询或者错误
	//}
	switch raw {
	case DrugAlreadyBy:
		query = query.Where("d.already_buy = ?", true)
	case DrugNotBy:
		query = query.Where("d.already_buy = ?", false)
	case AlreadyCertificate:
		query = query.Where("d.delivery_certificate IS NOT NULL").Where("d.delivery_certificate != ''").Where("d.is_receive = ?", false)
	case NotCertificate:
		query = query.Where("d.already_buy = ?", true).Where("d.delivery_certificate = ''")
	case FinishDrug:
		query = query.Where("d.is_receive = ?", true)
	default:
		// 未定义或空的 `raw` 参数可以返回一个默认查询或者错误
	}
	if err := query.Scan(&results).Error; err != nil {
		log.Printf("Error querying drug history for user %s: %v", val, err)
		return nil, err
	}
	return results, nil
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
	r, e := util.IsSuccessMsg(util.CommonEq(
		"hospitalReviewDrugDelivery", []interface{}{id}))
	if !r && e != nil {
		log.Println(e)
		response.PublicResponse.SetCode(custom_error.SystemErrorCode).SetMsg(e.Error()).Build(ctx)
		return
	}
	if err := drug.UpdateDrugRecord(map[string]interface{}{
		"id": id,
	}, map[string]interface{}{
		"is_receive": true,
	}); err != nil {
		log.Println(err)
		response.PublicResponse.SetCode(custom_error.SystemErrorCode).SetMsg(custom_error.SystemError).Build(ctx)
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
	drugRecord := drug.QueryDrugRecord(map[string]interface{}{
		"id":        id,
		"physician": userMessage.UUID,
	})
	if drugRecord != (model.Drug{}) && drugRecord.AlreadyBuy {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg("Already buy").Build(ctx)
		return
	}
	r, e := util.IsSuccessMsg(util.CommonEqByUser(userMessage.ChainAccount,
		"physicianAcceptDrugDelivery", []interface{}{id}))
	if !r && e != nil {
		log.Println(e)
		response.PublicResponse.SetCode(custom_error.SystemErrorCode).SetMsg(e.Error()).Build(ctx)
		return
	}
	if err := drug.UpdateDrugRecord(map[string]interface{}{
		"id":        id,
		"physician": userMessage.UUID,
	}, map[string]interface{}{
		"already_buy": true,
	}); err != nil {
		log.Println(err)
		response.PublicResponse.SetCode(custom_error.SystemErrorCode).SetMsg(custom_error.SystemError).Build(ctx)
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
	if id == "" {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}
	r, e := util.IsSuccessMsg(util.CommonEqByUser(userMessage.ChainAccount,
		"physicianDeliveryDrug", []interface{}{id, certificate}))
	if !r && e != nil {
		log.Println(e)
		response.PublicResponse.SetCode(custom_error.SystemErrorCode).SetMsg(e.Error()).Build(ctx)
		return
	}
	if err := drug.UpdateDrugRecord(map[string]interface{}{
		"id":        id,
		"physician": userMessage.UUID,
	}, map[string]interface{}{
		"delivery_certificate": certificate,
	}); err != nil {
		log.Println(err)
		response.PublicResponse.SetCode(custom_error.SystemErrorCode).SetMsg(custom_error.SystemError).Build(ctx)
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
	//drugRecord := drug.QueryDrugRecord(map[string]interface{}{"bind_medical": medicalId})
	response.PublicResponse.SetCode(custom_error.SuccessCode).SetMsg("success").SetData(result).Build(ctx)
}

func QueryAllDrug(ctx *gin.Context) {
	drugList := drug.QueryAllDrug()
	response.PublicResponse.SetCode(custom_error.SuccessCode).SetMsg("success").SetData(drugList).Build(ctx)
}
