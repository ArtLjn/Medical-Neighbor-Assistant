/*
@Time : 2024/10/4 下午3:26
@Author : ljn
@File : main
@Software: GoLand
*/

package main

import (
	"back/app/Inquiry"
	"back/app/drug"
	"back/app/medical"
	"back/app/user"
	"back/config"
	"back/pkg/custom_log"
	"back/pkg/data"
	"back/pkg/ipfs"
	"context"
	"errors"
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
	"os"
	"os/signal"
	"time"
)

var (
	finish = make(chan bool)
)

func main() {
	r := gin.Default()
	go custom_log.InitGinLog("MediaNeighbor")
	config.LoadConfig = config.InitConfig()
	data.Db = data.NewDB()
	srv := &http.Server{
		Addr:    ":" + config.LoadConfig.Server.Port,
		Handler: r,
	}
	// 注册相关服务
	registerService(r)

	go func() {
		// 服务连接
		if err := srv.ListenAndServe(); !(err == nil || errors.Is(err, http.ErrServerClosed)) {
			log.Fatalf("listen: %s\n", err)
		}
	}()

	// 等待中断信号以优雅地关闭服务器（设置 5 秒的超时时间）
	quit := make(chan os.Signal, 1)
	signal.Notify(quit, os.Interrupt)
	<-quit
	log.Println("Shutdown Server ...")

	ctx, cancel := context.WithTimeout(context.Background(), 0*time.Second)
	<-finish
	defer cancel()
	if err := srv.Shutdown(ctx); err != nil {
		log.Fatal("Server Shutdown:", err)
	}
	log.Println("Server exiting")
}

func registerService(r *gin.Engine) {
	publicGroup := r.Group("/api")
	publicGroup.POST("/upload", ipfs.GinUploadImg)
	drug.InitDrugService(publicGroup)
	Inquiry.InitInquiryService(publicGroup)
	medical.InitMedicalService(publicGroup)
	user.InitUserService(publicGroup)
}
