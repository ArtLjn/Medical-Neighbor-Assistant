/*
@Time : 2024/10/12 22:04
@Author : ljn
@File : sum
@Software: GoLand
*/

package server

import (
	"back/app/sum"
	"back/pkg/custom_error"
	"back/pkg/response"
	"github.com/gin-gonic/gin"
)

func InitSumService(group *gin.RouterGroup) {
	sumGroup := group.Group("sum")
	sumGroup.GET("/getInquirySumTypeDay", GetInquirySumTypeDay)
	sumGroup.GET("/getDrugSumTypeDay", GetDrugSumTypeDay)
}

func GetInquirySumTypeDay(ctx *gin.Context) {
	day := ctx.DefaultQuery("day", "7")
	inquirySumTypeDay := sum.InquiryTypeDay(day)
	response.PublicResponse.SetCode(custom_error.SuccessCode).SetMsg("success").SetData(inquirySumTypeDay).Build(ctx)
}

func GetDrugSumTypeDay(ctx *gin.Context) {
	day := ctx.DefaultQuery("day", "7")
	drugSumTypeDay := sum.DrugEveryDayNumber(day)
	response.PublicResponse.SetCode(custom_error.SuccessCode).SetMsg("success").SetData(drugSumTypeDay).Build(ctx)
}
