<template>
	<view>
		<view class="top">
			<navbar color="#000" :statusBarHeight="statusBarHeight" :cachetHeight="cachetHeight" title="结算单详情"
				@onBack="goBack">
			</navbar>
		</view>
		<view class="bottom">
			<view class="bottom-detail">
				<view class="box-label">结算单名称:</view>
				<view>[极氪]2022-11-12结算单</view>
			</view>
			<view class="bottom-detail">
				<view class="box-label">发起人:</view>
				<view>刘琪</view>
			</view>
			<view class="bottom-detail">
				<view class="box-label">施工队名称:</view>
				<view>舒启(史海敏)</view>
			</view>
			<view class="bottom-detail">
				<view class="box-label">订单明细:</view>
				<view>下载 <u-icon style="margin-left: 15rpx;" name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="line"></view>
			<view class="bottom-detail">
				<view class="box-label">超出电缆应付费:</view>
				<view>189020</view>
			</view>
			<view class="bottom-detail">
				<view class="box-label">结算金额:</view>
				<view>29738</view>
			</view>
			<view class="bottom-detail">
				<view class="box-label">结算状态:</view>
				<view>处理中</view>
			</view>
			<view class="bottom-detail">
				<view class="box-label">结算日期:</view>
				<view @click="timeSelectShow=!timeSelectShow">请选择 <u-icon style="margin-left: 15rpx;"
						name="arrow-right"></u-icon>
				</view>
			</view>
		</view>


		<view class="button" @click="backOrderAssign">
			提交审核
		</view>


		<u-picker v-model="timeSelectShow" mode="time" title="完成时间" confirm-color="#FC615F" cancel-color="#969799"
			:params="params"></u-picker>

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
				timeSelectShow: false,
				params: {
					hour: true,
					minute: true,
					second: true,
				}
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
	.top {
		position: relative;
		overflow: hidden;
		height: 11vh;
		color: #000;
	}

	.bottom {
		background-color: #fff;
		margin: 32rpx 24rpx;
		padding: 40rpx 32rpx;
		border-radius: 20rpx;
	}

	.bottom-detail {
		display: flex;
		justify-content: space-between;
		margin-bottom: 38rpx;
	}

	.bottom-detail:last-child {
		margin-bottom: 0;
	}

	.box-label {
		color: #999999;
	}

	.line {
		height: 2rpx;
		background-color: #E7E7E7;
		margin-bottom: 38rpx;
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
		bottom: 35vh;
		text-align: center;
	}

	/deep/.u-datetime-picker {
		border-radius: 30rpx !important;
	}

	/deep/.u-picker__title {
		color: #000;
		font-size: 32rpx;
		font-weight: 500;
	}

	/deep/.u-btn-picker {
		font-size: 28rpx;
	}

	/* 	/deep/.u-column-item{
		height: 80rpx !important;
	} */
	/* 	/deep/.uni-picker-view-indicator{
		height: 80rpx !important;
	} */
	.picker-border {
		background-color: #fff;
		padding-top: 100rpx;
		border-radius: 20rpx;
	}
</style>
