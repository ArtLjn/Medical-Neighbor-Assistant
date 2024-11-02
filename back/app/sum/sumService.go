/*
@Time : 2024/10/12 19:21
@Author : ljn
@File : sumService
@Software: GoLand
*/

package sum

import (
	"back/pkg/data"
	"back/pkg/data/model"
	"fmt"
	"log"
	"sort"
	"time"
)

type InquiryDayType struct {
	AppointmentTime string `json:"appointment_time"`
	Type            string `json:"type"`
}

func InquiryTypeDay(day string) map[string]interface{} {
	var (
		inquiryList []InquiryDayType
	)
	err := data.Db.Model(model.Inquiry{}).Select("appointment_time", "type").
		Where("STR_TO_DATE(appointment_time, '%Y-%m-%d %H:%i:%s') >= DATE_SUB(NOW(), " + fmt.Sprintf("INTERVAL %s DAY)", day)).
		Order("appointment_time desc").Find(&inquiryList).Error
	if err != nil {
		log.Println("Error retrieving inquiries:", err)
		return nil
	}
	var (
		dayList                 []string
		homeList, communityList []int
	)
	// 用于按日期和类型统计每天的数量
	sumMap := make(map[string]map[string]int)

	// 遍历结果，按日期和类型统计
	for _, inquiry := range inquiryList {
		// 提取日期部分（例如 "2024-10-12"）
		date := inquiry.AppointmentTime[:10]

		// 检查该日期是否已存在于 map 中
		if _, exists := sumMap[date]; !exists {
			sumMap[date] = make(map[string]int) // 初始化嵌套的 map
		}

		// 根据 type 统计数量
		sumMap[date][inquiry.Type]++
	}

	// 获取日期列表并按日期排序
	for k := range sumMap {
		dayList = append(dayList, k)
	}

	sort.Slice(dayList, func(i, j int) bool {
		// 将字符串日期转换为时间类型进行比较
		dateI, _ := time.Parse("2006-01-02", dayList[i])
		dateJ, _ := time.Parse("2006-01-02", dayList[j])
		return dateI.Before(dateJ)
	})

	// 填充 homeList 和 communityList
	for _, date := range dayList {
		homeList = append(homeList, sumMap[date][data.FamilyMedicalTreatment])
		communityList = append(communityList, sumMap[date][data.CommunityMedicalTreatment])
	}

	// 转换 sumMap 为 []map[string]interface{} 格式
	result := map[string]interface{}{
		"dayList":   dayList,
		"homeList":  homeList,
		"community": communityList,
	}
	return result
}
func DrugEveryDayNumber(day string) map[string]interface{} {
	var (
		drugList []model.Drug
	)

	err := data.Db.Model(model.Drug{}).Select("create_time").
		Where("STR_TO_DATE(create_time, '%Y-%m-%d %H:%i:%s') >= DATE_SUB(NOW(), " + fmt.Sprintf("INTERVAL %s DAY)", day)).
		Order("create_time desc").Find(&drugList).Error
	if err != nil {
		log.Println("Error retrieving inquiries:", err)
		return nil
	}

	// 初始化 sumMap 来存储每天的统计结果
	sumMap := make(map[string]int)

	// 遍历 drugList，按日期统计
	for _, d := range drugList {
		// 提取日期部分（例如 "2024-10-12"）
		date := d.CreateTime[:10]
		// 累计该日期的数量
		sumMap[date]++
	}

	// 创建一个切片来存储排序后的日期
	var dayList []string
	for date := range sumMap {
		dayList = append(dayList, date)
	}

	// 对日期进行排序
	sort.Slice(dayList, func(i, j int) bool {
		// 将字符串日期转换为时间类型进行比较
		dateI, _ := time.Parse("2006-01-02", dayList[i])
		dateJ, _ := time.Parse("2006-01-02", dayList[j])
		return dateI.Before(dateJ)
	})

	// 创建计数列表
	var countList []int
	for _, date := range dayList {
		countList = append(countList, sumMap[date])
	}

	result := map[string]interface{}{
		"dayList": dayList,
		"count":   countList,
	}

	return result
}
