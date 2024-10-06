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
	Patient         string `json:"patient"`
	Type            string `json:"type" validate:"required"`
	InquiryDetail   string `json:"inquiry_detail" validate:"required"`
	ReservedPhone   string `json:"reserved_phone" validate:"required"`
	AppointmentTime string `json:"appointment_time" validate:"required"`
}

type PatientUpdateMessage struct {
	UUID     string `json:"uuid" validate:"required"`
	Nickname string `json:"nickname"`
	Password string `json:"password"`
	HomeAddr string `json:"home_addr"`
	Phone    string `json:"phone"`
}

type PhysicianUpdateMessage struct {
	UUID     string `json:"uuid" validate:"required"`
	Nickname string `json:"nickname"`
	Password string `json:"password"`
	Hospital string `json:"hospital"`
	Phone    string `json:"phone"`
}

type MedicalUploadBo struct {
	DiagnosticDescription string `json:"diagnostic_description"`
	BindInquiryID         int    `json:"bind_inquiry_id"  validate:"required"`
	InquiryVideo          string `json:"inquiry_video" validate:"required"`
	MedicalImg            string `json:"medical_img" validate:"required"`
	IsNeedByDrug          bool   `json:"is_need_by_drug"  validate:"required"`
}

func Validate(i interface{}) error {
	validate := validator.New()
	err := validate.Struct(i)
	if err != nil {
		return err
	}
	return nil
}
