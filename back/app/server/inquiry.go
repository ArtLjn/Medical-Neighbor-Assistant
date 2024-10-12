/*
@Time : 2024/10/4 下午3:52
@Author : ljn
@File : inquiry
@Software: GoLand
*/

package server

import (
	"back/app/Inquiry"
	"back/app/medical"
	"back/app/user"
	"back/pkg/custom_error"
	"back/pkg/data/bo"
	"back/pkg/data/model"
	"back/pkg/response"
	"back/pkg/role"
	"strconv"

	"github.com/gin-gonic/gin"
)

func InitInquiryService(group *gin.RouterGroup) {
	inquiryGroup := group.Group("/inquiry")
	{
		inquiryGroup.POST("/createInquiryRecord", CreateInquiryRecord)
		inquiryGroup.GET("/queryPatientInquiryRecord", QueryPatientInquiryRecord)
		inquiryGroup.GET("/queryPhysicianInquiryRecord", QueryPhysicianInquiryRecord)
		inquiryGroup.PUT("/approveInquiryRecord", ApproveInquiryRecord)
		inquiryGroup.POST("/appointedPhysician", AppointPhysician)
		inquiryGroup.GET("/queryAllInquiryRecord", QueryAllInquiryRecord)
		inquiryGroup.PUT("/physicianReception", PhysicianReception)
		inquiryGroup.GET("/queryInquiryRecordById", QueryInquiryRecordById)
	}
}

// CreateInquiryRecord 创建问诊记录
func CreateInquiryRecord(ctx *gin.Context) {
	var inquiryRecord bo.CreateInquiryBo
	receiverCtxUser, exists := ctx.Get("user_message")
	userMessage := receiverCtxUser.(model.Account)
	if !exists {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}
	if err := ctx.ShouldBindJSON(&inquiryRecord); err != nil {
		response.PublicResponse.NewBuildJsonError(ctx)
		return
	} else if err = bo.Validate(inquiryRecord); err != nil {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(err.Error()).Build(ctx)
		return
	}
	// 绑定患者信息
	inquiryRecord.Patient = userMessage.UUID
	if _, err := Inquiry.CreateInquiry(userMessage.ChainAccount, inquiryRecord); err != nil {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(err.Error()).Build(ctx)
		return
	}
	response.PublicResponse.NewBuildSuccess(ctx)
}

// QueryAllInquiryRecord 查询所有问诊记录: 管理员使用
// @param isInquiry 1: 已经问诊结束 2: 未问诊 3: 未指派医师 4: 代接诊
func QueryAllInquiryRecord(ctx *gin.Context) {
	isInquiryStr := ctx.DefaultQuery("isInquiry", "0")
	isInquiry, _ := strconv.Atoi(isInquiryStr)
	response.PublicResponse.SetCode(custom_error.SuccessCode).SetMsg("success").
		SetData(Inquiry.QueryAllInquiry(isInquiry)).Build(ctx)
}

// QueryPatientInquiryRecord 查询问诊患者记录
func QueryPatientInquiryRecord(ctx *gin.Context) {
	receiverUserMes, exists := ctx.Get("user_message")
	userMessage := receiverUserMes.(model.Account)
	if !exists {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}
	isInquiryStr := ctx.DefaultQuery("isInquiry", "0")
	isInquiry, _ := strconv.Atoi(isInquiryStr)
	response.PublicResponse.SetCode(custom_error.SuccessCode).
		SetMsg("success").SetData(Inquiry.QueryPatientInquiryRecord(userMessage.UUID, isInquiry)).Build(ctx)
}

// QueryPhysicianInquiryRecord 查询问诊医生记录
func QueryPhysicianInquiryRecord(ctx *gin.Context) {
	receiverUserMes, exists := ctx.Get("user_message")
	userMessage := receiverUserMes.(model.Account)
	if !exists {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}
	isInquiryStr := ctx.DefaultQuery("isInquiry", "0")
	isInquiry, _ := strconv.Atoi(isInquiryStr)
	response.PublicResponse.SetCode(custom_error.SuccessCode).SetMsg("success").
		SetData(Inquiry.QueryPhysicianInquiryRecord(userMessage.UUID, isInquiry)).Build(ctx)
}

func QueryInquiryRecordById(ctx *gin.Context) {
	id := ctx.Query("id")
	if id == "" {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}
	response.PublicResponse.SetCode(custom_error.SuccessCode).SetMsg("success").
		SetData(Inquiry.TransferToInquiryVo(Inquiry.QueryInquiryRecordByCond(map[string]interface{}{"id": id}))).Build(ctx)
}

// ApproveInquiryRecord 审批问诊记录
func ApproveInquiryRecord(ctx *gin.Context) {
	id := ctx.Query("id")
	if id == "" {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}
	inquiryRecord := Inquiry.QueryInquiryRecordByCond(map[string]interface{}{"id": id})
	if !inquiryRecord.IsReception {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg("该问诊记录未被接诊").Build(ctx)
		return
	} else if inquiryRecord.IsInquiry {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg("该问诊记录已经问诊结束").Build(ctx)
		return
	}
	medicalRecord := medical.QueryMedicalByCond(map[string]interface{}{
		"bind_inquiry_id": id,
	})
	if medicalRecord == (model.Medical{}) {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg("该问诊记录未生成医疗记录").Build(ctx)
		return
	}
	if err := Inquiry.UpdateIsInquiry(id); err != nil {
		response.PublicResponse.SetCode(custom_error.SystemErrorCode).SetMsg(err.Error()).Build(ctx)
		return
	}
	response.PublicResponse.NewBuildSuccess(ctx)
}

// AppointPhysician 指派医生
func AppointPhysician(ctx *gin.Context) {
	id := ctx.Query("id")
	userUUID := ctx.Query("userUUID")
	if id == "" || userUUID == "" {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}
	if user.QueryUser(map[string]interface{}{
		"uuid": userUUID,
		"role": role.Physician,
	}) == (model.Account{}) {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.NotFound).Build(ctx)
		return
	}
	if Inquiry.IsReception(id) {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg("该问诊记录已被接诊").Build(ctx)
		return
	}
	if err := Inquiry.UpdateInquiryPhysician(id, userUUID); err != nil {
		response.PublicResponse.SetCode(custom_error.SystemErrorCode).SetMsg(custom_error.SystemError).Build(ctx)
		return
	}
	response.PublicResponse.NewBuildSuccess(ctx)
}

// PhysicianReception  医师接诊
func PhysicianReception(ctx *gin.Context) {
	receiverUserMes, exists := ctx.Get("user_message")
	userMessage := receiverUserMes.(model.Account)
	if !exists {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}
	id := ctx.Query("id")
	isReceptionStr := ctx.Query("isReception")
	isReception, _ := strconv.ParseBool(isReceptionStr)
	if id == "" {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}

	inquiryRecord := Inquiry.QueryInquiryRecordByCond(map[string]interface{}{"id": id})
	if inquiryRecord == (model.Inquiry{}) {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.NotFound).Build(ctx)
		return
	}
	// 判断是否是该医生
	if userMessage.UUID != inquiryRecord.Physician {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg("并未指派您进行接单").Build(ctx)
		return
	}

	if err := Inquiry.UpdateIsReception(userMessage.ChainAccount, id, isReception); err != nil {
		response.PublicResponse.SetCode(custom_error.SystemErrorCode).SetMsg(err.Error()).Build(ctx)
		return
	}
	response.PublicResponse.NewBuildSuccess(ctx)
}
