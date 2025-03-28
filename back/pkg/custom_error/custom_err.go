/*
@Time : 2024/10/5 上午10:38
@Author : ljn
@File : custom_err
@Software: GoLand
*/

package custom_error

const (
	SystemError    = "系统错误"
	ClientError    = "客户端错误"
	NotFound       = "查询无果"
	Forbidden      = "权限不足"
	ReadAssetError = "资源加载失败"
)

const (
	SuccessCode        = 200
	SystemErrorCode    = 500
	ClientErrorCode    = 400
	ForbiddenErrorCode = 401
	NotFoundCode       = 404
)
