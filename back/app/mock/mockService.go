/*
@Time : 2024/10/9 16:21
@Author : ljn
@File : mockService
@Software: GoLand
*/

package mock

import (
	"back/app/Inquiry"
	"back/app/drug"
	"back/app/medical"
	"back/app/user"
	"back/pkg/data/bo"
	"back/pkg/data/model"
	"bufio"
	"log"
	"math/rand"
	"os"
	"strconv"
	"strings"
	"sync"
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

func LoadMorePatientAccount(number int) {
	var (
		accounts [][]string // account列表
	)

	// 初始化随机数生成器
	rand.Seed(time.Now().UnixNano())

	// 扩展的名列表
	for i := 0; i < number; i++ {
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

func LoadMoreDoctorAccount(number int) {
	var (
		accounts [][]string // account列表
	)

	// 初始化随机数生成器
	rand.Seed(time.Now().UnixNano())

	// 扩展的名列表
	for i := 0; i < number; i++ {
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

		// 假设的家庭住址，这里为了简单起见，我们不生成随机的家庭住址
		hospital := "xxx社区医院"

		// 将生成的信息添加到accounts切片中
		accounts = append(accounts, []string{username, sex, phone, hospital})
	}

	user.WritePhysicianToDB(accounts)
}

var rng = rand.New(rand.NewSource(time.Now().UnixNano())) // 使用线程安全的随机数生成器

// RunSystem 普通的系统模拟方法
func RunSystem(inquiryDetails, inquiryVideoList, medicalImgList,
	drugDeliverCertificateList []string, patientList []model.Account, physicianList []model.Account, testNumber int) {
	var mu sync.RWMutex
	for i := 0; i < testNumber; i++ {
		mu.RLock() // 读取锁
		// 随机选择患者和医生
		patientIndex := rng.Intn(len(patientList)) // 使用线程安全的随机数生成器
		physicianIndex := rng.Intn(len(physicianList))
		patientAccount := patientList[patientIndex]
		physicianAccount := physicianList[physicianIndex]
		mu.RUnlock() // 释放读取锁
		// 创建问诊
		inquiryId, err := Inquiry.CreateInquiry(patientAccount.ChainAccount, bo.CreateInquiryBo{
			Patient:         patientAccount.UUID,
			Type:            []string{"在家就医", "社区就医"}[rand.Intn(2)],
			InquiryDetail:   GenerateDetail(inquiryDetails),
			ReservedPhone:   patientAccount.Phone,
			AppointmentTime: GenerateAppointTime(),
		})
		if err != nil {
			log.Printf("创建问诊失败: %v", err)
			continue
		}

		// 更新问诊医生
		if err = Inquiry.UpdateInquiryPhysician(strconv.Itoa(int(inquiryId)), physicianAccount.UUID); err != nil {
			log.Printf("更新问诊医生失败: %v", err)
			continue
		}

		// 更新问诊是否接诊
		if err = Inquiry.UpdateIsReception(physicianAccount.ChainAccount, strconv.Itoa(int(inquiryId)), true); err != nil {
			log.Printf("更新问诊接诊状态失败: %v", err)
			continue
		}

		// 创建医疗文件
		var medicalId uint
		if err = medical.CreateMedicalF(bo.MedicalUploadBo{
			DiagnosticDescription: GenerateDetail(inquiryDetails),
			BindInquiryID:         int(inquiryId),
			InquiryVideo:          GenerateDetail(inquiryVideoList),
			MedicalImg:            GenerateDetail(medicalImgList),
			IsNeedByDrug:          true,
		}, physicianAccount.ChainAccount, &medicalId); err != nil {
			log.Printf("上传医疗文件失败: %v", err)
			continue
		}

		// 更新问诊是否完成
		if err = Inquiry.UpdateIsInquiry(strconv.Itoa(int(inquiryId))); err != nil {
			log.Printf("更新问诊完成状态失败: %v", err)
			continue
		}

		// 获取药品记录并进行后续操作
		drugRecord := drug.QueryDrugRecord(map[string]interface{}{"bind_medical": medicalId})
		if err = drug.PhysicianAgentDrug(strconv.Itoa(int(drugRecord.ID)), physicianAccount.UUID, physicianAccount.ChainAccount); err != nil {
			log.Printf("医生代买确认失败: %v", err)
			continue
		}

		if err = drug.PhysicianDrugDelivery(strconv.Itoa(int(drugRecord.ID)),
			GenerateDetail(drugDeliverCertificateList),
			physicianAccount.UUID, physicianAccount.ChainAccount); err != nil {
			log.Printf("药品派送失败: %v", err)
		}

		if err = drug.HospitalAgentDrug(strconv.Itoa(int(drugRecord.ID))); err != nil {
			log.Printf("医院代买确认失败: %v", err)
		}
	}
	log.Println("模拟结束")
}

// ReadTxtFile 从文件中读取问诊描述
func ReadTxtFile(filePath string) ([]string, error) {
	file, err := os.Open(filePath)
	if err != nil {
		return nil, err
	}
	defer file.Close()

	var details []string
	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		line := scanner.Text()
		details = append(details, strings.TrimSpace(line))
	}
	if err := scanner.Err(); err != nil {
		return nil, err
	}
	return details, nil
}

// GenerateDetail 随机选择一个问诊描述
func GenerateDetail(details []string) string {
	rand.Seed(time.Now().UnixNano())
	return details[rand.Intn(len(details))]
}

func GenerateAppointTime() string {
	// 假设您想要的随机时间范围是1小时到24小时之间
	maxDuration := 24 * time.Hour
	minDuration := 1 * time.Hour

	// 生成一个随机持续时间
	randomDuration := time.Duration(rand.Int63n(int64(maxDuration-minDuration))) + minDuration

	// 获取当前时间
	currentTime := time.Now()

	// 计算随机的未来时间
	randomFutureTime := currentTime.Add(randomDuration).Format("2006-01-02 15:04:05")

	return randomFutureTime
}
