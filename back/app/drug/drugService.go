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
)

func CreateDrugTask(receiver model.Drug) error {
	return data.Db.Create(&receiver).Error
}
