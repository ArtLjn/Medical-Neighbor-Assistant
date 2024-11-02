<script setup>
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { ElConfigProvider } from 'element-plus'
import { ref } from 'vue'
const locale = ref(zhCn)
</script>

<template>
  <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>
</template>

<style lang="scss">
.test .el-menu .el-menu-item-group .el-menu-item.is-active {
  background-color: #399efd !important;
  color: #fff;
}
.test .el-menu .el-menu-item-group .el-menu-item:hover {
  background-color: #399efd !important;
  color: #fff;
}
.el-popper.is-dark {
  display: none;
}
.test .el-menu .el-menu-item-group .el-menu-item span {
  margin-left: 20px;
}
</style>
