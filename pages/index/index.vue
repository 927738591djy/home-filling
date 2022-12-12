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
				<!-- <u-grid-item :custom-style="{padding:'50rpx 0'}">
					<image style="width: 80rpx; height: 80rpx;margin-bottom: 24rpx;"
						src="../../static/img/home/order.png" mode=""></image>
					<view class="grid-text">订单分配</view>
				</u-grid-item> -->
				<u-grid-item v-for="(item,index) in homeMenuList" :custom-style="{padding:'50rpx 0'}">
					<image style="width: 80rpx; height: 80rpx;margin-bottom: 24rpx;" :src="item.ImageUrl" mode="">
					</image>
					<view class="grid-text">{{item.menuName}}</view>
				</u-grid-item>
			</u-grid>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight: 0,
				homeMenuList: [] //首页图文菜单列表
			}
		},
		onLoad() {
			// 状态栏高度，单位：px
			this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
			console.log(this.statusBarHeight);
			this.getHomeMenuList()
			this.loginAuthorization()
		},
		methods: {
			// 获取首页菜单列表图文
			getHomeMenuList() {
				this.$lsxmApi.getHomeMenuList().then(res => {
					if (res.data.data.code == 200 || res.data.data.code == 1) {
						// 请求成功,返回数据
						this.homeMenuList = res.data.data.data
						console.log(this.homeMenuList);
					} else {
						// 弹出错误提示消息
					}
				})
			},

			loginAuthorization() {
				this.$lsxmApi.loginAuthorization({phone:1775529928}).then(res => {
					if (res.data.data.code == 200 || res.data.data.code == 1) {
						// 请求成功,返回数据
						this.homeMenuList = res.data.data.data
						console.log(this.homeMenuList);
					} else {
						// 弹出错误提示消息
					}
				})
			}
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

	/deep/.u-section .u-section__title__text {
		padding-left: 20rpx;
	}
</style>
