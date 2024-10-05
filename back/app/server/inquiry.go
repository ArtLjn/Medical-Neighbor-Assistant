/*
@Time : 2024/10/4 下午3:52
@Author : ljn
@File : inquiry
@Software: GoLand
*/

package server

import (
	"back/app/Inquiry"
	"back/app/user"
	"back/pkg/custom_error"
	"back/pkg/data/bo"
	"back/pkg/data/model"
	"back/pkg/response"
	"back/pkg/role"

	"github.com/gin-gonic/gin"
)

func InitInquiryService(group *gin.RouterGroup) {
	inquiryGroup := group.Group("/inquiry")
	{
		inquiryGroup.POST("/createInquiryRecord", CreateInquiryRecord)
		inquiryGroup.GET("/queryInquiryRecord", QueryInquiryRecord)
		inquiryGroup.POST("/approveInquiryRecord", ApproveInquiryRecord)
		inquiryGroup.POST("/appointedPhysician", AppointPhysician)
	}
}

// CreateInquiryRecord 创建问诊记录
func CreateInquiryRecord(ctx *gin.Context) {
	var inquiryRecord bo.CreateInquiryBo
	if err := ctx.ShouldBindJSON(&inquiryRecord); err != nil {
		response.PublicResponse.NewBuildJsonError(ctx)
		return
	} else if err = bo.Validate(inquiryRecord); err != nil {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(err.Error()).Build(ctx)
		return
		// TODO 区块链预留位置
	} else if err = Inquiry.CreateInquiry(inquiryRecord); err != nil {
		response.PublicResponse.SetCode(custom_error.SystemErrorCode).SetMsg(custom_error.SystemError)
		return
	}
	response.PublicResponse.NewBuildSuccess(ctx)
}

// QueryInquiryRecord 查询问诊记录
func QueryInquiryRecord(ctx *gin.Context) {

}

// ApproveInquiryRecord 审批问诊记录
func ApproveInquiryRecord(ctx *gin.Context) {

}

// AppointPhysician 指派医生
func AppointPhysician(ctx *gin.Context) {
	id := ctx.Query("id")
	name := ctx.Query("name")
	if id == "" || name == "" {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}
	if user.QueryUser(map[string]interface{}{
		"name": name,
		"role": role.Physician,
	}) == (model.Account{}) {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.NotFound).Build(ctx)
		return
	}
	if err := Inquiry.UpdateInquiryPhysician(id, name); err != nil {
		response.PublicResponse.SetCode(custom_error.SystemErrorCode).SetMsg(custom_error.SystemError).Build(ctx)
		return
	}
	response.PublicResponse.NewBuildSuccess(ctx)
}
