/*
@Time : 2024/10/4 下午4:05
@Author : ljn
@File : drugService
@Software: GoLand
*/

package drug

import (
	"back/pkg/data"
	"back/pkg/data/model"
	"back/pkg/util"
	"errors"
	"fmt"
	"gorm.io/gorm"
	"log"
)

func QueryDrugRecord(cond map[string]interface{}) model.Drug {
	query := data.Db
	for k, v := range cond {
		query = query.Where(k, v)
	}
	var drug model.Drug
	query.First(&drug)
	return drug
}

func QueryDrugRecordList(cond map[string]interface{}) []model.Drug {
	query := data.Db
	for k, v := range cond {
		query = query.Where(k, v)
	}
	var drug []model.Drug
	query.Find(&drug)
	return drug
}

func UpdateDrugRecord(cond map[string]interface{}, receiver map[string]interface{}) error {
	query := data.Db
	for k, v := range cond {
		query = query.Where(k, v)
	}
	return query.Model(model.Drug{}).Updates(&receiver).Error
}
func QueryDrugAndAccountMessage(drugId string) map[string]interface{} {
	var result map[string]interface{}
	var (
		drug    model.Drug
		medical model.Medical
		inquiry model.Inquiry
		acc     model.Account
	)

	err := data.Db.Table(fmt.Sprintf("%s as d", drug.TableName())).
		Select("i.patient, i.appointment_time, i.reserved_phone, i.physician, i.type, i.inquiry_detail, i.is_inquiry, i.is_reception, "+
			"m.diagnostic_description, m.inquiry_video, m.medical_img, d.hospital, d.create_time, d.already_buy, d.delivery_certificate, d.is_receive,"+
			"d.id as drug_id,"+
			"j.username as patient_username,j.sex as patient_sex,j.age as patient_age, p.username as physician_username").
		Joins(fmt.Sprintf("JOIN %s as m ON d.bind_medical = m.id", medical.TableName())).
		Joins(fmt.Sprintf("JOIN %s as i ON m.bind_inquiry_id = i.id", inquiry.TableName())).
		Joins(fmt.Sprintf("JOIN %s as j ON j.uuid = i.patient", acc.TableName())).
		Joins(fmt.Sprintf("JOIN %s as p ON p.uuid = i.physician", acc.TableName())).
		Where("d.id = ?", drugId).Scan(&result).Error
	if err != nil {
		return nil
	}
	return result
}

func QueryAllDrug(page, size int) (map[string]interface{}, error) {
	var (
		drug    model.Drug
		acc     model.Account
		medical model.Medical
		inquiry model.Inquiry
	)

	query := data.Db.Table(fmt.Sprintf("%s as d", drug.TableName())).
		Select("i.patient, i.appointment_time, i.reserved_phone, i.physician, i.type, i.inquiry_detail, i.is_inquiry, i.is_reception, " +
			"m.diagnostic_description, m.inquiry_video, m.medical_img, d.hospital, d.create_time, d.already_buy, d.delivery_certificate, d.is_receive," +
			"d.id as drug_id," +
			"j.username as patient_username,j.sex as patient_sex,j.age as patient_age, p.username as physician_username").
		Joins(fmt.Sprintf("JOIN %s as m ON d.bind_medical = m.id", medical.TableName())).
		Joins(fmt.Sprintf("JOIN %s as i ON m.bind_inquiry_id = i.id", inquiry.TableName())).
		Joins(fmt.Sprintf("JOIN %s as j ON j.uuid = i.patient", acc.TableName())).
		Joins(fmt.Sprintf("JOIN %s as p ON p.uuid = i.physician", acc.TableName()))
	return transferPage(query, page, size)
}

func PhysicianAgentDrug(id, uuid, chainAccount string) error {
	drugRecord := QueryDrugRecord(map[string]interface{}{
		"id":        id,
		"physician": uuid,
	})
	if drugRecord != (model.Drug{}) && drugRecord.AlreadyBuy {
		return errors.New("already buy")
	}
	r, e := util.IsSuccessMsg(util.CommonEqByUser(chainAccount,
		"physicianAcceptDrugDelivery", []interface{}{id}))
	if !r && e != nil {
		log.Println(e)
		return errors.New("修改区块链数据失败")
	}
	if err := UpdateDrugRecord(map[string]interface{}{
		"id":        id,
		"physician": uuid,
	}, map[string]interface{}{
		"already_buy": true,
	}); err != nil {
		log.Println(err)
		return errors.New("修改数据库数据失败")
	}
	return nil
}

