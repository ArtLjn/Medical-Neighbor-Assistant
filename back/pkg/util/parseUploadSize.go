package util

import (
	"fmt"
	"regexp"
	"strconv"
	"strings"
)

// ParseSize 解析类似 "10MB" 的大小字符串，并返回字节数
func ParseSize(sizeStr string) (int64, error) {
	// 移除字符串中的任何空格
	sizeStr = strings.TrimSpace(sizeStr)

	// 使用正则表达式匹配数字和单位
	re := regexp.MustCompile(`^(\d+)([A-Za-z]+)$`)
	matches := re.FindStringSubmatch(sizeStr)
	if len(matches) != 3 {
		return 0, fmt.Errorf("invalid size format: %s", sizeStr)
	}

	// 将数字解析为 int64
	size, err := strconv.ParseInt(matches[1], 10, 64)
	if err != nil {
		return 0, err
	}

	// 将单位转换为字节
	var bytes int64
	switch strings.ToUpper(matches[2]) {
	case "B":
		bytes = size
	case "KB":
		bytes = size * 1024
	case "MB":
		bytes = size * 1024 * 1024
	case "GB":
		bytes = size * 1024 * 1024 * 1024
	default:
		return 0, fmt.Errorf("unsupported size unit: %s", matches[2])
	}

	return bytes, nil
}
