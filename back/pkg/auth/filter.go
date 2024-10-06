package auth

import (
	"back/app/user"
	"back/config"
	"back/pkg/custom_error"
	"back/pkg/data/model"
	"back/pkg/response"
	"back/pkg/token"
	"strings"

	"github.com/gin-gonic/gin"
)

type FilterOption interface {
	Apply() gin.HandlerFunc
}

type FilterOptions struct {
	Filters []FilterOption
}

// NewFilterOptions 创建一个新的filterOptions实例
func NewFilterOptions(opts ...Option) *FilterOptions {
	f := &FilterOptions{}
	for _, opt := range opts {
		opt(f)
	}
	return f
}

type Option func(o *FilterOptions)

type authorizationFilter struct{}

// WithAuthorizationFilter 需要进行token验证的接口
func WithAuthorizationFilter() Option {
	return func(options *FilterOptions) {
		options.Filters = append(options.Filters, authorizationFilter{})
	}
}

func (a authorizationFilter) Apply() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		if IsPathInList(ctx.Request.URL.Path, config.LoadConfig.AuthorizationFilter.NeedAuthorizationApiList) {
			authorization := ctx.GetHeader("Authorization")
			if authorization == "" {
				response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg("token不能为空").Build(ctx)
				ctx.Abort()
			}
			if err := token.TokenF.VerifyToken(authorization); err != nil {
				response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg(err.Error()).Build(ctx)
				ctx.Abort()
			}
			parseUUID := token.GetLoginName(authorization)
			account := user.QueryUser(map[string]interface{}{
				"uuid": parseUUID,
			})
			if account == (model.Account{}) {
				response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg("用户不存在").Build(ctx)
				ctx.Abort()
			}
			ctx.Set("user_message", account)
		}
		ctx.Next()
	}
}

func IsPathInList(path string, List []string) bool {
	for _, wlPath := range List {
		if strings.HasPrefix(path, wlPath) {
			return true
		}
	}
	return false
}
