/*
@Time : 2024/10/12 21:38
@Author : ljn
@File : sum_test
@Software: GoLand
*/

package test

import (
	"back/app/sum"
	"back/config"
	"back/pkg/data"
	"testing"
	"time"
)

func TestParseTime(t *testing.T) {
	// 定义时间格式
	layout := "2006-01-02 15:04:05"

	// 定义要解析的时间字符串
	timeStr := "2024-10-13 16:34:28"
	parsedTime, err := time.Parse(layout, timeStr)
	if err != nil {
		t.Log(err)
	}
	t.Log(parsedTime.Format("2006-01-02"))
	// 获取当前时间
	now := time.Now()
	// 计算7天前的时间
	sevenDaysAgo := now.AddDate(0, 0, -7)
	t.Log(sevenDaysAgo.Format("2006-01-02"))
}

func TestInquiryTypeDay(t *testing.T) {
	config.InitConfig("../config/config.yaml")
	data.InitApp()
	t.Log(sum.InquiryTypeDay("9"))
}
