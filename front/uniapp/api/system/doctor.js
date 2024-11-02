import request from '@/utils/request'

// 查询医师所有问诊记录
export function queryPhysicianInquiryRecord(isInquiry) {
  return request({
    url: '/inquiry/queryPhysicianInquiryRecord',
    method: 'get',
	params: {
		isInquiry
	},
	headers: {
	  isToken: true
	}
  })
}

// 查询单个问诊记录
export function queryInquiryRecordById(id) {
  return request({
    url: '/inquiry/queryInquiryRecordById',
    method: 'get',
	params: {
		id
	},
	headers: {
	  isToken: false
	}
  })
}

// 医师接诊
export function physicianReception(id, isReception) {
  return request({
    url: '/inquiry/physicianReception',
    method: 'put',
	params: {
		id,
		isReception
	},
	headers: {
	  isToken: true
	}
  })
}

// 就诊登记
export function medicalRegistration(data) {
  return request({
    url: '/medical/medicalRegistration',
    method: 'post',
	data: data,
	headers: {
	  isToken: true
	}
  })
}

// 查询病人病历信息
export function queryMedialRecordInformation(inquiryId) {
  return request({
    url: '/medical/queryMedialRecordInformation',
    method: 'get',
	params: {
		inquiryId
	},
	headers: {
	  isToken: false
	}
  })
}

// 医师查询代卖药品历史记录
export function queryPhysiciansAgentHistoryRecord(raw) {
  return request({
    url: '/drug/queryPhysiciansAgentHistoryRecord',
    method: 'get',
	params: {
		raw
	},
	headers: {
	  isToken: true
	}
  })
}

// 医师接单派送
export function physiciansOrderDelivery(id, certificate) {
  return request({
    url: '/drug/physiciansOrderDelivery',
    method: 'post',
	params: {
		id,
		certificate
	},
	headers: {
	  isToken: true
	}
  })
}

// 医师进行药品代卖
export function physiciansOrderAgentDrug(id) {
  return request({
    url: '/drug/physiciansOrderAgentDrug',
    method: 'post',
	params: {
		id
	},
	headers: {
	  isToken: true
	}
  })
}