<script setup>
import {
  ArrowDown,
  User,
  Crop,
  EditPen,
  SwitchButton,
  ArrowRightBold
} from '@element-plus/icons-vue'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useUserStore } from '@/stores/user.js'
import { onMounted, ref, watch } from 'vue'
import { useTabStore } from '@/stores/tab.js'
import { storeToRefs } from 'pinia'
const tabStore = useTabStore()
const router = useRouter()
const route = useRoute()
const userStore = useUserStore()
const handleCommand = async (command) => {
  if (command === 'logout') {
    await ElMessageBox.confirm('你确定要退出登录吗', '温馨提示', {
      type: 'warning',
      confirmButtonText: '确定',
      cancelButtonText: '取消'
    })
    router.push('/login')
    tabStore.clearTab()
    userStore.removeToken()
    ElMessage.success('退出登录成功')
  } else {
    router.push(`/personal/${command}`)
  }
}

//菜单栏收缩与展开
const isCollapse = ref(false)

//面包屑实现
const breadList = ref([])
const getMatched = () => {
  breadList.value = route.matched
}
watch(route, () => {
  getMatched()
})
onMounted(() => {
  getMatched()
})

//tab栏实现
const { openTabs, currentTab } = storeToRefs(tabStore)
const { add_tab, delete_tab, setCurrentTab } = tabStore
watch(route, (to) => {
  let flag = ref(false)
  openTabs.value.forEach((item) => {
    if (item.route === to.fullPath) {
      setCurrentTab(to.fullPath)
      flag.value = true
      return
    }
  })
  if (!flag.value) {
    add_tab({ route: to.fullPath, name: to.name, icon: to.meta.icon })
    setCurrentTab(to.fullPath)
  }
})

if (route.fullPath !== '/' && route.fullPath !== '/bingli') {
  add_tab({ route: '/bingli', name: '患者病例', icon: 'icon-bingli' })
  add_tab({ route: route.fullPath, name: route.name, icon: route.meta.icon })
  setCurrentTab(route.fullPath)
} else {
  add_tab({ route: '/bingli', name: '患者病例', icon: 'icon-bingli' })
  setCurrentTab('/bingli')
  console.log(openTabs.value)
}

const tabClick = (tab) => {
  router.push(tab.props.name)
}
const removeTab = async (target) => {
  console.log(target)
  if (target === '/' && target === '/bingli') {
    return
  }
  const index = await delete_tab(target)
  if (currentTab.value === target && openTabs.value.length > 0) {
    setCurrentTab(
      openTabs.value[index]?.route || openTabs.value[index - 1]?.route
    )
    router.push(currentTab.value)
  }
}

//获取用户基本信息
onMounted(async () => {
  // await userStore.getUserInfo()
})
</script>

