<template>
	<view>
		<view class="top">
			<navbar :statusBarHeight="statusBarHeight" :cachetHeight="cachetHeight" title="订单分配" :blackArrow="true"
				@onBack="goBack">
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
		<view style="padding: 0 40rpx 0 0;width: 100%; background-color: #fff;">
			<u-tabs font-size="27" :list="list" :is-scroll="false" :current="current" @change="change"
				active-color="#FC615F"></u-tabs>
		</view>

		<view class="bottom">
			<u-cell-group>
				<u-cell-item @click="toStateMentDetail" v-for="(i,index) in 10" :key="index" title="舒启海敏iike2021-12-31结算单"></u-cell-item>
			</u-cell-group>
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
				list: [{
					name: '已结算',
					count: 4
				}, {
					name: '待确认',
					count: 4
				}],
				current: 0
			}
		},
		methods: {
			change(index) {
				this.current = index;
			},
			toStateMentDetail(){
				uni.navigateTo({
					url:'../order-assign/order-assign'
				})
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

<style>
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
