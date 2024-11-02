import { getToken } from '@/utils/auth'

// 登录页面
const loginPage = "/pages/login"
  
// 页面白名单
const whiteList = [
  '/pages/init/init','/pages/guide/guide','/pages/login', '/pages/register', '/pages/common/webview/index',
]

// 检查地址白名单
function checkWhite(url) {
  const path = url.split('?')[0]
  return whiteList.indexOf(path) !== -1
}

// 页面跳转验证拦截器
let list = ["navigateTo", "redirectTo", "reLaunch", "switchTab"]
list.forEach(item => {
  uni.addInterceptor(item, {
    invoke(to) {
      if (getToken()) {
        if (to.url === loginPage) {
			console.log(1111)
          uni.reLaunch({ url: "/pages/index" })
		  
        }
        return true
      } else {
        if (checkWhite(to.url)) {
			console.log(to.url)
          return true
        }
        uni.reLaunch({ url: loginPage })
		console.log(3333)
        return false
      }
    },
    fail(err) {
      console.log(err)
    }
  })
})
