/*
@Time : 2024/10/5 14:19
@Author : ljn
@File : vo
@Software: GoLand
*/

package vo

type LoginResponseVo struct {
	ID           uint   `json:"id" gorm:"primaryKey;autoIncrement;not null"`            // 自增主键
	Username     string `json:"username" gorm:"type:varchar(255);comment:用户名"`          // 用户名
	Role         string `json:"role" gorm:"type:varchar(20);comment:角色"`                // 角色
	UUID         string `json:"uuid" gorm:"type:varchar(255);comment:唯一标识id"`           // 唯一标识
	Sex          string `json:"sex" gorm:"type:varchar(255);comment:性别"`                // 性别
	Phone        string `json:"phone" gorm:"type:varchar(11);comment:电话"`               // 电话
	Hospital     string `json:"hospital" gorm:"type:varchar(255);comment:所属医院"`         // 所属医院
	ChainAccount string `json:"chain_account" gorm:"type:varchar(255);comment:区块链账户地址"` // 区块链账户地址
	HomeAddr     string `json:"home_addr" gorm:"type:varchar(255);comment:家庭地址"`        // 家庭地址
	Nickname     string `json:"nickname" gorm:"type:varchar(255);comment:昵称"`           // 昵称
	Token        string `json:"token" gorm:"type:varchar(255);comment:token"`           // token
}

type QueryInquiryVo struct {
	ID      uint `json:"id" gorm:"primaryKey;autoIncrement;not null"` // 自增主键
	Patient struct {
		UUID         string `json:"uuid" gorm:"type:varchar(255);comment:唯一标识id"`  // 唯一标识
		Username     string `json:"username" gorm:"type:varchar(255);comment:用户名"` // 用户名`
		Sex          string `json:"sex" gorm:"type:varchar(20);comment:性别"`        // 性别
		Age          int    `json:"age"`
		ChainAccount string `json:"chain_account" gorm:"type:varchar(255);comment:区块链账户地址"` // 区块链账户地址`
	} `json:"patient" gorm:"type:varchar(255);comment:患者名称"` // 患者个人信息
	AppointmentTime string `json:"appointment_time" gorm:"type:varchar(255);comment:预留时间"` // 预留时间
	ReservedPhone   string `json:"reserved_phone" gorm:"type:varchar(11);comment:预留电话"`    // 预留电话
	Physician       struct {
		UUID         string `json:"uuid" gorm:"type:varchar(255);comment:唯一标识id"`  // 唯一标识
		Username     string `json:"username" gorm:"type:varchar(255);comment:用户名"` // 用户名`
		Sex          string `json:"sex" gorm:"type:varchar(20);comment:性别"`        // 性别
		ChainAccount string `json:"chain_account" gorm:"type:varchar(255);comment:区块链账户地址"`
		Hospital     string `json:"hospital" gorm:"type:varchar(255);comment:所属医院"` // 所属医院
	} `json:"physician" gorm:"type:varchar(255);comment:指派医师"` // 指派医师
	Type          string `json:"type" gorm:"type:varchar(20);comment:类型"`            // 类型
	InquiryDetail string `json:"inquiry_detail" gorm:"type:text;comment:问诊描述"`       // 问诊描述
	IsInquiry     bool   `json:"is_inquiry" gorm:"type:tinyint(1);comment:是否已经问诊"`   // 是否已经问诊
	IsReception   bool   `json:"is_reception" gorm:"type:tinyint(1);comment:是否已经接诊"` // 是否已经接诊
}
