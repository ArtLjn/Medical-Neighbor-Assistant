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
	"fmt"
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

func QueryMedicalByCond(cond map[string]interface{}) model.Medical {
	var medical model.Medical
	query := data.Db.Model(model.Medical{})
	for k, v := range cond {
		query = query.Where(k, v)
	}
	query.First(&medical)
	return medical
}
