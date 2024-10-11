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
	"fmt"
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

func QueryAllDrug() []map[string]interface{} {
	var results []map[string]interface{}
	var (
		drug    model.Drug
		acc     model.Account
		medical model.Medical
		inquiry model.Inquiry
	)

	err := data.Db.Table(fmt.Sprintf("%s as d", drug.TableName())).
		Select("i.patient, i.appointment_time, i.reserved_phone, i.physician, i.type, i.inquiry_detail, i.is_inquiry, i.is_reception, " +
			"m.diagnostic_description, m.inquiry_video, m.medical_img, d.hospital, d.create_time, d.already_buy, d.delivery_certificate, d.is_receive," +
			"d.id as drug_id," +
			"j.username as patient_username,j.sex as patient_sex,j.age as patient_age, p.username as physician_username").
		Joins(fmt.Sprintf("JOIN %s as m ON d.bind_medical = m.id", medical.TableName())).
		Joins(fmt.Sprintf("JOIN %s as i ON m.bind_inquiry_id = i.id", inquiry.TableName())).
		Joins(fmt.Sprintf("JOIN %s as j ON j.uuid = i.patient", acc.TableName())).
		Joins(fmt.Sprintf("JOIN %s as p ON p.uuid = i.physician", acc.TableName())).
		Scan(&results).Error
	if err != nil {
		return nil
	}
	return results
}
