/*
@Time : 2024/10/4 下午3:33
@Author : ljn
@File : config
@Software: GoLand
*/

package config

import (
	"gopkg.in/yaml.v2"
	"io/ioutil"
	"log"
	"os"
)

var (
	LoadConfig *OriginConfig
)

type OriginConfig struct {
	Server struct {
		Host string `yaml:"host"`
		Port string `yaml:"port"`
	} `yaml:"server"`
	Mysql struct {
		Username string `yaml:"username"`
		Password string `yaml:"password"`
		Host     string `yaml:"host"`
		Port     string `yaml:"port"`
		Database string `yaml:"database"`
		Charset  string `yaml:"charset"`
	} `yaml:"mysql"`
	UploadRepo struct {
		Domain  string `yaml:"domain"`   // 域名
		MaxSize string `yaml:"max_size"` // 最大文件大小（字节）
		Ipfs    string `yaml:"ipfs"`
	} `yaml:"upload"`
	DefaultAdmin struct {
		Username     string `yaml:"username"`
		Password     string `yaml:"password"`
		ChainAddress string `yaml:"chain_address"`
	} `yaml:"defaultAdmin"`
	Redis struct {
		Addr     string `yaml:"addr"`
		Password string `yaml:"password"`
		Db       int    `yaml:"db"`
	} `yaml:"redis"`
	Log struct {
		Level      string `yaml:"level"`
		CleanCycle int    `yaml:"clean_cycle"`
		OutPath    string `yaml:"out_path"`
		Prefix     string `yaml:"prefix"`
		Open       bool   `yaml:"open"`
	} `yaml:"log"`
	AuthorizationFilter struct {
		NeedAuthorizationApiList []string `yaml:"need_authorization_api_list"`
	} `yaml:"authorizationFilter"`
}

func InitConfig() *OriginConfig {
	data, err := ioutil.ReadFile("/Users/ljn/Documents/blockchaincomplete/Internet+/back/config/config.yaml")
	if err != nil {
		log.Println(err)
		os.Exit(1)
	}
	var config OriginConfig
	if err = yaml.Unmarshal(data, &config); err != nil {
		log.Println(err)
		os.Exit(1)
	}

	LoadConfig = &config
	return LoadConfig
}
