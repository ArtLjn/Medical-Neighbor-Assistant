/*
@Time : 2024/10/7 15:54
@Author : ljn
@File : util_test
@Software: GoLand
*/

package util

import (
	"back/config"
	"testing"
)

func TestGenerateAccount(t *testing.T) {
	//t.Log(GenerateAccount())
	config.InitConfig("/Users/ljn/Documents/blockchaincomplete/Internet+/back/config/config.yaml")
	t.Log(GenerateHttpAccount("张三"))
}
