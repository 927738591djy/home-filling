<template>
	<view class="order-allocation">
		<view class="top">
			<navbar :statusBarHeight="statusBarHeight" :cachetHeight="cachetHeight" title="订单分配" :blackArrow="true" @onBack="goBack">
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
			<u-tabs font-size="27" :list="list" :is-scroll="false" :current="current" @change="change" active-color="#FC615F"></u-tabs>
		</view>
			
			<u-badge type="green" class="badge">66</u-badge>
		
		<view class="bottom-boxs">
			<view class="bottom-box" v-for="i in 5" >
				<view>
					<image style="width: 36rpx;height: 36rpx;vertical-align: middle;"
						src="../../static/img/order/order.png"></image>
				</view>

				<view class="box-right">
					<view class="bottom-box-title">勘测单</view>
					<view class="order-detail">
						<view class="red-circle"></view>
						<view class="order-label">下单时间：</view>
						<view>2022-11-14 07:20:17</view>
					</view>
					<view class="order-detail">
						<view class="blue-circle"></view>
						<view class="order-label">客户信息：</view>
						<view>张三 138 7289 2990</view>
					</view>
					<view @click="toOrderDetail" class="button">立即指派</view>
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
						name: '全部',
						count:4
					}, {
						name: '新订单',
						count:4
					}, {
						name: '勘测单',
						count:4
					},
					{
						name: '安装单',
						count:4
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
			},
			toOrderDetail(){
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

	.bottom-boxs {
		padding: 32rpx 24rpx 0 24rpx;
	}

	.bottom-box {
		background-color: #fff;
		padding: 24rpx 32rpx;
		border-radius: 5px;
		display: flex;
		margin-bottom: 24rpx;
	}

	.bottom-box-title {
		width: 100%;
		font-size: 32rpx;
		border-bottom: 2rpx solid #E1E1E1;
		color: #000;
		padding-bottom: 20rpx;
	}

	.box-title {
		display: flex;
		align-items: center;
	}

	.order-detail {
		display: flex;
		align-items: center;
		font-size: 28rpx;
		padding: 15rpx 0;
		color: #666666;
	}

	.red-circle {
		width: 16rpx;
		height: 16rpx;
		background-color: #FF2C34;
		border-radius: 50%;
	}

	.blue-circle {
		width: 16rpx;
		height: 16rpx;
		background-color: #0083FF;
		border-radius: 50%;
	}

	.order-label {
		color: #999999;
		margin: 0 20rpx;
	}

	.order-detail:nth-child(3) {
		border-bottom: 2rpx dotted #E1E1E1;
		padding-top: 0;
	}

	.box-right {
		width: 100%;
		margin-left: 16rpx;
	}
	.button{
		width: 152rpx;
		height: 56rpx;
		background: #FF9600;
		box-shadow: 0px 3px 6px 0px rgba(225,225,225,0.5);
		border-radius: 14px;
		font-size: 24rpx;
		color: #E1E1E1;
		text-align: center;
		line-height: 56rpx;
		float: right;
		margin: 24rpx 0 0 0;
	}
</style>
