/*
@Time : 2024/10/4 下午3:33
@Author : ljn
@File : config
@Software: GoLand
*/

package config

import (
	"fmt"
	"gopkg.in/ini.v1"
	"log"
	"os"
)

var (
	LoadConfig *OriginConfig
)

type OriginConfig struct {
	Server struct {
		Host string
		Port string
	}
	Dns        string
	UploadRepo struct {
		Domain  string `json:"domain"`   // 域名
		MaxSize string `json:"max_size"` // 最大文件大小（字节）
		Ipfs    string `json:"ipfs"`
	}
	DefaultAdmin struct {
		Username string
		Password string
	}
}

func InitConfig() *OriginConfig {
	cfg, err := ini.Load("./config/config.ini")
	if err != nil {
		log.Println(err)
		os.Exit(1)
	}
	return &OriginConfig{
		Server: struct {
			Host string
			Port string
		}{
			Host: cfg.Section("server").Key("host").String(),
			Port: cfg.Section("server").Key("port").String(),
		},
		Dns: fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=%s&parseTime=True&loc=Local",
			cfg.Section("mysql").Key("username").String(),
			cfg.Section("mysql").Key("password").String(),
			cfg.Section("mysql").Key("host").String(),
			cfg.Section("mysql").Key("port").String(),
			cfg.Section("mysql").Key("database").String(),
			cfg.Section("mysql").Key("charset").String(),
		),
		UploadRepo: struct {
			Domain  string `json:"domain"`   // 域名
			MaxSize string `json:"max_size"` // 最大文件大小（字节）
			Ipfs    string `json:"ipfs"`
		}{
			Domain:  cfg.Section("upload").Key("domain").String(),
			MaxSize: cfg.Section("upload").Key("max_size").String(),
			Ipfs:    cfg.Section("upload").Key("ipfs").String(),
		},
		DefaultAdmin: struct {
			Username string
			Password string
		}{
			Username: cfg.Section("defaultAdmin").Key("username").String(),
			Password: cfg.Section("defaultAdmin").Key("password").String(),
		},
	}

}
