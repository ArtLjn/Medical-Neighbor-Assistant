/*
@Time : 2024/10/9 16:21
@Author : ljn
@File : mockService
@Software: GoLand
*/

package mock

import (
	"back/app/user"
	"math/rand"
	"strconv"
	"time"
)

var surnameList = []string{
	"赵", "钱", "孙", "李", "周", "吴", "郑", "王",
	"冯", "陈", "褚", "卫", "蒋", "沈", "韩", "杨",
	"朱", "秦", "尤", "许", "何", "吕", "施", "张",
	"孔", "曹", "严", "华", "金", "魏", "陶", "姜",
}

var nameList = []string{
	"伟", "芳", "娜", "秀英", "敏", "静", "丽", "强",
	"磊", "军", "洋", "勇", "艳", "杰", "娟", "涛",
	"明", "超", "秀", "辉", "霞", "平", "刚", "桂英",
	"芳", "娜", "秀", "娟", "英", "华", "慧", "婷",
}

func LoadMorePatientAccount(number int) {
	var (
		accounts [][]string // account列表
	)

	// 初始化随机数生成器
	rand.Seed(time.Now().UnixNano())

	// 扩展的名列表
	for i := 0; i < number; i++ {
		// 随机选择姓氏和名
		username := surnameList[rand.Intn(len(surnameList))] + nameList[rand.Intn(len(nameList))]

		// 随机性别
		sex := []string{"男", "女"}[rand.Intn(2)]

		// 随机生成手机号
		phone := strconv.Itoa(rand.Intn(9000000000) + 10000000000)

		// 随机生成年龄
		age := rand.Intn(41) + 50 // 从50到90岁

		// 假设的家庭住址，这里为了简单起见，我们不生成随机的家庭住址
		home := "xxx社区xx幢xxx号"

		// 将生成的信息添加到accounts切片中
		accounts = append(accounts, []string{username, sex, phone, home, strconv.Itoa(age)})
	}

	// 模拟写入数据库
	user.WritePatientToDB(accounts)
}

func LoadMoreDoctorAccount(number int) {
	var (
		accounts [][]string // account列表
	)

	// 初始化随机数生成器
	rand.Seed(time.Now().UnixNano())

	// 扩展的名列表
	for i := 0; i < number; i++ {
		// 随机选择姓氏和名
		username := surnameList[rand.Intn(len(surnameList))] + nameList[rand.Intn(len(nameList))]

		// 随机性别
		sex := []string{"男", "女"}[rand.Intn(2)]

		// 随机生成手机号
		phone := strconv.Itoa(rand.Intn(9000000000) + 10000000000)

		// 假设的家庭住址，这里为了简单起见，我们不生成随机的家庭住址
		hospital := "xxx社区医院"

		// 将生成的信息添加到accounts切片中
		accounts = append(accounts, []string{username, sex, phone, hospital})
	}

	user.WritePhysicianToDB(accounts)
}
