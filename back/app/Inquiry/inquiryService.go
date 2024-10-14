/*
@Time : 2024/10/5 上午10:24
@Author : ljn
@File : inquiryService
@Software: GoLand
*/

package Inquiry

import (
	"back/app/user"
	"back/pkg/data"
	"back/pkg/data/bo"
	"back/pkg/data/model"
	"back/pkg/data/vo"
	"back/pkg/util"
	"fmt"
	"gorm.io/gorm"
	"log"
	"sync"
)

func CreateInquiry(chainAccount string, bean bo.CreateInquiryBo) (uint, error) {
	var inquiry model.Inquiry
	util.BeanUtil.CopyProperties(bean, &inquiry)
	inquiry.IsInquiry = false
	inquiry.IsReception = false
	inquiry.IsAudit = false
	tx := data.Db.Begin()
	if err := tx.Create(&inquiry).Error; err != nil {
		tx.Rollback()
		log.Println(err)
		return 0, fmt.Errorf("create inquiry failed")
	}

	r, e := util.IsSuccessMsg(util.CommonEqByUser(chainAccount, "patientRegistrationInquiry", []interface{}{
		inquiry.ID,
		bean.Type,
	}))
	if !r && e != nil {
		tx.Rollback()
		log.Println(e)
		return 0, e
	}
	if err := tx.Commit().Error; err != nil {
		log.Println(err)
		return 0, fmt.Errorf("commit failed")
	}
	return inquiry.ID, nil
}

func UpdateInquiryPhysician(id, name string) error {
	var inquiry model.Inquiry
	if err := data.Db.Where("id = ?", id).First(&inquiry).Error; err != nil {
		log.Println(err)
		return fmt.Errorf("update inquiry failed")
	}
	account := user.QueryUser(map[string]interface{}{"uuid": name})
	if account == (model.Account{}) {
		return fmt.Errorf("physician not found")
	}
	r, e := util.IsSuccessMsg(util.CommonEq("hospitalDisInquiry", []interface{}{id, account.ChainAccount}))
	if !r && e != nil {
		log.Println(e)
		return e
	}
	inquiry.Physician = name
	if err := data.Db.Updates(&inquiry).Error; err != nil {
		log.Println(err)
		return fmt.Errorf("update inquiry failed")
	}
	return nil
}

const (
	InquiryTrue = iota + 1
	InquiryFalse
	NoAppoint
	Pending
	NoAudit
)

func QueryAllInquiry(isInquiry, page, size int) map[string]interface{} {
	query := data.Db.Model(model.Inquiry{}).Order("id DESC")
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
	case NoAudit:
		query = query.Where("is_inquiry = ?", true).Where("is_audit = ?", false)
	default:

	}
	return transferPage(query, page, size)
}

func QueryPhysicianInquiryRecord(uuid string, isInquiry, page, size int) map[string]interface{} {
	query := data.Db.Model(model.Inquiry{}).Order("id DESC").Where("physician = ?", uuid)
	switch isInquiry {
	case InquiryTrue:
		query = query.Where("is_inquiry = ?", true)
	case InquiryFalse:
		query = query.Where("is_reception = ?", true).Where("is_inquiry = ?", false)
	case Pending:
		query = query.Where("is_reception = ?", false)
	default:

	}

	return transferPage(query, page, size)
}

func QueryPatientInquiryRecord(uuid string, isInquiry, page, size int) map[string]interface{} {
	query := data.Db.Model(model.Inquiry{}).Order("id DESC").Where("patient = ?", uuid)
	switch isInquiry {
	case InquiryTrue:
		query = query.Where("is_inquiry = ?", true)
	case InquiryFalse:
		query = query.Where("is_inquiry = ?", false)
	default:

	}
	return transferPage(query, page, size)
}

func transferPage(query *gorm.DB, page, size int) map[string]interface{} {
	var (
		inquiry []model.Inquiry
		total   int64
	)
	offset := (page - 1) * size
	// 先执行 Count 查询总数
	if err := query.Count(&total).Error; err != nil {
		log.Printf("query count error: %v", err)
		return nil
	}
	if err := query.Offset(offset).Limit(size).Find(&inquiry).Error; err != nil {
		log.Println(err)
		return nil
	}
	// 构建返回的结果
	m := make(map[string]interface{})
	m["total"] = total
	m["totalPages"] = (total + int64(size) - 1) / int64(size) // 计算总页数
	m["currentPage"] = page
	m["list"] = transferToInquiryVo(inquiry)
	return m
}
func UpdateIsInquiry(id string) error {
	r, e := util.IsSuccessMsg(util.CommonEq("hospitalReviewInquiry", []interface{}{id}))
	if !r && e != nil {
		log.Println(e)
		return e
	}
	if err := data.Db.Model(&model.Inquiry{}).Where("id = ?", id).Update("is_audit", true).Error; err != nil {
		log.Println(err)
		return fmt.Errorf("update inquiry failed")
	}
	return nil
}

