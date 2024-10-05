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
	"log"
)

func CreateInquiry(bean bo.CreateInquiryBo) error {
	var inquiry model.Inquiry
	util.BeanUtil.CopyProperties(bean, &inquiry)
	inquiry.IsInquiry = false
	inquiry.IsReception = false
	return data.Db.Create(&inquiry).Error
}

func UpdateInquiryPhysician(id, name string) error {
	return data.Db.Model(&model.Inquiry{}).Where("id = ?", id).Update("physician", name).Error
}

const (
	InquiryTrue = iota + 1
	InquiryFalse
	NoAppoint
	Pending
)

func QueryAllInquiry(isInquiry int) []model.Inquiry {
	var inquiry []model.Inquiry
	query := data.Db
	switch isInquiry {
	case InquiryTrue:
		// 查询已经问诊结束的记录
		query = query.Where("is_inquiry = ?", true)
	case InquiryFalse:
		// 查询已经指派医师且医师已经接诊但没有问诊的记录
		query = query.Where("physician != ?", "").Where("is_reception = ?", true).Where("is_inquiry = ?", false)
	case NoAppoint:
		// 查询没有指派医师的记录
		query = query.Where("physician = ?", "")
	case Pending:
		// 查询已经指派医师但是医师暂时没有接诊的记录
		query = query.Where("physician != ?", "").Where("is_reception = ?", false)
	}
	if err := query.Find(&inquiry).Error; err != nil {
		log.Println(err)
		return nil
	}
	return inquiry
}

func QueryPhysicianInquiryRecord(name string, isInquiry int) []model.Inquiry {
	var inquiry []model.Inquiry
	query := data.Db.Where("physician = ?", name)
	switch isInquiry {
	case InquiryTrue:
		query = query.Where("is_inquiry = ?", true)
	case InquiryFalse:
		query = query.Where("is_reception = ?", true).Where("is_inquiry = ?", false)
	case Pending:
		query = query.Where("is_reception = ?", false)
	default:
		log.Println("unhandled default case")
		return nil
	}
	if err := query.Find(&inquiry).Error; err != nil {
		log.Println(err)
		return nil
	}
	return inquiry
}

func QueryPatientInquiryRecord(name string, isInquiry int) []model.Inquiry {
	var inquiry []model.Inquiry
	query := data.Db.Where("patient = ?", name)
	switch isInquiry {
	case InquiryTrue:
		query = query.Where("is_inquiry = ?", true)
	case InquiryFalse:
		query = query.Where("is_reception = ?", false)
	default:
		panic("unhandled default case")
	}
	if err := query.Find(&inquiry).Error; err != nil {
		log.Println(err)
		return nil
	}
	return inquiry
}

func UpdateIsInquiry(id string) bool {
	if err := data.Db.Model(&model.Inquiry{}).Where("id = ?", id).Update("is_inquiry", true).Error; err != nil {
		log.Println(err)
		return false
	}
	return true
}

func UpdateIsReception(id string, isReception bool) bool {
	if !isReception {
		if err := data.Db.Model(&model.Inquiry{}).Where("id = ?", id).Update("physician", "").Error; err != nil {
			log.Println(err)
			return false
		}
	}
	if err := data.Db.Model(&model.Inquiry{}).Where("id = ?", id).Update("is_reception", isReception).Error; err != nil {
		log.Println(err)
		return false
	}
	return true
}

func IsReception(id string) bool {
	var inquiry model.Inquiry
	if err := data.Db.Where("id = ?", id).First(&inquiry).Error; err != nil {
		log.Println(err)
		return false
	}
	return inquiry.IsReception
}
