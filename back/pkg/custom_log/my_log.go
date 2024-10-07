/*
@Time : 2024/5/23 下午4:41
@Author : ljn
@File : my_log
@Software: GoLand
*/

package custom_log

import (
	"back/config"
	"fmt"
	"io"
	"log"
	"os"
	"path/filepath"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/robfig/cron/v3"
)

func InitGinLog(cf *config.OriginConfig) {
	c := cron.New(cron.WithSeconds())
	go CleanOldFile(cf.Log.CleanCycle, cf.Log.OutPath)

	// 每天创建新的日志文件
	_, err := c.AddFunc("0 0 0 * * *", func() {
		initGinLog(cf)
	})

	// 每7天清理旧的日志文件
	cycle := fmt.Sprintf("0 0 0 */%d * *", cf.Log.CleanCycle)
	_, err = c.AddFunc(cycle, func() {
		CleanOldFile(cf.Log.CleanCycle, cf.Log.OutPath)
	})

	// 开始定时任务
	c.Start()
	initGinLog(cf)
	if err != nil {
		log.Fatalf("Failed to set up log file creation and cleaning: %v", err)
	}
}

// CleanOldFile 清理指定天数之前的日志文件
func CleanOldFile(retainDays int, path string) {
	now := time.Now()
	cutoff := now.AddDate(0, 0, -retainDays)

	files, err := os.ReadDir(path)
	if err != nil {
		log.Printf("Error reading log directory: %v", err)
		return
	}

	for _, file := range files {
		if !file.IsDir() {
			fileInfo, _ := file.Info()
			modTime := fileInfo.ModTime()
			if modTime.Before(cutoff) {
				filePath := filepath.Join(path, file.Name())
				err = os.Remove(filePath)
				if err != nil {
					log.Printf("Error removing old log file %s: %v", filePath, err)
				} else {
					fmt.Printf("Removed old log file: %s\n", filePath)
				}
			}
		}
	}
}
func initGinLog(cf *config.OriginConfig) {
	// 创建日志文件名
	logFileName := fmt.Sprintf("%s-%s.log", time.Now().Format("2006-01-02"), cf.Log.Prefix)
	errorLogFileName := fmt.Sprintf("%s-%s-error.log", time.Now().Format("2006-01-02"), cf.Log.Prefix)

	// 定义日志文件路径
	logPath := filepath.Join(cf.Log.OutPath, logFileName)
	errorLogPath := filepath.Join(cf.Log.OutPath, errorLogFileName)

	// 创建日志目录
	if _, err := os.Stat(cf.Log.OutPath); os.IsNotExist(err) {
		err = os.MkdirAll(cf.Log.OutPath, os.ModePerm)
		if err != nil {
			log.Fatalf("Failed to create log directory: %v", err)
		}
	}

	// 打开日志文件
	logFile, err := os.OpenFile(logPath, os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0666)
	if err != nil {
		log.Fatalf("Failed to open log file: %v", err)
	}

	// 打开错误日志文件
	errorLogFile, err := os.OpenFile(errorLogPath, os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0666)
	if err != nil {
		log.Fatalf("Failed to open error log file: %v", err)
	}

	// 设置 gin 的日志输出
	gin.SetMode(gin.ReleaseMode)
	gin.DisableConsoleColor()
	gin.DefaultWriter = io.MultiWriter(logFile, os.Stdout) // 普通日志输出到 logFile 和控制台

	// 设置普通日志
	normalLogger := log.New(io.MultiWriter(logFile, os.Stdout), "INFO: ", log.LstdFlags|log.Lshortfile)

	// 设置错误日志
	errorLogger := log.New(io.MultiWriter(errorLogFile, os.Stdout), "ERROR: ", log.LstdFlags|log.Lshortfile)

	// 这里的普通日志可以通过 normalLogger.Println() 打印
	normalLogger.Println("Gin log initialized")

	// 这里的错误日志可以通过 errorLogger.Println() 打印
	errorLogger.Println("This is an error log")
}
