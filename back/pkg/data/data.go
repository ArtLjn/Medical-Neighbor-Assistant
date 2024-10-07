/*
@Time : 2024/10/4 下午3:55
@Author : ljn
@File : data
@Software: GoLand
*/

package data

import (
	"back/config"
	"fmt"
	"github.com/redis/go-redis/v9"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var (
	Db  *gorm.DB
	Rdb *redis.Client
)

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
