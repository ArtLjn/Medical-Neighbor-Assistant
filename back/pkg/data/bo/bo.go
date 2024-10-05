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

// CreateInquiryBo 创建问诊记录
type CreateInquiryBo struct {
	Patient         string `json:"patient" validate:"required"`
	Sex             string `json:"sex" validate:"required"`
	Type            string `json:"type" validate:"required"`
	InquiryDetail   string `json:"inquiry_detail" validate:"required"`
	ReservedPhone   string `json:"reserved_phone" validate:"required"`
	AppointmentTime string `json:"appointment_time" validate:"required"`
}

type PatientUpdateMessage struct {
	Nickname string `json:"nickname"`
	Password string `json:"password"`
	HomeAddr string `json:"home_addr"`
	Phone    string `json:"phone"`
}

type PhysicianUpdateMessage struct {
	Nickname string `json:"nickname"`
	Password string `json:"password"`
	Hospital string `json:"hospital"`
	Phone    string `json:"phone"`
}

func Validate(i interface{}) error {
	validate := validator.New()
	err := validate.Struct(i)
	if err != nil {
		return err
	}
	return nil
}
