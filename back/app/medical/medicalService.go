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

func CreateMedical(receiver bo.MedicalUploadBo) error {
	var medical model.Medical
	util.BeanUtil.CopyProperties(receiver, &medical)
	// TODO 区块链预留位置
	return data.Db.Create(&medical).Error
}
