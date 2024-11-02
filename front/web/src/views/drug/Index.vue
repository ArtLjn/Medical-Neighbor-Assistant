<script setup>
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'
import { getDrugSumTypeDay, queryAllDrug } from '@/api/system'
import WenZhenDetail from '../wenzhen/components/WenZhenDetail.vue'

const chart = ref(null)

const sumData = ref({})

const getSumData = async () => {
  sumData.value = await getDrugSumTypeDay()
}
const initChart = () => {
  const myChart = echarts.init(chart.value)

  const option = {
    title: {
      text: '订单量趋势图'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['订单量'],
      bottom: '0%' // 图例位于底部
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: sumData.value.dayList, // 横向的日期数据
      axisLine: {
        lineStyle: {} // 默认颜色
      },
      axisLabel: {} // 默认颜色
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {} // 默认颜色
      },
      axisLabel: {} // 默认颜色
    },
    series: [
      {
        name: '订单量',
        type: 'line',
        smooth: false, // 设置直线，而非平滑曲线
        lineStyle: {
          color: '#25ACFF' // 设置折线颜色
        },
        symbol: 'circle', // 设置数据点标记形状
        symbolSize: 5, // 设置数据点标记大小
        itemStyle: {
          color: '#25ACFF' // 设置数据点颜色
        },
        data: sumData.value.count // 订单量数据
      }
    ]
  }

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option)

  // 窗口尺寸变化时更新图表大小
  window.addEventListener('resize', myChart.resize)
}

onMounted(async () => {
  await getSumData()
  console.log(sumData.value)
  initChart()
})

const tableData = ref([])

const pageParams = ref({
  page: 1,
  size: 10,
  total: null
})

const getTableData = async () => {
  const { list, total } = await queryAllDrug(
    pageParams.value.page,
    pageParams.value.size
  )
  tableData.value = list
  pageParams.value.total = total
}

// const getTableData = async () => {
//   tableData.value = await queryAllDrug()
// }

onMounted(() => {
  getTableData()
})

const dialog = ref()
const openView = (row, type) => {
  dialog.value.open(row, type)
}

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
            <el-input v-model="patientName" placeholder="请输入患者姓名">
            </el-input>
          </el-col>
          <el-col :span="4" style="margin-left: 20px">
            <el-input v-model="doctorName" placeholder="请输入医师姓名">
            </el-input>
          </el-col>
          <el-col :span="11" style="display: flex; align-items: center">
            <!-- <span>预约日期</span> -->
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
        <el-button type="primary" @click="getTableData">搜索</el-button>
        <el-button @click="reset">重置</el-button>
      </el-col>
    </el-row>
    <div ref="chart" style="width: 100%; height: 400px; margin-top: 20px"></div>
    <el-table :data="tableData" style="width: 100%; margin-top: 20px">
      <el-table-column prop="drug_id" label="ID" width="80px" />
      <el-table-column prop="patient_username" label="患者姓名" />
      <el-table-column prop="physician_username" label="医师姓名" />
      <el-table-column prop="hospital" label="医院名称" />
      <el-table-column prop="prop" label="病例详情">
        <template #default="{ row }">
          <el-button type="text" @click="openView(row, '0')">查看</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="create_time" label="创建时间" />
      <el-table-column prop="already_buy" label="派送情况">
        <template #default="{ row }">
          <span v-if="row.already_buy === 1">已派送</span>
          <span v-else>未派送</span>
        </template>
      </el-table-column>
      <el-table-column prop="prop" label="操作">
        <template #default="{ row }">
          <el-button type="text" @click="openView(row, '1')">审批</el-button>
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
  <wen-zhen-detail ref="dialog"></wen-zhen-detail>
</template>
<style lang="scss" scoped></style>
