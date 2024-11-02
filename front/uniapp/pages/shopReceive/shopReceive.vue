<template>
	<view class="container">
		<view class="navigator">
			<uni-icons type="arrow-left" size="40" color="#ffffff" @click="$tab.navigateBack()"></uni-icons>
			<text style="font-size: 40rpx;font-weight: bold;">就诊记录</text>
			<view style="width: 70rpx;height: 70rpx;">

			</view>
		</view>
		<view class="main-container">
			<view class="card-container">
				<view class="info-card" style="margin-top: 20rpx;">
					<image class="doctor-avatar" src="@/static/images/doctor-avatar.png" mode="aspectFill"></image>
					<view class="info-section">
						<view class="card-header">
							<text class="title">预约卡片</text>
						</view>
						<view class="card-body">
							<view class="item">
								<text class="label">预约时间:</text>
								<text class="value">{{ pageData.appointment_time }}</text>
							</view>
							<view class="item" v-if="pageData.patient_username">
								<text class="label">姓名:</text>
								<text class="value">{{ pageData.patient_username }}</text>
							</view>
							<view class="item" v-if="pageData.patient_age">
								<text class="label">年龄:</text>
								<text class="value">{{ pageData.patient_age }}</text>
							</view>
							<view class="item" v-if="pageData.patient_sex">
								<text class="label">性别:</text>
								<text class="value">{{ pageData.patient_sex }}</text>
							</view>
							<view class="item">
								<text class="label">问诊类型:</text>
								<text class="value">{{ pageData.type }}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="record-container">
				<view style="background-color: #ffffff;border-radius: 8px;padding: 20rpx;">
					<text>病例:</text>
					<u-upload @afterRead="imgRead" style="margin-top: 20rpx;">
						<image :src="pageData.medical_img" v-if="pageData.medical_img" style="border-radius: 15rpx;">
						</image>
						<u-button v-else type="info">上传</u-button>
					</u-upload>
				</view>
				<view style="background-color: #ffffff;border-radius: 8px;padding: 20rpx;margin-top: 20rpx;">
					<u--textarea v-model="pageData.diagnostic_description" placeholder="诊断概述(非必选)"></u--textarea>
				</view>
				<view style="background-color: #ffffff;border-radius: 8px;padding: 20rpx;margin-top: 20rpx;"
					v-if="type === '待派送' || type === '历史处理'">
					<text>选择医生： </text><text>{{ pageData.physician_username }}</text>
				</view>
				<view style="background-color: #ffffff;border-radius: 8px;padding: 20rpx;margin-top: 20rpx;">
					<text>派送凭证:</text>
					<u-upload @afterRead="imgRead" style="margin-top: 20rpx;" v-if="type === '待派送' || type === '历史处理'">
						<image :src="certificate || pageData.delivery_certificate"
							v-if="certificate || pageData.delivery_certificate" style="border-radius: 15rpx;">
						</image>
						<u-button v-else type="info">上传</u-button>
					</u-upload>
				</view>
				<view style="margin-top: 20rpx;">
					<uni-table border stripe emptyText="暂无更多数据">
						<uni-tr>
							<uni-th align="center">参与主体</uni-th>
							<uni-th align="center">状态</uni-th>
						</uni-tr>
						<uni-tr>
							<uni-td>{{ pageData.hospital }}</uni-td>
							<uni-td>{{ pageData.already_buy === 1 ? '已签发' : '未签发'}}</uni-td>
						</uni-tr>
						<uni-tr>
							<uni-td>{{ pageData.physician_username }}</uni-td>
							<uni-td>{{ pageData.delivery_certificate ? '已签发' : '未签发'}}</uni-td>
						</uni-tr>
						<uni-tr>
							<uni-td>{{ pageData.patient_username }}</uni-td>
							<uni-td>{{ pageData.is_receive === 1 ? '已签发' : '未签发'}}</uni-td>
						</uni-tr>
					</uni-table>
				</view>
			</view>
			<u-button type="primary" @click="handleReceive" v-if="type === '接单'">接单</u-button>
			<u-button type="primary" @click="handleDispatch" v-if="type === '待派送'">派送</u-button>
		</view>
	</view>
</template>

<script>
	import {
		uploadFile
	} from '../../api/common';
	import {
		physiciansOrderAgentDrug,
		physiciansOrderDelivery,
		queryInquiryRecordById,
		queryMedialRecordInformation
	} from '../../api/system/doctor';
	import {
		toast
	} from '../../utils/common';
	export default {
		data() {
			return {
				pageData: {},
				type: '',
				certificate: ''
			};
		},
		onLoad(options) {
			this.pageData = JSON.parse(options.data)
			console.log(this.pageData)
			this.type = options.type
		},
		methods: {
			async handleReceive() {
				await physiciansOrderAgentDrug(this.pageData.drug_id)
				toast('接单成功')
				uni.navigateBack()
			},
			async imgRead(e) {
				const res = await uploadFile(e.file.url)
				this.certificate = res.data[0] || ''
			},
			async handleDispatch() {
				await physiciansOrderDelivery(this.pageData.drug_id, this.certificate)
				toast('派送成功')
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		height: 100%;
		display: flex;
		flex-direction: column;

		.navigator {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 25rpx 20rpx;
			color: #ffffff;
			background-color: #84C99A;
		}

		.card-container {
			padding: 20rpx;

			.info-card {
				display: flex;
				align-items: flex-start;
				border: 1px solid #ddd;
				border-radius: 8px;
				padding: 16px;
				background-color: #fff;
				box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

				.doctor-avatar {
					width: 80px;
					height: 80px;
					border-radius: 50%;
					margin-right: 16px;
				}

				.info-section {
					flex: 1;

					.card-header {
						display: flex;
						justify-content: flex-start;
						margin-bottom: 16px;

						.title {
							font-size: 18px;
							font-weight: bold;
							color: #333;
						}
					}

					.card-body {
						.item {
							display: flex;
							justify-content: space-between;
							align-items: center;
							margin-bottom: 8px;

							.label {
								font-size: 16px;
								color: #666;
							}

							.value {
								font-size: 16px;
								color: #333;
							}
						}
					}
				}
			}
		}

		.record-container {
			// background-color: #ffffff;
			padding: 20rpx;

			:deep(.u-checkbox__icon-wrap) {
				width: 36rpx;
				height: 36rpx;
			}
		}
	}
</style>