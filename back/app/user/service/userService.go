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
	data.Db.Where("role = ?", role.Patient).Select("-password").Find(&accounts)
	return accounts
}

func QueryAllPhysician() []model.Account {
	var accounts []model.Account
	data.Db.Where("role = ?", role.Physician).Find(&accounts)
	return accounts
}
