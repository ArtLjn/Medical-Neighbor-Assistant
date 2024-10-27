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
	"log"
	"strconv"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
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
// @Summary 查询患者药品代买历史记录
// @Description 患者可以通过该接口查询自己的药品代买历史记录，支持分页
// @Tags Drug
// @Accept json
// @Produce json
// @Param raw query string false "是否查询原始记录"  // 0: 否, 1: 是
// @Param page query int false "页码"  // 默认值为1
// @Param size query int false "每页数量"  // 默认值为1000000
// @Success 200 {object} response.ResponseBuild "成功返回"
// @Failure 400 {object} response.ResponseBuild "请求错误"
// @Failure 404 {object} response.ResponseBuild "未找到记录"
// @Failure 500 {object} response.ResponseBuild "系统错误"
// @Router /api/drug/queryPatientAgentDrugHistory [get]
func QueryPatientAgentDrugHistory(ctx *gin.Context) {
	res := response.NewResponseBuild() // 每次请求创建新的 ResponseBuild 实例
	receiverUserMes, exists := ctx.Get("user_message")
	if !exists {
		res.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}

	userMessage, ok := receiverUserMes.(model.Account)
	if !ok {
		res.SetCode(custom_error.ClientErrorCode).SetMsg("Invalid user message").Build(ctx)
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
		res.SetCode(custom_error.SystemErrorCode).SetMsg(custom_error.SystemError).Build(ctx)
		return
	}

	res.SetCode(custom_error.SuccessCode).SetMsg("success").SetData(drugList).Build(ctx)
}

// QueryPhysiciansAgentHistoryRecord 医师查询代卖药品历史记录
// @Summary 查询医师代卖药品历史记录
// @Description 医师可以通过该接口查询自己代卖的药品历史记录，支持分页
// @Tags Drug
// @Accept json
// @Produce json
// @Param raw query string false "是否查询原始记录"  // 0: 否, 1: 是
// @Param page query int false "页码"  // 默认值为1
// @Param size query int false "每页数量"  // 默认值为1000000
// @Success 200 {object} response.ResponseBuild "成功返回"
// @Failure 400 {object} response.ResponseBuild "请求错误"
// @Failure 404 {object} response.ResponseBuild "未找到记录"
// @Failure 500 {object} response.ResponseBuild "系统错误"
// @Router /api/drug/queryPhysiciansAgentHistoryRecord [get]
func QueryPhysiciansAgentHistoryRecord(ctx *gin.Context) {
	res := response.NewResponseBuild() // 每次请求创建新的 ResponseBuild 实例

	receiverUserMes, exists := ctx.Get("user_message")
	if !exists {
		res.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}

	userMessage, ok := receiverUserMes.(model.Account)
	if !ok {
		res.SetCode(custom_error.ClientErrorCode).SetMsg("Invalid user message").Build(ctx)
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
		res.SetCode(custom_error.SystemErrorCode).SetMsg(custom_error.SystemError).Build(ctx)
		return
	}
	res.SetCode(custom_error.SuccessCode).SetMsg("success").SetData(drugList).Build(ctx)
}

// HospitalAgentDrugConfirmReceipt 医院管理人员审核药品代买情况
// @Summary 审核药品代买情况
// @Description 医院管理人员审核药品的代买情况，通过订单ID确认接收状态
// @Tags Drug
// @Accept json
// @Produce json
// @Param id query string true "订单ID" // 订单的唯一标识
// @Success 200 {object} response.ResponseBuild "成功返回"
// @Failure 400 {object} response.ResponseBuild "请求错误"
// @Failure 404 {object} response.ResponseBuild "未找到该订单"
// @Failure 500 {object} response.ResponseBuild "系统错误"
// @Router /api/drug/hospitalAgentDrugConfirmReceipt [post]
func HospitalAgentDrugConfirmReceipt(ctx *gin.Context) {
	res := response.NewResponseBuild() // 每次请求创建新的 ResponseBuild 实例
	// 获取订单id
	id := ctx.Query("id")
	if id == "" {
		res.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}
	// 判断订单是否存在
	drugRecord := drug.QueryDrugRecord(map[string]interface{}{
		"id": id,
	})
	if drugRecord != (model.Drug{}) && drugRecord.IsReceive {
		res.SetCode(custom_error.ClientErrorCode).SetMsg("Already receive").Build(ctx)
		return
	}
	// 进行药品代买
	if err := drug.HospitalAgentDrug(id); err != nil {
		res.SetCode(custom_error.SystemErrorCode).SetMsg(err.Error()).Build(ctx)
		return
	}
	res.SetCode(custom_error.SuccessCode).SetMsg("success").SetData(nil).Build(ctx)
}

// PhysiciansOrderAgentDrug 医师进行药品代买
// @Summary 医师代买药品
// @Description 医师通过该接口进行药品的代买操作
// @Tags Drug
// @Accept json
// @Produce json
// @Param id query string true "药品ID"  // 药品的唯一标识
// @Success 200 {object} response.ResponseBuild "成功返回"
// @Failure 400 {object} response.ResponseBuild "请求错误"
// @Failure 404 {object} response.ResponseBuild "药品未找到"
// @Failure 500 {object} response.ResponseBuild "系统错误"
// @Router /api/drug/physiciansOrderAgentDrug [post]
func PhysiciansOrderAgentDrug(ctx *gin.Context) {
	res := response.NewResponseBuild() // 每次请求创建新的 ResponseBuild 实例
	// 获取用户信息
	receiverUserMes, exists := ctx.Get("user_message")
	userMessage := receiverUserMes.(model.Account)
	//判断用户是否存在
	if !exists {
		res.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}
	//获取药品id
	id := ctx.Query("id")
	if id == "" {
		res.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}
	//进行药品代买
	if err := drug.PhysicianAgentDrug(id, userMessage.UUID, userMessage.ChainAccount); err != nil {
		res.SetCode(custom_error.SystemErrorCode).SetMsg(err.Error()).Build(ctx)
		return
	}
	res.SetCode(custom_error.SuccessCode).SetMsg("success").Build(ctx)
}

