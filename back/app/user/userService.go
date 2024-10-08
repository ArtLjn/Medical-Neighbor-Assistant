/*
@Time : 2024/10/4 下午7:25
@Author : ljn
@File : userService
@Software: GoLand
*/

package user

import (
	"back/config"
	"back/pkg/data"
	"back/pkg/data/bo"
	"back/pkg/data/model"
	"back/pkg/role"
	"back/pkg/util"
	"errors"
	"github.com/google/uuid"
	"log"
	"strconv"
	"sync"
	"time"
)

func QueryUser(cond map[string]interface{}) model.Account {
	query := data.Db.Model(&model.Account{})
	for k, v := range cond {
		query = query.Where(k, v)
	}
	var account model.Account
	query.First(&account)
	return account
}

func QueryAllPatient() []model.Account {
	var accounts []model.Account
	data.Db.Where("role = ?", role.Patient).Find(&accounts)
	return accounts
}

func QueryAllPhysician() []model.Account {
	var accounts []model.Account
	data.Db.Where("role = ?", role.Physician).Find(&accounts)
	return accounts
}

func WriteAccountsToDB(receiver [][]string, roleType string, isPhysician bool) {
	var (
		accounts []model.Account
		mx       sync.Mutex
	)

	// 遍历接收器，跳过第一个元素（第一个元素为空）
	for i, v := range receiver {
		if i == 0 {
			continue
		}
		// 创建一个账户结构体
		account := model.Account{
			Username:   v[0],
			Sex:        v[1],
			Phone:      v[2],
			Password:   "123456",
			UUID:       uuid.New().String()[:8],
			Role:       roleType,
			CreateTime: time.Now().Format("2006-01-02 15:04:05"),
		}
		// 如果是医生，则处理医生特有的字段
		if isPhysician {
			account.Hospital = v[3]
		} else {
			account.HomeAddr = v[3]
			age, _ := strconv.Atoi(v[4]) // 转换年龄
			account.Age = age
		}
		// 将账户添加到切片中
		accounts = append(accounts, account)
	}

	go func() {
		// 开始一个数据库事务
		tx := data.Db.Begin()
		if tx.Error != nil {
			log.Println("Error starting transaction:", tx.Error)
			return
		}

		mx.Lock()
		for _, v := range accounts {
			if err := tx.Create(&v).Error; err != nil {
				log.Println("Error while inserting accounts:", err)
				tx.Rollback() // 回滚事务
				return
			}
			currentAddress, err := util.GenerateHttpAccount(v.UUID)
			if err != nil {
				log.Println("Error while generating account:", err)
				tx.Rollback() // 回滚事务
				return
			}
			v.ChainAccount = currentAddress
			if err = tx.Model(&v).Updates(v).Error; err != nil {
				log.Println("Error while updating account:", err)
				tx.Rollback() // 回滚事务
				return
			}
			util.IsSuccess(util.CommonEq("registerAccount", []interface{}{
				v.ChainAccount,
				roleType,
				v.UUID,
			}))
		}

		// 提交事务
		if err := tx.Commit().Error; err != nil {
			log.Println("Error committing transaction:", err)
		}
		mx.Unlock()
	}()
}

// WritePatientToDB  写入患者数据
func WritePatientToDB(receiver [][]string) {
	WriteAccountsToDB(receiver, role.Patient, false)
}

// WritePhysicianToDB  写入医生数据
func WritePhysicianToDB(receiver [][]string) {
	WriteAccountsToDB(receiver, role.Physician, true)
}

// UpdatePatientMessage  这段代码定义了两个函数，分别用于更新患者消息和更新医生信息，以及一个用于管理员登录的函数。下面是加上注释后的代码：
func UpdatePatientMessage(message bo.PatientUpdateMessage) error {
	// 查询用户
	account := QueryUser(map[string]interface{}{"uuid": message.UUID})
	if account == (model.Account{}) {
		// 如果用户不存在，返回错误
		return errors.New("用户不存在")
	}
	// 使用 util.BeanUtil 工具类将消息中的属性复制到用户结构体中
	util.BeanUtil.CopyProperties(message, &account)
	// 使用 data.Db 数据库对象更新用户信息
	err := data.Db.Model(&account).Updates(account).Error
	if err != nil {
		// 如果更新失败，返回错误
		return err
	}
	// 如果更新成功，返回 nil
	return nil
}

func UpdatePhysician(message bo.PhysicianUpdateMessage) error {
	// 查询用户
	account := QueryUser(map[string]interface{}{"uuid": message.UUID})
	if account == (model.Account{}) {
		// 如果用户不存在，返回错误
		return errors.New("用户不存在")
	}
	// 使用 util.BeanUtil 工具类将消息中的属性复制到用户结构体中
	util.BeanUtil.CopyProperties(message, &account)
	// 使用 data.Db 数据库对象更新用户信息
	err := data.Db.Model(&account).Updates(account).Error
	if err != nil {
		// 如果更新失败，返回错误
		return err
	}
	// 如果更新成功，返回 nil
	return nil
}

func AdminLogin(receiver bo.AdminLoginBo) bool {
	// 如果接收到的登录信息与默认管理员信息一致，则认为登录成功
	if receiver.Username == config.LoadConfig.DefaultAdmin.Username &&
		receiver.Password == config.LoadConfig.DefaultAdmin.Password {
		return true
	}
	// 如果登录失败，返回 false
	return false
}
