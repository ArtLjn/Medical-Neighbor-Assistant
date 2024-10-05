/*
@Time : 2024/10/5 上午10:24
@Author : ljn
@File : inquiryService
@Software: GoLand
*/

package Inquiry

import (
	"back/pkg/data"
	"back/pkg/data/bo"
	"back/pkg/data/model"
	"back/pkg/util"
)

func CreateInquiry(bean bo.CreateInquiryBo) error {
	var inquiry model.Inquiry
	util.BeanUtil.CopyProperties(bean, &inquiry)
	return data.Db.Create(&inquiry).Error
}

func UpdateInquiryPhysician(id, name string) error {
	return data.Db.Model(&model.Inquiry{}).Where("id = ?", id).Update("physician", name).Error
}
