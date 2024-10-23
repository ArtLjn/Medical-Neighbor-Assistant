/*
@Time : 2024/10/23 19:16
@Author : ljn
@File : cid_backup_test
@Software: GoLand
*/

package test

import (
	"github.com/mr-tron/base58"
	"math/rand"
	"path/filepath"
	"testing"
)

// getLocalFilePath 根据 cid 获取本地副本文件的路径
func getLocalFilePath(cid string) string {
	return filepath.Join("local_directory", cid) // 返回完整路径
}

// 示例用法
func TestGetLocalFile(t *testing.T) {
	t.Log(generatePseudoCID())
	//cid := "your_cid_here" // 这里替换为实际的 cid
	//localPath := getLocalFilePath(cid)
	//if _, err := os.Stat(localPath); err == nil {
	//	fmt.Printf("可以访问的本地副本文件路径: %s\n", localPath)
	//} else {
	//	fmt.Println("本地副本文件不存在")
	//}
}

// generatePseudoCID 生成一个伪 CID
func generatePseudoCID() string {
	// 生成一个随机字节数组，长度应与 IPFS CID 长度一致
	bytes := make([]byte, 32) // IPFS V0 CID 通常为 32 字节
	_, _ = rand.Read(bytes)

	// Base58 编码，并添加前缀
	return "Qm" + base58.Encode(bytes)
}
