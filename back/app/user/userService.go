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
	var accounts []model.Account

	for i, v := range receiver {
		if i == 0 {
			continue
		}

		account := model.Account{
			Username:     v[0],
			Sex:          v[1],
			Phone:        v[2],
			Password:     "123456",
			UUID:         uuid.New().String()[:8],
			Role:         roleType,
			ChainAccount: util.GenerateAccount()["address"],
		}

		if isPhysician {
			// 处理医生特有的字段
			account.Hospital = v[3]
		} else {
			// 处理患者特有的字段
			account.HomeAddr = v[3]
			age, _ := strconv.Atoi(v[4]) // 转换年龄
			account.Age = age
		}

		accounts = append(accounts, account)
	}

	if len(accounts) > 0 {
		err := data.Db.Create(&accounts).Error
		if err != nil {
			log.Println("Error while inserting accounts:", err)
		}
	}
}

// WritePatientToDB  写入患者数据
func WritePatientToDB(receiver [][]string) {
	WriteAccountsToDB(receiver, role.Patient, false)
}

// WritePhysicianToDB  写入医生数据
func WritePhysicianToDB(receiver [][]string) {
	WriteAccountsToDB(receiver, role.Physician, true)
}

func UpdatePatientMessage(message bo.PatientUpdateMessage) error {
	account := QueryUser(map[string]interface{}{"uuid": message.UUID})
	if account == (model.Account{}) {
		return errors.New("用户不存在")
	}
	util.BeanUtil.CopyProperties(message, &account)
	err := data.Db.Model(&account).Updates(account).Error
	if err != nil {
		return err
	}
	return nil
}

func UpdatePhysician(message bo.PhysicianUpdateMessage) error {
	account := QueryUser(map[string]interface{}{"uuid": message.UUID})
	if account == (model.Account{}) {
		return errors.New("用户不存在")
	}
	util.BeanUtil.CopyProperties(message, &account)
	err := data.Db.Model(&account).Updates(account).Error
	if err != nil {
		return err
	}
	return nil
}

func AdminLogin(receiver bo.AdminLoginBo) bool {
	if receiver.Username == config.LoadConfig.DefaultAdmin.Username &&
		receiver.Password == config.LoadConfig.DefaultAdmin.Password {
		return true
	}
	return false
}
