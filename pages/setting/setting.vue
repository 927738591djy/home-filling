<template>
	<view>
		<view class="top">
			<navbar color="#000" :statusBarHeight="statusBarHeight" :cachetHeight="cachetHeight" title="设置"
				@onBack="goBack">
			</navbar>
		</view>
		<view class="bottom">
			<view>授权地理位置</view>
			<u-switch v-model="checked" active-color="#FF3637" inactive-color="#E9E9E9"></u-switch>
		</view>
	</view>
</template>

<script>
	import navbar from '../../compoents/navbar/navbar.vue'
	export default {
		components: {
			navbar
		},
		data() {
			return {
				statusBarHeight: 0,
				cachetHeight: 0,
				checked:false,
			}
		},
		methods: {
	
		},
		onLoad() {
			// 状态栏高度，单位：rpx
			this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
			console.log(this.statusBarHeight + '状态');
			this.cachetHeight = uni.getMenuButtonBoundingClientRect().height
			console.log(this.cachetHeight);
		},
	}
</script>

<style>
	page {
		background-color: #fff;
	}
	.top {
		background: #fff;
		position: relative;
		overflow: hidden;
		height: 11vh;
		color: #000;
	}
	.bottom{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 50rpx 50rpx;
		font-size: 28rpx;
		color: #000;
	}
</style>
