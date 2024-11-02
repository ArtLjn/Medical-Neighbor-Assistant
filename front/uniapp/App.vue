<script>
  import config from './config'
  import store from '@/store'
  import { getToken } from '@/utils/auth'

  export default {
    onLaunch: function() {
      this.initApp()
    },
    methods: {
      // 初始化应用
      initApp() {
        // 初始化应用配置
        this.initConfig()
        // 检查用户登录状态
        //#ifdef H5
        // this.checkLogin()
        //#endif
      },
      initConfig() {
        this.globalData.config = config
      },
    }
  }
</script>

<style lang="scss">
  @import "@/node_modules/uview-ui/index.scss";
  @import '@/static/scss/index.scss'
</style>
