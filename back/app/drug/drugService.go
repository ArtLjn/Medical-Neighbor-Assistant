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
	"back/pkg/util"
	"errors"
	"fmt"
	"log"

	"gorm.io/gorm"
)

// QueryDrugRecord 查询药品记录,并关联查询相关表的信息
// params: cond: 查询条件
// return: model.Drug: 查询结果
func QueryDrugRecord(cond map[string]interface{}) model.Drug {
	query := data.Db
	// 循环查询条件，添加到查询语句中
	for k, v := range cond {
		query = query.Where(k, v)
	}
	var drug model.Drug
	query.First(&drug)
	return drug
}

// UpdateDrugRecord 查询药品和患者信息,并关联查询相关表的信息
// params: cond: 查询条件, receiver: 接收查询结果的结构体
// return: map[string]interface{}: 查询结果
func UpdateDrugRecord(cond map[string]interface{}, receiver map[string]interface{}) error {
	query := data.Db
	for k, v := range cond {
		query = query.Where(k, v)
	}
	return query.Model(model.Drug{}).Updates(&receiver).Error
}

// QueryDrugAndAccountMessage 查询药品和患者信息,并关联查询相关表的信息
// params: drugId: 药品id
func QueryDrugAndAccountMessage(drugId string) map[string]interface{} {
	var result map[string]interface{}
	var (
		drug    model.Drug
		medical model.Medical
		inquiry model.Inquiry
		acc     model.Account
	)

	// 查询药品信息，并关联查询相关表的信息,包括患者信息、医生信息、问诊信息、病历信息
	// 注意：这里使用了gorm的Select方法，可以指定查询的字段，避免查询出不需要的字段
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

// QueryAllDrug 查询所有药品
func QueryAllDrug(page, size int) (map[string]interface{}, error) {
	var (
		drug    model.Drug
		acc     model.Account
		medical model.Medical
		inquiry model.Inquiry
	)

	// 查询药品记录，并关联查询患者和医生的账号信息
	query := data.Db.Table(fmt.Sprintf("%s as d", drug.TableName())).Order("d.id desc").
		Select("i.patient, i.appointment_time, i.reserved_phone, i.physician, i.type, i.inquiry_detail, i.is_inquiry, i.is_reception, " +
			"m.diagnostic_description, m.inquiry_video, m.medical_img, d.hospital, d.create_time, d.already_buy, d.delivery_certificate, d.is_receive," +
			"d.id as drug_id," +
			"j.username as patient_username,j.sex as patient_sex,j.age as patient_age, p.username as physician_username").
		Joins(fmt.Sprintf("JOIN %s as m ON d.bind_medical = m.id", medical.TableName())).
		Joins(fmt.Sprintf("JOIN %s as i ON m.bind_inquiry_id = i.id", inquiry.TableName())).
		Joins(fmt.Sprintf("JOIN %s as j ON j.uuid = i.patient", acc.TableName())).
		Joins(fmt.Sprintf("JOIN %s as p ON p.uuid = i.physician", acc.TableName()))
	return transferPage(query, page, size)
}

// PhysicianAgentDrug  查询药品记录
// param cond: 查询条件，例如：id, physician, patient
func PhysicianAgentDrug(id, uuid, chainAccount string) error {
	// 查询药品记录
	drugRecord := QueryDrugRecord(map[string]interface{}{
		"id":        id,
		"physician": uuid,
	})
	// 查询药品记录是否已经购买
	if drugRecord != (model.Drug{}) && drugRecord.AlreadyBuy {
		return errors.New("already buy")
	}
	// 调用区块链接口，修改药品记录
	r, e := util.IsSuccessMsg(util.CommonEqByUser(chainAccount,
		"physicianAcceptDrugDelivery", []interface{}{id}))
	// 如果修改失败，返回错误信息
	if !r && e != nil {
		log.Println(e)
		return errors.New("修改区块链数据失败")
	}
	// 修改数据库数据,将already_buy字段设置为true,表示已经购买
	if err := UpdateDrugRecord(map[string]interface{}{
		"id":        id,
		"physician": uuid,
	}, map[string]interface{}{
		"already_buy": true,
	}); err != nil {
		log.Println(err)
		return errors.New("修改数据库数据失败")
	}
	return nil
}

const (
	DrugAlreadyBy      = "1" // 已经购买
	DrugNotBy          = "2" // 未购买
	AlreadyCertificate = "3" // 已经派送
	NotCertificate     = "4" // 未派送
	FinishDrug         = "5" // 已经完成
)

// GetDrugRecord 查询药品记录
// param cond: 查询条件，例如：id, physician, patient
func GetDrugRecord(raw, cond, val string, page, size int) (map[string]interface{}, error) {
	var (
		acc        = model.Account{} // 用户表
		inquiry    = model.Inquiry{} // 询诊表
		medical    = model.Medical{} // 诊断表
		drugRecord = model.Drug{}    // 药品记录表
	)
	// 查询药品记录,按照id降序排列,只查询id, physician, patient, hospital, create_time, already_buy, delivery_certificate, is_receive字段,
	// 并且查询绑定的诊断表中的诊断描述, inquiry_video, medical_img字段,绑定的询诊表中的patient, appointment_time, reserved_phone, physician, type, inquiry_detail, is_inquiry, is_reception字段,
	query := data.Db.Table(fmt.Sprintf("%s as d", drugRecord.TableName())).Order("d.id DESC").
		Select("i.patient, i.appointment_time, i.reserved_phone, i.physician, i.type, i.inquiry_detail, i.is_inquiry, i.is_reception, "+
			"m.diagnostic_description, m.inquiry_video, m.medical_img, d.hospital, d.create_time, d.already_buy, d.delivery_certificate, d.is_receive,"+
			"d.id as drug_id,"+
			"j.username as patient_username,j.sex as patient_sex,j.age as patient_age, p.username as physician_username").
		Joins(fmt.Sprintf("JOIN %s as m ON d.bind_medical = m.id", medical.TableName())).
		Joins(fmt.Sprintf("JOIN %s as i ON m.bind_inquiry_id = i.id", inquiry.TableName())).
		Joins(fmt.Sprintf("JOIN %s as j ON j.uuid = i.patient", acc.TableName())).
		Joins(fmt.Sprintf("JOIN %s as p ON p.uuid = i.physician", acc.TableName())).
		Where(fmt.Sprintf("d.%s = ?", cond), val)
	// 根据raw参数查询不同的数据
	switch raw {
	case DrugAlreadyBy:
		// 已经购买,查询already_buy字段为true的数据
		query = query.Where("d.already_buy = ?", true)
	case DrugNotBy:
		// 未购买,查询already_buy字段为false的数据
		query = query.Where("d.already_buy = ?", false)
	case AlreadyCertificate:
		// 已经派送,查询delivery_certificate字段不为空的数据,并且is_receive字段为false的数据
		query = query.Where("d.delivery_certificate IS NOT NULL").Where("d.delivery_certificate != ''").Where("d.is_receive = ?", false)
	case NotCertificate:
		// 未派送,查询already_buy字段为true的数据,并且delivery_certificate字段为空的数据
		query = query.Where("d.already_buy = ?", true).Where("d.delivery_certificate = ''")
	case FinishDrug:
		// 已完成,查询is_receive字段为true的数据
		query = query.Where("d.is_receive = ?", true)
	default:
		// 未定义或空的 `raw` 参数可以返回一个默认查询或者错误
	}
	// 根据page和size参数分页查询
	return transferPage(query, page, size)
}

// transferPage 分页查询,返回map[string]interface{}类型的数据
// param: query 查询语句
// param: page 页码
// param: size 每页数量
func transferPage(query *gorm.DB, page, size int) (map[string]interface{}, error) {
	var (
		total   int64                    // 总数
		results []map[string]interface{} // 结果集
	)

	offset := (page - 1) * size // 计算偏移量

	// 先执行 Count 查询总数
	if err := query.Count(&total).Error; err != nil {
		log.Printf("query count error: %v", err)
		return nil, err
	}
	// 执行查询,并将结果映射到 results 变量中
	if err := query.Offset(offset).Limit(size).Scan(&results).Error; err != nil {
		log.Printf("Error querying drug history for user  %v", err)
		return nil, err
	}

	// 构建返回的结果
	m := make(map[string]interface{})
	m["total"] = total
	m["totalPages"] = (total + int64(size) - 1) / int64(size) // 计算总页数
	m["currentPage"] = page
	m["list"] = results
	return m, nil
}

// HospitalAgentDrug 审核药品上链
// param: drugId 药品id
func HospitalAgentDrug(drugId string) error {
	//TODO  审核药品上链
	//TODO 更新数据库状态为已经收货
	return nil
}

// PhysicianDrugDelivery 医生派送药品
// param: drugId 药品id
// param: certificate 派送证书
// param: physicianUUID 医生uuid
// param: chainAccount 链账户
func PhysicianDrugDelivery(drugId, certificate, physicianUUID, chainAccount string) error {
	// 派送上链
	r, e := util.IsSuccessMsg(util.CommonEqByUser(chainAccount,
		"physicianDeliveryDrug", []interface{}{drugId, certificate}))
	// 如果派送上链失败,则返回错误信息
	if !r && e != nil {
		log.Println(e)
		return errors.New("派送上链失败")
	}
	// 修改数据库数据,将delivery_certificate字段设置为certificate
	if err := UpdateDrugRecord(map[string]interface{}{
		"id":        drugId,
		"physician": physicianUUID,
	}, map[string]interface{}{
		"delivery_certificate": certificate,
	}); err != nil {
		log.Println(err)
		return errors.New("修改数据库数据失败")
	}
	return nil
}
