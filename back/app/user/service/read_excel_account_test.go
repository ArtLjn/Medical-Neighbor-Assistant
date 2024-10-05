/*
@Time : 2024/10/4 下午10:03
@Author : ljn
@File : read_excel_account_test
@Software: GoLand
*/

package service

import (
	"fmt"
	"github.com/xuri/excelize/v2"
	"os"
	"testing"
)

// 测试读取Excel文件的两个Sheet
func TestReadExcel(t *testing.T) {
	// 打开Excel文件
	f, err := excelize.OpenFile("/Users/ljn/Documents/blockchaincomplete/Internet+/back/asset/excel/account.xlsx")
	if err != nil {
		t.Fatalf("无法打开Excel文件: %v", err)
	}
	defer f.Close()

	// 读取第一个Sheet的内容
	rows, err := f.GetRows("患者")
	if err != nil {
		t.Fatalf("读取Sheet1失败: %v", err)
	}
	fmt.Println("Sheet1的数据:")
	for _, row := range rows {
		fmt.Println(row)
	}

	// 读取第二个Sheet的内容
	rows2, err := f.GetRows("医师")
	if err != nil {
		t.Fatalf("读取Sheet2失败: %v", err)
	}
	fmt.Println("Sheet2的数据:")
	for _, row := range rows2 {
		fmt.Println(row)
	}
}

// 用于模拟生成一个测试用的Excel文件
func TestGenerateTestData(t *testing.T) {
	f := excelize.NewFile()

	// 创建Sheet1并写入数据
	index, _ := f.NewSheet("Sheet1")
	f.SetCellValue("Sheet1", "A1", "Name")
	f.SetCellValue("Sheet1", "B1", "Value")
	f.SetCellValue("Sheet1", "A2", "Alice")
	f.SetCellValue("Sheet1", "B2", "100")
	f.SetCellValue("Sheet1", "A3", "Bob")
	f.SetCellValue("Sheet1", "B3", "200")

	// 创建Sheet2并写入数据
	f.NewSheet("Sheet2")
	f.SetCellValue("Sheet2", "A1", "Name")
	f.SetCellValue("Sheet2", "B1", "Value")
	f.SetCellValue("Sheet2", "A2", "Charlie")
	f.SetCellValue("Sheet2", "B2", "300")
	f.SetCellValue("Sheet2", "A3", "David")
	f.SetCellValue("Sheet2", "B3", "400")

	// 设置Sheet1为活动Sheet
	f.SetActiveSheet(index)

	// 保存Excel文件
	if err := f.SaveAs("testdata.xlsx"); err != nil {
		t.Fatalf("保存测试数据失败: %v", err)
	}
	fmt.Println("Excel文件已生成：testdata.xlsx")
}

func TestMain(m *testing.M) {
	// 在测试前生成测试数据
	TestGenerateTestData(nil)
	// 运行测试
	result := m.Run()
	// 测试结束后删除生成的Excel文件
	os.Remove("testdata.xlsx")
	os.Exit(result)
}
