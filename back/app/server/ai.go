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
	receiverCtxUser, exists := ctx.Get("user_message")
	userMessage := receiverCtxUser.(model.Account)
	if !exists {
		response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(custom_error.ClientError).Build(ctx)
		return
	}
	medicalSum, err := ai.GetUserAskInfo(userMessage.UUID)
	if err != nil {
		response.PublicResponse.SetCode(custom_error.SuccessCode).SetMsg(err.Error()).Build(ctx)
		return
	}
	sumRecord, err := ai.AskAiSumUpInquiry(medicalSum)
	if err != nil {
		response.PublicResponse.SetCode(custom_error.SystemErrorCode).SetMsg(custom_error.SystemError).Build(ctx)
		return
	}
	response.PublicResponse.SetCode(custom_error.SuccessCode).SetMsg("success").SetData(sumRecord).Build(ctx)
	return
}
