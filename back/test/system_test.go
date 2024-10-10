/*
@Time : 2024/10/8 09:55
@Author : ljn
@File : system_test
@Software: GoLand
*/

package test

import (
	"back/app/server"
	"back/app/user"
	"back/config"
	"back/pkg/data"
	"back/pkg/data/bo"
	"back/pkg/data/model"
	"back/pkg/role"
	"bytes"
	"encoding/json"
	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/assert"
	"math/rand"
	"net/http"
	"net/http/httptest"
	"strconv"
	"testing"
	"time"
)

var surnameList = []string{
	"赵", "钱", "孙", "李", "周", "吴", "郑", "王",
	"冯", "陈", "褚", "卫", "蒋", "沈", "韩", "杨",
	"朱", "秦", "尤", "许", "何", "吕", "施", "张",
	"孔", "曹", "严", "华", "金", "魏", "陶", "姜",
	"戚", "谢", "邹", "喻", "柏", "水", "窦", "章",
	"云", "苏", "潘", "葛", "奚", "范", "彭", "郎",
	"鲁", "韦", "昌", "马", "苗", "凤", "花", "方",
	"俞", "任", "袁", "柳", "酆", "鲍", "史", "唐",
}

var nameList = []string{
	"伟", "芳", "娜", "楠", "敏", "静", "丽", "强",
	"磊", "军", "洋", "勇", "艳", "杰", "娟", "涛",
	"明", "超", "秀", "辉", "霞", "平", "刚", "英",
	"芳", "娜", "秀", "娟", "英", "华", "慧", "婷",
	"波", "宁", "安", "岩", "松", "竹", "梅", "雁",
	"航", "天", "昊", "翔", "宇", "文", "武", "思",
	"豪", "杰", "峰", "林", "泉", "溪", "川", "洲",
	"翰", "墨", "书", "画", "琴", "棋", "诗", "酒",
}

func InitConfig() {
	config.InitConfig("../config/config.yaml")
}

func TestLoadMorePatientAccount(t *testing.T) {
	InitConfig()
	var (
		accounts [][]string // account列表
	)

	// 初始化随机数生成器
	rand.Seed(time.Now().UnixNano())

	// 扩展的名列表
	for i := 0; i < 100; i++ {
		// 随机选择姓氏
		surname := surnameList[rand.Intn(len(surnameList))]

		// 随机选择一个或两个字作为名
		var name string
		if rand.Intn(2) == 0 { // 50%的概率选择一个字的名
			name = nameList[rand.Intn(len(nameList))]
		} else { // 50%的概率选择两个字的名
			name = nameList[rand.Intn(len(nameList))] + nameList[rand.Intn(len(nameList))]
		}

		// 组合姓名
		username := surname + name
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

func TestLoadMoreDoctorAccount(t *testing.T) {
	InitConfig()
	var (
		accounts [][]string // account列表
	)

	// 初始化随机数生成器
	rand.Seed(time.Now().UnixNano())

	// 扩展的名列表
	for i := 0; i < 100; i++ {
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

func TestInquiry(t *testing.T) {
	InitConfig()
	db := data.NewDB()
	var patientAccounts, physicianAccounts []model.Account
	db.Model(model.Account{}).Where("role = ?", role.Patient).Find(&patientAccounts)
	db.Model(model.Account{}).Where("role = ?", role.Physician).Find(&physicianAccounts)
	for i := 0; i < 100; i++ {
		//patientAccount := patientAccounts[rand.Intn(len(patientAccounts))]
		//physicianAccount := physicianAccounts[rand.Intn(len(physicianAccounts))]
		//server.Login()
	}
}

func TestPing(t *testing.T) {
	// Set up Gin
	gin.SetMode(gin.TestMode)
	router := gin.Default()

	// Define the route
	router.GET("/ping", server.Ping)

	// Create a request to send to the route
	req, _ := http.NewRequest(http.MethodGet, "/ping", nil)
	w := httptest.NewRecorder()

	// Perform the request
	router.ServeHTTP(w, req)

	// Assert the response status
	assert.Equal(t, http.StatusOK, w.Code)
	//fmt.Println(w.Body.String())
	// Assert the response body (adjust based on your expected output)
	expectedResponse := `{"code":200,"data":[null],"msg":"success"}` // 示例响应内容
	assert.JSONEq(t, expectedResponse, w.Body.String())
}

func TestLogin(t *testing.T) {
	gin.SetMode(gin.TestMode)
	router := gin.Default()

	// Register the login route
	router.POST("/login", server.Login)

	// Create a login request
	loginForm := bo.LoginBo{
		Phone:    "11789319532",
		Password: "123456",
	}
	body, _ := json.Marshal(loginForm)
	req, _ := http.NewRequest(http.MethodPost, "/login", bytes.NewBuffer(body))
	resp := httptest.NewRecorder()

	// Send request
	router.ServeHTTP(resp, req)

	// Check response status
	assert.Equal(t, http.StatusOK, resp.Code)

	// Further assertions could be added to check the response body, token, etc.
}
