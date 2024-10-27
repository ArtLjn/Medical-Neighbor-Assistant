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
		inquiryGroup.GET("/likeQueryInquiryRecord", LikeQueryInquiryRecord)
	}
}

// CreateInquiryRecord 创建问诊记录
// @Summary 创建问诊记录
// @Description 创建一个新的问诊记录
// @Tags Inquiry
// @Accept json
// @Produce json
// @Param inquiryRecord body bo.CreateInquiryBo true "问诊记录信息" // 这里假设你有一个 bo.CreateInquiryBo 结构体
// @Success 200 {object} response.ResponseBuild "成功返回"
// @Failure 400 {object} response.ResponseBuild "请求错误"
// @Router /api/inquiry/createInquiryRecord [post]
func CreateInquiryRecord(ctx *gin.Context) {
	res := response.NewResponseBuild() // 每次请求创建新的 ResponseBuild 实例
	var inquiryRecord bo.CreateInquiryBo
	receiverCtxUser, exists := ctx.Get("user_message")
	userMessage := receiverCtxUser.(model.Account)
	if !exists {
		res.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}
	inquiryRecord.ReservedPhone = userMessage.Phone
	if err := ctx.ShouldBindJSON(&inquiryRecord); err != nil {
		res.NewBuildJsonError(ctx)
		return
	} else if err = bo.Validate(inquiryRecord); err != nil {
		res.SetCode(custom_error.ClientErrorCode).SetMsg(err.Error()).Build(ctx)
		return
	}
	// 绑定患者信息
	inquiryRecord.Patient = userMessage.UUID
	if _, err := Inquiry.CreateInquiry(userMessage.ChainAccount, inquiryRecord); err != nil {
		res.SetCode(custom_error.ClientErrorCode).SetMsg(err.Error()).Build(ctx)
		return
	}
	res.NewBuildSuccess(ctx)
}

// QueryAllInquiryRecord 查询所有问诊记录: 管理员使用
// @Summary 查询所有问诊记录
// @Description 管理员可以查询所有问诊记录，并可以通过状态过滤记录
// @Tags Inquiry
// @Accept json
// @Produce json
// @Param isInquiry query int false "问诊状态 (1: 已经问诊结束, 2: 未问诊, 3: 未指派医师, 4: 代接诊, 5: 问诊结束未审核的记录)"
// @Param page query int false "页码 (默认为1)"
// @Param size query int false "每页记录数 (默认为10)"
// @Success 200 {object} response.ResponseBuild "成功返回"
// @Failure 400 {object} response.ResponseBuild "请求错误"
// @Router /api/inquiry/queryAllInquiryRecord [get]
func QueryAllInquiryRecord(ctx *gin.Context) {
	res := response.NewResponseBuild() // 每次请求创建新的 ResponseBuild 实例
	isInquiry, _ := strconv.Atoi(ctx.DefaultQuery("isInquiry", "0"))
	page, _ := strconv.Atoi(ctx.DefaultQuery("page", "1"))
	size, _ := strconv.Atoi(ctx.DefaultQuery("size", "10"))
	res.SetCode(custom_error.SuccessCode).SetMsg("success").
		SetData(Inquiry.QueryAllInquiry(isInquiry, page, size)).Build(ctx)
}

// QueryPatientInquiryRecord 查询问诊患者记录
func QueryPatientInquiryRecord(ctx *gin.Context) {
	res := response.NewResponseBuild() // 每次请求创建新的 ResponseBuild 实例
	receiverUserMes, exists := ctx.Get("user_message")
	userMessage := receiverUserMes.(model.Account)
	if !exists {
		res.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}
	isInquiry, _ := strconv.Atoi(ctx.DefaultQuery("isInquiry", "0"))
	p := ctx.DefaultQuery("page", "1")
	s := ctx.DefaultQuery("size", "1000000")
	if p == "" || s == "" {
		p = "1"
		s = "10000000"
	}
	page, _ := strconv.Atoi(p)
	size, _ := strconv.Atoi(s)
	res.SetCode(custom_error.SuccessCode).
		SetMsg("success").SetData(Inquiry.QueryPatientInquiryRecord(userMessage.UUID, isInquiry, page, size)).Build(ctx)
}

// QueryPhysicianInquiryRecord 查询问诊医生记录
func QueryPhysicianInquiryRecord(ctx *gin.Context) {
	res := response.NewResponseBuild() // 每次请求创建新的 ResponseBuild 实例
	receiverUserMes, exists := ctx.Get("user_message")
	userMessage := receiverUserMes.(model.Account)
	if !exists {
		res.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}
	isInquiry, _ := strconv.Atoi(ctx.DefaultQuery("isInquiry", "0"))
	p := ctx.DefaultQuery("page", "1")
	s := ctx.DefaultQuery("size", "1000000")
	if p == "" || s == "" {
		p = "1"
		s = "10000000"
	}
	page, _ := strconv.Atoi(p)
	size, _ := strconv.Atoi(s)
	res.SetCode(custom_error.SuccessCode).SetMsg("success").
		SetData(Inquiry.QueryPhysicianInquiryRecord(userMessage.UUID, isInquiry, page, size)).Build(ctx)
}

