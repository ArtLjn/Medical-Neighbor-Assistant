<template>
	<view class="container">
		<view class="navigator">
			<uni-icons type="arrow-left" size="40" color="#ffffff" style="font-weight: bold;"
				@click="$tab.navigateBack()"></uni-icons>
			<text style="font-size: 50rpx;font-weight: 550;">个人信息</text>
			<view style="width: 70rpx;height: 70rpx;">
				
			</view>
		</view>
		<view class="avatar-container">
			<img src="../../static/images/patient.png" alt="" style="width: 150rpx;height: 150rpx;" />
		</view>
		<view class="info-container">
			<uni-forms ref="form" :modelValue="formData" :rules="rules" style="padding: 20rpx;">
				<uni-forms-item label="用户名">
					<uni-easyinput type="text" v-model="formData.username" placeholder="请输入用户名" disabled />
				</uni-forms-item>
				<uni-forms-item label="身份">
					<uni-data-select v-model="formData.role" :localdata="range" disabled></uni-data-select>
				</uni-forms-item>
				<uni-forms-item label="性别">
					<uni-data-select v-model="formData.sex" :localdata="sexRange" @change="sexChange"></uni-data-select>
				</uni-forms-item>
				<uni-forms-item label="区块链账户">
					<uni-easyinput type="text" v-model="formData.home_addr" placeholder="请输入区块链账户" disabled />
				</uni-forms-item>
				<uni-forms-item label="昵称">
					<uni-easyinput type="text" v-model="formData.nickname" placeholder="请输入昵称" />
				</uni-forms-item>
				<uni-forms-item label="电话">
					<uni-easyinput type="text" v-model="formData.phone" placeholder="请输入电话" />
				</uni-forms-item>
				<uni-forms-item>
					<button class="cssbuttons-io-button"
						style="width: 80%;display: flex;justify-content: center;height: 80%;" @click="handleUpdate">
						<span style="font-size: 35rpx;font-weight: bold;">修改个人信息</span>
					</button>
				</uni-forms-item>
			</uni-forms>
		</view>
	</view>
</template>

<script>
import { updateUserProfile } from '../../api/system/user';
import { setToken } from '../../utils/auth';
import { toast } from '../../utils/common';
import { mapMutations } from 'vuex';
	export default {
		data() {
			return {
				formData: this.$store.state.user.userInfo,
				range: [{
						value: '医师',
						text: '医师'
					},
					{
						value: '患者',
						text: '患者'
					},
				],
				sexRange: [{
						value: '男',
						text: '男'
					},
					{
						value: '女',
						text: '女'
					}
				],
				rules: {}
			};
		},
		methods: {
			formSubmit() {

			},
			formReset() {

			},
			sexChange(e) {
				this.formData.sex = e
			},
			...mapMutations('user', ['setUserInfo']),
			async handleUpdate() {
				await updateUserProfile(this.formData)
				this.setUserInfo(this.formData);
				toast('修改成功')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		height: 100%;
		display: flex;
		flex-direction: column;
		background-color: #84C99A;

		.navigator {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 25rpx 20rpx;
			color: #ffffff;
		}

		.avatar-container {
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.info-container {
			flex: 1;
			background-color: #ffffff;
			margin-top: 30rpx;
			border-radius: 40rpx 40rpx 0 0;
			padding: 10rpx 20rpx;

			/* From Uiverse.io by adamgiebl */
			.cssbuttons-io-button {
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