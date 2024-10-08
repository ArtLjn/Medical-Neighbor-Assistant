/*
@Time : 2024/10/4 下午7:13
@Author : ljn
@File : bo_test
@Software: GoLand
*/

package bo

import "testing"

func TestValidate(t *testing.T) {
	t.Log(Validate(LoginBo{
		Phone:    "ljn",
		Password: "123456",
	}))
}
