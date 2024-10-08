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
		account model.Account
	)

	err := data.Db.Table(drug.TableName()).
		Select(fmt.Sprintf("%s.*, patient.username AS patient_username, physician.username AS physician_username", drug.TableName())).
		Joins(fmt.Sprintf("LEFT JOIN %s AS patient ON patient.uuid = %s.patient", account.TableName(), drug.TableName())).
		Joins(fmt.Sprintf("LEFT JOIN %s AS physician ON physician.uuid = %s.physician", account.TableName(), drug.TableName())).
		Where(fmt.Sprintf("%s.id = ?", drug.TableName()), drugId).
		Scan(&result).Error

	if err != nil {
		return nil
	}
	return result
}

func QueryAllDrug() []map[string]interface{} {
	var results []map[string]interface{}
	var (
		drug    model.Drug
		account model.Account
	)

	err := data.Db.Table(drug.TableName()).
		Select(fmt.Sprintf("%s.*, patient.username AS patient_username, physician.username AS physician_username", drug.TableName())).
		Joins(fmt.Sprintf("LEFT JOIN %s AS patient ON patient.uuid = %s.patient", account.TableName(), drug.TableName())).
		Joins(fmt.Sprintf("LEFT JOIN %s AS physician ON physician.uuid = %s.physician", account.TableName(), drug.TableName())).
		Scan(&results).Error
	if err != nil {
		return nil
	}
	return results
}
