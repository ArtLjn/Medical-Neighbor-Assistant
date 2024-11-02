<template>

</template>

<script>
	export default {
		onLoad(options) {
			const chatId = this.$store.state.user.userInfo.uuid
			// 根据参数执行重定向
			if (chatId) {
				uni.redirectTo({
					url: `/pages/mine/index?chatId=${chatId}`
				});
			} else {
				uni.navigateBack()
			}
		}
	}
</script>

<style>
</style>