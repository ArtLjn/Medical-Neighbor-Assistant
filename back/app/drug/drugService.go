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
