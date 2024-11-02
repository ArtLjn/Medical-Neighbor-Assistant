<script setup>
import { onMounted, ref } from 'vue'
import {
  queryAllInquiryRecord,
  queryDoctorInformation,
  appointedPhysician,
  createInquiryRecord
} from '@/api/system'
import { ElMessage } from 'element-plus'
import WenZhenDetail from '@/views/wenzhen/components/WenZhenDetail.vue'

const searchID = ref('')
const patientName = ref('')
const doctorName = ref('')
const options = ref([{ name: '居家就医' }, { name: '社区就医' }])
const selectedType = ref('')
const handleSelect = (val) => {
  console.log(val)
}

const statusList = ref([
  { id: 0, name: '全部' },
  { id: 1, name: '问诊结束' },
  { id: 2, name: '未问诊' },
  { id: 3, name: '未指派医师' },
  { id: 4, name: '待接诊' },
  { id: 5, name: '未审核' }
])

const selectedStatus = ref(0)

const handleSelectStatus = (val) => {
  selectedStatus.value = val
}

const tableData = ref([])
const pageParams = ref({
  page: 1,
  size: 10,
  total: null
})
const getTableData = async () => {
  const { list, total } = await queryAllInquiryRecord(
    selectedStatus.value,
    pageParams.value.page,
    pageParams.value.size
  )
  tableData.value = list
  pageParams.value.total = total
  console.log(tableData.value)
}

onMounted(() => {
  getTableData()
})

const onSizeChange = (size) => {
  pageParams.value.page = 1
  pageParams.value.pageSize = size
  getTableData()
}

const onCurrentChange = (page) => {
  // 更新当前页
  pageParams.value.page = page
  // 基于最新的当前页，渲染数据
  getTableData()
}

const reset = async () => {
  tableData.value = await queryAllInquiryRecord(0)
}

const assignShow = ref(false)

const assignDoctor = ref(null)

const currentId = ref('')
const openAssign = (row) => {
  assignShow.value = true
  getDoctorList()
  assignDoctor.value = row.physician.username || '无'
  currentId.value = row.id.toString() || ''
}

const searchValue = ref('')

const doctorList = ref([])
const pageParams1 = ref({
  page: 1,
  size: 10,
  total: null
})
const getDoctorList = async () => {
  const { list, total } = await queryDoctorInformation(
    pageParams1.value.page,
    pageParams1.value.size
  )
  doctorList.value = list
  pageParams1.value.total = total
}

const onSizeChange1 = (size) => {
  pageParams1.value.page = 1
  pageParams1.value.size = size
  getDoctorList()
}

const onCurrentChange1 = (page) => {
  // 更新当前页
  pageParams1.value.page = page
  // 基于最新的当前页，渲染数据
  getDoctorList()
}
const handleAssign = async (row) => {
  // console.log(row)
  await appointedPhysician(currentId.value, row.uuid)
  ElMessage.success('指派成功')
  assignShow.value = false
  getTableData()
}

const detailDialog = ref()

const opneView = (row, type) => {
  detailDialog.value.open(row, type)
}

const addView = ref(false)

const addForm = ref({
  type: null,
  inquiry_detail: '',
  appointment_time: '',
  uuid: ''
})

const handleAdd = async () => {
  await createInquiryRecord(addForm.value, addForm.value.uuid)
  ElMessage.success('预约成功')
  addView.value = false
}
</script>

