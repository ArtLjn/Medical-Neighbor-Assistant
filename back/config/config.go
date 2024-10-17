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
		Host      string `yaml:"host"`
		Port      string `yaml:"port"`
		GraceStop bool   `yaml:"grace_stop"`
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
		Username string `yaml:"username"`
		Password string `yaml:"password"`
	} `yaml:"defaultAdmin"`
	Redis struct {
		Addr     string `yaml:"addr"`
		Password string `yaml:"password"`
		Db       int    `yaml:"db"`
	} `yaml:"redis"`
	Contract struct {
		ContractName    string `yaml:"contract_name"`
		ContractAddress string `yaml:"contract_address"`
		ContractAbi     string `yaml:"contract_abi"`
		Owner           string `yaml:"owner"`
		TransUrl        string `yaml:"trans_url"`
		ParseUrl        string `yaml:"parse_url"`
		AccountUrl      string `yaml:"account_url"`
		ServerHost      string `yaml:"server_host"`
	}
	Log struct {
		Level      string `yaml:"level"`
		CleanCycle int    `yaml:"clean_cycle"`
		OutPath    string `yaml:"out_path"`
		Prefix     string `yaml:"prefix"`
		Open       bool   `yaml:"open"`
		MaxSize    int    `yaml:"max_size"`
		Compress   bool   `yaml:"compress"`
		Backup     int    `yaml:"backup"`
	} `yaml:"log"`
	AuthorizationFilter struct {
		JwtKey                   string   `yaml:"jwt_key"`
		NeedAuthorizationApiList []string `yaml:"need_authorization_api_list"`
	} `yaml:"authorizationFilter"`
	Mongo struct {
		Url string `yaml:"url"`
	}
	AI struct {
		Url           string `yaml:"url"`
		Model         string `yaml:"model"`
		Authorization string `yaml:"authorization"`
		Prompt        struct {
			SumUpInquiry string `yaml:"sum_up_inquiry"`
		} `yaml:"prompt"`
		WatchMongoChat bool `yaml:"watch_mongo_chat"`
		OpenAiServer   bool `yaml:"open_ai_server"`
	} `yaml:"ai"`
	Mock struct {
		Open          bool   `yaml:"open"`
		AbsPath       string `yaml:"abs_path"`
		AssetFileName struct {
			InquiryDetail          string `yaml:"inquiry_detail"`
			InquiryVideo           string `yaml:"inquiry_video"`
			MedicalImg             string `yaml:"medical_img"`
			DrugDeliverCertificate string `yaml:"drug_deliver_certificate"`
		} `yaml:"asset_file_name"`
	}
}

func InitConfig(p ...string) *OriginConfig {
	path := "./config/config.yaml"
	if len(p) > 0 {
		path = p[0]
	}
	data, err := ioutil.ReadFile(path)
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
