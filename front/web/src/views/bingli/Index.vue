<script setup>
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'
import { getInquirySumTypeDay, queryAllInquiryRecord } from '@/api/system'

const searchID = ref('')
const patientName = ref('')
const value1 = ref('')
const value2 = ref('')
const chartRef = ref(null)
const sumData = ref({})
const getSumData = async () => {
  sumData.value = await getInquirySumTypeDay()
}

const initChart = () => {
  const myChart = echarts.init(chartRef.value)

  const option = {
    title: {
      text: '就医情况对比'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['家庭就医', '社区就医'],
      bottom: '0%' // 将图例放置在图表下方
    },
    xAxis: {
      type: 'category',
      data: sumData.value.dayList
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '家庭就医',
        type: 'bar',
        data: sumData.value.homeList,
        barWidth: '40%', // 控制柱子的宽度
        barGap: '0%', // 去除柱子之间的间隔
        itemStyle: {
          color: '#009DFF' // 设置柱子颜色
        }
      },
      {
        name: '社区就医',
        type: 'bar',
        data: sumData.value.community,
        barWidth: '40%', // 控制柱子的宽度
        barGap: '0%', // 去除柱子之间的间隔
        itemStyle: {
          color: '#22E4FF' // 设置柱子颜色
        }
      }
    ]
  }

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option)
}

onMounted(async () => {
  await getSumData()
  initChart()
})

const tableData = ref([])
const pageParams = ref({
  page: 1,
  size: 10,
  total: null
})

const getTableData = async () => {
  const { list, total } = await queryAllInquiryRecord(
    '1',
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
</script>
<template>
  <el-card>
    <el-row :gutter="10">
      <el-col :span="4">
        <el-input v-model="searchID" placeholder="请输入id"> </el-input>
      </el-col>
      <el-col :span="4" style="margin-left: 20px">
        <el-input v-model="patientName" placeholder="请输入患者姓名">
        </el-input>
      </el-col>
      <el-col
        :span="11"
        style="display: flex; align-items: center; margin-left: 20px"
      >
        <span>预约日期</span>
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
      <el-col :span="3" style="margin-left: 30px">
        <el-button type="primary" @click="getTableData">搜索</el-button>
        <el-button @click="reset">重置</el-button>
      </el-col>
    </el-row>
    <div
      ref="chartRef"
      style="width: 100%; height: 400px; margin-top: 20px"
    ></div>
    <el-table :data="tableData" style="width: 100%; margin-top: 20px">
      <el-table-column prop="id" label="ID" width="80px"></el-table-column>
      <el-table-column prop="patient.username" label="患者"></el-table-column>
      <el-table-column prop="type" label="类型"></el-table-column>
      <el-table-column
        prop="appointment_time"
        label="预约时间"
      ></el-table-column>
      <el-table-column
        prop="patient.chain_account"
        label="所属区块"
      ></el-table-column>
      <el-table-column
        prop="physician.username"
        label="指派医师"
      ></el-table-column>
      <el-table-column label="操作">
        <template #default="{ row }">
          <el-button type="text">查看</el-button>
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
</template>

<style lang="scss" scoped></style>