<template>
  <el-card>
    <el-row>
      <el-col :span="20">
        <el-row :gutter="10">
          <el-col :span="5">
            <el-input v-model="searchID" placeholder="请输入id"> </el-input>
          </el-col>
          <el-col :span="5" style="margin-left: 20px">
            <el-input v-model="patientName" placeholder="请输入患者姓名">
            </el-input>
          </el-col>
          <el-col :span="5" style="margin-left: 20px">
            <el-input v-model="doctorName" placeholder="请输入医师姓名">
            </el-input>
          </el-col>
          <el-col :span="7" style="margin-left: 20px">
            <el-select
              filterable
              placeholder="请选择就诊类型"
              v-model="selectedType"
              @change="handleSelect"
            >
              <el-option
                v-for="(item, index) in options"
                :key="index"
                :label="item.name"
                :value="item.name"
              ></el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row :gutter="10" style="margin-top: 20px">
          <el-col :span="14" style="display: flex; align-items: center">
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
          <el-col :span="5">
            <el-select
              filterable
              placeholder="请选择问诊状态"
              v-model="selectedStatus"
              @change="handleSelectStatus"
            >
              <el-option
                v-for="item in statusList"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-col>
          <el-col :span="4">
            <el-button type="primary" @click="addView = true">新增</el-button>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="3" style="margin-left: 30px">
        <el-button type="primary" @click="getTableData">搜索</el-button>
        <el-button @click="reset">重置</el-button>
      </el-col>
    </el-row>
    <el-row style="margin-top: 20px">
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column prop="id" label="ID"> </el-table-column>
        <el-table-column prop="patient.username" label="患者">
        </el-table-column>
        <el-table-column prop="type" label="类型"> </el-table-column>
        <el-table-column prop="appointment_time" label="预约时间">
        </el-table-column>
        <el-table-column prop="reserved_phone" label="预留电话">
        </el-table-column>
        <el-table-column prop="physician.username" label="指派医师">
        </el-table-column>
        <el-table-column label="操作">
          <template #default="{ row }">
            <span
              style="color: #409eff; cursor: pointer"
              @click="openAssign(row)"
              >指派</span
            >
            <span
              style="color: #409eff; margin-left: 20px; cursor: pointer"
              @click="opneView(row, '0')"
              >查看</span
            >
            <span
              style="color: #409eff; margin-left: 20px; cursor: pointer"
              @click="opneView(row, '1')"
              >审批</span
            >
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
    </el-row>
  </el-card>
  <el-dialog title="指派医师" v-model="assignShow">
    <el-row :gutter="10">
      <el-col :span="6">
        <el-input v-model="searchValue" placeholder="请输入医师姓名">
        </el-input>
      </el-col>
      <el-col :span="6" style="margin-left: 30px">
        <el-button type="primary" @click="searchDoctor">搜索</el-button>
        <el-button @click="resetDoctor">重置</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="10" style="margin-top: 20px">
      <el-col :span="6">
        <span>当前指派医师信息：</span>
        <span>{{ assignDoctor }}</span>
      </el-col>
    </el-row>
    <el-table
      :data="doctorList"
      style="width: 100%; margin-top: 20px"
      height="400"
      border
    >
      <el-table-column prop="id" label="ID"> </el-table-column>
      <el-table-column prop="username" label="姓名"> </el-table-column>
      <el-table-column prop="role" label="职务"> </el-table-column>
      <el-table-column prop="hospital" label="所属医院"> </el-table-column>
      <el-table-column label="操作">
        <template #default="{ row }">
          <span
            style="color: #409eff; cursor: pointer"
            @click="handleAssign(row)"
            >指派</span
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-model:current-page="pageParams1.page"
      v-model:page-size="pageParams1.size"
      :page-sizes="[2, 3, 5, 10]"
      :background="true"
      layout="jumper, total, sizes, prev, pager, next"
      :total="pageParams.total"
      @size-change="onSizeChange1"
      @current-change="onCurrentChange1"
      style="margin-top: 20px; justify-content: flex-end"
    />
  </el-dialog>
  <el-dialog title="新增就诊记录" v-model="addView">
    <el-form ref="form" :model="addForm" label-width="80px">
      <el-form-item label="病情描述">
        <el-input
          type="textarea"
          v-model="addForm.inquiry_detail"
          placeholder="请输入病情描述"
        ></el-input>
      </el-form-item>
      <el-form-item label="就诊类型">
        <el-select
          filterable
          placeholder="请选择就诊类型"
          v-model="addForm.type"
          @change="handleSelect"
        >
          <el-option
            v-for="(item, index) in options"
            :key="index"
            :label="item.name"
            :value="item.name"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="预约时间">
        <el-date-picker
          v-model="addForm.appointment_time"
          type="datetime"
          placeholder="选择预约时间"
        />
      </el-form-item>
      <el-form-item label="用户编号">
        <el-input
          v-model="addForm.uuid"
          placeholder="请输入用户编号"
        ></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleAdd"> 确定 </el-button>
      </div>
    </template>
  </el-dialog>
  <wen-zhen-detail ref="detailDialog"></wen-zhen-detail>
</template>

<style lang="scss" scoped></style>
