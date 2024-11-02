<template>
	<view class="container">
		<view class="navigation">
			<uni-icons type="bars" size="30" color="#ffffff"
				@click="$tab.navigateTo('/pages/userInfo/userInfo')"></uni-icons>
			<view class="navigation-center">
				<text style="font-size: 32rpx;">医邻助手</text>
			</view>
			<uni-icons type="gear" size="30" color="#ffffff" @click="logout"></uni-icons>
		</view>
		<view class="main-container">
			<view class="search-container">
				<input class="search-input" type="text" placeholder="查询记录.." />
				<button class="search-button">搜索</button>
			</view>
			<view class="sub-container">
				<u-tabs :list="tabList" @click="tabClick" lineWidth="30" lineColor="#f56c6c" :activeStyle="{
		    color: '#303133',
		    fontWeight: 'bold',
		    transform: 'scale(1.05)'
		}" :inactiveStyle="{
		    color: '#606266',
		    transform: 'scale(1)'
		}" itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;"></u-tabs>
			</view>
			<scroll-view scroll-y="true" class="info-container">
				<view class="info-card" v-for="item in infoList" :key="item.id" style="margin-top: 20rpx;"
					@click="toPage(item)">
					<image class="doctor-avatar" src="@/static/images/doctor-avatar.png" mode="aspectFill"></image>
					<view class="info-section">
						<view class="card-header">
							<text class="title">代买卡片</text>
						</view>
						<view class="card-body">
							<view class="item">
								<text class="label">创建时间:</text>
								<text class="value">{{ item.create_time }}</text>
							</view>
							<view class="item">
								<text class="label">患者姓名:</text>
								<text class="value">{{ item.patient_username }}</text>
							</view>
							<view class="item">
								<text class="label">年龄:</text>
								<text class="value">{{ item.patient_age }}</text>
							</view>
							<view class="item">
								<text class="label">性别:</text>
								<text class="value">{{ item.patient_sex }}</text>
							</view>
							<view class="item">
								<text class="label">问诊类型:</text>
								<text class="value">{{ item.type }}</text>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
