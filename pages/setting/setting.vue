<template>
	<view>
		<view class="top">
			<navbar color="#000" title="设置">
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
				checked:false,
			}
		},
		methods: {
	
		},
		onLoad() {
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
