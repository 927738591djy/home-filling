<template>
	<view class="order-assign">
		<view class="top">
			<navbar color="#000" :statusBarHeight="statusBarHeight" :cachetHeight="cachetHeight" title="订单分配" @onBack="goBack">
			</navbar>
		</view>
		<view class="bottom">
			<view class="bottom-box">
				<view class="red-title">
					<u-section title="订单信息" :right="false" line-color="#FF2C34" font-size="32"></u-section>
				</view>
				<view class="order-detail-line">
					<view class="order-detail-label">订单号</view>
					<view>INSTAR-28197289</view>
				</view>
				<view class="order-detail-line">
					<view class="order-detail-label">INSTAR-28197289号</view>
					<view>177656203938</view>
				</view>
				<view class="order-detail-line">
					<view class="order-detail-label">品牌</view>
					<view>特斯拉</view>
				</view>
			</view>
			
			<view class="bottom-box">
				<view class="red-title">
					<u-section title="客户信息" :right="false" line-color="#FF2C34" font-size="32"></u-section>
				</view>
				<view class="order-detail-line">
					<view class="order-detail-label">客户姓名</view>
					<view>张翼德</view>
				</view>
				<view class="order-detail-line">
					<view class="order-detail-label">手机号</view>
					<view>177656203938</view>
				</view>
				<view class="order-detail-line">
					<view class="order-detail-label">地址</view>
					<view>上海市嘉定区众仁路</view>
				</view>
			</view>
			
			<view class="bottom-box">
				<view class="red-title">
					<u-section title="专员信息" :right="false" line-color="#FF2C34" font-size="32"></u-section>
				</view>
				<view class="order-detail-line">
					<view class="order-detail-label">客服专员</view>
					<view>孙权</view>
				</view>
				<view class="order-detail-line">
					<view class="order-detail-label">专员手机号</view>
					<view>177656203938</view>
				</view>
				<view class="order-detail-line">
					<view class="order-detail-label">已派单</view>
					<view>上海市嘉定区众仁路</view>
				</view>
				<view class="order-detail-line">
					<view class="order-detail-label">指派工程师</view>
					<view @click="toAssignList">
						<u-icon name="arrow-right" size="40"></u-icon>
					</view>
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
			}
		},
		methods: {
			toAssignList(){
				uni.navigateTo({
					url:'../assign-list/assign-list'
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
		background: #fff;
		position: relative;
		overflow: hidden;
		height: 11vh;
		color: #000;
	}
	.bottom{
		margin-top: 32rpx;
	}
	.red-title{
		height: 100rpx;
		display: flex;
		align-items: center;
	}
	.bottom-box{
		background-color: #fff;
		padding:0 24rpx;
		margin-bottom: 24rpx;
	}
	/deep/.u-section .u-section__title__text{
		padding-left: 20rpx;
	}
	.order-detail-line{
		display: flex;
		justify-content: space-between;
		padding: 32rpx 0;
		border-top: 2rpx solid #E1E1E1;
	}
	.order-detail-label{
		color: #999;
	}
</style>
