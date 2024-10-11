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
	"github.com/gin-gonic/gin"
	"github.com/gorilla/websocket"
	"github.com/thedevsaddam/gojsonq"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"io/ioutil"
	"log"
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

	// 使用结构体来保证 human 在前，a 在后
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
	a := config.LoadConfig.AI

	system := fmt.Sprintf("%s", a.Prompt.SumUpInquiry)

	requestData := map[string]interface{}{
		"model": "glm4",
		"messages": []map[string]string{
			{"role": "system", "content": system},
			{"role": "user", "content": string(strAskList)},
			{"role": "assistant", "content": ""},
		},
	}

	requestDataBytes, _ := json.Marshal(requestData)
	req, err := http.NewRequest(http.MethodPost, a.Url, bytes.NewBuffer(requestDataBytes))
	if err != nil {
		t.Log(err)
		return
	}
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", a.Authorization)
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

func watchChatChanges(collection *mongo.Collection, chatId string) {
	// 创建过滤条件
	pipeline := mongo.Pipeline{
		{{"$match", bson.M{"fullDocument.chatId": chatId}}},
	}

	// 启动 Change Stream
	cs, err := collection.Watch(context.Background(), pipeline)
	if err != nil {
		log.Fatal("Error starting Change Stream:", err)
	}
	defer cs.Close(context.Background())

	// 监听指定 chatId 的变化
	for cs.Next(context.Background()) {
		var changeEvent bson.M
		if err := cs.Decode(&changeEvent); err != nil {
			log.Println("Error decoding change event:", err)
			continue
		}
		fmt.Printf("Change detected for chatId %s: %v\n", chatId, changeEvent)
	}

	if err := cs.Err(); err != nil {
		log.Fatal("Error occurred while watching changes:", err)
	}
}

var clients = make(map[*websocket.Conn]bool) // 存储所有连接的客户端
var broadcast = make(chan interface{})       // 广播消息通道
var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool {
		// 允许所有来源的 WebSocket 连接
		return true
	},
}

// 处理 WebSocket 连接
func handleConnections(w http.ResponseWriter, r *http.Request) {
	// 升级 GET 请求为 WebSocket 协议
	ws, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Fatal(err)
	}
	defer ws.Close()

	// 将新连接加入到客户端列表
	clients[ws] = true

	// 持续读取来自客户端的消息（如果需要处理前端消息，可以在这里实现）
	for {
		_, _, err := ws.ReadMessage()
		if err != nil {
			log.Printf("error: %v", err)
			delete(clients, ws)
			break
		}
	}
}

// 广播消息给所有客户端
func handleMessages() {
	for {
		// 从通道中获取消息
		chatId := <-broadcast
		// 发送给所有客户端
		for client := range clients {
			bytesData, _ := json.Marshal(chatId)
			err := client.WriteMessage(websocket.TextMessage, bytesData)
			if err != nil {
				log.Printf("error: %v", err)
				client.Close()
				delete(clients, client)
			}
		}
	}
}

// MongoDB 变化监听
func watchChanges(collection *mongo.Collection) {
	// 创建 Change Stream
	pipeline := mongo.Pipeline{}
	cs, err := collection.Watch(context.Background(), pipeline)
	if err != nil {
		log.Fatal("Error starting Change Stream:", err)
	}
	defer cs.Close(context.Background())

	// 监听数据库中的变化
	for cs.Next(context.Background()) {
		var changeEvent bson.M
		if err := cs.Decode(&changeEvent); err != nil {
			log.Println("Error decoding change event:", err)
			continue
		}

		// 提取 chatId 并通过 WebSocket 广播
		if fullDocument, ok := changeEvent["fullDocument"].(bson.M); ok {
			if chatId, ok := fullDocument["chatId"].(string); ok {
				if obj, ok := fullDocument["obj"].(string); ok {
					if obj == "Human" {
						fmt.Printf("chatId detected: %s\n", chatId)
						result := map[string]interface{}{
							"code":   200,
							"msg":    "success",
							"chatId": chatId,
						}
						broadcast <- result // 将 chatId 发送到广播通道
					}
				}
			} else {
				fmt.Println("chatId not found in fullDocument")
			}
		} else {
			fmt.Println("fullDocument not found in changeEvent")
		}
	}

	if err := cs.Err(); err != nil {
		log.Fatal("Error occurred while watching changes:", err)
	}
}

func TestWebsocketWatchChatChange(t *testing.T) {
	InitConfig()
	data.Cli = data.NewMongo()
	data.FastGptChatItems = data.NewFastGptChatItems()

	// 启动 MongoDB 数据监听
	go watchChanges(data.FastGptChatItems)

	// 启动广播处理
	go handleMessages()

	// 配置 WebSocket 路由
	http.HandleFunc("/ws", handleConnections)

	// 启动服务器
	log.Println("WebSocket server started on :8080")
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}

}

func TestWatchChatChange(t *testing.T) {
	InitConfig()
	data.Cli = data.NewMongo()
	data.FastGptChatItems = data.NewFastGptChatItems()
	r := gin.Default()
	go watchChanges(data.FastGptChatItems)
	//go watchChatChanges(data.FastGptChatItems, "e044f432")
	r.Run(":9090")
}
