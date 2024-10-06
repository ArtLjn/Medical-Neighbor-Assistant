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
	ctycle := fmt.Sprintf("0 0 0 */%d * *", cf.Log.CleanCycle)
	_, err = c.AddFunc(ctycle, func() {
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
	// 获取当前时间
	now := time.Now()

	// 计算保留的截止日期
	cutoff := now.AddDate(0, 0, -retainDays)

	// 读取日志目录中的所有文件
	files, err := os.ReadDir(path)
	if err != nil {
		log.Printf("Error reading log directory: %v", err)
		return
	}

	for _, file := range files {
		// 检查文件是否是日志文件
		if !file.IsDir() {
			// 获取文件的修改时间
			fileInfo, _ := file.Info()
			modTime := fileInfo.ModTime()
			// 如果文件的修改时间早于截止日期，则删除该文件
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
	logFileName := fmt.Sprintf("%s-%s.log", time.Now().Format("2006-01-02"), cf.Log.Prefix)
	logPath := filepath.Join(cf.Log.OutPath, logFileName)

	// 创建日志目录，如果不存在的话
	if _, err := os.Stat(cf.Log.OutPath); os.IsNotExist(err) {
		err = os.MkdirAll(cf.Log.OutPath, os.ModePerm)
		if err != nil {
			log.Fatalf("Failed to create log directory: %v", err)
		}
	}

	f, err := os.OpenFile(logPath, os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0666)
	if err != nil {
		log.Fatalf("Failed to open log file: %v", err)
	}
	gin.DisableConsoleColor()
	gin.DefaultWriter = io.MultiWriter(f)
}
