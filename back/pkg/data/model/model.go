/*
@Time : 2024/10/4 下午7:03
@Author : ljn
@File : model
@Software: GoLand
*/

package model

type Account struct {
	ID           uint   `json:"id" gorm:"primaryKey;autoIncrement;not null"`            // 自增主键
	Username     string `json:"username" gorm:"type:varchar(255);comment:用户名"`          // 用户名
	Password     string `json:"password" gorm:"type:varchar(255);comment:密码"`           // 密码
	Role         string `json:"role" gorm:"type:varchar(20);comment:角色"`                // 角色
	UUID         string `json:"uuid" gorm:"type:varchar(255);comment:唯一标识id"`           // 唯一标识
	Sex          string `json:"sex" gorm:"type:varchar(255);comment:性别"`                // 性别
	Phone        string `json:"phone" gorm:"type:varchar(11);comment:电话"`               // 电话
	Hospital     string `json:"hospital" gorm:"type:varchar(255);comment:所属医院"`         // 所属医院
	ChainAccount string `json:"chain_account" gorm:"type:varchar(255);comment:区块链账户地址"` // 区块链账户地址
	HomeAddr     string `json:"home_addr" gorm:"type:varchar(255);comment:家庭地址"`        // 家庭地址
	Nickname     string `json:"nickname" gorm:"type:varchar(255);comment:昵称"`           // 昵称
	Age          int    `json:"age" gorm:"type:int;comment:年龄"`                         //年龄
	CreateTime   string `json:"create_time" gorm:"type:varchar(255);comment:创建时间"`      // 创建时间
}

type Drug struct {
	ID                  uint   `json:"id" gorm:"primaryKey;autoIncrement;not null"`                // 自增主键
	Patient             string `json:"patient" gorm:"type:varchar(255);comment:患者姓名"`              // 患者姓名
	Physician           string `json:"physician" gorm:"type:varchar(255);comment:医师姓名"`            // 医师姓名
	Hospital            string `json:"hospital" gorm:"type:varchar(255);comment:医院名称"`             // 医院名称
	CreateTime          string `json:"create_time" gorm:"type:varchar(255);comment:创建时间"`          // 创建时间
	BindMedical         uint   `json:"bind_medical" gorm:"comment:绑定病历"`                           // 绑定病历
	AlreadyBuy          bool   `json:"already_buy" gorm:"type:tinyint(1);comment:是否已经购买"`          // 是否已经购买
	DeliveryCertificate string `json:"delivery_certificate" gorm:"type:varchar(255);comment:派送凭证"` // 派送凭证
	IsReceive           bool   `json:"is_receive" gorm:"type:tinyint(1);comment:是否收货"`             // 是否收货
}

type DrugDelivery struct {
	ID                  uint   `json:"id" gorm:"primaryKey;autoIncrement;not null"`                // 自增主键
	DrugID              int    `json:"drug_id" gorm:"comment:药品ID"`                                // 药品ID
	DeliveryCertificate string `json:"delivery_certificate" gorm:"type:varchar(255);comment:派送凭证"` // 派送凭证
	IsReceive           bool   `json:"is_receive" gorm:"type:tinyint(1);comment:是否收货"`             // 是否收货
}

type Inquiry struct {
	ID              uint   `json:"id" gorm:"primaryKey;autoIncrement;not null"`            // 自增主键
	Patient         string `json:"patient" gorm:"type:varchar(255);comment:患者名称"`          // 患者名称
	AppointmentTime string `json:"appointment_time" gorm:"type:varchar(255);comment:预留时间"` // 预留时间
	ReservedPhone   string `json:"reserved_phone" gorm:"type:varchar(11);comment:预留电话"`    // 预留电话
	Physician       string `json:"physician" gorm:"type:varchar(255);comment:指派医师"`        // 指派医师
	Type            string `json:"type" gorm:"type:varchar(20);comment:类型"`                // 类型
	InquiryDetail   string `json:"inquiry_detail" gorm:"type:text;comment:问诊描述"`           // 问诊描述
	IsInquiry       bool   `json:"is_inquiry" gorm:"type:tinyint(1);comment:是否已经问诊"`       // 是否已经问诊
	IsReception     bool   `json:"is_reception" gorm:"type:tinyint(1);comment:是否已经接诊"`     // 是否已经接诊
}

type Medical struct {
	ID                    uint   `json:"id" gorm:"primaryKey;autoIncrement;not null"`           // 自增主键
	DiagnosticDescription string `json:"diagnostic_description" gorm:"type:text;comment:诊断描述"`  // 诊断描述
	BindInquiryID         int    `json:"bind_inquiry_id" gorm:"comment:绑定问诊登记ID"`               // 绑定问诊登记ID
	InquiryVideo          string `json:"inquiry_video" gorm:"type:varchar(255);comment:问诊视频"`   // 问诊视频
	MedicalImg            string `json:"medical_img" gorm:"type:varchar(255);comment:病历图片"`     // 病历图片
	IsNeedByDrug          bool   `json:"is_need_by_drug" gorm:"type:tinyint(1);comment:是否需要药品"` // 是否需要药品`
}

func (a *Account) TableName() string {
	return "account"
}

func (d *Drug) TableName() string {
	return "drug"
}

func (d *DrugDelivery) TableName() string {
	return "drug_delivery"
}

func (i *Inquiry) TableName() string {
	return "inquiry"
}

func (m *Medical) TableName() string {
	return "medical"
}
