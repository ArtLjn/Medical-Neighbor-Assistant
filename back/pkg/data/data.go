/*
@Time : 2024/10/4 下午3:55
@Author : ljn
@File : data
@Software: GoLand
*/

package data

import (
	"back/config"
	"back/pkg/custom_log"
	"back/pkg/token"
	"context"
	"fmt"
	"github.com/redis/go-redis/v9"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"log"
)

var (
	Db               *gorm.DB
	Rdb              *redis.Client
	Cli              *mongo.Client
	FastGptChatItems *mongo.Collection
)

func InitApp() {
	Db = NewDB()
	Rdb = NewRDB()
	token.TokenF = token.NewToken(Rdb)
	token.JwtKey = []byte(config.LoadConfig.AuthorizationFilter.JwtKey)
	// 开启日志输出服务
	if config.LoadConfig.Log.Open {
		go custom_log.InitGinLog(config.LoadConfig)
	}
}
func NewDB() *gorm.DB {
	dns := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=%s&parseTime=True&loc=Local",
		config.LoadConfig.Mysql.Username,
		config.LoadConfig.Mysql.Password,
		config.LoadConfig.Mysql.Host,
		config.LoadConfig.Mysql.Port,
		config.LoadConfig.Mysql.Database,
		config.LoadConfig.Mysql.Charset,
	)
	db, err := gorm.Open(mysql.Open(dns), &gorm.Config{
		DisableForeignKeyConstraintWhenMigrating: true,
	})
	if err != nil {
		panic("failed to connect database")
	}
	return db
}

func NewRDB() *redis.Client {
	return redis.NewClient(
		&redis.Options{
			Addr:     config.LoadConfig.Redis.Addr,
			DB:       config.LoadConfig.Redis.Db,
			Password: config.LoadConfig.Redis.Password,
		},
	)
}

func NewMongo(url ...string) *mongo.Client {
	currentUrl := config.LoadConfig.Mongo.Url
	if len(url) > 0 {
		currentUrl = url[0]
	}
	clientOptions := options.Client().ApplyURI(currentUrl)
	// Connect to MongoDB
	client, err := mongo.Connect(context.TODO(), clientOptions)
	if err != nil {
		log.Fatal(err)
	}
	// Check the connection
	err = client.Ping(context.TODO(), nil)
	if err != nil {
		log.Fatal(err)
	}
	return client
}

func NewFastGptChatItems() *mongo.Collection {
	return Cli.Database("fastgpt").Collection("chatitems")
}
