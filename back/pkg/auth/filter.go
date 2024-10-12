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
		// 检查请求路径是否需要授权
		if IsPathInList(ctx.Request.URL.Path, config.LoadConfig.AuthorizationFilter.NeedAuthorizationApiList) {
			authorization := ctx.GetHeader("Authorization")
			if authorization == "" {
				// 如果 token 为空，返回错误并终止请求
				response.PublicResponse.SetCode(custom_error.ClientErrorCode).SetMsg("token不能为空").Build(ctx)
				ctx.Abort()
				return
			}

			// 验证 token
			parseUUID, err := token.TokenF.VerifyToken(authorization)
			if err != nil {
				// token 验证失败，返回错误并终止请求
				response.PublicResponse.SetCode(custom_error.ForbiddenErrorCode).SetMsg(err.Error()).Build(ctx)
				ctx.Abort()
				return
			}

			// 根据 UUID 查询用户信息
			account := user.QueryUser(map[string]interface{}{
				"uuid": parseUUID,
			})
			if account == (model.Account{}) {
				// 用户不存在，返回错误并终止请求
				response.PublicResponse.SetCode(custom_error.ForbiddenErrorCode).SetMsg("用户不存在").Build(ctx)
				ctx.Abort()
				return
			}

			// 将用户信息设置到上下文
			ctx.Set("user_message", account)
		}

		// 继续执行后续的中间件或请求处理
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