import { queryPhysiciansAgentHistoryRecord } from '../../api/system/doctor';
import { queryPatientAgentDrugHistory } from '../../api/system/patient';
import { setToken } from '../../utils/auth';
import { toast } from '../../utils/common';
	export default {
		data() {
			return {
				tabList: [],
				infoList: [],
				activeIndex: ''
			};
		},
		onLoad() {
			console.log(this.$store.state.user.userInfo.role)
			if (this.$store.state.user.userInfo.role === '患者') {
				this.tabList = [{
						name: '待收货'
					},
					{
						name: '已购药品'
					},
				]
			} else if (this.$store.state.user.userInfo.role === '医师') {
				this.tabList = [{
						name: '待处理'
					},
					{
						name: '待派送'
					},
					{
						name: '历史处理'
					}
				]
			} else {
				toast('用户角色不存在')
				uni.reLaunch({
					url:'/pages/login'
				})
			}
		},
		onShow() {
			if(this.$store.state.user.userInfo.role === '患者') {
				this.tabClick({name: this.activeIndex || '待收货'})
				console.log(this.activeIndex)
			} else if(this.$store.state.user.userInfo.role === '医师') {
				this.tabClick({name: this.activeIndex || '待处理'})
				console.log(this.activeIndex)
			}
		},
		methods: {
			async tabClick(e) {
				this.activeIndex = e.name
				if(e.name === '待处理') {
					const res = await queryPhysiciansAgentHistoryRecord('2')
					this.infoList = res.data[0].list
				} else if(e.name === '待派送') {
					const res = await queryPhysiciansAgentHistoryRecord('4')
					this.infoList = res.data[0].list
				} else if(e.name === '历史处理') {
					const res = await queryPhysiciansAgentHistoryRecord('5')
					this.infoList = res.data[0].list
				} else if(e.name === '待收货') {
					const res = await queryPatientAgentDrugHistory('3')
					this.infoList = res.data[0].list
				} else if(e.name === '已购药品') {
					const res = await queryPatientAgentDrugHistory('5')
					this.infoList = res.data[0].list
				} else {
					toast('用户角色不存在')
					uni.reLaunch({
						url:'/pages/login'
					})
				}
			},
			toPage(item) {
				if(this.activeIndex === '待处理') {
					uni.navigateTo({
						url:`/pages/shopReceive/shopReceive?data=${JSON.stringify(item)}&&type=接单`
					})
				} else if(this.activeIndex === '待派送') {
					uni.navigateTo({
						url:`/pages/shopReceive/shopReceive?data=${JSON.stringify(item)}&&type=待派送`
					})
				} else if(this.activeIndex === '历史处理' || this.activeIndex === '已购药品') {
					console.log(111111111)
					uni.navigateTo({
						url:`/pages/shopReceive/shopReceive?data=${JSON.stringify(item)}&&type=历史处理`
					})
				}
			},
			logout() {
				setToken('')
				this.$store.commit('user/SET_TOKEN', '')
				uni.reLaunch({
					url: '/pages/login'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	// 定义颜色变量
	$green-border-color: #4CAF50;
	$darker-green-border-color: #388E3C;
	$darkest-green-border-color: #1B5E20;
	$input-background-color: #f9f9f9;
	$text-color: #333;
	$button-text-color: white;
	$input-font-size: 16px;
	$shadow-color: rgba(0, 0, 0, 0.1);

	.container {
		height: 100%;
		display: flex;
		flex-direction: column;
		background-color: #ffffff;

		.navigation {
			height: 100rpx;
			padding: 0 30rpx;
			background-color: #84C99A;
			display: flex;
			justify-content: space-between;
			align-items: center;
			color: #ffffff;

			.navigation-center {
				display: flex;
				align-items: center;
			}
		}

		.main-container {
			flex: 1;
			padding: 20rpx;
			display: flex;
			flex-direction: column;
			overflow: auto;
			// 定义颜色变量
			$green-border-color: #4CAF50;
			$darker-green-border-color: #388E3C;
			$darkest-green-border-color: #1B5E20;
			$input-background-color: #f9f9f9;
			$text-color: #333;
			$button-text-color: white;
			$input-font-size: 16px;
			$shadow-color: rgba(0, 0, 0, 0.1);

			.search-container {
				display: flex;
				justify-content: center;
				align-items: center;
				margin: 20rpx; // 边距

				.search-input {
					width: 80%; // 调整宽度以适应屏幕大小
					height: 40px; // 输入框高度
					padding: 0 15px; // 内边距
					border: 2px solid $green-border-color; // 绿色边框
					border-radius: 25px 0 0 25px; // 左侧圆角
					background-color: $input-background-color; // 背景颜色
					color: $text-color; // 文字颜色
					font-size: $input-font-size; // 字体大小
					transition: all 0.3s ease; // 平滑过渡效果

					&:hover {
						border-color: $darker-green-border-color; // 更深的绿色
					}

					&:focus {
						border-color: $darkest-green-border-color; // 更深的绿色
						outline: none; // 移除默认轮廓
						box-shadow: 0 0 10px $shadow-color; // 添加阴影
					}
				}

				.search-button {
					width: 20%; // 调整宽度以适应屏幕大小
					height: 40px; // 按钮高度
					padding: 0 15px; // 内边距
					border: 2px solid $green-border-color; // 绿色边框
					border-radius: 0 25px 25px 0; // 右侧圆角
					background-color: $green-border-color; // 绿色背景
					color: $button-text-color; // 文字颜色
					font-size: $input-font-size; // 字体大小
					cursor: pointer; // 鼠标指针样式
					transition: all 0.3s ease; // 平滑过渡效果

					&:hover {
						background-color: $darker-green-border-color; // 更深的绿色
					}

					&:active {
						background-color: $darkest-green-border-color; // 更深的绿色
					}
				}
			}

			.sub-container {
				padding: 0 30rpx;
				margin-top: 30rpx;
			}

			.info-container {
				padding: 20rpx;
				flex: 1;
				overflow: auto;


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
		}
	}
</style>