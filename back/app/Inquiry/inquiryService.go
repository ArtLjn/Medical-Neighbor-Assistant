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
	"log"
	"sync"

	"gorm.io/gorm"
)

// CreateInquiry 创建问诊记录,并返回id,如果创建失败返回0
// params: chainAccount: 用户账号, bean: 创建问诊记录的参数
// return: id: 问诊记录id, error: 错误信息
func CreateInquiry(chainAccount string, bean bo.CreateInquiryBo) (uint, error) {
	var inquiry model.Inquiry                    //问诊记录
	util.BeanUtil.CopyProperties(bean, &inquiry) // 复制参数到问诊记录
	// 设置问诊记录状态,默认为未问诊,未接诊,未审核
	inquiry.IsInquiry = false
	inquiry.IsReception = false
	inquiry.IsAudit = false
	// 开启事务
	tx := data.Db.Begin()
	// 创建问诊记录,如果创建失败回滚事务
	if err := tx.Create(&inquiry).Error; err != nil {
		tx.Rollback()
		log.Println(err)
		return 0, fmt.Errorf("create inquiry failed")
	}
	// 调用util包的CommonEqByUser函数,判断是否已经存在相同类型的问诊记录,如果存在则回滚事务
	r, e := util.IsSuccessMsg(util.CommonEqByUser(chainAccount, "patientRegistrationInquiry", []interface{}{
		inquiry.ID,
		bean.Type,
	}))
	// 如果判断失败则回滚事务
	if !r && e != nil {
		tx.Rollback()
		log.Println(e)
		return 0, e
	}
	//提交事务,如果提交失败则回滚事务
	if err := tx.Commit().Error; err != nil {
		log.Println(err)
		return 0, fmt.Errorf("commit failed")
	}
	// 返回问诊记录id
	return inquiry.ID, nil
}

