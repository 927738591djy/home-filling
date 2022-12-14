<template>
	<view>
		<view class="top">
			<navbar color="#fff" :statusBarHeight="statusBarHeight" :cachetHeight="cachetHeight" title="我的"
				:blackArrow="true" @onBack="goBack">
			</navbar>
			<div class="avatar">
				<image src="../../static/img/avatar.png" mode=""></image>
				<div class="nick-name">用户名</div>
			</div>
		</view>

		<view class="bottom">

			<u-cell-item title="我的订单" bg-color="#fff">
				<div class="icon" slot="icon">
					<image src="../../static/img/my/order.png"></image>
				</div>
			</u-cell-item>
			<u-cell-item title="我的审批" bg-color="#fff">
				<div class="icon" slot="icon">
					<image src="../../static/img/my/approval.png"></image>
				</div>
			</u-cell-item>


			<div style="margin: 20rpx 0;">
				<u-cell-item title="关于我们" bg-color="#fff">
					<div class="icon" slot="icon">
						<image src="../../static/img/my/about.png"></image>
					</div>
				</u-cell-item>

			</div>
			<u-cell-item title="设置" @click="toSetting" bg-color="#fff">
				<div class="icon" slot="icon">
					<image src="../../static/img/my/setting.png"></image>
				</div>
			</u-cell-item>

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
			toSetting() {
				uni.navigateTo({
					url: '../setting/setting'
				})
			}
		},
		onLoad() {
			// 状态栏高度，单位：rpx
			this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
			this.cachetHeight = uni.getMenuButtonBoundingClientRect().height

		}
	}
</script>

<style>
	.top {
		background-color: #30384E;
		position: relative;
		overflow: hidden;
		height: 25vh;
		color: #000;

	}

	.avatar {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 10vh;
	}

	.avatar image {
		width: 116rpx;
		height: 116rpx;
	}

	.nick-name {
		color: #fff;
		font-size: 32rpx;
	}

	.bottom {
		margin-top: 32rpx;
	}

	/deep/.u-cell {
		padding: 38rpx 32rpx !important;
		color: #000;
		font-size: 28rpx;
	}

	/deep/.u-iconfont {
		color: #000;
	}

	.icon {
		display: flex;
		align-items: center;
	}

	.icon image {
		width: 48rpx;
		height: 48rpx;
		vertical-align: middle;
		margin-right: 20rpx;
	}
</style>
