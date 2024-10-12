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

func InquiryTypeDay(day string) []map[string]interface{} {
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

	// 转换 sumMap 为 []map[string]interface{} 格式
	var result []map[string]interface{}
	transferType := func(inquiryType *string) {
		if *inquiryType == "在家就医" {
			*inquiryType = "home"
		} else if *inquiryType == "社区就医" {
			*inquiryType = "community"
		}
	}
	for date, typeCountMap := range sumMap {
		// 每天的统计数据
		entry := map[string]interface{}{
			"day": date,
		}
		// 把类型和数量添加到 entry 中
		for inquiryType, count := range typeCountMap {
			transferType(&inquiryType)
			entry[inquiryType] = count
		}
		// 将 entry 添加到 result 切片中
		result = append(result, entry)
	}

	return result
}
