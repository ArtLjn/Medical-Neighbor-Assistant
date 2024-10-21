/*
@Time : 2024/10/11 10:16
@Author : ljn
@File : aiService
@Software: GoLand
*/

package ai

import (
	"back/config"
	"back/pkg/data"
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"io"
	"log"
	"net/http"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

// Mongo聊天记录结构体
type Res struct {
	ChatId string        `json:"chatId"`
	Obj    string        `json:"obj"`
	Value  []interface{} `json:"value"`
}

// HumanAndAi 自定义结构体来强制顺序
type HumanAndAi struct {
	Human interface{} `json:"human"`
	AI    interface{} `json:"ai"`
}

// GetUserAskInfo 获取用户提问信息
func GetUserAskInfo(uuid string) (string, error) {
	// 从MongoDb中读取用户提问信息
	cur, err := data.FastGptChatItems.Find(context.Background(), bson.M{"chatId": uuid})
	if err != nil {
		return "", err
	}
	// 关闭游标
	defer func(cur *mongo.Cursor, ctx context.Context) {
		err = cur.Close(ctx)
		if err != nil {
			return
		}
	}(cur, context.Background())

	var mL []Res // 定义一个数组用于存储查询结果
	// 查询所有与用户相关聊天记录,并判断是否有错误
	if err = cur.All(context.Background(), &mL); err != nil {
		log.Println("cur.All err:", err)
		return "", errors.New("cur.All err")
	}
	// 判断是否有数据
	if len(mL) == 0 {
		return "", errors.New("no data")
	}
	/**
	[
		{
			"Human": "你好",
			"AI": "你好，有什么可以帮助你的吗？"
		}
	]
	**/
	// 使用结构体来保证 human 在前，ai 在后
	var askList []HumanAndAi
	// 遍历数组，找到 human 和 ai 的对应关系
	for i := 0; i < len(mL); i++ {
		// 判断当前元素是否为 human
		if mL[i].Obj == "Human" {
			// 获取 human 的值
			humanAsk := mL[i].Value[0]
			i++
			// 判断下一个元素是否为 ai
			if i < len(mL) && mL[i].Obj == "AI" {
				// 获取 ai 的值
				aiReward := mL[i].Value[0]
				// 将 human 和 ai 放入 askList 中
				askList = append(askList, HumanAndAi{
					Human: humanAsk,
					AI:    aiReward,
				})
			}
		}
	}

	// 序列化为 JSON 并打印
	strAskList, _ := json.MarshalIndent(askList, "", "  ")
	return string(strAskList), nil
}

// AskAiSumUpInquiry 调用 AI 模型，将用户提问信息总结成一句话
func AskAiSumUpInquiry(record string) (string, error) {
	// 获取 AI 配置
	ai := config.LoadConfig.AI

	// 准备请求数据
	requestData := map[string]interface{}{
		"model": ai.Model,
		"messages": []map[string]string{
			{"role": "system", "content": ai.Prompt.SumUpInquiry},
			{"role": "user", "content": record},
		},
	}

	// 序列化请求数据
	requestDataBytes, err := json.Marshal(requestData)
	// 处理序列化错误
	if err != nil {
		log.Println("json.Marshal err:", err)
		return "", err
	}

	// 创建 HTTP 请求
	req, err := http.NewRequest(http.MethodPost, ai.Url, bytes.NewBuffer(requestDataBytes))
	if err != nil {
		log.Println("http.NewRequest err:", err)
		return "", err
	}

	// 设置请求头
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", ai.Authorization)

	// 发送请求
	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		log.Println("client.Do err:", err)
		return "", err
	}
	defer resp.Body.Close()

	// 读取响应数据
	body, err := io.ReadAll(resp.Body)
	if err != nil {
		log.Println("io.ReadAll err:", err)
		return "", err
	}

	// 解析响应 JSON
	var responseData map[string]interface{}
	if err = json.Unmarshal(body, &responseData); err != nil {
		log.Println("json.Unmarshal err:", err)
		return "", err
	}

	// 提取 `choices` 字段
	choices, ok := responseData["choices"].([]interface{})
	if !ok || len(choices) == 0 {
		log.Println("Invalid choices format")
		return "", errors.New("invalid response format")
	}

	// 提取 `message` 字段
	firstChoice, ok := choices[0].(map[string]interface{})
	if !ok {
		log.Println("Invalid choice structure")
		return "", errors.New("invalid response structure")
	}

	message, ok := firstChoice["message"].(map[string]interface{})
	if !ok {
		log.Println("Invalid message format")
		return "", errors.New("invalid response format")
	}

	// 返回内容
	content, ok := message["content"].(string)
	if !ok {
		log.Println("Content field missing")
		return "", errors.New("missing content field")
	}

	return content, nil
}

// ClearChatRecord 清除聊天记录
func ClearChatRecord(uuid string) {
	// 根据用户uuid删除所有相关记录
	_, err := data.FastGptChatItems.DeleteMany(context.Background(), bson.M{"chatId": uuid})
	if err != nil {
		log.Println("DeleteMany err:", err)
	}
	if _, err := data.FastGptChats.DeleteMany(context.Background(), bson.M{"chatId": uuid}); err != nil {
		log.Println("DeleteMany err:", err)
	}
}
