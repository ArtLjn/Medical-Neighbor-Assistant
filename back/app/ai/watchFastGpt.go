/*
@Time : 2024/10/11 16:01
@Author : ljn
@File : watchFastGpt
@Software: GoLand
*/

package ai

import (
	"context"
	"encoding/json"
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/gorilla/websocket"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"log"
	"net/http"
)

var clients = make(map[*websocket.Conn]bool) // 存储所有连接的客户端
var broadcast = make(chan interface{})       // 广播消息通道
var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool {
		// 允许所有来源的 WebSocket 连接
		return true
	},
}

// HandleConnections 处理 WebSocket 连接
func HandleConnections(c *gin.Context) {
	// 升级 HTTP 请求为 WebSocket
	ws, err := upgrader.Upgrade(c.Writer, c.Request, nil)
	if err != nil {
		log.Printf("Failed to set websocket upgrade: %+v", err)
		return
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

// HandleMessages 广播消息给所有客户端
func HandleMessages() {
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

// WatchChanges MongoDB 变化监听
func WatchChanges(collection *mongo.Collection) {
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