// PhysiciansOrderDelivery 医师接单派送
// @Summary 医师派送药品
// @Description 医师通过该接口进行药品的接单和派送操作
// @Tags Drug
// @Accept json
// @Produce json
// @Param id query string true "药品ID"  // 药品的唯一标识
// @Param certificate query string true "派送证书"  // 用于验证派送的证书
// @Success 200 {object} response.ResponseBuild "成功返回"
// @Failure 400 {object} response.ResponseBuild "请求错误"
// @Failure 404 {object} response.ResponseBuild "药品未找到"
// @Failure 500 {object} response.ResponseBuild "系统错误"
// @Router /api/drug/physiciansOrderDelivery [post]
func PhysiciansOrderDelivery(ctx *gin.Context) {
	res := response.NewResponseBuild() // 每次请求创建新的 ResponseBuild 实例
	// 获取用户信息，判断用户是否存在
	receiverUserMes, exists := ctx.Get("user_message")
	userMessage := receiverUserMes.(model.Account)
	if !exists {
		res.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}
	//获取药品id和证书
	id := ctx.Query("id")
	certificate := ctx.Query("certificate")
	// 判断药品id和证书是否存在
	if id == "" || certificate == "" {
		res.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}
	// 进行药品派送，判断是否成功
	if err := drug.PhysicianDrugDelivery(id, certificate, userMessage.UUID, userMessage.ChainAccount); err != nil {
		res.SetCode(custom_error.SystemErrorCode).SetMsg(err.Error()).Build(ctx)
		return
	}
	res.SetCode(custom_error.SuccessCode).SetMsg("success").Build(ctx)
}

// QueryDrugByID 查询药品信息
// @Summary 查询药品信息
// @Description 根据药品ID查询相应的药品信息
// @Tags Drug
// @Accept json
// @Produce json
// @Param id query string true "药品ID"  // 药品的唯一标识
// @Success 200 {object} response.ResponseBuild "成功返回"
// @Failure 400 {object} response.ResponseBuild "请求错误"
// @Failure 404 {object} response.ResponseBuild "药品未找到"
// @Router /api/drug/queryDrugByID [get]
func QueryDrugByID(ctx *gin.Context) {
	res := response.NewResponseBuild() // 每次请求创建新的 ResponseBuild 实例
	id := ctx.Query("id")
	if id == "" {
		res.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}
	// 根据药品id查询药品信息
	drugRecord := drug.QueryDrugAndAccountMessage(id)
	// 判断药品是否存在
	if drugRecord == nil {
		res.SetCode(custom_error.ClientErrorCode).SetMsg("No such drug").Build(ctx)
		return
	}
	res.SetCode(custom_error.SuccessCode).SetMsg("success").SetData(drugRecord).Build(ctx)
}

// QueryDrugByMedicalId 根据病历查询药品信息
// @Summary 根据病历ID查询药品信息
// @Description 根据病历ID查询相关的药品、患者、医生和病历信息
// @Tags Drug
// @Accept json
// @Produce json
// @Param medical_id query string true "病历ID"  // 病历的唯一标识
// @Success 200 {object} response.ResponseBuild "成功返回"
// @Failure 400 {object} response.ResponseBuild "请求错误"
// @Failure 404 {object} response.ResponseBuild "未找到相关药品"
// @Router /api/drug/queryDrugByMedicalId [get]
func QueryDrugByMedicalId(ctx *gin.Context) {
	res := response.NewResponseBuild() // 每次请求创建新的 ResponseBuild 实例
	// 获取病历id,判断病历id是否存在
	medicalId := ctx.Query("medical_id")
	if medicalId == "" {
		res.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}

	var (
		result     map[string]interface{}
		acc        = model.Account{}
		inquiry    = model.Inquiry{}
		medical    = model.Medical{}
		drugRecord = model.Drug{}
	)
	// 根据病历id查询药品信息，并关联查询患者、医生、病历、药品信息
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
		res.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.NotFound).Build(ctx)
		return
	}
	res.SetCode(custom_error.SuccessCode).SetMsg("success").SetData(result).Build(ctx)
}

// QueryAllDrug 查询所有药品信息
// @Summary 查询所有药品信息
// @Description 分页查询药品信息列表
// @Tags Drug
// @Accept json
// @Produce json
// @Param page query int false "页码"  // 默认值为1
// @Param size query int false "每页数量"  // 默认值为10
// @Param raw  query int false "选项"  // 收货状态 (1: 已经收货, 2: 未收货)
// @Success 200 {object} response.ResponseBuild "成功返回"
// @Failure 400 {object} response.ResponseBuild "请求错误"
// @Router /api/drug/queryAllDrug [get]
func QueryAllDrug(ctx *gin.Context) {
	res := response.ResponseBuild{}
	page, _ := strconv.Atoi(ctx.DefaultQuery("page", "1"))
	size, _ := strconv.Atoi(ctx.DefaultQuery("size", "10"))
	raw, _ := strconv.Atoi(ctx.DefaultQuery("raw", "1"))
	drugList, err := drug.QueryAllDrug(page, size, raw)
	if err != nil {
		res.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}
	res.SetCode(custom_error.SuccessCode).SetMsg("success").SetData(drugList).Build(ctx)
}
