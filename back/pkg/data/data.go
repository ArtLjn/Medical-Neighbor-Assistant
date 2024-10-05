/*
@Time : 2024/10/4 下午3:55
@Author : ljn
@File : data
@Software: GoLand
*/

package data

import (
	"back/config"
	"github.com/redis/go-redis/v9"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var (
	Db  *gorm.DB
	Rdb *redis.Client
)

func NewDB() *gorm.DB {
	db, err := gorm.Open(mysql.Open(config.LoadConfig.Dns), &gorm.Config{
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
