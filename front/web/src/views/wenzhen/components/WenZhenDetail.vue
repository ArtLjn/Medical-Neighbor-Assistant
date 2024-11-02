<script setup>
import {
  approveInquiryRecord,
  hospitalAgentDrugConfirmReceipt,
  queryMedialRecordInformation
} from '@/api/system'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'

const dialogVisible = ref(false)
const baseInfo = ref({})
const type = ref(null)
const inquiryId = ref('')
const drugId = ref('')

const open = (row, value) => {
  inquiryId.value = row.id || ''
  drugId.value = row.drug_id || ''
  dialogVisible.value = true
  baseInfo.value = row
  console.log(baseInfo.value)
  type.value = value
  console.log(row)
  getRecordData(row.id)
}

const recordData = ref({})
const getRecordData = async (id) => {
  if (id) {
    recordData.value = await queryMedialRecordInformation(id)
  }
  console.log(recordData.value)
}

defineExpose({
  open
})

const handleApprove = async () => {
  if (inquiryId.value) {
    await approveInquiryRecord(inquiryId.value)
  } else {
    await hospitalAgentDrugConfirmReceipt(drugId.value)
  }
  ElMessage.success('审批成功')
  dialogVisible.value = false
}
</script>
<template>
  <el-dialog
    :title="type === '0' ? '问诊记录' : '审批'"
    v-model="dialogVisible"
    @close="dialogVisible = false"
  >
    <el-descriptions
      title="基础信息"
      :column="1"
      v-if="baseInfo.patient.username || baseInfo.patient_username"
    >
      <el-descriptions-item label="患者姓名">{{
        baseInfo.patient.username || baseInfo.patient_username
      }}</el-descriptions-item>
      <el-descriptions-item label="患者性别">{{
        baseInfo.patient.sex || baseInfo.patient_sex
      }}</el-descriptions-item>
      <el-descriptions-item label="预约类型">{{
        baseInfo.type
      }}</el-descriptions-item>
      <el-descriptions-item label="预约时间">{{
        baseInfo.appointment_time
      }}</el-descriptions-item>
      <el-descriptions-item label="病情描述">
        <el-input
          v-model="baseInfo.inquiry_detail"
          placeholder=""
          type="textarea"
        ></el-input>
      </el-descriptions-item>
    </el-descriptions>
    <el-descriptions title="就诊信息" :column="1">
      <el-descriptions-item label="病例:" v-if="recordData.medical_img">
        <div>
          <img
            :src="recordData.medical_img"
            class="img-responsive"
            alt="Image"
            style="width: 200px; height: auto"
          />
        </div>
      </el-descriptions-item>
      <el-descriptions-item label="病例:" v-if="baseInfo.medical_img">
        <div>
          <img
            :src="baseInfo.medical_img"
            class="img-responsive"
            alt="Image"
            style="width: 200px; height: auto"
          />
        </div>
      </el-descriptions-item>
      <el-descriptions-item label="病例:" v-if="baseInfo.delivery_certificate">
        <div>
          <img
            :src="baseInfo.delivery_certificate"
            class="img-responsive"
            alt="Image"
            style="max-width: 400px; max-height: 300px"
          />
        </div>
      </el-descriptions-item>
      <el-descriptions-item label="诊断记录:" v-if="recordData.inquiry_video">
        <div style="margin-top: 20px">
          <a :href="recordData.inquiry_video">
            <i class="iconfont icon-shipin" style="font-size: 36px"></i>
          </a>
        </div>
      </el-descriptions-item>
      <el-descriptions-item label="诊断记录:" v-if="baseInfo.inquiry_video">
        <div style="margin-top: 20px">
          <a :href="baseInfo.inquiry_video">
            <i class="iconfont icon-shipin" style="font-size: 36px"></i>
          </a>
        </div>
      </el-descriptions-item>
    </el-descriptions>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleApprove" v-if="type === '1'">
          审批
        </el-button>
        <el-button type="primary" @click="dialogVisible = false" v-else>
          确定
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped></style>
