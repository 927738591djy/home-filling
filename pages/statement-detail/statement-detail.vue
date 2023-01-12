<template>
	<view>
		<view class="top">
			<navbar color="#000" title="结算单详情">
			</navbar>
		</view>
		<view class="bottom">
			<view class="bottom-detail">
				<view class="box-label">结算单名称:</view>
				<view>{{orderDetail.name}}</view>
			</view>
			<view class="bottom-detail">
				<view class="box-label">发起人:</view>
				<view>{{orderDetail.initiateUserName}}</view>
			</view>
			<view class="bottom-detail">
				<view class="box-label">施工队名称:</view>
				<view>{{orderDetail.providerName}}</view>
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
				<view>{{orderDetail.amount}}</view>
			</view>
			<view class="bottom-detail">
				<view class="box-label">结算状态:</view>
				<view>{{orderDetail.stateText}}</view>
			</view>
			<view class="bottom-detail">
				<view class="box-label">结算日期:</view>
					<view  v-if="orderDetail.settleDate">{{orderDetail.settleDate}}</view>
				<view v-else @click="timeSelectShow=!timeSelectShow">请选择 <u-icon style="margin-left: 15rpx;"
						name="arrow-right"></u-icon>
				</view>
			
			</view>
		</view>

		<div>
			<RedButton v-if="orderDetail.auditStatus !== 'AUDITED'" title="提交审核" @click.native="settleSubmit"></RedButton>
		</div>



		<u-picker v-model="timeSelectShow" mode="time" title="完成时间" confirm-color="#FC615F" cancel-color="#969799"
			:params="params"></u-picker>

	</view>
</template>

<script>
	import navbar from '../../compoents/navbar/navbar.vue'
	import RedButton from '../../compoents/red-button.vue'
	export default {
		components: {
			navbar,
			RedButton
		},
		data() {
			return {
				timeSelectShow: false,
				params: {
					hour: true,
					minute: true,
					second: true,
				},
				orderDetail:{} //结算详情对象
			}
		},
		methods: {
			// 获取结算订单详情
			getSettleDetail() {
				this.$lsxmApi.getSettleDetail(this.id).then(res => {
					if (res.data.data.code == 200 || res.data.data.code == 1) {
						// 请求成功,返回数据
						this.orderDetail = res.data.data.data
						console.log(this.orderDetail);
			
					} else {
						// 弹出错误提示消息
					}
				})
			},
			
			// 结算单提交审批
			settleSubmit(){
				this.$lsxmApi.settleSubmit(this.orderDetail).then(res => {
					if (res.data.data.code == 200 || res.data.data.code == 1) {
						// 请求成功,返回数据
					console.log(res);
						
					} else {
						// 弹出错误提示消息
					}
				})
			}
		},
		onLoad(options) {
			this.id = options.id
			this.getSettleDetail()
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
		background-color: #fff;
		margin: 32rpx 24rpx;
		padding: 40rpx 32rpx;
		border-radius: 20rpx;
		margin-top: 12vh;
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
