<template>
	<view>
		<view class="top">
			<view :style="{height:(statusBarHeight+10)+'px'}" class="status_bar"></view>
			<view class="title">家充装</view>
			<view class="home">
				<image src="../../static/img/home/logo.png" alt="">
			</view>
		</view>
		<view>
			<view class="app-manage">
				<u-section title="应用管理" :right="false" line-color="#FF2C34" font-size="32"></u-section>
			</view>
			<u-grid :col="3" :border="false">
				<u-grid-item :custom-style="{padding:'50rpx 0'}">
					<image style="width: 80rpx; height: 80rpx;margin-bottom: 24rpx;"
						src="../../static/img/home/order.png" mode=""></image>
					<view class="grid-text">订单分配</view>
				</u-grid-item>
				<u-grid-item :custom-style="{padding:'50rpx 0'}">
					<image style="width: 80rpx; height: 80rpx;margin-bottom: 24rpx;"
						src="../../static/img/home/order.png" mode=""></image>
					<view class="grid-text">订单分配</view>
				</u-grid-item>
				<u-grid-item :custom-style="{padding:'50rpx 0'}">
					<image style="width: 80rpx; height: 80rpx;margin-bottom: 24rpx;"
						src="../../static/img/home/order.png" mode=""></image>
					<view class="grid-text">订单分配</view>
				</u-grid-item>
				<u-grid-item :custom-style="{padding:'50rpx 0'}">
					<image style="width: 80rpx; height: 80rpx;margin-bottom: 24rpx;"
						src="../../static/img/home/order.png" mode=""></image>
					<view class="grid-text">订单分配</view>
				</u-grid-item>
				<u-grid-item :custom-style="{padding:'50rpx 0'}">
					<image style="width: 80rpx; height: 80rpx;margin-bottom: 24rpx;"
						src="../../static/img/home/order.png" mode=""></image>
					<view class="grid-text">订单分配</view>
				</u-grid-item>
				<u-grid-item :custom-style="{padding:'50rpx 0'}">
					<image style="width: 80rpx; height: 80rpx;margin-bottom: 24rpx;"
						src="../../static/img/home/order.png" mode=""></image>
					<view class="grid-text">订单分配</view>
				</u-grid-item>
				<u-grid-item :custom-style="{padding:'50rpx 0'}">
					<image style="width: 80rpx; height: 80rpx;margin-bottom: 24rpx;"
						src="../../static/img/home/order.png" mode=""></image>
					<view class="grid-text">订单分配</view>
				</u-grid-item>
				<u-grid-item :custom-style="{padding:'50rpx 0'}">
					<image style="width: 80rpx; height: 80rpx;margin-bottom: 24rpx;"
						src="../../static/img/home/order.png" mode=""></image>
					<view class="grid-text">订单分配</view>
				</u-grid-item>
				<u-grid-item :custom-style="{padding:'50rpx 0'}">
					<image style="width: 80rpx; height: 80rpx;margin-bottom: 24rpx;"
						src="../../static/img/home/order.png" mode=""></image>
					<view class="grid-text">订单分配</view>
				</u-grid-item>
			</u-grid>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight: 0
			}
		},
		onLoad() {
			// 状态栏高度，单位：px
			this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
			console.log(this.statusBarHeight);

		}
	}
</script>

<style>
	.status_bar {
		width: 100%;
	}

	.top {
		height: 25vh;
		background: linear-gradient(to bottom, #FF2C2E, #FC615F);

	}

	.title {
		color: #fff;
		font-size: 36rpx;
		padding-left: 30rpx;
	}

	.home {
		display: flex;
		justify-content: center;
		margin-top: 60rpx;
	}

	.home image {
		width: 148rpx;
		height: 148rpx;
	}

	.app-manage {
		font-family: "PingFang SC";
		padding: 36rpx 0 28rpx 24rpx;
		margin-top: 36rpx;
	}
	.u-section .u-section__title__text{
		padding-left: 20rpx;
	}
</style>
