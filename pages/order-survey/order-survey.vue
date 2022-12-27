<template>
	<view>
		<view class="top">
			<navbar title="待勘测" :blackArrow="true">
			</navbar>
			<view class="light-circle"></view>
			<view class="light-circle-right"></view>
		</view>
		<view class="search">
			<view class="search-input">
				<image style="width: 48rpx;height: 48rpx;margin-right: 12rpx;" src="../../static/img/order/search.png">
				</image>
				<input type="text" v-model="likeKeyWords" placeholder="搜索预设文案">
			</view>
		</view>

		<view style="padding: 0 40rpx 0 0;width: 100%; background-color: #fff;">
			<u-tabs font-size="27" :list="tabsList" :is-scroll="false" :current="tabsCurrent" @change="tabsChange"
				active-color="#FC615F"></u-tabs>
		</view>

		<view class="bottom-boxs">
			<view class="bottom-box" v-for="item in orderSurveyList" :key="item.orderId">
				<view class="box-left">
					<view class="box-title">
						<view class="tag">
							<view class="tag-text">
								{{item.statusText}}
							</view>
						</view>
						<view class="bottom-box-title">{{item.brandName}}</view>
					</view>
					<view class="order-detail">
						<view class="order-label">下单时间：</view>
						<view>{{item.dispatchDate}}</view>
					</view>
					<view class="order-detail">
						<view class="order-label">客户信息：</view>
						<view>{{item.custName + item.mobile}}</view>
					</view>
				</view>

				<view class="box-right" @click="toSurveyDetail(item.orderId)">
					<u-icon size="50" name="arrow-right"></u-icon>
				</view>

			</view>
			
			<view class="bottom-box" v-for="item in 2" >
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
				</view>
			
				<view class="box-right" @click="toSurveyDetail()">
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
				tabsList: [{
					name: '全部',
					count: 4
				}, {
					name: '进行中',
				}, {
					name: '已完成',
				}, ],
				tabsCurrent: 0,
				orderSurveyList: [], //待勘测订单列表
				orderStatus: 'ALL', //订单状态:全部，已完成，进行中
				likeKeyWords:'' //搜索关键词
			}
		},
		methods: {
			tabsChange(index) {
				this.tabsCurrent = index;
				console.log(index);
				switch (index) {
					case 0:
						this.orderStatus = 'ALL'
						break;
					case 1:
						this.orderStatus = 'DOING'
						break;
					case 2:
						this.orderStatus = 'FINISHED'
						break;
					default:
						break;
				}
				this.getOrderSurveyList()
			},
			toSurveyDetail(orderId) {
				console.log(orderId);
				uni.navigateTo({
					url: '../survey-detail/survey-detail?orderId='+'1603293666569355265'
				})
			},
			// 待勘测订单列表查询
			getOrderSurveyList() {
				this.$lsxmApi.getOrderSurveyList(this.orderStatus, this.likeKeyWords).then(res => {
					if (res.data.data.code == 200 || res.data.data.code == 1) {
						// 请求成功,返回数据
						this.orderSurveyList = res.data.data.data.records
					} else {
						// 弹出错误提示消息
					}
				})
			},

		},
		onLoad() {
			this.getOrderSurveyList()
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
		width: 70rpx;
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
		color: #666666;
	}

	.order-label {
		color: #999999;
	}

	.box-left {}
</style>
