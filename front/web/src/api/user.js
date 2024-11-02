import request from '@/utils/request'

// 管理员登录接口
export const adminLogin = (data) => {
  return request.post('/user/adminLogin', data)
}
