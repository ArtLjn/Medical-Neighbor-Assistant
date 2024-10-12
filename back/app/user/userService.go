/*
@Time : 2024/10/4 下午7:25
@Author : ljn
@File : userService
@Software: GoLand
*/

package user

import (
	"back/config"
	"back/pkg/data"
	"back/pkg/data/bo"
	"back/pkg/data/model"
	"back/pkg/data/vo"
	"back/pkg/role"
	"back/pkg/token"
	"back/pkg/util"
	"errors"
	"github.com/google/uuid"
	"log"
	"strconv"
	"sync"
	"time"
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
	data.Db.Where("role = ?", role.Patient).Find(&accounts)
	return accounts
}

func QueryPatientPage(page, size int, role string) map[string]interface{} {
	var (
		accounts []model.Account
		total    int64
	)
	query := data.Db.Model(model.Account{}).Where("role = ?", role)

	offset := (page - 1) * size
	// 先执行 Count 查询总数
	if err := query.Count(&total).Error; err != nil {
		log.Printf("query heritage count error: %v", err)
		return nil
	}
	// 再执行分页查询
	if err := query.Offset(offset).Limit(size).Find(&accounts).Error; err != nil {
		log.Printf("query heritage error: %v", err)
		return nil
	}

	// 构建返回的结果
	m := make(map[string]interface{})
	m["total"] = total
	m["totalPages"] = (total + int64(size) - 1) / int64(size) // 计算总页数
	m["currentPage"] = page
	m["list"] = accounts
	return m
}

func QueryAllPhysician() []model.Account {
	var accounts []model.Account
	data.Db.Where("role = ?", role.Physician).Find(&accounts)
	return accounts
}

func WriteAccountsToDB(receiver [][]string, roleType string, isPhysician bool) {
	var (
		accounts []model.Account
		mx       sync.Mutex
	)

	for i, v := range receiver {
		if i == 0 {
			continue
		}

		account := model.Account{
			Username:   v[0],
			Sex:        v[1],
			Phone:      v[2],
			Password:   "123456",
			UUID:       uuid.New().String()[:8],
			Role:       roleType,
			CreateTime: time.Now().Format("2006-01-02 15:04:05"),
		}

		if isPhysician {
			// 处理医生特有的字段
			account.Hospital = v[3]
		} else {
			// 处理患者特有的字段
			account.HomeAddr = v[3]
			age, _ := strconv.Atoi(v[4]) // 转换年龄
			account.Age = age
		}

		accounts = append(accounts, account)
	}

	go func() {
		mx.Lock()
		for _, v := range accounts {
			if err := data.Db.Create(&v).Error; err != nil {
				log.Println("Error while inserting accounts:", err)
				continue
			}
			currentAddress, err := util.GenerateHttpAccount(v.UUID)
			if err != nil {
				log.Println("Error while generating account:", err)
				continue
			}
			v.ChainAccount = currentAddress
			if err = data.Db.Model(&v).Updates(v).Error; err != nil {
				log.Println("Error while updating account:", err)
				continue
			}
			util.IsSuccess(util.CommonEq("registerAccount", []interface{}{
				v.ChainAccount,
				roleType,
				v.UUID,
			}))
		}
		mx.Unlock()
	}()
}

// WritePatientToDB  写入患者数据
func WritePatientToDB(receiver [][]string) {
	WriteAccountsToDB(receiver, role.Patient, false)
}

// WritePhysicianToDB  写入医生数据
func WritePhysicianToDB(receiver [][]string) {
	WriteAccountsToDB(receiver, role.Physician, true)
}

// UpdatePatientMessage  这段代码定义了两个函数，分别用于更新患者消息和更新医生信息，以及一个用于管理员登录的函数。下面是加上注释后的代码：
func UpdatePatientMessage(message bo.PatientUpdateMessage) error {
	// 查询用户
	account := QueryUser(map[string]interface{}{"uuid": message.UUID})
	if account == (model.Account{}) {
		// 如果用户不存在，返回错误
		return errors.New("用户不存在")
	}
	// 使用 util.BeanUtil 工具类将消息中的属性复制到用户结构体中
	util.BeanUtil.CopyProperties(message, &account)
	// 使用 data.Db 数据库对象更新用户信息
	err := data.Db.Model(&account).Updates(account).Error
	if err != nil {
		// 如果更新失败，返回错误
		return err
	}
	// 如果更新成功，返回 nil
	return nil
}

func UpdatePhysician(message bo.PhysicianUpdateMessage) error {
	// 查询用户
	account := QueryUser(map[string]interface{}{"uuid": message.UUID})
	if account == (model.Account{}) {
		// 如果用户不存在，返回错误
		return errors.New("用户不存在")
	}
	// 使用 util.BeanUtil 工具类将消息中的属性复制到用户结构体中
	util.BeanUtil.CopyProperties(message, &account)
	// 使用 data.Db 数据库对象更新用户信息
	err := data.Db.Model(&account).Updates(account).Error
	if err != nil {
		// 如果更新失败，返回错误
		return err
	}
	// 如果更新成功，返回 nil
	return nil
}

func AdminLogin(receiver bo.AdminLoginBo) bool {
	// 如果接收到的登录信息与默认管理员信息一致，则认为登录成功
	if receiver.Username == config.LoadConfig.DefaultAdmin.Username &&
		receiver.Password == config.LoadConfig.DefaultAdmin.Password {
		return true
	}
	// 如果登录失败，返回 false
	return false
}

// AccountLogin  用户登录
// 这段代码是用户登录的函数，主要完成以下几个步骤：
// 1. 根据手机号和密码查询用户信息
// 2. 如果用户信息存在且密码正确，生成登录响应结果并返回
// 3. 如果用户信息或密码错误，返回错误信息

func AccountLogin(receiver bo.LoginBo) (vo.LoginResponseVo, error) {
	// 定义一个 vo.LoginResponseVo 类型的变量，用于存储登录响应结果
	var responseVo vo.LoginResponseVo
	// 查询用户信息
	account := QueryUser(map[string]interface{}{
		"phone":    receiver.Phone,
		"password": receiver.Password,
	})
	// 如果用户信息不存在或密码错误，返回错误信息
	if account == (model.Account{}) || len(util.CommonEq("getAccount", []interface{}{
		account.ChainAccount,
	})) == 0 {
		return vo.LoginResponseVo{}, errors.New("用户名或密码错误")
	}
	// 使用 bean util 工具类将用户信息复制到登录响应结果中
	util.BeanUtil.CopyProperties(account, &responseVo)
	// 生成登录令牌并保存到数据库
	responseVo.Token = token.TokenF.SaveToken(account.UUID)
	// 返回登录响应结果
	return responseVo, nil
}
