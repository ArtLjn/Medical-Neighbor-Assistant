/*
@Time : 2024/10/8 10:19
@Author : ljn
@File : db_transaction_test
@Software: GoLand
*/

package test

import (
	"back/config"
	"back/pkg/data"
	"back/pkg/data/model"
	"database/sql/driver"
	"encoding/json"
	"fmt"
	"testing"
)

const CurrentConfigPath = "../config/config.yaml"

func TestQueryInquiryAndMedicalRecords(t *testing.T) {
	config.InitConfig(CurrentConfigPath)
	db := data.NewDB()
	var results []map[string]interface{}
	var (
		inquiry model.Inquiry
		medical model.Medical
	)
	err := db.Table(inquiry.TableName()).
		Select(fmt.Sprintf("%s.*, %s.*", inquiry.TableName(), medical.TableName())).
		Joins(fmt.Sprintf("LEFT JOIN %s ON %s.bind_inquiry_id = %s.id", medical.TableName(), medical.TableName(), inquiry.TableName())).
		Scan(&results).Error
	if err != nil {
		t.Error(err)
	}
	s, _ := json.Marshal(results)
	da := string(s)
	t.Log(da)
}

func TestQueryDrugAndAccount(t *testing.T) {
	config.InitConfig(CurrentConfigPath)
	db := data.NewDB()
	var results []map[string]interface{}
	var (
		drug    model.Drug
		account model.Account
	)

	err := db.Table(drug.TableName()).
		Select(fmt.Sprintf("%s.*, patient.username AS patient_username, physician.username AS physician_username", drug.TableName())).
		Joins(fmt.Sprintf("LEFT JOIN %s AS patient ON patient.uuid = %s.patient", account.TableName(), drug.TableName())).
		Joins(fmt.Sprintf("LEFT JOIN %s AS physician ON physician.uuid = %s.physician", account.TableName(), drug.TableName())).
		Scan(&results).Error
	if err != nil {
		t.Error(err)
	}
	s, _ := json.Marshal(results)
	da := string(s)
	t.Log(da)
}

/**
SELECT
	%s.*,
	patient.username AS patient_username,
	physician.username AS physician_username
FROM
	%s
LEFT JOIN
	%s AS patient ON patient.uuid = %s.patient
LEFT JOIN
	%s AS physician ON physician.uuid = %s.physician
WHERE
	%s.id = ?
LIMIT 1;
*/

func TestQueryDrugAndAccountByGorm(t *testing.T) {
	var result map[string]interface{}
	config.InitConfig(CurrentConfigPath)
	db := data.NewDB()

	var (
		drug    model.Drug
		account model.Account
	)
	err := db.Table(drug.TableName()).
		Select(fmt.Sprintf("%s.*, patient.username AS patient_username, physician.username AS physician_username", drug.TableName())).
		Joins(fmt.Sprintf("LEFT JOIN %s AS patient ON patient.uuid = %s.patient", account.TableName(), drug.TableName())).
		Joins(fmt.Sprintf("LEFT JOIN %s AS physician ON physician.uuid = %s.physician", account.TableName(), drug.TableName())).
		Where(fmt.Sprintf("%s.id = ?", drug.TableName()), "1").
		Scan(&result).Error

	if err != nil {
		t.Fatalf("Expected no error, got %v", err)
	}

	// Optionally, you can add assertions here to verify the result
	t.Log(result)
}

/*
*
SELECT

	i.patient,
	i.appointment_time,
	i.reserved_phone,
	i.physician,
	i.type,
	i.inquiry_detail,
	i.is_inquiry,
	i.is_reception,
	m.diagnostic_description,
	m.inquiry_video,
	m.medical_img,
	d.hospital,
	d.create_time,
	d.already_buy,
	d.delivery_certificate,
	d.is_receive

FROM

	drug d

JOIN

	medical m ON d.bind_medical = m.id

JOIN

	inquiry i ON m.bind_inquiry_id = i.id

WHERE

	d.id = 1;  -- 将 ? 替换为您要查询的 drug 表的 ID
*/

type Drug struct {
	ID             uint      `gorm:"primaryKey"`
	Patient        string    `gorm:"column:patient"`
	MedicalDetails JSONField `gorm:"column:medical_details"` // JSON字段
}

type MedicalInfo struct {
	DiagnosticDescription string `json:"diagnostic_description"`
	InquiryVideo          string `json:"inquiry_video"`
	MedicalImg            string `json:"medical_img"`
}

type JSONField []byte

func (j *JSONField) Scan(value interface{}) error {
	if value == nil {
		*j = []byte("null")
		return nil
	}
	v, ok := value.([]byte)
	if !ok {
		return fmt.Errorf("cannot convert %v to JSONField", value)
	}
	*j = v
	return nil
}

func (j JSONField) Value() (driver.Value, error) {
	return []byte(j), nil
}
func TestQueryDrugAndMedicalAndInquiry(t *testing.T) {
	var (
		result      []map[string]interface{}
		medicalInfo MedicalInfo
		drug        model.Drug
		inquiry     model.Inquiry
		medical     model.Medical
		acc         model.Account
	)
	config.InitConfig(CurrentConfigPath)
	db := data.NewDB()

	err := db.Table(fmt.Sprintf("%s as d", drug.TableName())).
		Select("i.patient, i.appointment_time, i.reserved_phone, i.physician, i.type, i.inquiry_detail, i.is_inquiry, i.is_reception, "+
			"m.diagnostic_description, m.inquiry_video, m.medical_img, d.hospital, d.create_time, d.already_buy, d.delivery_certificate, d.is_receive,"+
			"j.username as patient_username,j.sex as patient_sex,j.age as patient_age, p.username as physician_username").
		Joins(fmt.Sprintf("JOIN %s as m ON d.bind_medical = m.id", medical.TableName())).
		Joins(fmt.Sprintf("JOIN %s as i ON m.bind_inquiry_id = i.id", inquiry.TableName())).
		Joins(fmt.Sprintf("JOIN %s as j ON j.uuid = i.patient", acc.TableName())).
		Joins(fmt.Sprintf("JOIN %s as p ON p.uuid = i.physician", acc.TableName())).
		Where("d.patient = ?", "e044f432").
		Scan(&result).Error

	if err != nil {
		t.Fatalf("Expected no error, got %v", err)
	}

	// 构建 JSON 数据并存储
	for _, r := range result {
		medicalInfo = MedicalInfo{
			DiagnosticDescription: r["diagnostic_description"].(string),
			InquiryVideo:          r["inquiry_video"].(string),
			MedicalImg:            r["medical_img"].(string),
		}

		// 将医药信息序列化为 JSON
		jsonData, err := json.Marshal(medicalInfo)
		if err != nil {
			t.Fatalf("Failed to marshal JSON: %v", err)
		}

		// 存储到 Drug 的 MedicalDetails 字段中
		r["medical_details"] = string(jsonData)
	}

	// 输出结果
	t.Log(result)
}
