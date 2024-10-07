/*
@Time : 2024/5/23 下午4:04
@Author : ljn
@File : writeRequest
@Software: GoLand
*/

package util

import (
	"back/config"
	"bytes"
	"encoding/json"
	"fmt"
	"github.com/thedevsaddam/gojsonq"
	"io/ioutil"
	"log"
	"net/http"
)

func commonEq(user, funcName string, funcParam []interface{}) string {
	c := config.LoadConfig.Contract
	requestData := map[string]interface{}{
		"user":            user,
		"contractName":    c.ContractName,
		"contractAddress": c.ContractAddress,
		"funcName":        funcName,
		"contractAbi":     json.RawMessage(c.ContractAbi),
		"funcParam":       funcParam,
		"groupId":         1,
		"useCns":          false,
		"useAes":          false,
		"cnsName":         c.ContractName,
		"version":         "",
	}
	requestDataBytes, _ := json.Marshal(requestData)
	req, err := http.NewRequest(http.MethodPost, c.ServerHost+c.TransUrl, bytes.NewBuffer(requestDataBytes))
	if err != nil {
		fmt.Println("创建HTTP请求错误:", err)
		return ""
	}
	req.Header.Set("Content-Type", "application/json")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		fmt.Println("发送HTTP请求错误:", err)
		return ""
	}
	defer resp.Body.Close()
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("读取响应主体错误:", err)
		return ""
	}
	return string(body)
}

func ParsePutResult(body, funcName string) (interface{}, error) {
	requestData := map[string]interface{}{
		"abiList":    json.RawMessage(config.LoadConfig.Contract.ContractAbi),
		"methodName": funcName,
		// decodeType为1表示解析input输入的参数，为2表示解析output输出的参数
		"decodeType": 2,
		"output":     gojsonq.New().JSONString(body).Find("output"),
	}
	requestDataBytes, _ := json.Marshal(requestData)
	req, err := http.NewRequest(http.MethodPost, config.LoadConfig.Contract.ServerHost+config.LoadConfig.Contract.ParseUrl, bytes.NewBuffer(requestDataBytes))
	if err != nil {
		fmt.Println("创建HTTP请求错误:", err)
		return nil, err
	}
	req.Header.Set("Content-Type", "application/json")
	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		fmt.Println("发送HTTP请求错误:", err)
		return nil, err
	}
	defer resp.Body.Close()
	d, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("读取响应主体错误:", err)
	}
	var data map[string]interface{}
	err = json.Unmarshal(d, &data)
	if err != nil {
		fmt.Println("json解析错误:", err)
	}
	var result interface{}
	for k, _ := range data {
		if len(k) != 0 {
			result = k[1 : len(k)-1]
		}
	}
	if result == nil {
		return nil, err
	}
	return result, nil
}

func IsSuccess(body string) bool {
	data := gojsonq.New().JSONString(body)
	val := data.Find("message")
	if val == "Success" {
		return true
	}
	log.Println(data.Find("errorMessage"))
	return false
}

func IsSuccessMsg(body string) (bool, error) {
	data := gojsonq.New().JSONString(body)
	val := data.Find("message")
	if val != nil && val == "Success" {
		return true, nil
	} else if val == nil {
		return false, fmt.Errorf("message is nil")
	}
	e, ok := val.(string)
	if !ok {
		return false, fmt.Errorf("message is not string")
	}
	return false, fmt.Errorf(e)
}

func CommonEq(funcName string, funcParam []interface{}) string {
	return commonEq(config.LoadConfig.Contract.Owner, funcName, funcParam)
}

func CommonEqByUser(user, funcName string, funcParam []interface{}) string {
	return commonEq(user, funcName, funcParam)
}
