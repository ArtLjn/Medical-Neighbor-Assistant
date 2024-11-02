import request from '@/utils/request'

// 查询所有问诊记录-管理员
export const queryAllInquiryRecord = (isInquiry, page, size) => {
  return request.get('/inquiry/queryAllInquiryRecord', {
    params: {
      isInquiry,
      page,
      size
    }
  })
}

// 查询医生信息
export const queryDoctorInformation = (page, size) => {
  return request.get('/user/queryDoctorInformation', {
    params: {
      page,
      size
    }
  })
}

// 指派医生
export const appointedPhysician = (id, userUUID) => {
  return request({
    url: '/inquiry/appointedPhysician',
    method: 'post',
    params: {
      id,
      userUUID
    }
  })
}

// 查询病人病历信息
export const queryMedialRecordInformation = (inquiryId) => {
  return request.get('/medical/queryMedialRecordInformation', {
    params: {
      inquiryId
    }
  })
}

// 审批问诊记录
export const approveInquiryRecord = (id) => {
  return request({
    url: '/inquiry/approveInquiryRecord',
    method: 'put',
    params: {
      id
    }
  })
}

// 查询病人信息
export const queryPatientInformation = (page, size) => {
  return request.get('/user/queryPatientInformation', {
    params: {
      page,
      size
    }
  })
}

// 查询所有代购药品(分页)
export const queryAllDrug = (page, size) => {
  return request.get('/drug/queryAllDrug', {
    params: {
      page,
      size
    }
  })
}

// 查询所有代购药品
// export const queryAllDrug = () => {
//   return request.get('/drug/queryAllDrug')
// }

// 医院管理人员审核药品代买情况
export const hospitalAgentDrugConfirmReceipt = (id) => {
  return request({
    url: '/drug/hospitalAgentDrugConfirmReceipt',
    method: 'post',
    params: {
      id
    }
  })
}

// 输入最近天数获取问诊类型每天数量统计
export const getInquirySumTypeDay = () => {
  return request.get('/sum/getInquirySumTypeDay', {
    params: {
      day: 7
    }
  })
}

// 输入最近天数获取药品订单每日统计
export const getDrugSumTypeDay = () => {
  return request.get('/sum/getDrugSumTypeDay', {
    params: {
      day: 7
    }
  })
}

export const createInquiryRecord = (data, uuid) => {
  return request({
    url: '/inquiry/createInquiryRecord',
    method: 'post',
    data,
    params: {
      uuid
    }
  })
}

// 分页按条件查询用户
export const likeAccountByCV = (cond, val, page, size, role) => {
  return request.get('/user/likeAccountByCV', {
    params: {
      cond,
      val,
      page,
      size,
      role
    }
  })
}
