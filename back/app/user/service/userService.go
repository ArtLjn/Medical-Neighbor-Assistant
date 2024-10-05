/*
@Time : 2024/10/4 下午7:25
@Author : ljn
@File : userService
@Software: GoLand
*/

package service

import (
	"back/pkg/data"
	"back/pkg/data/model"
	"back/pkg/role"
	"back/pkg/util"
	"log"
	"sync"

	"github.com/google/uuid"
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

func WritePatientToDB(receiver [][]string) {
	var mx sync.Mutex
	mx.Lock()
	defer mx.Unlock()

	var accounts []model.Account
	for i, v := range receiver {
		if i == 0 {
			continue
		}
		account := model.Account{
			Username:     v[0],
			Password:     v[1],
			Sex:          v[2],
			Phone:        v[3],
			UUID:         uuid.New().String()[:8],
			Role:         role.Patient,
			ChainAccount: util.GenerateAccount()["address"],
		}
		accounts = append(accounts, account)
	}

	if len(accounts) > 0 {
		err := data.Db.Create(&accounts).Error
		if err != nil {
			log.Println(err)
		}
	}
}

func WritePhysicianToDB(receiver [][]string) {
	var mx sync.Mutex
	mx.Lock()
	defer mx.Unlock()

	var accounts []model.Account
	for i, v := range receiver {
		if i == 0 {
			continue
		}
		account := model.Account{
			Username:     v[0],
			Password:     v[1],
			Sex:          v[2],
			Phone:        v[3],
			Hospital:     v[4],
			UUID:         uuid.New().String()[:8],
			Role:         role.Physician,
			ChainAccount: util.GenerateAccount()["address"],
		}
		accounts = append(accounts, account)
	}

	if len(accounts) > 0 {
		err := data.Db.Create(&accounts).Error
		if err != nil {
			log.Println(err)
		}
	}
}
