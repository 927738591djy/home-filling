\<template>
	<view class="order-allocation">
		<view class="top">
			<navbar :statusBarHeight="statusBarHeight" :cachetHeight="cachetHeight" title="审批流程" :blackArrow="true"
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

		<view style="padding: 0 40rpx 0 0;width: 100%; background-color: #fff;border-bottom: 2rpx solid #E7E7E7;">
			<u-tabs font-size="27" :list="list" :is-scroll="false" :current="current" @change="change"
				active-color="#FC615F"></u-tabs>
		</view>

		<view style="padding: 0 40rpx 0 0;width: 100%; background-color: #fff;">
			<u-tabs font-size="27" :list="twolist" :is-scroll="false" :current="current" @change="change"
				active-color="#FC615F"></u-tabs>
		</view>


		<view class="bottom">
			<view class="bottom-box" v-for="(i,index) in 5" :key="index">
				<view class="box-title">整改审核</view>
				<view class="order-detail">
					<view class="box-label">审核日期:</view>
					<view>2022-11-14</view>
				</view>
				<view class="order-detail">
					<view class="box-label">单号:</view>
					<view>10293820</view>
				</view>
				<view class="order-detail">
					<view class="box-label">状态:</view>
					<view>审核通过-待打款</view>
				</view>
				<view class="see-detail">查看详情
					<u-icon style="margin-left: 15rpx;"
							name="arrow-right"></u-icon>
				</view>
			</view>
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
						name: '勘测审核',
						count: 4,
					}, {
						name: '安装审核',
						count: 4
					}, {
						name: '整改审核',
						count: 4
					},
					{
						name: '结算审核',
						count: 4
					}
				],
				twolist: [{
					name: '待确认',
					count: 4,
				}, {
					name: '审核中',
					count: 4
				}, {
					name: '审核完成',
					count: 4
				}],
				current: 0
			}
		},
		methods: {
			change(index) {
				this.current = index;
			},
			toOrderDetail() {
				uni.navigateTo({
					url: '../order-assign/order-assign'
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

	.bottom {
		padding: 24rpx 32rpx;
		border-radius: 5px;
		margin: 32rpx 24rpx;
	}

	.bottom-box {
		width: 100%;
		margin-bottom: 28rpx;
		background-color: #fff;
		border-radius: 15rpx;
		padding: 28rpx 32rpx;
	}

	.box-title {
		width: 100%;
		font-size: 32rpx;
		border-bottom: 2rpx solid #E1E1E1;
		color: #000;
		padding-bottom: 20rpx;
		display: flex;
		align-items: center;
		border-bottom: 2rpx solid #E7E7E7;
	}

	.see-detail {
		border-top: 2rpx solid #E7E7E7;
		padding-top: 20rpx;
		display: flex;
		justify-content: flex-end;
		margin-top: 10rpx;
	}

	.order-detail {
		display: flex;
		align-items: center;
		font-size: 28rpx;
		padding: 15rpx 0;
		color: #000;
	}

	.box-label {
		color: #999999;
		margin-right: 20rpx;
	}


	.button {
		width: 152rpx;
		height: 56rpx;
		background: #FF9600;
		box-shadow: 0px 3px 6px 0px rgba(225, 225, 225, 0.5);
		border-radius: 14px;
		font-size: 24rpx;
		color: #E1E1E1;
		text-align: center;
		line-height: 56rpx;
		float: right;
		margin: 24rpx 0 0 0;
	}
</style>
