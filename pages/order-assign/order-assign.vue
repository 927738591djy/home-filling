<template>
	<view class="order-assign">
			
			<view class="top">
				<navbar color="#000" title="订单分配">
				</navbar>
			</view>
	

		<view class="bottom">
			<view class="bottom-box">
				<view class="red-title">
					<u-section title="订单信息" :right="false" line-color="#FF2C34" font-size="32"></u-section>
				</view>
				<view class="order-detail-line">
					<view class="order-detail-label">订单号</view>
					<view>{{orderDetailObj.orderNo}}</view>
				</view>
				<view class="order-detail-line">
					<view class="order-detail-label">RN号</view>
					<view>{{orderDetailObj.rnNo}}</view>
				</view>
				<view class="order-detail-line">
					<view class="order-detail-label">品牌</view>
					<view>{{orderDetailObj.brandName}}</view>
				</view>
			</view>

			<view class="bottom-box">
				<view class="red-title">
					<u-section title="客户信息" :right="false" line-color="#FF2C34" font-size="32"></u-section>
				</view>
				<view class="order-detail-line">
					<view class="order-detail-label">客户姓名</view>
					<view>{{orderDetailObj.custName}}</view>
				</view>
				<view class="order-detail-line">
					<view class="order-detail-label">手机号</view>
					<view>{{orderDetailObj.custMobile}}</view>
				</view>
				<view class="order-detail-line">
					<view class="order-detail-label">地址</view>
					<view>{{orderDetailObj.adress}}</view>
				</view>
			</view>

			<view class="bottom-box">
				<view class="red-title">
					<u-section title="专员信息" :right="false" line-color="#FF2C34" font-size="32"></u-section>
				</view>
				<view class="order-detail-line">
					<view class="order-detail-label">客服专员</view>
					<view>{{orderDetailObj.custServiceName}}</view>
				</view>
				<view class="order-detail-line">
					<view class="order-detail-label">专员手机号</view>
					<view>{{orderDetailObj.custServiceMobile}}</view>
				</view>
				<view class="order-detail-line">
					<view class="order-detail-label">订单状态</view>
					<view>{{orderDetailObj.status}}</view>
				</view>
				<view class="order-detail-line">
					<view class="order-detail-label">指派工程师</view>
					<view v-if="!engineerName" class="to-assign-list" @click="toAssignList">
						<u-icon name="arrow-right" size="40"></u-icon>
					</view>
					<view v-if="engineerName">{{engineerName}}</view>
				</view>
			</view>
		</view>


		<view v-if="engineerName" class="button" @click="orderAssignmentSubmit">
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
				orderId: '', //此订单id
				orderDetailObj: {}, //订单详情对象
				engineerName: '', //工程师姓名
				engineerId: '' //工程师id
			}
		},
		methods: {
			toAssignList() {
				uni.navigateTo({
					url: '../assign-list/assign-list?orderId=' + this.orderId
				})
			},

			//获取此订单详情
			getOrderAllocationDetail() {
				this.$lsxmApi.getOrderAllocationDetail(this.orderId).then(res => {
					if (res.data.data.code == 200 || res.data.data.code == 1) {
						// 请求成功,返回数据
						this.orderDetailObj = res.data.data.data
						console.log(this.orderDetailObj);
					} else {
						// 弹出错误提示消息
					}
				})
			},


			orderAssignmentSubmit() {
				this.orderDetailObj.engineerId = this.engineerId
				this.$lsxmApi.orderAssignmentSubmit(this.orderDetailObj).then(res => {
					if (res.data.data.code == 200 || res.data.data.code == 1) {
						// 请求成功,返回数据
						uni.showToast({
							title: '工程师指派成功',
							duration: 1500,
						});
						setTimeout(() => {
							console.log(2222);
							uni.navigateBack({
								delta:3
							})
						}, 1500)
					} 
				})
			}

		},
		onLoad(options) {
			console.log(options);
			this.orderId = options.orderId
			this.engineerName = options.engineerName
			this.engineerId = options.engineerId
			this.getOrderAllocationDetail()
		},
	}
</script>

<style>
	.top {
		background: #fff;
		position: fixed;
		 overflow: hidden; 
		height: 11vh;
		color: #000;
		width: 100%;
		left: 0;
		top: 0;
		z-index: 100;
	}

	.bottom {
		margin-top: 32rpx;
	}

	.red-title {
		height: 100rpx;
		display: flex;
		align-items: center;
	}

	.bottom-box {
		background-color: #fff;
		padding: 0 24rpx;
		margin-bottom: 24rpx;
	}

	/deep/.u-section .u-section__title__text {
		padding-left: 20rpx;
	}

	.order-detail-line {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 32rpx 0;
		border-top: 2rpx solid #E1E1E1;
	}

	.order-detail-label {
		color: #999;
	}

	.to-assign-list {
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

	.order-assign {
		padding-bottom: 150rpx;
		padding-top: 11vh;
	}
</style>
