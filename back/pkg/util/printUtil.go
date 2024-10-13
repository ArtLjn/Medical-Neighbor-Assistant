// Package util /*
package util

import "fmt"

// 定义颜色代码
const (
	Reset  = "\033[0m"
	Red    = "\033[31m"
	Green  = "\033[32m"
	Yellow = "\033[33m"
	Blue   = "\033[34m"
	Purple = "\033[35m"
	Cyan   = "\033[36m"
	White  = "\033[37m"
)

// PrintMedHealthLogo 打印 MedHealth Logo
func PrintMedHealthLogo() {
	logo := `
███    ██ ███████  ██████  ██    ██     ██  ██████  ██      ██     ██████   ███████ 
████   ██ ██      ██    ██ ██    ██     ██ ██    ██ ██      ██    ██    ██  ██      
██ ██  ██ █████   ██    ██ ██    ██     ██ ██    ██ ██      ██    ██    ██  █████   
██  ██ ██ ██      ██    ██ ██    ██     ██ ██    ██ ██      ██    ██    ██  ██      
██   ████ ███████  ██████   ██████      ██  ██████   ███████      ██████   ███████ 
	`
	fmt.Println(Yellow + logo + Reset)
}
