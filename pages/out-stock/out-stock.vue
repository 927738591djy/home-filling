<template>
	<view class="install-detail">
		<view class="top">
			<navbar color="#000" :statusBarHeight="statusBarHeight" :cachetHeight="cachetHeight" title="出库"
				@onBack="goBack">
			</navbar>
		</view>

		<view class="bottom">
			<view class="bottom-box">
				<view class="report-detail">
					<view class="box-label">充电桩品牌：</view>
					<view class="right">
						<view style="color: #000;">特斯拉</view>
						<u-icon name="close-circle-fill" size="30" style="margin-left: 10rpx;"></u-icon>
					</view>
				</view>
				<view class="line"></view>
				<view class="report-detail">
					<view class="box-label">充电桩型号:</view>
					<view class="right">
						<view>请选择</view>
						<u-icon name="arrow-right" size="30" style="margin-left: 10rpx;vertical-align: middle;">
						</u-icon>
					</view>
				</view>
				<view class="line"></view>
				<view class="report-detail">
					<view class="box-label">序列号:</view>
					<view class="right">
						<view>请输入序列号</view>
						<u-icon name="photo" size="30" style="margin-left: 10rpx;vertical-align: middle;">
						</u-icon>
					</view>
				</view>
				<view class="line"></view>
				<view class="report-detail">
					<view class="box-label">目的地:</view>
					<view class="right">
						<view>请选择</view>
						<u-icon name="arrow-right" size="30" style="margin-left: 10rpx;vertical-align: middle;">
						</u-icon>
					</view>
				</view>
				<view class="line"></view>
				<view class="box-label">出库事由来：</view>
				<view class="survey-textarea">
					<textarea v-model="text" placeholder="请输入出库由来" />
				</view>

			</view>

		</view>



		<view class="button" @click="backOrderAssign">
			确认出库
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
		background: #fff;
		position: relative;
		overflow: hidden;
		height: 11vh;
		color: #000;

	}

	.bottom {
		margin-top: 32rpx;
		padding: 0 24rpx;
	}

	.bottom-box {
		background-color: #fff;
		border-radius: 20rpx;
		padding: 40rpx 28rpx;
		margin-bottom: 32rpx;
		font-size: 28rpx;
		color: #000;
	}

	.report-detail {
		display: flex;
		justify-content: space-between;
		margin-bottom: 40rpx;
	}

	.report-detail:last-child {
		margin-bottom: 0rpx;
	}

	.address {
		max-width: 300rpx;
		text-align: right;
	}

	.time {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.survey-textarea {
		background-color: #FAFAFA;
		border: 6rpx dotted #E7E7E7;
		margin: 28rpx 0;
		padding: 20rpx;

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
		bottom:20vh;
		text-align: center;
	}

	.install-detail {
		padding-bottom: 150rpx;
	}

	.line {
		height: 3rpx;
		background-color: #E7E7E7;
		margin: 40rpx 0;
	}

	.right {
		display: flex;
		align-items: center;
		color: #999999;
	}

	.reform-textarea {
		border: 4rpx solid #FF0006;
		border-radius: 10px;
	}
</style>
