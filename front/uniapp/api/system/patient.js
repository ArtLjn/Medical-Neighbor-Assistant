import request from '@/utils/request'

// 创建问诊记录
export function createInquiryRecord(data) {
  return request({
    url: '/inquiry/createInquiryRecord',
    method: 'post',
    data: data,
	headers: {
	  isToken: true
	}
  })
}

// 查询患者所有问诊记录
export function queryPatientInquiryRecord(isInquiry) {
  return request({
    url: '/inquiry/queryPatientInquiryRecord',
    method: 'get',
	params: {
		isInquiry
	},
	headers: {
	  isToken: true
	}
  })
}

// 患者查询药品代买历史记录
export function queryPatientAgentDrugHistory(raw) {
  return request({
    url: '/drug/queryPatientAgentDrugHistory',
    method: 'get',
	params: {
		raw
	},
	headers: {
	  isToken: true
	}
  })
}
