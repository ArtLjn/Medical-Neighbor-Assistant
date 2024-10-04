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
