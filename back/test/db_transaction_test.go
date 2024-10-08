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
	"encoding/json"
	"fmt"
	"testing"
)

const CurrentConfigPath = "../config/config.yaml"

func TestQueryInquiryAndMedicalRecords(t *testing.T) {
	config.InitConfig(CurrentConfigPath)
	db := data.NewDB()
	var results []map[string]interface{}
	//err := db.Table("inquiry").
	//	Select("inquiry.*, medical.*").
	//	Joins("LEFT JOIN medical ON medical.bind_inquiry_id = inquiry.id").
	//	Scan(&results).Error
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

func TestQueryDrugAndAccountMessage(t *testing.T) {
	var result map[string]interface{}
	config.InitConfig(CurrentConfigPath)
	db := data.NewDB()

	var (
		drug    model.Drug
		account model.Account
	)

	sqlQuery := fmt.Sprintf(`
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
	LIMIT 1;`,
		drug.TableName(), drug.TableName(), account.TableName(), drug.TableName(), account.TableName(), drug.TableName(), drug.TableName())

	err := db.Raw(sqlQuery, "1").Scan(&result).Error

	if err != nil {
		t.Fatalf("Expected no error, got %v", err)
	}

	// Optionally, you can add assertions here to verify the result
	t.Log(result)
}

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
