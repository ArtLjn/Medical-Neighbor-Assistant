import axios from 'axios'
import { useUserStore } from '@/stores/user'
import { ElMessage } from 'element-plus'
import router from '@/router'
import { useTabStore } from '@/stores/tab'
const baseURL = '/api'

const instance = axios.create({
  // TODO 1. 基础地址，超时时间
  baseURL,
  timeout: 10000
})
// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // TODO 2. 携带token
    const userStore = useUserStore()
    if (userStore.token) {
      config.headers.Authorization = userStore.token
    }
    return config
  },
  (err) => Promise.reject(err)
)

// 响应拦截器
instance.interceptors.response.use(
  (res) => {
    // TODO 4. 摘取核心响应数据
    if (res.data.code === 200) {
      if (res.data.data[0]) {
        return res.data.data[0]
      } else {
        return res.data.data
      }
    }
    // TODO 3. 处理业务失败
    // 处理业务失败, 给错误提示，抛出错误
    ElMessage.error(res.data.msg || '服务异常')
    return Promise.reject(res.data)
  },
  (err) => {
    // TODO 5. 处理401错误
    // 错误的特殊情况 => 401 权限不足 或 token 过期 => 拦截到登录
    if (err.response?.status === 401) {
      const userStore = useUserStore()
      const tabStore = useTabStore()
      userStore.removeToken()
      userStore.clearUserInfo()
      tabStore.clearTab()
      router.push('/login')
      ElMessage.error('token过期,请重新登录')
    }

    // 错误的默认情况 => 只要给提示
    ElMessage.error(err.response.data.msg || '服务异常')
    return Promise.reject(err)
  }
)

export default instance
export { baseURL }
