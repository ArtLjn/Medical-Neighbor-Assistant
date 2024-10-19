/*
@Time : 2024/10/6 09:16
@Author : ljn
@File : medicalService
@Software: GoLand
*/

package medical

import (
	"back/pkg/data"
	"back/pkg/data/bo"
	"back/pkg/data/model"
	"back/pkg/util"
	"errors"
	"fmt"
	"log"
	"time"
)

func CreateMedical(receiver bo.MedicalUploadBo, account string) (uint, error) {
	var medical model.Medical
	util.BeanUtil.CopyProperties(receiver, &medical)
	r, e := util.IsSuccessMsg(util.CommonEqByUser(account, "physicianDiagnosisInquiry", []interface{}{
		receiver.BindInquiryID,
		receiver.MedicalImg,
		receiver.InquiryVideo,
	}))
	if !r && e != nil {
		return 0, e
	}
	err := data.Db.Create(&medical).Error
	if err != nil {
		return 0, fmt.Errorf("create medical error: %v", err)
	}
	return medical.ID, nil
}

func CreateMedicalF(receiver bo.MedicalUploadBo, account, createTime string, medicalIds ...*uint) error {
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
		log.Println(err)
		return errors.New("查询失败")
	} else if inquiryRecord.IsInquiry {
		// 如果问诊已经完成，返回错误
		tx.Rollback() // 回滚事务
		return errors.New("已经问诊完成，无需在进行登记")
	} else if tx.Where("bind_inquiry_id = ?", receiver.BindInquiryID).First(&model.Medical{}).Error == nil {
		// 如果已经登记过病历，返回错误
		tx.Rollback() // 回滚事务
		return errors.New("已经登记过病历")
	}

	// 创建病历
	medicalId, err := CreateMedical(receiver, account)
	if len(medicalIds) > 0 {
		*medicalIds[0] = medicalId
	}
	if err != nil {
		// 如果创建失败，返回错误
		tx.Rollback() // 回滚事务
		log.Println(err)
		return errors.New("创建失败")
	}

	inquiryRecord.IsInquiry = true
	if err = tx.Updates(inquiryRecord).Error; err != nil {
		// 如果更新失败，返回错误
		tx.Rollback() // 回滚事务
		log.Println(err)
		return errors.New("更新失败")
	}

	// 如果患者需要代购药品
	if receiver.IsNeedByDrug {
		var physicianMessage, patientMessage model.Account
		if err = tx.Where("uuid = ?", inquiryRecord.Physician).First(&physicianMessage).Error; err != nil {
			// 如果查询失败，返回错误
			tx.Rollback() // 回滚事务
			log.Println(err)
			return errors.New("查询失败")
		} else if err = tx.Where("uuid = ?", inquiryRecord.Patient).First(&patientMessage).Error; err != nil {
			// 如果查询失败，返回错误
			tx.Rollback() // 回滚事务
			log.Println(err)
			return errors.New("查询失败")
		}
		var ct string
		if len(createTime) == 0 {
			ct = time.Now().Format("2006-01-02 15:04:05")
		} else {
			ct = createTime
		}
		// 创建药品
		drugReceiver := model.Drug{
			Patient:     inquiryRecord.Patient,
			Physician:   inquiryRecord.Physician,
			Hospital:    physicianMessage.Hospital,
			CreateTime:  ct,
			BindMedical: medicalId,
			AlreadyBuy:  false,
			IsReceive:   false,
		}
		if err = tx.Create(&drugReceiver).Error; err != nil {
			// 如果创建失败，返回错误
			tx.Rollback() // 回滚事务
			log.Println(err)
			return errors.New("创建失败")
		}
		// 患者登记药品代买信息写入区块链
		r, e := util.IsSuccessMsg(util.CommonEqByUser(patientMessage.ChainAccount, "patientRegDrugDelivery", []interface{}{
			drugReceiver.ID,
			receiver.BindInquiryID,
		}))
		if !r && e != nil {
			// 如果写入失败，返回错误
			tx.Rollback()
			log.Println(err)
			return errors.New("写入区块链失败")
		}
	}

	// 提交事务
	if err = tx.Commit().Error; err != nil {
		// 如果提交失败，返回错误
		tx.Rollback() // 回滚事务
		log.Println(err)
		return errors.New("事务提交失败")
	}
	return nil
}

func QueryMedicalByCond(cond map[string]interface{}) model.Medical {
	var medical model.Medical
	query := data.Db.Model(model.Medical{})
	for k, v := range cond {
		query = query.Where(k, v)
	}
	query.First(&medical)
	return medical
}
