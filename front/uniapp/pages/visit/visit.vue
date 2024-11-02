<template>
	<view class="container">
		<view class="navigator">
			<uni-icons type="arrow-left" size="40" color="#ffffff" @click="$tab.navigateBack()"></uni-icons>
			<text style="font-size: 40rpx;font-weight: bold;">就诊记录</text>
			<view style="width: 70rpx;height: 70rpx;">

			</view>
		</view>
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
							<text class="value">{{ cardInfo.appointment_time }}</text>
						</view>
						<view class="item" v-if="cardInfo.patient.username">
							<text class="label">姓名:</text>
							<text class="value">{{ cardInfo.patient.username }}</text>
						</view>
						<view class="item" v-if="cardInfo.patient.age">
							<text class="label">年龄:</text>
							<text class="value">{{ cardInfo.patient.age }}</text>
						</view>
						<view class="item" v-if="cardInfo.patient.sex">
							<text class="label">性别:</text>
							<text class="value">{{ cardInfo.patient.sex }}</text>
						</view>
						<view class="item">
							<text class="label">问诊类型:</text>
							<text class="value">{{ cardInfo.type }}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="record-container">
			<view style="background-color: #ffffff;border-radius: 8px;padding: 20rpx;">
				<text>病例:</text>
				<u-upload @afterRead="imgRead" style="margin-top: 20rpx;">
					<!-- <image :src="bodyData.medical_img" v-if="bodyData.medical_img" mode="aspectFit">
					</image> -->
					<image :src="bodyData.medical_img" mode="aspectFit" v-if="bodyData.medical_img"></image>
					<u-button v-else type="info">上传</u-button>
				</u-upload>
			</view>
			<view style="background-color: #ffffff;border-radius: 8px;padding: 20rpx;margin-top: 20rpx;">
				<view>诊断记录:</view>
				<video ref="myVideo" controls autoplay loop muted :src="bodyData.inquiry_video"
					v-if="bodyData.inquiry_video" style="margin-top: 20rpx;" @error="handleError"
					@canplay="handleCanPlay" @play="handlePlay" @pause="handlePause" @ended="handleEnded"></video>
				<u-upload @afterRead="videoRead" style="margin-top: 20rpx;" accept="video">
					<u-button type="info">上传</u-button>
				</u-upload>
			</view>
			<view style="background-color: #ffffff;border-radius: 8px;padding: 20rpx;margin-top: 20rpx;">
				<u--textarea v-model="bodyData.diagnostic_description" placeholder="诊断概述（非必选"></u--textarea>
			</view>
			<view style="background-color: #ffffff;border-radius: 8px;padding: 20rpx;margin-top: 20rpx;">
				<checkbox-group @change="checkChange">
					<label>
						<checkbox value="cb" :checked="bodyData.is_need_by_drug" style="transform:scale(0.7)" />是否代买药品
					</label>
				</checkbox-group>
				<button style="border-radius: 20rpx;background-color: #909399;color: #ffffff;margin-top: 40rpx;"
					@click="handleSubmit">记录</button>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		uploadFile
	} from '../../api/common';
	import {
		medicalRegistration,
		queryInquiryRecordById
	} from '../../api/system/doctor';
	import {
		toast
	} from '../../utils/common';
	export default {
		data() {
			return {
				cardInfo: {},
				bodyData: {
					bind_inquiry_id: null,
					diagnostic_description: '',
					medical_img: '',
					inquiry_video: '',
					is_need_by_drug: false
				}
			};
		},
		onLoad(options) {
			this.getCardInfo(options.id)
			this.bodyData.bind_inquiry_id = parseInt(options.id)
		},
		methods: {
			async getCardInfo(id) {
				const res = await queryInquiryRecordById(id)
				this.cardInfo = res.data[0]
				console.log(this.cardInfo)
			},
			async imgRead(e) {
				console.log(e)
				const res = await uploadFile(e.file.url)
				this.bodyData.medical_img = res.data[0]
			},
			async videoRead(e) {
				console.log(e)
				const res = await uploadFile(e.file.url)
				this.bodyData.inquiry_video = res.data[0]
			},
			checkChange(e) {
				console.log(e)
				if (e.detail.value.length > 0) {
					this.bodyData.is_need_by_drug = true
				} else {
					this.bodyData.is_need_by_drug = false
				}
				console.log(this.bodyData.is_need_by_drug)
			},
			async handleSubmit() {
				if(this.bodyData.inquiry_video === '' || this.bodyData.medical_img === '') {
					return toast('请填写完整的信息')
				}
				await medicalRegistration(this.bodyData)
				toast('登记成功')
				this.$tab.navigateBack()
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