<template>
	<view class="install-detail">
		<view class="top">
			<navbar color="#000" :statusBarHeight="statusBarHeight" :cachetHeight="cachetHeight" title="安装详情"
				@onBack="goBack">
			</navbar>
		</view>

		<view class="bottom">
			<view class="bottom-box">
				<view class="report-detail">
					<view class="box-label">客户姓名：</view>
					<view>张无忌</view>
				</view>
				<view class="report-detail">
					<view class="box-label">安装地址：</view>
					<view class="address">上海市嘉定区众仁路勇立大厦M22 4-6</view>
				</view>
			</view>
			<view class="bottom-box time">
				<view class="box-label">勘测完成时间：</view>
				<view>
					2022-11-15 20：00
				</view>
			</view>
			<view class="bottom-box">
				<view class="box-label">勘测总结：</view>
				<view class="survey-textarea">
					<textarea v-model="text" placeholder="请输入勘测总结" />
				</view>
			</view>
			<view class="bottom-box">
				<view class="report-detail">
					<view class="box-label">安装人员：</view>
					<view>张无忌</view>
				</view>
				<view class="report-detail">
					<view class="box-label">预约安装时间：</view>
					<view class="address">2022-11-15 12:00:00</view>
				</view>
			</view>

			<view class="bottom-box">
				<view class="report-detail">
					<view class="box-label">充电桩型号(TPN):</view>
					<!-- <view>16287628-02-G</view> -->
					<view class="select-right">
						请选择
						<u-icon style="margin-left: 10rpx;" top="2" name="arrow-right"></u-icon>
					</view>
				</view>
				<view class="report-detail">
					<view class="box-label">充电桩编号(TSN):</view>
					<!-- <view class="address">PGT237292839203</view> -->
					<view class="select-right">
						请选择
						<u-icon style="margin-left: 10rpx;" top="2" name="arrow-right"></u-icon>
					</view>
				</view>
				<view class="report-detail">
					<view class="box-label">电缆规格:</view>
					<!-- <view class="address"> 3*6</view> -->
					<view class="select-right">
						请选择
						<u-icon style="margin-left: 10rpx;" top="2" name="arrow-right"></u-icon>
					</view>
				</view>
				<view class="report-detail">
					<view class="box-label">电缆长度:</view>
					<!-- <view class="address">37</view> -->
					<view class="select-right">
						请选择
						<u-icon style="margin-left: 10rpx;" top="2" name="arrow-right"></u-icon>
					</view>
				</view>
				<view class="report-detail">
					<view class="box-label">管长</view>
					<!-- <view class="address">10</view> -->
					<view class="select-right">
						请选择
						<u-icon style="margin-left: 10rpx;" top="2" name="arrow-right"></u-icon>
					</view>
				</view>
				<view class="line"></view>
				<view class="report-detail">
					<view class="box-label">付费金额:</view>
					<!-- <view class="address">37</view> -->
				</view>
				<view class="report-detail">
					<view class="box-label">付费备注</view>
					<!-- <view class="address">10</view> -->
				</view>
			</view>

			<view class="bottom-box">
				<view class="report-detail">
					<view class="box-label">安装完成时间:：</view>
					<view class="address">请选择</view>
				</view>
				<view class="line"></view>
				<view class="box-label">安装总结：</view>
				<view class="survey-textarea">

					<textarea v-model="text" placeholder="请输入安装总结" />
				</view>
			</view>


		</view>



		<view class="button" @click="backOrderAssign">
			提交
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

	.box-label {
		color: #999;
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
		bottom: 36rpx;
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
	.select-right{
		color: #999;
		display: flex;
	}
</style>
