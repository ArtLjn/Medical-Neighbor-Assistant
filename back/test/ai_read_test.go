/*
@Time : 2024/10/10 15:05
@Author : ljn
@File : ai_read_test
@Software: GoLand
*/

package test

import (
	"back/app/ai"
	"back/config"
	"back/pkg/data"
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"github.com/thedevsaddam/gojsonq"
	"go.mongodb.org/mongo-driver/bson"
	"io/ioutil"
	"net/http"
	"testing"
)

type Res struct {
	ChatId string        `json:"chatId"`
	Obj    string        `json:"obj"`
	Value  []interface{} `json:"value"`
}

// 自定义结构体来强制顺序
type HumanAndAi struct {
	Human interface{} `json:"human"`
	AI    interface{} `json:"ai"`
}

func TestReadChatItems(t *testing.T) {
	InitConfig()
	cli := data.NewMongo(config.LoadConfig.Mongo.Url)
	collectionOne := cli.Database("fastgpt").Collection("chatitems")

	cur, err := collectionOne.Find(context.Background(), bson.M{"chatId": "1234"})
	if err != nil {
		t.Error(err)
		return
	}
	defer cur.Close(context.Background())

	var mL []Res
	if err = cur.All(context.Background(), &mL); err != nil {
		t.Error(err)
		return
	}

	// 使用结构体来保证 human 在前，ai 在后
	var askList []HumanAndAi
	for i := 0; i < len(mL); i++ {
		if mL[i].Obj == "Human" {
			humanAsk := mL[i].Value[0]
			i++
			if i < len(mL) && mL[i].Obj == "AI" {
				aiReward := mL[i].Value[0]
				askList = append(askList, HumanAndAi{
					Human: humanAsk,
					AI:    aiReward,
				})
			}
		}
	}

	// 序列化为 JSON 并打印
	strAskList, _ := json.MarshalIndent(askList, "", "  ")
	t.Log(string(strAskList))
	ai := config.LoadConfig.AI

	system := fmt.Sprintf("%s", ai.Prompt.SumUpInquiry)

	requestData := map[string]interface{}{
		"model": "glm4",
		"messages": []map[string]string{
			{"role": "system", "content": system},
			{"role": "user", "content": string(strAskList)},
			{"role": "assistant", "content": ""},
		},
	}

	requestDataBytes, _ := json.Marshal(requestData)
	req, err := http.NewRequest(http.MethodPost, ai.Url, bytes.NewBuffer(requestDataBytes))
	if err != nil {
		t.Log(err)
		return
	}
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", ai.Authorization)
	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		t.Log(err)
		return
	}
	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		t.Log(err)
		return
	}
	s := string(body)
	jse := gojsonq.New().JSONString(s)
	val := jse.Find("choices")
	var responseData []interface{}
	byteVal, _ := json.Marshal(val)
	if err := json.Unmarshal(byteVal, &responseData); err != nil {
		t.Log(err)
		return
	}
	t.Log(responseData[0])
	byteData, _ := json.Marshal(responseData[0])
	jsq := gojsonq.New().JSONString(string(byteData))
	mes := jsq.Find("message")
	byteMes, _ := json.Marshal(mes)
	var mesData map[string]string
	if err := json.Unmarshal(byteMes, &mesData); err != nil {
		t.Log(err)
		return
	}
	t.Log(mes)
	t.Log(mesData["content"])
	t.Log(s, val)
}

func TestSortMap(t *testing.T) {
	askList := []map[string]interface{}{
		{
			"ai": []interface{}{
				map[string]interface{}{"Key": "type", "Value": "text"},
				map[string]interface{}{"Key": "text", "Value": []interface{}{
					map[string]interface{}{"Key": "content", "Value": "AI提供的回答内容"},
				}},
			},
			"human": []interface{}{
				map[string]interface{}{"Key": "type", "Value": "text"},
				map[string]interface{}{"Key": "text", "Value": []interface{}{
					map[string]interface{}{"Key": "content", "Value": "人类提供的输入"},
				}},
			},
		},
	}

	// 自定义结构体保证顺序
	type OrderedResponse struct {
		Human interface{} `json:"human"`
		AI    interface{} `json:"ai"`
	}

	var orderedAskList []OrderedResponse
	for _, item := range askList {
		ordered := OrderedResponse{
			Human: item["human"],
			AI:    item["ai"],
		}
		orderedAskList = append(orderedAskList, ordered)
	}

	// 将有序的结构体序列化为 JSON
	strAskList, _ := json.MarshalIndent(orderedAskList, "", "  ")
	fmt.Println(string(strAskList))
}

func TestAiFunc(t *testing.T) {
	InitConfig()
	data.Cli = data.NewMongo()
	data.FastGptChatItems = data.NewFastGptChatItems()
	content, err := ai.GetUserAskInfo("test001")
	t.Log(content, err)
	reward, err := ai.AskAiSumUpInquiry(content)
	t.Log(reward, err)
}
