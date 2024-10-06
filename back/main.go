/*
@Time : 2024/10/4 下午3:26
@Author : ljn
@File : main
@Software: GoLand
*/

package main

import (
	"back/app/server"
	"back/config"
	"back/pkg/auth"
	"back/pkg/custom_log"
	"back/pkg/data"
	"back/pkg/ipfs"
	"back/pkg/token"
	"net/http"

	"github.com/gin-gonic/gin"
)

var (
	finish = make(chan bool)
)

func main() {
	r := gin.Default()
	wireApp()
	srv := &http.Server{
		Addr:    ":" + config.LoadConfig.Server.Port,
		Handler: r,
	}
	// 注册相关服务
	registerService(r)
	r.Run(srv.Addr)
	//go func() {
	//	// 服务连接
	//	if err := srv.ListenAndServe(); !(err == nil || errors.Is(err, http.ErrServerClosed)) {
	//		log.Fatalf("listen: %s\n", err)
	//	}
	//}()
	//
	//// 等待中断信号以优雅地关闭服务器（设置 5 秒的超时时间）
	//quit := make(chan os.Signal, 1)
	//signal.Notify(quit, os.Interrupt)
	//<-quit
	//log.Println("Shutdown Server ...")
	//
	//ctx, cancel := context.WithTimeout(context.Background(), 1*time.Second)
	//<-finish
	//defer cancel()
	//if err := srv.Shutdown(ctx); err != nil {
	//	log.Fatal("Server Shutdown:", err)
	//}
	//log.Println("Server exiting")
}

func registerService(r *gin.Engine) {
	authFilterOptions := auth.NewFilterOptions(auth.WithAuthorizationFilter())
	for _, filter := range authFilterOptions.Filters {
		r.Use(filter.Apply())
	}
	publicGroup := r.Group("/api")
	publicGroup.POST("/upload", ipfs.GinUploadImg)
	server.InitDrugService(publicGroup)
	server.InitInquiryService(publicGroup)
	server.InitMedicalService(publicGroup)
	server.InitUserService(publicGroup)
}

func wireApp() {
	config.LoadConfig = config.InitConfig()
	data.Db = data.NewDB()
	data.Rdb = data.NewRDB()
	token.TokenF = token.NewToken(data.Rdb)
	// 开启日志输出服务
	if config.LoadConfig.Log.Open {
		go custom_log.InitGinLog(config.LoadConfig)
	}

}
