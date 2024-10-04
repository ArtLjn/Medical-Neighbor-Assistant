/*
@Time : 2024/10/4 下午7:07
@Author : ljn
@File : bo
@Software: GoLand
*/

package bo

import "github.com/go-playground/validator/v10"

type LoginBo struct {
	Username string `json:"username" validate:"required"`
	Password string `json:"password" validate:"required"`
}

func Validate(i interface{}) error {
	validate := validator.New()
	err := validate.Struct(i)
	if err != nil {
		return err
	}
	return nil
}
