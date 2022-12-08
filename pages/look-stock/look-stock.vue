<template>
	<view class="look-stock">
		<view class="top">
			<navbar :statusBarHeight="statusBarHeight" :cachetHeight="cachetHeight" title="查看库存" :blackArrow="true"
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


		<view class="bottom">
			<view v-for="(i,index) in 10" :key="index" class="bottom-box">
				<view class="bottom-small-box">
					<view class="box-label">品牌</view>
					<view class="red">特斯拉</view>
				</view>
				<view class="bottom-small-box middle-small-box">
					<view class="box-label">规格/型号</view>
					<view class="huang">16276-02-G</view>
				</view>
				<view class="bottom-small-box">
					<view class="box-label">库存</view>
					<view class="blue">19</view>
				</view>
			</view>
		</view>


		<view class="button">
			入库
		</view>
		<view class="button out-stock">
			非安装出库
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
		display: flex;
		justify-content: space-around;
		font-size: 28rpx;
		font-weight: 500;
	}

	.middle-small-box {
		border: 2rpx solid #E7E7E7;
		padding: 0 30rpx;
		border-top: 0;
		border-bottom: 0;
	}

	.red {
		color: #FF2B31;
	}

	.huang {
		color: #FF7B27;
	}

	.blue {
		color: #0083FF;
	}

	.box-label {
		color: #999999;
		font-size: 24rpx;
		margin-bottom: 30rpx;
	}


.button {
		position: fixed;
		width: 80%;
		background-color: #FD5554;
		color: #fff;
		font-size: 32rpx;
		border-radius: 60rpx;
		padding: 20rpx;
		left: 50%;
		transform: translateX(-50%);
		bottom: 150rpx;
		text-align: center;
	}

	.bottom-small-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.out-stock{
		bottom: 36rpx;
		background-color: #D9D9D9;
		color: #FD5554;
	}
	.look-stock{
		padding-bottom: 200rpx;
	}
</style>
