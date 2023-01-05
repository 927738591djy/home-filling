<template>
	<view class="install-detail">
		<view class="top">
			<navbar color="#000" title="安装详情">
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
				<view>
					{{orderInstallDetail.survey.finishedTime}}
				</view>
			</view>
			<view class="bottom-box">
				<view class="box-label">勘测总结：</view>
				<view class="survey-textarea">
					<textarea v-model="orderInstallDetail.survey.summaryReport" placeholder="请输入勘测总结" />
				</view>
			</view>
			<view class="bottom-box">
				<view class="report-detail">
					<view class="box-label">安装人员：</view>
					<view>{{orderInstallDetail.install.engineer.nickname}}</view>
				</view>
				<view class="report-detail">
					<view class="box-label">预约安装时间：</view>
					<view class="address">{{orderInstallDetail.install.timePre}}</view>
				</view>
			</view>

			<u-form labelPosition="left" :model="model1" :rules="rules" ref="form1">


				<view v-if="orderInstallDetail.stateSub !== 'WAIT_INSTALL'">
					<view class="bottom-box">
						<view class="report-detail">
							<view class="box-label">充电桩型号(TPN):</view>
							<!-- <view>16287628-02-G</view> -->
							<view v-if="!orderInstallDetail.install.installMaterial.chargeModelId" class="select-right">
								请选择
								<u-icon style="margin-left: 10rpx;" top="2" name="arrow-right"></u-icon>
							</view>
							<view v-else>{{orderInstallDetail.install.installMaterial.chargeModelId}}</view>
						</view>
						<view class="report-detail">
							<view class="box-label">充电桩编号(TSN):</view>
							<!-- <view class="address">PGT237292839203</view> -->
							<view v-if="!orderInstallDetail.install.installMaterial.serialNo" class="select-right">
								请选择
								<u-icon style="margin-left: 10rpx;" top="2" name="arrow-right"></u-icon>
							</view>
							<view v-else>{{orderInstallDetail.install.installMaterial.serialNo}}</view>
						</view>
						<view class="report-detail">
							<view class="box-label">电缆规格:</view>
							<!-- <view class="address"> 3*6</view> -->
							<view v-if="!orderInstallDetail.install.installMaterial.cableType" class="select-right">
								请选择
								<u-icon style="margin-left: 10rpx;" top="2" name="arrow-right"></u-icon>
							</view>
							<view v-else>{{orderInstallDetail.install.installMaterial.cableType}}</view>
						</view>
						<view class="report-detail">
							<view class="box-label">电缆长度:</view>
							<!-- <view class="address">37</view> -->
							<view v-if="!orderInstallDetail.install.installMaterial.cableLength" class="select-right">
								请选择
								<u-icon style="margin-left: 10rpx;" top="2" name="arrow-right"></u-icon>
							</view>
							<view v-else>{{orderInstallDetail.install.installMaterial.cableLength}}</view>
						</view>
						<view class="report-detail">
							<view class="box-label">管长</view>
							<!-- <view class="address">10</view> -->
							<view v-if="!orderInstallDetail.install.installMaterial.pipaLength" class="select-right">
								请选择
								<u-icon style="margin-left: 10rpx;" top="2" name="arrow-right"></u-icon>
							</view>
							<view v-else>{{orderInstallDetail.install.installMaterial.pipaLength}}</view>
						</view>
						<view class="line"></view>
						<view class="report-detail">
							<view class="box-label">付费金额:</view>
							<!-- <view class="address">37</view> -->
							<view></view>
						</view>
						<view class="report-detail">
							<view class="box-label">付费备注</view>
							<!-- <view class="address">10</view> -->
							<view></view>
						</view>
					</view>

					<view class="bottom-box">
						<view class="report-detail">
							<view class="box-label">安装完成时间:</view>
							<view v-if="!orderInstallDetail.install.finishedTime" class="address"
								@click="timeSelectShow = !timeSelectShow">请选择</view>
							<view v-else>{{orderInstallDetail.install.finishedTime}}</view>
						</view>
						<view class="line"></view>
						<view class="box-label">安装总结：</view>
						<view class="survey-textarea">
							<textarea v-model="orderInstallDetail.install.summary" placeholder="请输入安装总结" />
						</view>
					</view>
				</view>
			</u-form>

		</view>



		<RedButton v-if="orderInstallDetail.stateSub == 'WAIT_INSTALL'" @click.native="installSubmit"
			:bgColor="orderInstallDetail.install.timePre?'#FE3738':'#D9D9D9'" title="打卡"></RedButton>

		<RedButton v-else @click.native="installSubmit"
			:bgColor="orderInstallDetail.install.timePre?'#FE3738':'#D9D9D9'" title="提交"></RedButton>

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
				orderId: '', //由安装列表哪传过来的订单id
				orderInstallDetail: {}, //安装订单详情对象
				timeSelectShow: false, //时间选择器弹出
				params: {
					hour: true,
					minute: true,
					second: true,
				}, //时间选择器的配置参数
				btnTilte: '', // 用于确认底部按钮是打卡还是提交，待安装就是打卡，待安装审核就是提交
			}
		},
		methods: {
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

			installSubmit() {
				this.$lsxmApi.installSubmit(this.orderInstallDetail).then(res => {
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
			this.orderId = options.orderId
			this.getOrderInstallDetail()
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
		top: 0
	}

	.bottom {
		margin-top: 13vh;
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

	.select-right {
		color: #999;
		display: flex;
	}
</style>
