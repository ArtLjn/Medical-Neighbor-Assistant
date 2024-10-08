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

func queryDrugRecord(raw, cond, val string) ([]model.Drug, error) {
	query := data.Db.Model(&model.Drug{}).Where(fmt.Sprintf("%s = ?", cond), val)

	switch raw {
	case DrugAlreadyBy:
		query = query.Where("already_buy = ?", true)
	case DrugNotBy:
		query = query.Where("already_buy = ?", false)
	case AlreadyCertificate:
		query = query.Where("delivery_certificate IS NOT NULL").Where("delivery_certificate != ''").Where("is_receive = ?", false)
	case NotCertificate:
		query = query.Where("already_buy = ?", true).Where("delivery_certificate = ''")
	case FinishDrug:
		query = query.Where("is_receive = ?", true)
	default:
		// 未定义或空的 `raw` 参数可以返回一个默认查询或者错误
	}

	var drugList []model.Drug
	if err := query.Find(&drugList).Error; err != nil {
		log.Printf("Error querying drug history for user %s: %v", val, err)
		return nil, err
	}
	return drugList, nil
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
	response.PublicResponse.SetCode(custom_error.SuccessCode).SetMsg("success").Build(ctx)
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

func QueryAllDrug(ctx *gin.Context) {
	drugList := drug.QueryAllDrug()
	response.PublicResponse.SetCode(custom_error.SuccessCode).SetMsg("success").SetData(drugList).Build(ctx)
}
