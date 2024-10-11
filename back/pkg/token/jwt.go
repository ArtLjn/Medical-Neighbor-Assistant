/*
@Time : 2024/10/11 22:22
@Author : ljn
@File : jwt
@Software: GoLand
*/

package token

import (
	"fmt"
	"github.com/dgrijalva/jwt-go"
	"log"
	"time"
)

// CreateToken generates a JWT token
func CreateToken(uuid string) (string, error) {
	// 创建 token 的声明
	claims := jwt.MapClaims{
		"uuid": uuid,
		"exp":  time.Now().Add(time.Hour * 24 * 7).Unix(),
	}

	// 使用指定的签名方法创建 token
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	// 使用密钥签名并返回 token
	return token.SignedString(JwtKey)
}

// VerifyTokenJwt parses and verifies the token, then returns the claims
func VerifyTokenJwt(tokenString string) (jwt.MapClaims, error) {
	// 解析 token
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		// 验证签名方法是否为 HMAC
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}
		return JwtKey, nil
	})

	// 检查解析过程中是否出错，或者 token 是否无效
	if err != nil || !token.Valid {
		return nil, err
	}

	// 获取声明并将其转换为 MapClaims 类型
	if claims, ok := token.Claims.(jwt.MapClaims); ok {
		return claims, nil
	}

	return nil, fmt.Errorf("invalid token claims")
}

func GetUserUUID(tokenString string) (string, error) {
	claims, err := VerifyTokenJwt(tokenString)
	if err != nil {
		log.Println("❌ token无效")
		return "", fmt.Errorf("❌ token无效")
	}
	// 从声明中获取用户名
	uuid, ok := claims["uuid"].(string)
	if !ok {
		log.Println("❌ 无法从声明中获取用户名")
		return "", fmt.Errorf("❌ 无法从声明中获取用户名")
	}
	return uuid, nil
}
