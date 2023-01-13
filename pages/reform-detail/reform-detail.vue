<template>
	<view class="install-detail">
		<view class="top">
			<navbar color="#000" :title="navTitle">
			</navbar>
		</view>

		<view class="bottom">
			<view class="bottom-box">
				<view class="box-label" style="color: #FF2B31;">整改内容：</view>
				<view class="reform-textarea survey-textarea">
					<textarea v-model="orderReformDetail.install.auditReason" placeholder="整改内容" />
				</view>

				<view class="report-detail">
					<view class="box-label">安装完成时间:</view>
					<view class="address">{{orderReformDetail.install.finishedTime}}</view>
				</view>
				<view class="line"></view>
				<view class="report-detail">
					<view class="box-label">充电桩型号(TPN):</view>
					<view>{{orderReformDetail.install.installMaterial.chargeModelId}}</view>
				</view>
				<view class="report-detail">
					<view class="box-label">充电桩编号(TSN):</view>
					<view class="address">{{orderReformDetail.install.installMaterial.serialNo}}</view>
				</view>
				<view class="report-detail">
					<view class="box-label">电缆规格:</view>
					<view class="address"> {{orderReformDetail.install.installMaterial.cableType}}</view>
				</view>
				<view class="report-detail">
					<view class="box-label">电缆长度:</view>
					<view class="address">{{orderReformDetail.install.installMaterial.cableLength}}</view>
				</view>
				<view class="report-detail">
					<view class="box-label">管长</view>
					<view class="address">{{orderReformDetail.install.installMaterial.pipaLength}}</view>
				</view>
				<view class="line"></view>
				<view class="report-detail">
					<view class="box-label">付费金额:</view>
					<view class="address"></view>
				</view>
				<view class="report-detail">
					<view class="box-label">付费备注</view>
					<view class="address"></view>
				</view>
				<view class="line"></view>

				<view class="box-label">安装总结</view>
				<view class="survey-textarea">
					<textarea v-model="orderReformDetail.install.summary" placeholder="安装总结" />
				</view>

			</view>

		</view>




		<RedButton v-if="orderReformDetail.stateSub == 'INSTALL_REFUSED'" @click.native="ReformSubmit" title="整改提交" bgColor="#FF3A3B"></RedButton>

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
				orderId: '', //由安装列表哪传过来的订单id
				orderReformDetail:{}, //整改详情对象
				navTitle:'' //导航栏标题，驳回状态的是整改提交，待整改审核的状态是整改详情
			}
		},
		methods: {
			// 获取整改订单详情
			getOrderReformDetail() {
				this.$lsxmApi.getOrderReformDetail(this.orderId).then(res => {
					if (res.data.data.code == 200 || res.data.data.code == 1) {
						// 请求成功,返回数据
						this.orderReformDetail = res.data.data.data
						console.log(this.orderReformDetail);
						this.navTitle = this.orderReformDetail.stateSub == 'INSTALL_REFUSED' ?'整改提交':'整改详情'
					} else {
						// 弹出错误提示消息
					}
				})
			},
			
			// 整改提交
			ReformSubmit() {
				this.$lsxmApi.ReformSubmit(this.orderReformDetail).then(res => {
					if (res.data.data.code == 200 || res.data.data.code == 1) {
						// 请求成功,返回数据
						uni.showToast({
							title: '整改提交成功',
							duration: 2000,
						});
						setTimeout(() => {
							uni.navigateBack()
						}, 1500)
					}
				})
			},
		},
		onLoad(options) {
			this.orderId = options.orderId
			this.getOrderReformDetail()
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
		margin-top: 12vh;
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

	.reform-textarea {
		border: 4rpx solid #FF0006;
		border-radius: 10px;
	}
</style>
