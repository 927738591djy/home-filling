<template>
	<view>
		<view class="top">
			<navbar :statusBarHeight="statusBarHeight" :cachetHeight="cachetHeight" title="待安装" :blackArrow="true"
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

		<view style="padding: 0 40rpx 0 0;width: 100%; background-color: #fff;">
			<u-tabs font-size="27" :list="list" :is-scroll="false" :current="current" @change="change"
				active-color="#FC615F"></u-tabs>
		</view>

		<view class="bottom-boxs">
			<view class="bottom-box" v-for="(i,index) in 5" :key="index">
				<view class="box-left">
					<view class="box-title">
						<view class="tag">
							<view class="tag-text">
								待勘测
							</view>
						</view>
						<view class="bottom-box-title">勘测单</view>
					</view>
					<view class="order-detail">
						<view class="order-label">下单时间：</view>
						<view>2022-11-14 07:20:17</view>
					</view>
					<view class="order-detail">
						<view class="order-label">客户信息：</view>
						<view>张三 138 7289 2990</view>
					</view>
					<view class="order-detail">
						<view class="order-label">勘测时间：</view>
						<view>2022-11-15</view>
					</view>
					<view class="order-detail">
						<view class="order-label">安装地址：</view>
						<view>上海市嘉定区众仁路勇立大厦</view>
					</view>
				</view>

				<view class="box-right" @click="toSurveyDetail">
					<u-icon size="50" name="arrow-right"></u-icon>
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
					count: 4
				}, {
					name: '进行中',
				}, {
					name: '已完成',
				}, ],
				current: 0
			}
		},
		methods: {
			change(index) {
				this.current = index;
			},
			toSurveyDetail(){
				uni.navigateTo({
					url:'../survey-detail/survey-detail'
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


	.tag {
		background-color: #FF9600;
		height: 30rpx;
		font-size: 20rpx;
		color: #fff;
		width: 80rpx;
		transform: skewX(-15deg);
		text-align: center;
		margin-right: 20rpx;
	}

	.tag-text {
		transform: skewX(15deg);
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
		justify-content: space-between;
		align-items: center;
		color: #000;
	}

	.bottom-box-title {
		font-size: 32rpx;
		color: #000;
	}

	.box-title {
		display: flex;
		align-items: center;
		margin-bottom: 20rpx;
	}
	.order-detail {
		display: flex;
		align-items: center;
		font-size: 28rpx;
		padding: 15rpx 0;

	}

	.order-label {
		color: #999999;
	}

.box-left{
}
</style>
