<script setup>
import * as THREE from 'three'
import BIRDS from 'vanta/src/vanta.birds'
import { onMounted, onUnmounted, ref } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import { adminLogin } from '@/api/user.js'
import { useUserStore } from '@/stores/user.js'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
const router = useRouter()
//动态背景图
const vantaRef = ref()
let vantaEffect = null
onMounted(() => {
  vantaEffect = BIRDS({
    el: vantaRef.value,
    THREE,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0
  })
})
onUnmounted(() => {
  if (vantaEffect) {
    vantaEffect.destroy()
  }
})

//登录
const loginModel = ref({
  username: '',
  password: ''
})
const rules = ref({
  username: [
    { required: true, message: '用户名不能为空', trigger: 'blur' },
    { min: 5, max: 16, message: '用户名为5-16位非空字符', trigger: 'blur' }
  ],
  password: [
    {
      required: true,
      message: '密码不能为空',
      trigger: 'blur'
    },
    {
      min: 5,
      max: 16,
      message: '密码为5-16位非空字符',
      trigger: 'blur'
    }
  ]
})
const loginform = ref()
const userStore = useUserStore()
const handleLogin = async () => {
  await loginform.value.validate()
  const data = await adminLogin(loginModel.value)
  userStore.setToken(data.token)
  ElMessage.success('登录成功')
  router.push('/')
}
</script>

<template>
  <div ref="vantaRef" class="login-page">
    <div class="title">
      <h1 class="animate__animated animate__bounceInDown subTitle">医邻助手</h1>
      <div class="desc animate__animated animate__lightSpeedInRight">
        医邻助手的后台管理系统
      </div>
    </div>
    <div class="login-pannel animate__animated animate__flipInX">
      <el-form :model="loginModel" ref="loginform" :rules="rules">
        <el-form-item
          ><h2 style="text-align: center">管理员登录</h2></el-form-item
        >
        <el-form-item prop="username">
          <el-input
            v-model="loginModel.username"
            :prefix-icon="User"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginModel.password"
            :prefix-icon="Lock"
            type="password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="warning" style="width: 100%" @click="handleLogin"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-page {
  height: 100%;
  width: 100vw;
  .title {
    color: #fff;
    position: absolute;
    z-index: 999;
    left: 10%;
    top: 35%;
    .subTitle {
      font-size: 72px;
      font-family: '阿里妈妈数黑体 Bold';
    }
    :deep(.animate__animated.animate__lightSpeedInRight) {
      -webkit-animation-delay: 1s;
      -moz-animation-delay: 1s;
      -o-animation-delay: 1s;
      animation-delay: 1s;
    }
    .desc {
      font-size: 28px;
      font-family: '阿里妈妈方圆体 VF Regular';
    }
  }
  .animate__animated.animate__flipInX {
    -webkit-animation-delay: 2s;
    -moz-animation-delay: 2s;
    -o-animation-delay: 2s;
    animation-delay: 2s;
  }
  .login-pannel {
    padding: 20px;
    position: absolute;
    z-index: 999;
    right: 10%;
    top: 30%;
    background: hsla(210, 100%, 50%, 0.5);
    color: #fff;
    border-radius: 8px;
    .el-form-item {
      width: 250px;
      padding: 10px;
      h2 {
        font-family: '阿里妈妈方圆体 VF Regular';
      }
      :deep(.el-form-item__content) {
        display: flex;
        justify-content: center;
      }
      :deep(.el-form-item__label) {
        color: #fff;
      }
    }
  }
}
</style>