// UpdateInquiryPhysician 更新问诊记录状态,如果更新失败返回错误信息
// params: id: 问诊记录id, isInquiry: 是否问诊
// return: error: 错误信息
func UpdateInquiryPhysician(id, name string) error {
	var inquiry model.Inquiry // 问诊记录
	// 查询问诊记录,如果查询失败返回错误信息
	if err := data.Db.Where("id = ?", id).First(&inquiry).Error; err != nil {
		log.Println(err)
		return fmt.Errorf("update inquiry failed")
	}
	// 判断是否已经指派医师,如果已经指派则返回错误信息
	account := user.QueryUser(map[string]interface{}{"uuid": name})
	if account == (model.Account{}) {
		return fmt.Errorf("physician not found")
	}
	// 调用util包的CommonEq函数更新问诊记录状态,如果更新失败返回错误信息
	r, e := util.IsSuccessMsg(util.CommonEq("hospitalDisInquiry", []interface{}{id, account.ChainAccount}))
	if !r && e != nil {
		log.Println(e)
		return e
	}
	inquiry.Physician = name // 设置问诊医师
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

// QueryAllInquiry 查询所有问诊记录,如果查询失败返回错误信息
// params: isInquiry: 是否问诊, page: 页码, size: 每页大小
// return: map[string]interface{}: 返回的问诊记录
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

// QueryPhysicianInquiryRecord 查询问诊记录,如果查询失败返回错误信息
// params: uuid: 用户uuid, isInquiry: 是否问诊, page: 页码, size: 每页大小
// return: map[string]interface{}: 返回的问诊记录
func QueryPhysicianInquiryRecord(uuid string, isInquiry, page, size int) map[string]interface{} {
	// 查询指定用户的问诊记录
	query := data.Db.Model(model.Inquiry{}).Order("id DESC").Where("physician = ?", uuid)
	// 根据isInquiry参数查询不同的问诊记录
	switch isInquiry {
	case InquiryTrue:
		// 查询已经问诊结束的记录
		query = query.Where("is_inquiry = ?", true)
	case InquiryFalse:
		// 查询已经指派医师且医师已经接诊但没有问诊的记录
		query = query.Where("is_reception = ?", true).Where("is_inquiry = ?", false)
	case Pending:
		// 查询已经指派医师但是医师暂时没有接诊的记录
		query = query.Where("is_reception = ?", false)
	default:

	}
	// 调用transferPage函数返回分页后的问诊记录
	return transferPage(query, page, size)
}

// QueryPatientInquiryRecord 查询指定用户的问诊记录,如果查询失败返回错误信息,如果查询成功返回问诊记录
// params: uuid: 用户uuid, isInquiry: 是否问诊, page: 页码, size: 每页大小
// return: map[string]interface{}: 返回的问诊记录
func QueryPatientInquiryRecord(uuid string, isInquiry, page, size int) map[string]interface{} {
	// 查询指定用户的问诊记录,如果查询失败返回错误信息
	query := data.Db.Model(model.Inquiry{}).Order("id DESC").Where("patient = ?", uuid)
	// 根据isInquiry参数查询不同的问诊记录
	switch isInquiry {
	case InquiryTrue:
		// 查询已经问诊结束的记录,如果查询失败返回错误信息
		query = query.Where("is_inquiry = ?", true)
	case InquiryFalse:
		// 查询已经指派医师且医师已经接诊但没有问诊的记录,如果查询失败返回错误信息
		query = query.Where("is_inquiry = ?", false)
	default:

	}
	// 调用transferPage函数返回分页后的问诊记录
	return transferPage(query, page, size)
}

// transferToInquiryVo
// params: query: 查询结果, page: 页码, size: 每页大小
// return: map[string]interface{}: 返回的问诊记录
func transferPage(query *gorm.DB, page, size int) map[string]interface{} {
	var (
		inquiry []model.Inquiry
		total   int64
	)
	offset := (page - 1) * size // 计算偏移量
	// 先执行 Count 查询总数
	if err := query.Count(&total).Error; err != nil {
		log.Printf("query count error: %v", err)
		return nil
	}
	// 再执行 Find 查询数据,并设置偏移量和每页大小
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

// UpdateIsInquiry 更新问诊状态,如果更新失败返回错误信息
// params: id: 问诊记录id
// return: error: 错误信息
func UpdateIsInquiry(id string) error {
	// 更新问诊状态,如果更新失败返回错误信息
	r, e := util.IsSuccessMsg(util.CommonEq("hospitalReviewInquiry", []interface{}{id}))
	if !r && e != nil {
		log.Println(e)
		return e
	}
	// 更新问诊状态,如果更新失败返回错误信息
	if err := data.Db.Model(&model.Inquiry{}).Where("id = ?", id).Update("is_audit", true).Error; err != nil {
		log.Println(err)
		return fmt.Errorf("update inquiry failed")
	}
	return nil
}

// UpdateIsReception 更新问诊状态,如果更新失败返回错误信息
// params: id: 问诊记录id, isReception: 是否接诊
// return: error: 错误信息
func UpdateIsReception(chainAccount, id string, isReception bool) error {
	// 更新问诊状态,如果更新失败返回错误信息
	if !isReception {
		if err := data.Db.Model(&model.Inquiry{}).Where("id = ?", id).Update("physician", "").Error; err != nil {
			log.Println(err)
			return fmt.Errorf("update inquiry failed")
		}
	}
	// 更新问诊状态写入区块链,如果更新失败返回错误信息
	r, e := util.IsSuccessMsg(util.CommonEqByUser(chainAccount, "physicianRecInquiry", []interface{}{id}))
	if !r && e != nil {
		log.Println(e)
		return e
	}
	// 更新问诊状态,如果更新失败返回错误信息
	if err := data.Db.Model(&model.Inquiry{}).Where("id = ?", id).Update("is_reception", isReception).Error; err != nil {
		log.Println(err)
		return fmt.Errorf("update inquiry failed")
	}
	return nil
}

// IsReception 判断问诊状态
// params: id: 问诊记录id
// return: bool: 是否接诊
func IsReception(id string) bool {
	var inquiry model.Inquiry
	if err := data.Db.Where("id = ?", id).First(&inquiry).Error; err != nil {
		log.Println(err)
		return false
	}
	return inquiry.IsReception
}

// QueryInquiryRecordByCond 查询问诊记录
// params: cond: 查询条件
// return: model.Inquiry: 问诊记录
func QueryInquiryRecordByCond(cond map[string]interface{}) model.Inquiry {
	var inquiry model.Inquiry
	query := data.Db.Model(&model.Inquiry{})
	// 根据条件查询问诊记录
	for k, v := range cond {
		query = query.Where(k, v)
	}
	query.First(&inquiry)
	return inquiry
}

// transferToInquiryVo 将查询结果转换为vo
// params: receiver: 查询结果
// return: []vo.QueryInquiryVo: 转换后的结果
func transferToInquiryVo(receiver []model.Inquiry) []vo.QueryInquiryVo {
	var (
		inquiryResponse []vo.QueryInquiryVo
		wg              sync.WaitGroup
		mx              sync.Mutex
	)
	inquiryResponse = make([]vo.QueryInquiryVo, len(receiver))
	// 并发查询患者和医生信息
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
			// 进行属性复制
			util.BeanUtil.CopyProperties(v, &inquiryVo)
			util.BeanUtil.CopyProperties(patient, &inquiryVo.Patient)
			util.BeanUtil.CopyProperties(physician, &inquiryVo.Physician)

			// 锁住写操作，避免数据竞态
			mx.Lock()
			// 将结果添加到切片中
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

// QueryLikeByCond 查询问诊记录
// params: username: 用户名
// isPatient: 是否是患者
// page: 页码
// size: 每页大小
// return: map[string]interface{}: 查询结果
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
