<template>
	<view class="container">
		<view class="navigator">
			<uni-icons type="arrow-left" size="40" color="#ffffff" @click="$tab.navigateBack()"></uni-icons>
			<text style="font-size: 40rpx;font-weight: bold;">问诊登记</text>
			<view style="width: 70rpx;height: 70rpx;">

			</view>
		</view>
		<view class="form-container">
			<u-form :model="registerForm" ref="uForm" :rules="rules" labelWidth="200" labelPosition="top">
				<u-form-item label="病人姓名" prop="registerForm.patient" borderBottom>
					<u-input v-model="registerForm.patient" border="none"></u-input>
				</u-form-item>
				<u-form-item label="性别" prop="registerForm.sex" borderBottom>
					<u-radio-group v-model="registerForm.sex" size="30">
						<u-radio v-for="(item, index) in radiolist" :key="index" :label="item.name" :name="item.name"
							@change="radioChange" style="margin-left: 20rpx;" labelSize="30" activeColor="green">
						</u-radio>
					</u-radio-group>
				</u-form-item>
				<u-form-item label="预约类型" prop="registerForm.type" borderBottom>
					<u-picker :show="show" :columns="columns" keyName="label" @confirm="typeConfirm"
						@cancel="show = false"></u-picker>
					<u--input v-model="registerForm.type" disabled disabledColor="#ffffff" placeholder="请选择预约类型"
						border="none"></u--input>
					<u-icon slot="right" name="arrow-right" @click="show = true"></u-icon>
				</u-form-item>
				<u-form-item label="预约时间" prop="registerForm.appointment_time" borderBottom>
					<u-datetime-picker :show="showDate" v-model="registerForm.time" mode="datetime" type="datetime"
						@confirm="timeConfirm" @cancel="showDate = false"></u-datetime-picker>
					<u--input v-model="registerForm.appointment_time" disabled disabledColor="#ffffff"
						placeholder="请选择预约时间" border="none"></u--input>
					<u-icon slot="right" name="arrow-right" @click="showDate = true"></u-icon>
				</u-form-item>
				<u-form-item label="病情描述" prop="registerForm.inquiry_detail" borderBottom>
					<view style="width: 100%;">
						<u--textarea v-model="registerForm.inquiry_detail" placeholder="请输入病情描述，用于预诊断" style="width: 100%;min-height: 200rpx;"></u--textarea>
						<view style="margin-top: 20rpx;display: flex;align-items: center;color: #909399;" @click="toAIQnA">不清楚病情？试试AI问诊
						<image src="../../static/images/tabbar/AI-chat.png" style="width: 50rpx;height: 50rpx;margin-left: 10rpx;"></image>
						</view>
					</view>
				</u-form-item>
				<u-form-item label="预留电话" prop="registerForm.inquiry_detail" borderBottom>
					<u-input v-model="registerForm.reserved_phone" border="none" placeholder="请输入电话号码"></u-input>
				</u-form-item>
				<u-form-item>
					<button class="cssbuttons-io-button"
						style="width: 80%;display: flex;justify-content: center;height: 50%;" @click="handleUpdate">
						<span style="font-size: 35rpx;font-weight: bold;">登记</span>
					</button>
				</u-form-item>
			</u-form>

		</view>
	</view>
</template>

<script>
	import { createInquiryRecord } from '../../api/system/patient';
import { getMedicalSum } from '../../api/system/user';
import { toast } from '../../utils/common';
import {
		formatDate,
		formatTimestamp
	} from '../../utils/timeFormat';
	export default {
		data() {
			return {
				registerForm: {
					patient: this.$store.state.user.userInfo.username,
					sex: this.$store.state.user.userInfo.sex,
					type: '',
					appointment_time: '',
					inquiry_detail: '',
					reserved_phone: this.$store.state.user.userInfo.phone
				},
				rules: {},
				radiolist: [{
						name: '男',
						disabled: false
					},
					{
						name: '女',
						disabled: false
					}
				],
				columns: [
					[{
							label: '在家就医',
							id: '0'
						},
						{
							label: '社区就医',
							id: '1'
						},
					]
				],
				show: false,
				showDate: false
			};
		},
		onLoad(options) {
			this.registerForm.inquiry_detail = options.inquiryDetail
			console.log(this.registerForm.inquiry_detail)
		},
		methods: {
			radioChange(e) {
				// console.log(e)
				this.registerForm.sex = e
			},
			typeConfirm(e) {
				this.registerForm.type = e.value[0].label
				// console.log(this.registerForm.type)
				this.show = false
			},
			timeConfirm(e) {
				this.registerForm.appointment_time = formatTimestamp(e.value)
				this.showDate = false
				// console.log(this.registerForm.appointment_time)
			},
			async handleUpdate() {
				console.log(this.registerForm)
				await createInquiryRecord(this.registerForm)
				uni.reLaunch({
					url:'/pages/index'
				})
				toast('创建成功')
			},
			toAIQnA() {
				uni.switchTab({
					url:'/pages/mine/index'
				})
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

		.form-container {
			flex: 1;
			background-color: #ffffff;
			padding: 20rpx;
			.cssbuttons-io-button {
				margin-top: 20rpx;
				display: flex;
				align-items: center;
				font-family: inherit;
				cursor: pointer;
				font-weight: 500;
				font-size: 32rpx;
				padding: 0.7em 1.4em 0.7em 1.1em;
				color: white;
				background: #ad5389;
				background: linear-gradient(0deg,
						rgba(20, 167, 62, 1) 0%,
						rgba(102, 247, 113, 1) 100%);
				border: none;
				box-shadow: 0 0.7em 1.5em -0.5em #14a73e98;
				letter-spacing: 0.05em;
				border-radius: 20em;
			}
			
			.cssbuttons-io-button svg {
				margin-right: 6px;
			}
			
			.cssbuttons-io-button:hover {
				box-shadow: 0 0.5em 1.5em -0.5em #14a73e98;
			}
			
			.cssbuttons-io-button:active {
				box-shadow: 0 0.3em 1em -0.5em #14a73e98;
			}
		}
	}
</style>