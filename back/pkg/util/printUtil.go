/*
@Time : 2024/10/9 10:06
@Author : ljn
@File : printUtil
@Software: GoLand
*/

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

func PrintMedHealthLogo() {
	fmt.Println(string(Cyan) + `
 __  __      _    _    _          _     
|  \/  |    | |  | |  (_)        | |    
| \  / | ___| | _| | ___ ___  ___| |__  
| |\/| |/ _ \ |/ / |/ / / __|/ _ \ '_ \ 
| |  | |  __/   <|   <| \__ \  __/ |_) |
|_|  |_|\___|_|\_\_|\_\_|___/\___|_.__/ 
` + Reset)
}
