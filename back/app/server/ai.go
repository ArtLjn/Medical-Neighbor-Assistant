/*
@Time : 2024/10/11 13:39
@Author : ljn
@File : ai
@Software: GoLand
*/

package server

import (
	"back/app/ai"
	"back/config"
	"back/pkg/custom_error"
	"back/pkg/data"
	"back/pkg/data/model"
	"back/pkg/response"

	"github.com/gin-gonic/gin"
)

func InitAiService(group *gin.RouterGroup) {
	aiGroup := group.Group("/ai")
	aiGroup.GET("/getMedicalSum", getMedicalSum)
	if config.LoadConfig.AI.WatchMongoChat {
		go ai.HandleMessages()
		// 启动 MongoDB 数据监听
		go ai.WatchChanges(data.FastGptChatItems)
		aiGroup.GET("/ws_chat", ai.HandleConnections)
	}
}

// getMedicalSum 获取病历总结
func getMedicalSum(ctx *gin.Context) {
	res := response.NewResponseBuild() // 每次请求都创建新的 ResponseBuild
	receiverCtxUser, exists := ctx.Get("user_message")
	if !exists {
		res.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}

	// 获取用户信息
	userMessage := receiverCtxUser.(model.Account)
	// 获取用户与Ai的对话记录
	medicalSum, err := ai.GetUserAskInfo(userMessage.UUID)
	// 如果获取失败，返回错误信息
	if err != nil {
		res.SetCode(custom_error.SystemErrorCode).SetMsg(err.Error()).Build(ctx)
		return
	}
	// 如果获取成功，返回病历总结
	sumRecord, err := ai.AskAiSumUpInquiry(medicalSum)
	if err != nil {
		res.SetCode(custom_error.SystemErrorCode).SetMsg(custom_error.SystemError).Build(ctx)
		return
	}
	// 清空用户与Ai的对话记录
	ai.ClearChatRecord(userMessage.UUID)
	// 返回病历总结
	res.SetCode(custom_error.SuccessCode).SetMsg("success").SetData(sumRecord).Build(ctx)
}
