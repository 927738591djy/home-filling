<template>
	<view class="order-allocation">
		<view class="top">
			<navbar :statusBarHeight="statusBarHeight" :cachetHeight="cachetHeight" title="订单分配" @onBack="goBack">
			</navbar>
			<view class="light-circle"></view>
			<view class="light-circle-right"></view>
		</view>
		<view class="search">
			<view class="search-input">
				<image style="width: 48rpx;height: 48rpx;margin-right: 12rpx;" src="../../static/img/order/search.png">
				</image>
				<input type="text" placeholder="搜索预设文案">
			</view>
		</view>

		<u-tabs :list="list" :is-scroll="false" :current="current" @change="change"></u-tabs>
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
				list: [{
						name: '全部'
					}, {
						name: '新订单'
					}, {
						name: '勘测单',
					},
					{
						name: '安装单',
					},
					{
						name: '售后单',
					}
				],
				current: 0
			}
		},
		methods: {
			change(index) {
				this.current = index;
			}
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

<style scoped>
	.top {
		background: linear-gradient(to bottom, #FF2C2E, #FC615F);
		position: relative;
		overflow: hidden;
		height: 11vh;
	}

	.light-circle {
		background-color: #FD7B79;
		width: 1000rpx;
		height: 700rpx;
		border-radius: 60%;
		position: absolute;
		left: -700rpx;
		top: -100px;
		z-index: 1;
	}

	.light-circle-right {
		background-color: #FD7B79;
		width: 1000rpx;
		height: 700rpx;
		border-radius: 60%;
		position: absolute;
		right: -800rpx;
		top: -100px;
		z-index: 1;
	}

	.search {
		background-color: #fff;
		padding: 16rpx 24rpx;
	}

	.search-input {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #F8F8F8;
		height: 64rpx;
		border-radius: 30rpx;
	}

	.search-input::placeholder {
		font-size: 28rpx;
		color: #999;
	}
</style>
