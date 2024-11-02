<template>
	<view class="container">
		<web-view :src="viewSrc"
			style="width: 100%; height: 100%;" frameborder="0"
			allow="microphone; camera; midi; encrypted-media; clipboard-read; clipboard-write; vibrate 'self'; usermedia *; sync-xhr 'self' fastgpt.bctweb.cn"
			>
		</web-view>
		<uni-fab :pattern="pattern" :horizontal="horizontal" :vertical="vertical" :direction="direction"
			@fabClick="toRegistration" v-if="$store.state.user.userInfo.role === '患者'"></uni-fab>
	</view>
</template>

<script>
	import {
		getMedicalSum
	} from '../../api/system/user';
	export default {
		data() {
			return {
				// viewSrc: `https://fastgpt.bctweb.cn/chat/share?shareId=5jaidbg0gvf310vjfytszslj&chatId=${this.$store.state.user.userInfo.uuid}`,
				viewSrc: `http://192.168.1.108:3000/chat/share?shareId=5jaidbg0gvf310vjfytszslj&chatId=${this.$store.state.user.userInfo.uuid}`,
				pattern: {
					color: '#7A7E83',
					backgroundColor: '#fff',
					selectedColor: '#007AFF',
					buttonColor: '#007AFF',
					iconColor: '#fff'
				},
				title: 'uni-fab',
				directionStr: '垂直',
				horizontal: 'right',
				vertical: 'bottom',
				direction: 'horizontal',
			};
		},
		methods: {
			async toRegistration() {
				const res = await getMedicalSum()
				const inquiry_detail = res.data[0]
				console.log(inquiry_detail)
				uni.navigateTo({
					url: `/pages/registration/registration?inquiryDetail=${inquiry_detail}`
				})
			},
		},
		mounted() {
			navigator.mediaDevices.getUserMedia({
					audio: true
				})
				.then(function(stream) {
					console.log("麦克风权限已授予");
				})
				.catch(function(err) {
					console.error("麦克风权限请求被拒绝: ", err);
				});
		}
	};
</script>

<style>
	.container {
		padding: 20rpx;
		display: flex;
		flex-direction: column;
		height: calc(100vh - 100rpx);
		/* overflow: auto; */
		/* position: relative; */
	}
</style>