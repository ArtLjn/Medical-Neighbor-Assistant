/*
@Time : 2024/5/23 下午8:43
@Author : ljn
@File : response
@Software: GoLand
*/

package response

import (
	"back/pkg/custom_error"
	"github.com/gin-gonic/gin"
)

var PublicResponse ResponseBuild

type BuildResponse interface {
	SetCode(code int) BuildResponse
	SetMsg(msg string) BuildResponse
	SetData(data ...interface{}) BuildResponse
	Build(ctx *gin.Context)
	Clear()
}

type ResponseBuild struct {
	code int
	msg  string
	data []interface{}
}

func NewResponseBuild() ResponseBuild {
	return ResponseBuild{}
}
func (r *ResponseBuild) SetCode(code int) BuildResponse {
	r.code = code
	return r
}

func (r *ResponseBuild) SetMsg(msg string) BuildResponse {
	r.msg = msg
	return r
}

func (r *ResponseBuild) SetData(data ...interface{}) BuildResponse {
	r.data = data
	return r
}

func (r *ResponseBuild) Clear() {
	r.code = 0
	r.msg = ""
	r.data = nil
}

func (r *ResponseBuild) Build(ctx *gin.Context) {
	ctx.JSON(r.code, gin.H{"code": r.code, "msg": r.msg, "data": r.data})
	r.Clear()
	return
}

func (r *ResponseBuild) NewBuildJsonError(ctx *gin.Context) {
	r.SetCode(custom_error.ClientErrorCode).SetMsg("json error").SetData(nil).Build(ctx)
}

func (r *ResponseBuild) NewBuildSuccess(ctx *gin.Context) {
	r.SetCode(custom_error.SuccessCode).SetMsg("success").SetData(nil).Build(ctx)
}
