/*
@Time : 2024/10/4 下午3:51
@Author : ljn
@File : drug
@Software: GoLand
*/

package server

import "github.com/gin-gonic/gin"

func InitDrugService(group *gin.RouterGroup) {
	drug := group.Group("/drug")
	{
		drug.GET("/queryPatientAgentDrugHistory", QueryPatientAgentDrugHistory)
		drug.POST("/patientAgentDrugConfirmReceipt", PatientAgentDrugConfirmReceipt)
		drug.GET("/queryPhysiciansAgentDrugTask", QueryPhysiciansAgentDrugTask)
		drug.POST("/physiciansOrderAgentDrug", PhysiciansOrderAgentDrug)
		drug.POST("/physiciansOrderDelivery", PhysiciansOrderDelivery)
		drug.GET("/queryPhysiciansAgentHistoryRecord", QueryPhysiciansAgentHistoryRecord)
	}
}

// QueryPatientAgentDrugHistory 患者查询药品代买历史记录
func QueryPatientAgentDrugHistory(ctx *gin.Context) {

}

// PatientAgentDrugConfirmReceipt 患者代买药品确认收货
func PatientAgentDrugConfirmReceipt(ctx *gin.Context) {

}

// QueryPhysiciansAgentDrugTask 医师查询待处理的代卖药品任务
func QueryPhysiciansAgentDrugTask(ctx *gin.Context) {

}

// PhysiciansOrderAgentDrug 医师接单药品代卖
func PhysiciansOrderAgentDrug(ctx *gin.Context) {

}

// PhysiciansOrderDelivery 医师接单派送
func PhysiciansOrderDelivery(ctx *gin.Context) {

}

// QueryPhysiciansAgentHistoryRecord 医师查询代卖药品历史记录
func QueryPhysiciansAgentHistoryRecord(ctx *gin.Context) {

}
