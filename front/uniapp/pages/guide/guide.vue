<template>
	<view class="container">
		<view class="title">
			<!-- <svg t="1727956152858" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
				p-id="1901" width="256" height="256">
				<path
					d="M1008.794182 514.180666c0 51.085492-41.412179 92.498694-92.497671 92.498694L112.022864 606.679359c-51.083445 0-92.497671-41.413202-92.497671-92.498694l0 0c0-51.083445 41.413202-92.497671 92.497671-92.497671l804.27467 0C967.382003 421.682995 1008.794182 463.096197 1008.794182 514.180666L1008.794182 514.180666z"
					fill="#00A651" p-id="1902"></path>
				<path
					d="M514.159688 19.547195c51.085492 0 92.498694 41.412179 92.498694 92.496647l0 804.273646c0 51.085492-41.413202 92.498694-92.498694 92.498694l0 0c-51.084469 0-92.497671-41.413202-92.497671-92.498694L421.662017 112.043842C421.66304 60.959374 463.076242 19.547195 514.159688 19.547195L514.159688 19.547195z"
					fill="#00A651" p-id="1903"></path>
			</svg> -->
			<img src="@/static/images/mobile-logo.jpg" alt="" style="width: 130rpx;height: 100rpx;" />
			<text class="title-text">医邻助手</text>
		</view>
		<view class="desc">
			你的医生邻居
		</view>
	</view>
</template>

<script>
	  import { getToken } from '@/utils/auth'
	export default {
		data() {
			return {
				timer: null // 用于保存计时器ID
			}
		},
		onShow() {
			this.startTimer();
		},
		methods: {
			startTimer() {
				this.timer = setTimeout(() => {
					this.redirectToTargetPage();
				}, 2000); // 2000毫秒即2秒后跳转
			},
			redirectToTargetPage() {
				// 根据实际需求选择合适的跳转方式
				this.checkLogin()
			},
			checkLogin() {
				if (!getToken()) {
					this.$tab.reLaunch('/pages/login')
				} else {
					this.$tab.reLaunch('/pages/index')
				}
			}
		},
		onDestroyed() {
			// 页面关闭时清除定时器
			if (this.timer) {
				clearTimeout(this.timer);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		padding: 0 20rpx;
		background-color: #ffffff;

		.title {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.icon {
				width: 80rpx;
				height: 80rpx;
			}

			.title-text {
				font-size: 40rpx;
				font-family: "Microsoft YaHei", 微软雅黑;
				color: rgb(51, 51, 51);
			}
		}

		.desc {
			margin-top: 32rpx;
			color: rgb(164, 161, 161);
		}
	}
</style>