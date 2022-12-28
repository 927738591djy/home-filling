<template>
	<view>
		<view class="top">
			<navbar color="#000" title="预约安装">
			</navbar>
		</view>

		<view class="bottom">
			<view class="bottom-box">
				<view class="report-detail">
					<view class="box-label">客户姓名：</view>
					<view>{{orderInstallDetail.cust.name}}</view>
				</view>
				<view class="report-detail">
					<view class="box-label">安装地址：</view>
					<view class="address">{{orderInstallDetail.villageAddress}}</view>
				</view>
			</view>
			<view class="bottom-box time">
				<view class="box-label">勘测完成时间：</view>
				<view v-if="orderInstallDetail.survey.finishedTime">
					<u-icon name="arrow-right" size="40"></u-icon>
				</view>
				<view v-else>{{orderInstallDetail.survey.finishedTime}}</view>
			</view>
			<view class="bottom-box">
				<view  class="box-label">勘测总结：</view>
				<view class="survey-textarea">
					<textarea v-model="orderInstallDetail.survey.summary" placeholder="请输入勘测总结" />
				</view>
			</view>
		</view>



		<view class="button" @click="preInstall">
			提交审核
		</view>



	</view>
</template>


<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>

<script>
	import navbar from '../../compoents/navbar/navbar.vue'
	export default {
		components: {
			navbar
		},
		data() {
			return {
				orderId: '', //由安装列表哪传过来的订单id
				orderInstallDetail:{},//安装订单详情对象
			}
		},
		methods: {
			// 预约安装
			preInstall() {
				this.$lsxmApi.preInstall(this.orderInstallDetail).then(res => {
					if (res.data.data.code == 200 || res.data.data.code == 1) {
						// 请求成功,返回数据
						console.log(res);

					} else {
						// 弹出错误提示消息
					}
				})
			},
			
			// 获取安装订单详情
			getOrderInstallDetail() {
				this.$lsxmApi.getOrderInstallDetail(this.orderId).then(res => {
					if (res.data.data.code == 200 || res.data.data.code == 1) {
						// 请求成功,返回数据
						this.orderInstallDetail = res.data.data.data
						console.log(this.orderInstallDetail);
			
					} else {
						// 弹出错误提示消息
					}
				})
			},
		},
		onLoad(options) {
			this.orderId = options.orderId
			this.getOrderInstallDetail()
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
		margin-bottom: 20rpx;
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

	.survey-detail {
		padding-bottom: 150rpx;
	}
</style>
