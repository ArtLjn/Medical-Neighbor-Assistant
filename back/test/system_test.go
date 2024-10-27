/*
@Time : 2024/10/8 09:55
@Author : ljn
@File : system_test
@Software: GoLand
*/

package test

import (
	"back/app/mock"
	"back/app/server"
	"back/app/user"
	"back/config"
	"back/pkg/data"
	"back/pkg/data/model"
	"back/pkg/role"
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

func TestSystem(t *testing.T) {
	config.InitConfig("../config/config.yaml")
	data.InitApp()
	// 读取问诊详情
	path := "/Users/ljn/Documents/blockchaincomplete/Internet+/back/asset/txt/"
	inquiryDetails, err := mock.ReadTxtFile(path + "inquiryDetail.txt")
	if err != nil {
		t.Fatalf("Failed to read inquiry details: %v", err)
	}

	inquiryVideoList, err := mock.ReadTxtFile(path + "inquiryVideo.txt")
	if err != nil || len(inquiryVideoList) == 0 {
		t.Fatalf("Failed to read inquiry video list: %v", err)
	}

	medicalImgList, err := mock.ReadTxtFile(path + "medicalImg.txt")
	if err != nil || len(medicalImgList) == 0 {
		t.Fatalf("Failed to read medical image list: %v", err)
	}

	drugDeliverCertificateList, err := mock.ReadTxtFile(path + "drugDeliverCertificate.txt")
	if err != nil || len(drugDeliverCertificateList) == 0 {
		t.Fatalf("Failed to read drug delivery certificate list: %v", err)
	}

	// 查询所有患者和医生
	patientList := user.QueryAllPatient()
	physicianList := user.QueryAllPhysician()

	// 调用封装的方法
	mock.RunSystem(inquiryDetails, inquiryVideoList, medicalImgList,
		drugDeliverCertificateList, patientList, physicianList, 10, mock.FHospitalAgent())
}

func GenerateAppointTime() string {
	// 设置随机种子，确保每次运行程序时生成的随机数不同
	rand.Seed(time.Now().UnixNano())

	// 假设您想要的随机时间范围是1分钟到7天之间
	minDuration := -7 * 24 * time.Hour // 7天前
	maxDuration := -1 * time.Minute    // 1分钟前

	// 生成一个随机持续时间
	randomDuration := time.Duration(rand.Int63n(int64(maxDuration-minDuration))) + minDuration

	// 获取当前时间
	currentTime := time.Now()

	// 计算随机的过去时间
	randomPastTime := currentTime.Add(randomDuration).Format("2006-01-02 15:04:05")

	return randomPastTime
}

func TestGenerateTime(t *testing.T) {
	t.Log(GenerateAppointTime())
}