<template>
  <el-container class="layout-page">
    <el-aside width="auto">
      <el-menu
        background-color="#282c34"
        text-color="#fff"
        popper-effect="dark"
        router
        active-text-color="#fff"
        :default-active="$route.path"
        :collapse="isCollapse"
        class="el-menu-vertical-demo"
      >
        <el-menu-item class="left" style="background: none">
          <i style="font-size: 40px" class="iconfont icon-yiyuan"></i>
          <span class="title">医 邻 助 手</span>
        </el-menu-item>
        <el-menu-item index="/bingli">
          <i class="iconfont icon-bingli"></i>
          <span>患者病例</span>
        </el-menu-item>
        <el-menu-item index="/wenzhen">
          <i class="iconfont icon-wenzhenjilu"></i>
          <span>问诊记录</span>
        </el-menu-item>
        <el-menu-item index="/drug">
          <i class="iconfont icon-daiyao"></i>
          <span>药品代买</span>
        </el-menu-item>
        <el-sub-menu index="/userInfo" popper-class="test">
          <template #title>
            <i class="iconfont icon-yonghuxinxi"></i>
            <span>用户信息</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/userInfo/doctor">
              <i class="iconfont icon-yishi"></i>
              <span>医师信息</span>
            </el-menu-item>
            <el-menu-item index="/userInfo/patient">
              <i class="iconfont icon-huanzheguanli"></i>
              <span>患者信息</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <div class="head">
          <div class="left">
            <i
              class="iconfont icon-caidanzhankai"
              v-if="isCollapse"
              @click="isCollapse = !isCollapse"
            ></i>
            <i
              class="iconfont icon-caidan-shousuo"
              v-else
              @click="isCollapse = !isCollapse"
            ></i>
            <el-breadcrumb :separator-icon="ArrowRightBold">
              <el-breadcrumb-item :to="{ path: '/bingli' }"
                ><i class="iconfont icon-shouye"></i>
                <span style="margin-left: 5px; font-weight: 530"
                  >首页</span
                ></el-breadcrumb-item
              >
              <template v-for="(item, index) in breadList">
                <el-breadcrumb-item
                  v-if="item.name && item.name !== '首页'"
                  :key="index"
                  :to="item.path"
                  ><i class="iconfont" :class="item.meta.icon"></i>
                  <span style="margin-left: 5px; font-weight: 530">{{
                    item.name
                  }}</span></el-breadcrumb-item
                >
              </template>
            </el-breadcrumb>
          </div>
          <div class="right">
            <i class="iconfont icon-sousuo"></i>
            <i class="iconfont icon-quanping"></i>
            <i class="iconfont icon-shuaxin"></i>
            <el-dropdown @command="handleCommand" style="color: #fff">
              <span class="el-dropdown-link">
                <el-avatar :src="userStore.userInfo.avatarImage"></el-avatar>
                <span style="margin-left: 5px">{{
                  userStore.userInfo.nickName || userStore.userInfo.username
                }}</span>
                <el-icon><ArrowDown /></el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item
                    command="profile"
                    :icon="User"
                    class="animate__animated"
                    >基本资料</el-dropdown-item
                  >
                  <el-dropdown-item command="avatar" :icon="Crop"
                    >更换头像</el-dropdown-item
                  >
                  <el-dropdown-item command="password" :icon="EditPen"
                    >修改密码</el-dropdown-item
                  >
                  <el-dropdown-item command="logout" :icon="SwitchButton"
                    >退出登录</el-dropdown-item
                  >
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
        <div class="tab">
          <el-tabs
            v-model="currentTab"
            @tab-click="tabClick"
            @tab-remove="removeTab"
            type="card"
            closable
          >
            <el-tab-pane
              :name="item.route"
              v-for="item in openTabs"
              :key="item.name"
            >
              <template #label>
                <i class="iconfont" :class="item.icon"></i>
                <span style="margin-left: 5px">{{ item.name }}</span>
              </template></el-tab-pane
            >
          </el-tabs>
        </div>
      </el-header>
      <el-main>
        <router-view class="animate__animated animate__fadeIn"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.layout-page {
  display: flex;
  height: 100vh;
  .el-header {
    padding: 0;
    box-sizing: border-box;
    height: auto;
    box-shadow: 0 10px 8px rgba(0, 21, 41, 0.1);
    z-index: 999;
    .head {
      padding: 0 20px;
      height: 60px;
      background: #282c34;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        display: flex;
        align-items: center;
        color: #fff;
        .el-breadcrumb {
          margin-left: 20px;
          .el-breadcrumb__item {
            :deep(.el-breadcrumb__inner) {
              display: flex;
              align-items: center;
              color: #fff !important;
            }
            :deep(.el-breadcrumb__separator) {
              color: #fff !important;
            }
          }
        }
      }
      .right {
        display: flex;
        align-items: center;
        color: #fff;
        i {
          margin-right: 20px;
          font-size: 16px;
        }
        .message {
          &:hover {
            .layer {
              opacity: 1;
              transform: none;
            }
          }
          .layer {
            opacity: 0;
            transition: all 0.4s 0.2s;
            transform: translateY(-200px) scale(1, 0);
            width: 400px;
            height: 400px;
            position: absolute;
            top: 40px;
            right: 0;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            background: #fff;
            border-radius: 4px;
            z-index: 1996;
            overflow: auto;
            .username {
              height: 35px;
              width: 35px;
              line-height: 35px;
              text-align: center;
              border-radius: 50%;
              color: #fff;
              background: #04c9be;
              font-size: 12px;
              display: inline-block;
            }
            &::before {
              content: '';
              position: absolute;
              right: 14px;
              top: -10px;
              width: 20px;
              height: 20px;
              background: #fff;
              transform: scale(0.6, 1) rotate(45deg);
              box-shadow: -3px -3px 5px rgba(0, 0, 0, 0.1);
            }
          }
        }
        em {
          font-style: normal;
          position: absolute;
          right: 12px;
          top: -7px;
          padding: 1px 1px;
          line-height: 1;
          background: #e26237;
          color: #fff;
          font-size: 12px;
          border-radius: 10px;
          font-family: Arial;
        }
        .el-dropdown {
          .el-dropdown-link {
            cursor: pointer;
            display: flex;
            align-items: center;
          }
          .el-dropdown-link:focus {
            outline: none;
          }
        }
      }
    }
    .tab {
      height: 56px;
      :deep(.el-tabs--card > .el-tabs__header) {
        display: flex;
        align-items: center;
        height: 56px;
        padding: 0 20px;
        border-bottom: none;
        .el-tabs__nav {
          border: none;
        }
        .el-tabs__item {
          border-left: none;
          color: #626b7d;
          border: 1px solid #dcdfe6;
          margin-right: 10px;
          border-radius: 2.5px;
          padding: inherit;
          padding: 0 20px;
          &:hover {
            color: #409eff;
            background: #e8f4ff !important;
            border: 1px solid #1890ff !important;
          }
          &.is-active {
            color: #409eff;
            background: #e8f4ff !important;
            border: 1px solid #1890ff !important;
          }
          &:first-child.is-active.is-closable {
            .is-icon-close {
              display: none;
            }
          }
          &:first-child:hover.is-closable {
            .is-icon-close {
              display: none;
            }
          }
        }
      }
    }
  }
  .el-aside {
    z-index: 999;
    .el-menu {
      height: 100%;
      border-right: 0px;
      .left {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 60px;
        .icon-tieba {
          color: #fff;
          font-size: 36px;
        }
        .title {
          font-size: 30px;
          color: #fff;
          font-family: '阿里妈妈方圆体 VF Regular';
          margin-left: 15px;
        }
      }
      .el-menu-item {
        .iconfont {
          font-size: 18px;
        }
        &:hover {
          background: #1890ff;
        }
        span {
          margin-left: 20px;
        }
      }
      .el-menu-item.is-active {
        background: #1890ff;
      }
      .el-sub-menu {
        .el-sub-menu__title {
          span {
            margin-left: 20px;
          }
        }
      }
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 266px;
      min-height: 400px;
    }
  }
  .el-main {
    background: #f6f8f9;
  }
}
</style>
