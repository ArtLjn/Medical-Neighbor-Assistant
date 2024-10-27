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
	"back/docs"
	"back/pkg/auth"
	"back/pkg/custom_log"
	"back/pkg/data"
	"back/pkg/ipfs"
	"back/pkg/token"
	"back/pkg/util"
	"context"
	"errors"
	"github.com/gin-gonic/gin"
	"github.com/spf13/cobra"
	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"
)

// @title           Swagger MedHealth
// @version         1.0
// @description     This is a sample server celler server.
// @termsOfService  http://swagger.io/terms/

// @contact.name   API Support
// @contact.url    http://www.swagger.io/support
// @contact.email  support@swagger.io

// @license.name  Apache 2.0
// @license.url   http://www.apache.org/licenses/LICENSE-2.0.html

// @host      localhost:8088
// @BasePath  /api

// @securityDefinitions.basic  BasicAuth

// @externalDocs.description  OpenAPI
// @externalDocs.url          https://swagger.io/resources/open-api/
func main() {
	Execute()
	data.InitApp()
	// 初始化日志
	l := config.LoadConfig.Log
	logger, err := custom_log.InitLogger(l.OutPath, l.Prefix, l.MaxSize, l.Backup, l.CleanCycle, l.Compress)
	if err != nil {
		log.Fatal(err)
	}
	// 将 Gin 的日志输出指向同一个日志目标
	gin.DefaultWriter = logger
	r := gin.Default()
	// CORS 中间件
	r.Use(Cors)
	srv := &http.Server{
		Addr:    ":" + config.LoadConfig.Server.Port,
		Handler: r,
	}

	// 注册相关服务
	registerService(r)

	if config.LoadConfig.Server.GraceStop {
		graceStop(srv)
	} else {
		err = r.Run(srv.Addr)
		if err != nil {
			return
		}
	}
}

// registerService 注册服务,包括认证、用户、药品、问诊、医疗记录、汇总等
func registerService(r *gin.Engine) {
	// 初始化认证服务,包括JWT
	authFilterOptions := auth.NewFilterOptions(auth.WithAuthorizationFilter())
	// 循环注册过滤器
	for _, filter := range authFilterOptions.Filters {
		r.Use(filter.Apply())
	}
	// 初始化IPFS代理服务
	go util.RegisterProxy(config.LoadConfig.Server.ProxyPort)

	docs.SwaggerInfo.BasePath = "/api"
	// Swagger路由
	// 使用适配器将 httpSwagger.WrapHandler 转换为 gin.HandlerFunc
	r.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))
	// 定义公共路由组
	publicGroup := r.Group("/api")
	// 定义上传接口
	publicGroup.POST("/upload", ipfs.GinUploadImg)
	// 初始化药品、问诊、医疗记录、用户、汇总服务
	server.InitDrugService(publicGroup)
	server.InitInquiryService(publicGroup)
	server.InitMedicalService(publicGroup)
	server.InitUserService(publicGroup)
	server.InitSumService(publicGroup)
	// 初始化Mock数据
	if config.LoadConfig.Mock.Open {
		server.InitMockData(publicGroup)
	}
	// 初始化AI服务
	if config.LoadConfig.AI.OpenAiServer {
		data.Cli = data.NewMongo()
		data.FastGptChatItems = data.NewFastGptChatItems()
		data.FastGptChats = data.NewFastGptChats()
		server.InitAiService(publicGroup)
	}
}

func graceStop(srv *http.Server) {
	go func() {
		// 服务连接
		if err := srv.ListenAndServe(); !errors.Is(err, http.ErrServerClosed) {
			log.Fatalf("listen: %s\n", err)
		}
	}()

	// 等待中断信号以优雅地关闭服务器
	quit := make(chan os.Signal, 1)
	signal.Notify(quit, os.Interrupt, syscall.SIGTERM) // 添加对SIGTERM的支持

	<-quit
	log.Println("Shutdown Server ...")
	log.Println("Clear Cache TokenManager ...", data.Rdb.Del(context.Background(), token.TokenMangerKey).Err())

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel() // 确保在函数返回之前调用cancel
	if err := srv.Shutdown(ctx); err != nil {
		log.Fatal("Server Shutdown:", err)
	}
	log.Println("Server exiting")
}

var rootCmd = &cobra.Command{
	Use:   "MedHealthCli",
	Short: "MedHealthCli is a cli tool for MedHealth",
	Long:  `MedHealthCli is a cli tool for MedHealth`,
	Run: func(cmd *cobra.Command, args []string) {
		err := cmd.Help()
		if err != nil {
			return
		}
	},
}

func Execute() {
	util.PrintMedHealthLogo()
	var configPath string

	// 将configPath作为全局flag
	rootCmd.PersistentFlags().StringVarP(&configPath, "config", "c", "", "Custom configuration file path (optional)")

	rootCmd.Run = func(cmd *cobra.Command, args []string) {
		if configPath != "" {
			config.InitConfig(configPath) // 使用指定的配置文件路径
			log.Printf("Using custom config path: %s\n", configPath)
		} else {
			log.Println("No custom config path provided. Using default configuration.")
			config.LoadConfig = config.InitConfig() // 加载默认配置
		}
	}

	cobra.CheckErr(rootCmd.Execute())
}

func Cors(c *gin.Context) {
	c.Writer.Header().Set("Access-Control-Allow-Origin", "*")                   // 允许所有来源
	c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS") // 允许的请求方法
	c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type")       // 允许的请求头
	if c.Request.Method == http.MethodOptions {
		c.AbortWithStatus(http.StatusNoContent) // 处理预检请求
		return
	}
	c.Next()
}
