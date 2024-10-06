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
)

func CreateMedical(receiver bo.MedicalUploadBo) (uint, error) {
	var medical model.Medical
	util.BeanUtil.CopyProperties(receiver, &medical)
	// TODO 区块链预留位置
	err := data.Db.Create(&medical).Error
	if err != nil {
		return 0, err
	}
	return medical.ID, nil
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
