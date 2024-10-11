package token

import (
	"context"
	"crypto/rand"
	"encoding/hex"
	"errors"
	"fmt"
	"github.com/redis/go-redis/v9"
	"log"
)

// Token 管理模块 ** 存储|过期｜续期

var TokenF TokenManager

var JwtKey []byte

const TokenMangerKey = "token_manager"

type TokenManager interface {
	SaveToken(string) string
	LogOutToken(string)
	VerifyToken(string) (string, error)
}

type Token struct {
	rdb *redis.Client
}

func NewToken(rdb *redis.Client) TokenManager {
	return &Token{
		rdb: rdb,
	}
}
func generateRandomToken(n int) (string, error) {
	// 创建一个字节数组来存储随机字节
	b := make([]byte, n)
	// 使用 crypto/rand 生成随机字节
	if _, err := rand.Read(b); err != nil {
		return "", err
	}
	// 将随机字节转换为十六进制字符串
	return hex.EncodeToString(b), nil
}
func (t *Token) SaveToken(username string) string {
	token, err := CreateToken(username)
	if err != nil {
		log.Println("❌ 生成token失败")
		return ""
	}
	_, err = t.rdb.HSet(context.Background(), TokenMangerKey, username, token).Result()
	if err != nil {
		log.Println("❌ 保存token失败")
		return ""
	}
	return token
}

func (t *Token) LogOutToken(token string) {
	uuid, err := GetUserUUID(token)
	if err != nil {
		log.Println("❌ token无效")
		return
	}
	_, err = t.rdb.HDel(context.Background(), TokenMangerKey, uuid).Result()
	if err != nil {
		log.Println("❌ 删除token失败")
		return
	}
}

func (t *Token) VerifyToken(token string) (string, error) {
	uuid, err := GetUserUUID(token)
	if err != nil {
		log.Println("❌ token无效")
		return "", fmt.Errorf("❌ token无效")
	}
	_, err = t.rdb.HGet(context.Background(), TokenMangerKey, uuid).Result()
	if errors.Is(err, redis.Nil) {
		log.Println("❌ token不存在")
		return "", fmt.Errorf("❌ token不存在")
	}
	return uuid, nil
}
