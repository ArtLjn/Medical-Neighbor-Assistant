/*
@Time : 2024/10/4 下午3:52
@Author : ljn
@File : inquiry
@Software: GoLand
*/

package Inquiry

import "github.com/gin-gonic/gin"

func InitInquiryService(group *gin.RouterGroup) {
	inquiryGroup := group.Group("/inquiry")
	{
		inquiryGroup.POST("/createInquiryRecord", CreateInquiryRecord)
		inquiryGroup.GET("/queryInquiryRecord", QueryInquiryRecord)
		inquiryGroup.POST("/approveInquiryRecord", ApproveInquiryRecord)
		inquiryGroup.POST("/appointedDoctor", AppointedDoctor)
	}
}

// CreateInquiryRecord 创建问诊记录
func CreateInquiryRecord(ctx *gin.Context) {

}

// QueryInquiryRecord 查询问诊记录
func QueryInquiryRecord(ctx *gin.Context) {

}

// ApproveInquiryRecord 审批问诊记录
func ApproveInquiryRecord(ctx *gin.Context) {

}

// AppointedDoctor 指派医生
func AppointedDoctor(ctx *gin.Context) {

}