const (
	DrugAlreadyBy      = "1" // 已经购买
	DrugNotBy          = "2" // 未购买
	AlreadyCertificate = "3" // 已经派送
	NotCertificate     = "4" // 未派送
	FinishDrug         = "5" // 已经完成
)

func GetDrugRecord(raw, cond, val string, page, size int) (map[string]interface{}, error) {
	var (
		acc        = model.Account{}
		inquiry    = model.Inquiry{}
		medical    = model.Medical{}
		drugRecord = model.Drug{}
	)
	query := data.Db.Table(fmt.Sprintf("%s as d", drugRecord.TableName())).
		Select("i.patient, i.appointment_time, i.reserved_phone, i.physician, i.type, i.inquiry_detail, i.is_inquiry, i.is_reception, "+
			"m.diagnostic_description, m.inquiry_video, m.medical_img, d.hospital, d.create_time, d.already_buy, d.delivery_certificate, d.is_receive,"+
			"d.id as drug_id,"+
			"j.username as patient_username,j.sex as patient_sex,j.age as patient_age, p.username as physician_username").
		Joins(fmt.Sprintf("JOIN %s as m ON d.bind_medical = m.id", medical.TableName())).
		Joins(fmt.Sprintf("JOIN %s as i ON m.bind_inquiry_id = i.id", inquiry.TableName())).
		Joins(fmt.Sprintf("JOIN %s as j ON j.uuid = i.patient", acc.TableName())).
		Joins(fmt.Sprintf("JOIN %s as p ON p.uuid = i.physician", acc.TableName())).
		Where(fmt.Sprintf("d.%s = ?", cond), val)

	switch raw {
	case DrugAlreadyBy:
		query = query.Where("d.already_buy = ?", true)
	case DrugNotBy:
		query = query.Where("d.already_buy = ?", false)
	case AlreadyCertificate:
		query = query.Where("d.delivery_certificate IS NOT NULL").Where("d.delivery_certificate != ''").Where("d.is_receive = ?", false)
	case NotCertificate:
		query = query.Where("d.already_buy = ?", true).Where("d.delivery_certificate = ''")
	case FinishDrug:
		query = query.Where("d.is_receive = ?", true)
	default:
		// 未定义或空的 `raw` 参数可以返回一个默认查询或者错误
	}

	return transferPage(query, page, size)
}

func transferPage(query *gorm.DB, page, size int) (map[string]interface{}, error) {
	var (
		total   int64
		results []map[string]interface{}
	)

	offset := (page - 1) * size

	// 先执行 Count 查询总数
	if err := query.Count(&total).Error; err != nil {
		log.Printf("query count error: %v", err)
		return nil, err
	}
	if err := query.Offset(offset).Limit(size).Scan(&results).Error; err != nil {
		log.Printf("Error querying drug history for user  %v", err)
		return nil, err
	}

	// 构建返回的结果
	m := make(map[string]interface{})
	m["total"] = total
	m["totalPages"] = (total + int64(size) - 1) / int64(size) // 计算总页数
	m["currentPage"] = page
	m["list"] = results
	return m, nil
}

func HospitalAgentDrug(drugId string) error {
	r, e := util.IsSuccessMsg(util.CommonEq(
		"hospitalReviewDrugDelivery", []interface{}{drugId}))
	if !r && e != nil {
		log.Println(e)
		return errors.New("审核上链失败")
	}
	if err := UpdateDrugRecord(map[string]interface{}{
		"id": drugId,
	}, map[string]interface{}{
		"is_receive": true,
	}); err != nil {
		log.Println(err)
		return errors.New("修改数据库数据失败")
	}
	return nil
}

func PhysicianDrugDelivery(drugId, certificate, physicianUUID, chainAccount string) error {
	r, e := util.IsSuccessMsg(util.CommonEqByUser(chainAccount,
		"physicianDeliveryDrug", []interface{}{drugId, certificate}))
	if !r && e != nil {
		log.Println(e)
		return errors.New("派送上链失败")
	}
	if err := UpdateDrugRecord(map[string]interface{}{
		"id":        drugId,
		"physician": physicianUUID,
	}, map[string]interface{}{
		"delivery_certificate": certificate,
	}); err != nil {
		log.Println(err)
		return errors.New("修改数据库数据失败")
	}
	return nil
}