func QueryInquiryRecordById(ctx *gin.Context) {
	res := response.NewResponseBuild() // 每次请求创建新的 ResponseBuild 实例
	id := ctx.Query("id")
	if id == "" {
		res.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}
	res.SetCode(custom_error.SuccessCode).SetMsg("success").
		SetData(Inquiry.TransferToInquiryVo(Inquiry.QueryInquiryRecordByCond(map[string]interface{}{"id": id}))).Build(ctx)
}

// ApproveInquiryRecord 审批问诊记录
func ApproveInquiryRecord(ctx *gin.Context) {
	res := response.NewResponseBuild() // 每次请求创建新的 ResponseBuild 实例
	id := ctx.Query("id")
	if id == "" {
		res.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}
	inquiryRecord := Inquiry.QueryInquiryRecordByCond(map[string]interface{}{"id": id})
	if !inquiryRecord.IsReception {
		res.SetCode(custom_error.ClientErrorCode).SetMsg("该问诊记录未被接诊").Build(ctx)
		return
	} else if !inquiryRecord.IsInquiry {
		res.SetCode(custom_error.ClientErrorCode).SetMsg("该问诊并未登记问诊记录").Build(ctx)
		return
	} else if inquiryRecord.IsAudit {
		res.SetCode(custom_error.ClientErrorCode).SetMsg("该问诊记录已经审核").Build(ctx)
		return
	}
	medicalRecord := medical.QueryMedicalByCond(map[string]interface{}{
		"bind_inquiry_id": id,
	})
	if medicalRecord == (model.Medical{}) {
		res.SetCode(custom_error.ClientErrorCode).SetMsg("该问诊记录未生成医疗记录").Build(ctx)
		return
	}
	if err := Inquiry.UpdateIsInquiry(id); err != nil {
		res.SetCode(custom_error.SystemErrorCode).SetMsg(err.Error()).Build(ctx)
		return
	}
	res.NewBuildSuccess(ctx)
}

// AppointPhysician 指派医生
func AppointPhysician(ctx *gin.Context) {
	res := response.NewResponseBuild() // 每次请求创建新的 ResponseBuild 实例
	id := ctx.Query("id")
	userUUID := ctx.Query("userUUID")
	if id == "" || userUUID == "" {
		res.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}
	if user.QueryUser(map[string]interface{}{
		"uuid": userUUID,
		"role": role.Physician,
	}) == (model.Account{}) {
		res.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.NotFound).Build(ctx)
		return
	}
	if Inquiry.IsReception(id) {
		res.SetCode(custom_error.ClientErrorCode).SetMsg("该问诊记录已被接诊").Build(ctx)
		return
	}
	if err := Inquiry.UpdateInquiryPhysician(id, userUUID); err != nil {
		res.SetCode(custom_error.SystemErrorCode).SetMsg(custom_error.SystemError).Build(ctx)
		return
	}
	res.NewBuildSuccess(ctx)
}

// PhysicianReception  医师接诊
func PhysicianReception(ctx *gin.Context) {
	res := response.NewResponseBuild() // 每次请求创建新的 ResponseBuild 实例
	receiverUserMes, exists := ctx.Get("user_message")
	userMessage := receiverUserMes.(model.Account)
	if !exists {
		res.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}
	id := ctx.Query("id")
	isReceptionStr := ctx.Query("isReception")
	isReception, _ := strconv.ParseBool(isReceptionStr)
	if id == "" {
		res.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}

	inquiryRecord := Inquiry.QueryInquiryRecordByCond(map[string]interface{}{"id": id})
	if inquiryRecord == (model.Inquiry{}) {
		res.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.NotFound).Build(ctx)
		return
	}
	// 判断是否是该医生
	if userMessage.UUID != inquiryRecord.Physician {
		res.SetCode(custom_error.ClientErrorCode).SetMsg("并未指派您进行接单").Build(ctx)
		return
	}

	if err := Inquiry.UpdateIsReception(userMessage.ChainAccount, id, isReception); err != nil {
		res.SetCode(custom_error.SystemErrorCode).SetMsg(err.Error()).Build(ctx)
		return
	}
	res.NewBuildSuccess(ctx)
}

func LikeQueryInquiryRecord(ctx *gin.Context) {
	res := response.NewResponseBuild() // 每次请求创建新的 ResponseBuild 实例
	username := ctx.Query("username")
	isPatient, _ := strconv.ParseBool(ctx.DefaultQuery("isPatient", "true"))
	p := ctx.DefaultQuery("page", "1")
	s := ctx.DefaultQuery("size", "1000000")
	if p == "" || s == "" {
		p = "1"
		s = "10000000"
	}
	page, _ := strconv.Atoi(p)
	size, _ := strconv.Atoi(s)
	res.SetCode(custom_error.SuccessCode).SetMsg("success").SetData(Inquiry.QueryLikeByCond(username, isPatient, page, size)).Build(ctx)
}
