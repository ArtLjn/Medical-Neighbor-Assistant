/*
@Time : 2024/10/13 16:17
@Author : ljn
@File : my_log
@Software: GoLand
*/

package custom_log

import (
	"gopkg.in/natefinch/lumberjack.v2"
	"io"
	"log"
	"os"
	"path/filepath"
	"time"
)

// InitLogger 初始化日志配置，返回日志的 io.Writer
func InitLogger(logDir, prefix string, size, backup, day int, compress bool) (io.Writer, error) {
	// 确保日志目录存在
	if _, err := os.Stat(logDir); os.IsNotExist(err) {
		if err := os.MkdirAll(logDir, 0755); err != nil {
			return nil, err
		}
	}

	// 配置 lumberjack 日志轮换
	logFile := &lumberjack.Logger{
		Filename:   filepath.Join(logDir, prefix+"_"+time.Now().Format("2006-01-02")+".log"), // 日志文件名按日期命名
		MaxSize:    size,                                                                     // 每个日志文件的最大大小（MB）
		MaxBackups: backup,                                                                   // 保留的旧日志文件个数
		MaxAge:     day,                                                                      // 日志文件保留的最大天数
		Compress:   compress,                                                                 // 启用日志压缩
	}

	// 创建日志输出目标，文件和控制台同时输出
	multiWriter := io.MultiWriter(logFile, os.Stdout)

	// 设置标准库日志输出
	log.SetOutput(multiWriter)
	log.SetFlags(log.LstdFlags | log.Lshortfile) // 可选: 日志格式

	return multiWriter, nil
}
