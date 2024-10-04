/*
@Time : 2024/10/4 下午3:55
@Author : ljn
@File : data
@Software: GoLand
*/

package data

import (
	"back/config"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var Db *gorm.DB

func NewDB() *gorm.DB {
	db, err := gorm.Open(mysql.Open(config.LoadConfig.Dns), &gorm.Config{
		DisableForeignKeyConstraintWhenMigrating: true,
	})
	if err != nil {
		panic("failed to connect database")
	}
	return db
}

//func NewRDB() *redis.Client {
//	return redis.NewClient(
//		&redis.Options{
//			Addr:     conf.Redis.Addr,
//			DB:       conf.Redis.Db,
//			Password: conf.Redis.Password,
//		},
//	)
//}
