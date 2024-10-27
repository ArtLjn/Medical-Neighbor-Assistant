/*
@Time : 2024/10/23 20:41
@Author : ljn
@File : ipfs_proxy
@Software: GoLand
*/

package util

import (
	"back/config"
	"fmt"
	"net/http"
	"os"
	"path/filepath"
)

func fileHandler(w http.ResponseWriter, r *http.Request) {
	// 解析路径
	if r.URL.Path == "/ipfs/" {
		http.Error(w, "File not found", http.StatusNotFound)
		return
	}

	cid := r.URL.Path[len("/ipfs/"):] // 去掉前面的"/ipfs/"

	data, err := os.ReadFile(filepath.Join(config.LoadConfig.UploadRepo.BackUp, cid))
	if err != nil {
		http.Error(w, "File not found", http.StatusNotFound)
		return
	}

	w.Write(data)
}

func RegisterProxy(port string) {
	// http.HandleFunc("/", fileHandler)
	http.HandleFunc("/ipfs/", fileHandler) // 处理 /ipfs/ 路径
	fmt.Println("IPFS proxy server started on port", port)
	if err := http.ListenAndServe(":"+port, nil); err != nil {
		fmt.Println("Error starting server:", err)
	}
}
