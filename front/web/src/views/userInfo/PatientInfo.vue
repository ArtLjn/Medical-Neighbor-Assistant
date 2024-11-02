<script setup>
import { likeAccountByCV, queryPatientInformation } from '@/api/system'
import { onMounted, ref } from 'vue'
// import importExcel from './components/import-excel.vue'

const tableData = ref([])
const pageParams = ref({
  page: 1,
  size: 10,
  total: null
})

const getTableData = async () => {
  const { list, total } = await queryPatientInformation(
    pageParams.value.page,
    pageParams.value.size
  )
  tableData.value = list
  pageParams.value.total = total
}

onMounted(() => {
  getTableData()
})

const onSizeChange = (size) => {
  pageParams.value.page = 1
  pageParams.value.size = size
  getTableData()
}

const onCurrentChange = (page) => {
  // 更新当前页
  pageParams.value.page = page
  // 基于最新的当前页，渲染数据
  getTableData()
}

const username = ref('')
const handleSearch = async () => {
  const { list, total } = await likeAccountByCV(
    'username',
    username.value,
    pageParams.value.page,
    pageParams.value.size,
    '医师'
  )
  tableData.value = list
  pageParams.value.total = total
}

const reset = () => {
  getTableData()
}

// const showExcelDialog = ref(false)

// const getEmployeeList = () => {}
</script>

<template>
  <el-card>
    <el-row>
      <el-col :span="20">
        <el-row :gutter="10">
          <el-col :span="4">
            <el-input v-model="searchID" placeholder="请输入id"> </el-input>
          </el-col>
          <el-col :span="4" style="margin-left: 20px">
            <el-input v-model="username" placeholder="请输入患者姓名">
            </el-input>
          </el-col>
          <el-col :span="15" style="display: flex; align-items: center">
            <span style="margin-left: 20px">创建日期</span>
            <el-time-picker
              v-model="value1"
              placeholder="请选择开始日期"
              style="margin-left: 20px"
            />
            <el-time-picker
              v-model="value2"
              arrow-control
              placeholder="请选择结束日期"
              style="margin-left: 20px"
            />
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="3" style="margin-left: 30px">
        <el-button type="primary" @click="handleSearch">搜索</el-button>
        <el-button @click="reset">重置</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="10" style="margin-top: 20px">
      <el-col :span="2"><el-button type="primary">添加</el-button></el-col>
      <!-- <el-col :span="3">
        <el-button size="mini" @click="showExcelDialog = true"
          >excel导入</el-button
        >
      </el-col> -->
    </el-row>
    <el-table :data="tableData" style="width: 100%; margin-top: 20px">
      <el-table-column prop="id" label="ID"> </el-table-column>
      <el-table-column prop="username" label="姓名"> </el-table-column>
      <el-table-column prop="phone" label="联系电话"> </el-table-column>
      <el-table-column prop="home_addr" label="家庭住址"> </el-table-column>
      <el-table-column prop="chain_account" label="区块链地址">
      </el-table-column>
      <el-table-column prop="uuid" label="唯一标识"> </el-table-column>
      <el-table-column prop="create_time" label="创建时间"> </el-table-column>
      <el-table-column prop="prop" label="操作">
        <template #default="{ row }">
          <el-button type="text" size="mini" @click="handleEdit"
            >编辑</el-button
          >
          <el-button type="text" size="mini" @click="handleDel">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-model:current-page="pageParams.page"
      v-model:page-size="pageParams.size"
      :page-sizes="[2, 3, 5, 10]"
      :background="true"
      layout="jumper, total, sizes, prev, pager, next"
      :total="pageParams.total"
      @size-change="onSizeChange"
      @current-change="onCurrentChange"
      style="margin-top: 20px; justify-content: flex-end"
    />
  </el-card>
  <!-- <import-excel
    v-model:show-excel-dialog="showExcelDialog"
    @uploadSuccess="getEmployeeList"
  /> -->
</template>

<style lang="scss" scoped></style>
