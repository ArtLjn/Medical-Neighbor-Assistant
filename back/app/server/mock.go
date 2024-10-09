/*
@Time : 2024/10/9 16:23
@Author : ljn
@File : mock
@Software: GoLand
*/

package server

import (
	"back/app/mock"
	"back/pkg/response"
	"github.com/gin-gonic/gin"
	"strconv"
)

func InitMockData(group *gin.RouterGroup) {
	mockGroup := group.Group("/mock")
	{
		mockGroup.GET("/generatePatientAccount", GeneratePatientAccount)
		mockGroup.GET("/generatePhysicianAccount", GeneratePhysicianAccount)
	}
}

func GeneratePatientAccount(ctx *gin.Context) {
	number := ctx.Query("number")
	num, _ := strconv.Atoi(number)
	mock.LoadMorePatientAccount(num)
	response.PublicResponse.SetCode(200).SetMsg("后台为您mock中，请耐心等待！").Build(ctx)
}

func GeneratePhysicianAccount(ctx *gin.Context) {
	number := ctx.Query("number")
	num, _ := strconv.Atoi(number)
	mock.LoadMoreDoctorAccount(num)
	response.PublicResponse.SetCode(200).SetMsg("后台为您mock中，请耐心等待！").Build(ctx)
}
