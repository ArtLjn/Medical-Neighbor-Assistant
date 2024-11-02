import { createRouter, createWebHistory } from 'vue-router'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: '登录页',
      path: '/login',
      component: () => import('@/views/login/Index.vue')
    },
    {
      path: '/',
      component: () => import('@/views/layout/Index.vue'),
      redirect: '/bingli',
      children: [
        {
          name: '患者病例',
          path: '/bingli',
          component: () => import('@/views/bingli/Index.vue'),
          meta: {
            icon: 'icon-bingli'
          }
        },
        {
          name: '问诊记录',
          path: '/wenzhen',
          component: () => import('@/views/wenzhen/Index.vue'),
          meta: {
            icon: 'icon-wenzhenjilu'
          }
        },
        {
          name: '药品代买',
          path: '/drug',
          component: () => import('@/views/drug/Index.vue'),
          meta: {
            icon: 'icon-daiyao'
          }
        },
        {
          name: '用户信息',
          path: '/userInfo',
          redirect: '/userInfo/doctor',
          meta: {
            icon: 'icon-yonghuxinxi'
          },
          children: [
            {
              name: '医师信息',
              path: '/userInfo/doctor',
              component: () => import('@/views/userInfo/DoctorInfo.vue'),
              meta: {
                icon: 'icon-yishi'
              }
            },
            {
              name: '患者信息',
              path: '/userInfo/patient',
              component: () => import('@/views/userInfo/PatientInfo.vue'),
              meta: {
                icon: 'icon-huanzheguanli'
              }
            }
          ]
        }
      ]
      // children: [
      //   {
      //     name: '首页',
      //     path: '/home',
      //     component: () => import('@/views/home/Index.vue'),
      //     meta: {
      //       icon: 'icon-shouye'
      //     }
      //   },
      //   {
      //     name: '论坛管理',
      //     path: '/ba',
      //     component: () => import('@/views/ba/Index.vue'),
      //     meta: {
      //       icon: 'icon-luntan'
      //     }
      //   },
      //   {
      //     name: '论坛详情',
      //     path: '/ba/detail/:id',
      //     component: () => import('@/views/ba/BaDetail.vue'),
      //     meta: {
      //       icon: 'icon-luntanxinxiguanli'
      //     }
      //   },
      //   {
      //     name: '论坛成员',
      //     path: '/ba/member/:id',
      //     component: () => import('@/views/ba/BaMember.vue'),
      //     meta: {
      //       icon: 'icon-luntan-chengyuan'
      //     }
      //   },
      //   {
      //     name: '帖子管理',
      //     path: '/tie',
      //     component: () => import('@/views/tie/Index.vue'),
      //     meta: {
      //       icon: 'icon-tiezi'
      //     }
      //   },
      //   {
      //     name: '评论列表',
      //     path: '/tie/comment/:id',
      //     component: () => import('@/views/tie/CommentReply.vue'),
      //     meta: {
      //       icon: 'icon-pinglun'
      //     }
      //   },
      //   {
      //     name: '用户管理',
      //     path: '/user',
      //     component: () => import('@/views/users/Index.vue'),
      //     meta: {
      //       icon: 'icon-yonghuguanli'
      //     }
      //   },
      //   {
      //     name: '用户详情',
      //     path: '/user/detail/:id',
      //     component: () => import('@/views/users/UserDetail.vue'),
      //     meta: {
      //       icon: 'icon-yonghuxiangqing'
      //     }
      //   },
      //   {
      //     name: '个人中心',
      //     path: '/personal',
      //     redirect: '/personal/profile',
      //     meta: {
      //       icon: 'icon-gerenzhongxin'
      //     },
      //     children: [
      //       {
      //         name: '基本信息',
      //         path: '/personal/profile',
      //         component: () => import('@/views/personal/PersonalProfile.vue'),
      //         meta: {
      //           icon: 'icon-essential-information'
      //         }
      //       },
      //       {
      //         name: '修改密码',
      //         path: '/personal/password',
      //         component: () => import('@/views/personal/PersonalPassword.vue'),
      //         meta: {
      //           icon: 'icon-xiugaimima'
      //         }
      //       },
      //       {
      //         name: '更换头像',
      //         path: '/personal/avatar',
      //         component: () => import('@/views/personal/PersonalAvatar.vue'),
      //         meta: {
      //           icon: 'icon-caijian'
      //         }
      //       }
      //     ]
      //   },
      //   {
      //     name: '标签目录',
      //     path: '/catalogue',
      //     redirect: '/catalogue/category',
      //     meta: {
      //       icon: 'icon-mulu'
      //     },
      //     children: [
      //       {
      //         name: '标签类型',
      //         path: '/catalogue/category',
      //         component: () => import('@/views/catalogue/BaCategory.vue'),
      //         meta: {
      //           icon: 'icon-shebeileixing'
      //         }
      //       },
      //       {
      //         name: '标签管理',
      //         path: '/catalogue/label',
      //         component: () => import('@/views/catalogue/BaLabel.vue'),
      //         meta: {
      //           icon: 'icon-biaoqian'
      //         }
      //       }
      //     ]
      //   },
      //   {
      //     name: '投诉中心',
      //     path: '/complaint',
      //     component: () => import('@/views/complaint/Index.vue'),
      //     meta: {
      //       icon: 'icon-tousu'
      //     }
      //   }
      // ]
    }
  ]
})

//路由拦截
nprogress.configure({ showSpinner: true })
router.beforeEach((to, from, next) => {
  nprogress.start()
  const userStore = useUserStore()
  if (userStore.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    // if (to.path !== '/login') {
    //   next('/login')
    // } else {
    //   next()
    // }
    next()
  }
  nprogress.done()
})

export default router
