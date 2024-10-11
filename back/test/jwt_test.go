/*
@Time : 2024/10/11 22:23
@Author : ljn
@File : jwt_test
@Software: GoLand
*/

package test

import (
	"back/pkg/token"
	"fmt"
	"testing"
)

func TestJwtToken(t *testing.T) {
	// 生成 token
	tokenString, err := token.CreateToken("testuser")
	if err != nil {
		fmt.Println("Error creating token:", err)
		return
	}
	fmt.Println("Generated Token:", tokenString)
	claims, err := token.VerifyTokenJwt(tokenString)
	if err != nil {
		fmt.Println("Error verifying token:", err)
		return
	}
	// 从声明中获取用户名
	if username, ok := claims["uuid"].(string); ok {
		fmt.Println("Username from token:", username)
	} else {
		fmt.Println("Username not found in token claims")
	}
}
