<template>
	<view>
	</view>
</template>

<script>
	import {
		getToken
	} from '@/utils/auth'
	export default {
		data() {
			return {

			}
		},
		onLoad() {
			const value = uni.getStorageSync('launchFlag');
			if (value) {
				// 如何已经有，直接去home首页
				this.checkLogin()
			} else {
				// 没有值，跳到引导页，并存储，下次打开就不会进去引导页
				uni.setStorage({
					key: 'launchFlag',
					data: true
				});
				uni.redirectTo({
					url: '/pages/guide/guide'
				});
			}
		},
		methods: {
			checkLogin() {
				if (!getToken()) {
					this.$tab.reLaunch('/pages/login')
				} else {
					this.$tab.reLaunch('/pages/index')
				}
			}
		}
	}
</script>

<style>

</style>