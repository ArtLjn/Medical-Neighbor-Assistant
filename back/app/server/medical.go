/*
@Time : 2024/10/4 下午3:52
@Author : ljn
@File : medical
@Software: GoLand
*/

package server

import (
	"back/app/medical"
	"back/pkg/custom_error"
	"back/pkg/data"
	"back/pkg/data/bo"
	"back/pkg/data/model"
	"back/pkg/response"
	"back/pkg/util"
	"github.com/gin-gonic/gin"
	"time"
)

func InitMedicalService(group *gin.RouterGroup) {
	medicalRouter := group.Group("medical")
	{
		medicalRouter.GET("/queryMedialRecordInformation", QueryMedialRecordInformation)
		medicalRouter.POST("/medicalRegistration", MedicalRegistration)
		medicalRouter.GET("/queryMedicalByID", QueryMedicalByID)
	}
}

// QueryMedialRecordInformation 查询病人病历信息
func QueryMedialRecordInformation(ctx *gin.Context) {
	inquiryId := ctx.Query("inquiryId")
	if inquiryId == "" {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}
	medicalRecord := medical.QueryMedicalByCond(map[string]interface{}{
		"bind_inquiry_id": inquiryId,
	})
	if medicalRecord == (model.Medical{}) {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.NotFound).Build(ctx)
		return
	}
	response.PublicResponse.SetCode(custom_error.SuccessCode).SetMsg("success").SetData(medicalRecord).Build(ctx)
}

// MedicalRegistration 就诊登记
func MedicalRegistration(ctx *gin.Context) {
	// 接收上下文中的用户信息
	receiverCtxUser, exists := ctx.Get("user_message")
	userMessage, ok := receiverCtxUser.(model.Account)
	if !exists || !ok {
		// 如果用户信息不存在或者类型不对，返回错误
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}
	// 创建一个接收者结构体
	var receiver bo.MedicalUploadBo
	// 解析请求体中的数据到接收者结构体
	if err := ctx.ShouldBindJSON(&receiver); err != nil {
		// 如果解析失败，返回错误
		response.PublicResponse.NewBuildJsonError(ctx)
		return
	} else if err = bo.Validate(receiver); err != nil {
		// 如果验证失败，返回错误
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(err.Error()).Build(ctx)
		return
	}

	// 开始事务
	tx := data.Db.Begin()
	defer func() {
		if r := recover(); r != nil {
			tx.Rollback()
		}
	}()

	// 查询问诊记录并进行校验合法性
	inquiryRecord := model.Inquiry{}
	if err := tx.Where("id = ? AND is_reception = ?", receiver.BindInquiryID, true).First(&inquiryRecord).Error; err != nil {
		// 如果查询失败，返回错误
		tx.Rollback() // 回滚事务
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.NotFound).Build(ctx)
		return
	} else if inquiryRecord.IsInquiry {
		// 如果问诊已经完成，返回错误
		tx.Rollback() // 回滚事务
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg("已经问诊完成，无需在进行登记").Build(ctx)
		return
	} else if tx.Where("bind_inquiry_id = ?", receiver.BindInquiryID).First(&model.Medical{}).Error == nil {
		// 如果已经登记过病历，返回错误
		tx.Rollback() // 回滚事务
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg("已经登记过病历").Build(ctx)
		return
	}

	// 创建病历
	medicalId, err := medical.CreateMedical(receiver, userMessage.ChainAccount)
	if err != nil {
		// 如果创建失败，返回错误
		tx.Rollback() // 回滚事务
		response.PublicResponse.SetCode(custom_error.SystemErrorCode).SetMsg(err.Error()).Build(ctx)
		return
	}

	// 如果患者需要代购药品
	if receiver.IsNeedByDrug {
		var physicianMessage, patientMessage model.Account
		if err = tx.Where("uuid = ?", inquiryRecord.Physician).First(&physicianMessage).Error; err != nil {
			// 如果查询失败，返回错误
			tx.Rollback() // 回滚事务
			response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.NotFound).Build(ctx)
			return
		} else if err = tx.Where("uuid = ?", inquiryRecord.Patient).First(&patientMessage).Error; err != nil {
			// 如果查询失败，返回错误
			tx.Rollback() // 回滚事务
			response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.NotFound).Build(ctx)
			return
		}
		// 创建药品
		drugReceiver := model.Drug{
			Patient:     inquiryRecord.Patient,
			Physician:   inquiryRecord.Physician,
			Hospital:    physicianMessage.Hospital,
			CreateTime:  time.Now().Format("2006-01-02 15:04:05"),
			BindMedical: medicalId,
			AlreadyBuy:  false,
			IsReceive:   false,
		}
		if err = tx.Create(&drugReceiver).Error; err != nil {
			// 如果创建失败，返回错误
			tx.Rollback() // 回滚事务
			response.PublicResponse.SetCode(custom_error.SystemErrorCode).SetMsg("创建失败").Build(ctx)
			return
		}
		// 患者登记药品代买信息写入区块链
		r, e := util.IsSuccessMsg(util.CommonEqByUser(patientMessage.ChainAccount, "patientRegDrugDelivery", []interface{}{
			drugReceiver.ID,
			receiver.BindInquiryID,
		}))
		if !r && e != nil {
			// 如果写入失败，返回错误
			tx.Rollback()
			response.PublicResponse.SetCode(custom_error.SystemErrorCode).SetMsg(e.Error()).Build(ctx)
			return
		}
	}

	// 提交事务
	if err = tx.Commit().Error; err != nil {
		// 如果提交失败，返回错误
		tx.Rollback() // 回滚事务
		response.PublicResponse.SetCode(custom_error.SystemErrorCode).SetMsg("事务提交失败").Build(ctx)
		return
	}
	// 返回成功
	response.PublicResponse.NewBuildSuccess(ctx)
}

func QueryMedicalByID(ctx *gin.Context) {
	medicalId := ctx.Query("medicalId")
	if medicalId == "" {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}
	medicalRecord := medical.QueryMedicalByCond(map[string]interface{}{
		"id": medicalId,
	})
	if medicalRecord == (model.Medical{}) {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.NotFound).Build(ctx)
		return
	}
	response.PublicResponse.SetCode(custom_error.SuccessCode).SetMsg("success").SetData(medicalRecord).Build(ctx)
}
