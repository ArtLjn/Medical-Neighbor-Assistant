# Medical neighbor assistant 医邻助手
<div>

![Go version](https://img.shields.io/badge/go-%3E%3Dv1.22-9cf)
![Release](https://img.shields.io/badge/release-1.0-green.svg)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
</div>

<b>医邻助手——社区家庭医生问诊管理系统</b>

## 系统设计

<img src="./static/img.png" style="width: 800px"/>
<img src="./static/img_1.png" style="width: 800px">

## 项目结构 🧐

| 子项目名 | 项目路径                                               |
|------|----------------------------------------------------|
| 后端服务 | [/medHealth/back](./back/docs/医邻助手.md)             |
| 智能合约 | [/medHealth/truffle/contract](./truffle/contracts) |


## 项目功能 🎯

| 功能模块 | 功能描述 |
|------|------|
| 用户管理 | 用户注册、登录、信息修改、信息查询 |
| 医生管理 | 医生注册、登录、信息修改、信息查询 |
| 问诊管理 | 用户向医生发起问诊、医生接单、问诊记录查询 |
| 药品管理 | 药品信息管理、药品库存管理、药品购买 |
| 账单管理 | 账单生成、账单查询、账单支付 |