func UpdateIsReception(chainAccount, id string, isReception bool) error {
	if !isReception {
		if err := data.Db.Model(&model.Inquiry{}).Where("id = ?", id).Update("physician", "").Error; err != nil {
			log.Println(err)
			return fmt.Errorf("update inquiry failed")
		}
	}
	r, e := util.IsSuccessMsg(util.CommonEqByUser(chainAccount, "physicianRecInquiry", []interface{}{id}))
	if !r && e != nil {
		log.Println(e)
		return e
	}
	if err := data.Db.Model(&model.Inquiry{}).Where("id = ?", id).Update("is_reception", isReception).Error; err != nil {
		log.Println(err)
		return fmt.Errorf("update inquiry failed")
	}
	return nil
}

func IsReception(id string) bool {
	var inquiry model.Inquiry
	if err := data.Db.Where("id = ?", id).First(&inquiry).Error; err != nil {
		log.Println(err)
		return false
	}
	return inquiry.IsReception
}

func QueryInquiryRecordByCond(cond map[string]interface{}) model.Inquiry {
	var inquiry model.Inquiry
	query := data.Db.Model(&model.Inquiry{})
	for k, v := range cond {
		query = query.Where(k, v)
	}
	query.First(&inquiry)
	return inquiry
}

func transferToInquiryVo(receiver []model.Inquiry) []vo.QueryInquiryVo {
	var (
		inquiryResponse []vo.QueryInquiryVo
		wg              sync.WaitGroup
		mx              sync.Mutex
	)
	inquiryResponse = make([]vo.QueryInquiryVo, len(receiver))

	for i, v := range receiver {
		wg.Add(1)
		go func(i int, v model.Inquiry) {
			defer wg.Done()

			// 并发查询患者和医生信息
			var patient, physician model.Account
			var inquiryVo vo.QueryInquiryVo
			c := make(chan struct{}, 2)

			go func() {
				patient = user.QueryUser(map[string]interface{}{"uuid": v.Patient})
				c <- struct{}{}
			}()

			go func() {
				physician = user.QueryUser(map[string]interface{}{"uuid": v.Physician})
				c <- struct{}{}
			}()

			// 等待两个查询完成
			<-c
			<-c

			util.BeanUtil.CopyProperties(v, &inquiryVo)
			util.BeanUtil.CopyProperties(patient, &inquiryVo.Patient)
			util.BeanUtil.CopyProperties(physician, &inquiryVo.Physician)

			// 锁住写操作，避免数据竞态
			mx.Lock()
			inquiryResponse[i] = inquiryVo
			mx.Unlock()
		}(i, v)
	}

	wg.Wait()
	return inquiryResponse
}

func TransferToInquiryVo(receiver model.Inquiry) vo.QueryInquiryVo {
	var (
		inquiryVo          vo.QueryInquiryVo
		patient, physician model.Account
	)

	// 创建一个具有两个结果的 channel
	resultChan := make(chan interface{}, 2)

	// 并发查询患者和医生信息
	go func() {
		resultChan <- user.QueryUser(map[string]interface{}{"uuid": receiver.Patient})
	}()

	go func() {
		resultChan <- user.QueryUser(map[string]interface{}{"uuid": receiver.Physician})
	}()

	// 获取 Goroutines 的查询结果
	for i := 0; i < 2; i++ {
		result := <-resultChan
		switch res := result.(type) {
		case model.Account:
			// 根据 UUID 判断是患者还是医生
			if res.UUID == receiver.Patient {
				patient = res
			} else if res.UUID == receiver.Physician {
				physician = res
			}
		}
	}

	// 进行属性复制
	util.BeanUtil.CopyProperties(receiver, &inquiryVo)
	util.BeanUtil.CopyProperties(patient, &inquiryVo.Patient)
	util.BeanUtil.CopyProperties(physician, &inquiryVo.Physician)

	return inquiryVo
}

func QueryLikeByCond(username string, isPatient bool, page, size int) map[string]interface{} {
	query := data.Db.Model(&model.Inquiry{}) // 假设model.Inquiry是你的Inquiry模型
	if isPatient {
		query = query.Joins("JOIN account a ON a.uuid = inquiry.patient")
	} else {
		query = query.Joins("JOIN account a ON a.uuid = inquiry.physician")
	}
	query = query.Where("a.username LIKE ?", "%"+username+"%")

	return transferPage(query, page, size)
}
