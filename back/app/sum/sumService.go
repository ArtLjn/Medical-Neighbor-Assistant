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
		if _, typeExists := sumMap[date][inquiry.Type]; typeExists {
			sumMap[date][inquiry.Type]++
		} else {
			sumMap[date][inquiry.Type] = 1
		}
	}

	for k, v := range sumMap {
		dayList = append(dayList, k)
		homeList = append(homeList, v[data.FamilyMedicalTreatment])
		communityList = append(communityList, v[data.CommunityMedicalTreatment])
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
	var (
		dayList   []string
		countList []int
	)
	// 遍历 drugList，按日期统计
	for _, d := range drugList {
		// 提取日期部分（例如 "2024-10-12"）
		date := d.CreateTime[:10]

		// 累计该日期的数量
		sumMap[date]++
	}

	for date, count := range sumMap {
		dayList = append(dayList, date)
		countList = append(countList, count)
	}
	result := map[string]interface{}{
		"dayList": dayList,
		"count":   countList,
	}

	return result
}
