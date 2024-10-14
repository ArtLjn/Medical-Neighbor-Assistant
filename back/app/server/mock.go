/*
@Time : 2024/10/9 16:23
@Author : ljn
@File : mock
@Software: GoLand
*/

package server

import (
	"back/app/mock"
	"back/app/user"
	"back/config"
	"back/pkg/custom_error"
	"back/pkg/data/model"
	"back/pkg/response"
	"github.com/gin-gonic/gin"
	"path/filepath"
	"strconv"
	"sync"
)

func InitMockData(group *gin.RouterGroup) {
	mockGroup := group.Group("/mock")
	{
		mockGroup.GET("/ping", Ping)
		mockGroup.GET("/generatePatientAccount", GeneratePatientAccount)
		mockGroup.GET("/generatePhysicianAccount", GeneratePhysicianAccount)
		mockGroup.GET("/testFullSystem", TestFullSystem)
	}
}

func Ping(ctx *gin.Context) {
	response.PublicResponse.NewBuildSuccess(ctx)
}
func GeneratePatientAccount(ctx *gin.Context) {
	number := ctx.Query("number")
	num, _ := strconv.Atoi(number)
	mock.LoadMorePatientAccount(num)
	response.PublicResponse.SetCode(200).SetMsg("后台为您mock中，请耐心等待！").Build(ctx)
}

func GeneratePhysicianAccount(ctx *gin.Context) {
	number := ctx.Query("number")
	num, _ := strconv.Atoi(number)
	mock.LoadMoreDoctorAccount(num)
	response.PublicResponse.SetCode(200).SetMsg("后台为您mock中，请耐心等待！").Build(ctx)
}

var (
	mu            sync.RWMutex
	patientList   []model.Account
	physicianList []model.Account
)

func TestFullSystem(ctx *gin.Context) {
	number := ctx.DefaultQuery("number", "1")
	goroutineNumber := ctx.DefaultQuery("goroutineNumber", "1")
	num, err := strconv.Atoi(number)
	if err != nil {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg("无效的数字参数").Build(ctx)
		return
	}
	goroutineNum, err := strconv.Atoi(goroutineNumber)
	if err != nil {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg("无效的协程数量").Build(ctx)
		return
	}
	mockConf := config.LoadConfig.Mock

	// 定义一个通用的文件读取函数，减少代码重复
	readFile := func(filePath string) ([]string, error) {
		data, err := mock.ReadTxtFile(filepath.Join(mockConf.AbsPath, filePath))
		if err != nil || len(data) == 0 {
			return nil, err
		}
		return data, nil
	}

	defer func() {
		if err := recover(); err != nil {
			response.PublicResponse.SetCode(custom_error.SystemErrorCode).SetMsg(custom_error.ReadAssetError).Build(ctx)
			return
		}
	}()

	// 创建一个 map 存储文件内容，key 是文件名称，value 是读取到的内容
	fileContentMap := make(map[string][]string)

	// 依次读取文件并存入 map
	filePaths := map[string]string{
		"InquiryDetail":          mockConf.AssetFileName.InquiryDetail,
		"InquiryVideo":           mockConf.AssetFileName.InquiryVideo,
		"MedicalImg":             mockConf.AssetFileName.MedicalImg,
		"DrugDeliverCertificate": mockConf.AssetFileName.DrugDeliverCertificate,
	}

	for key, filePath := range filePaths {
		content, err := readFile(filePath)
		if err != nil {
			panic(err)
		}
		fileContentMap[key] = content
	}

	// 查询所有患者和医生
	mu.Lock()
	patientList = user.QueryAllPatient()
	physicianList = user.QueryAllPhysician()
	mu.Unlock()

	for i := 0; i < goroutineNum; i++ {
		go func(i int) {
			mock.RunSystem(fileContentMap["InquiryDetail"],
				fileContentMap["InquiryVideo"], fileContentMap["MedicalImg"],
				fileContentMap["DrugDeliverCertificate"], patientList, physicianList, num)
		}(i)
	}

	// 返回读取到的文件内容的某些信息给前端
	response.PublicResponse.SetCode(custom_error.SuccessCode).SetMsg("后台为您mock中，请耐心等待！").Build(ctx)
}
