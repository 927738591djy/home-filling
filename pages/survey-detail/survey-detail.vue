<template>
	<view class="survey-detail">
		<view class="top">
			<navbar color="#000" title="勘测详情">
			</navbar>
		</view>
		<view class="bottom">
			<view class="bottom-box">
				<view class="red-title">
					<u-section title="订单信息" :right="false" line-color="#FF2C34" font-size="32"></u-section>
				</view>
				<view class="order-detail-line">
					<view class="order-detail-label">RN号</view>
					<view>{{orderSurveyDetail.sallNo}}</view>
				</view>
				<view class="order-detail-line">
					<view class="order-detail-label">品牌</view>
					<view>{{orderSurveyDetail.brandInfo.name}}</view>
				</view>
				<view class="order-detail-line">
					<view class="order-detail-label">客户姓名</view>
					<view>{{orderSurveyDetail.cust.name}}</view>
				</view>
				<view class="order-detail-line">
					<view class="order-detail-label">客户手机号</view>
					<view>{{orderSurveyDetail.cust.mobile}}</view>
				</view>
				<view class="order-detail-line">
					<view class="order-detail-label">地址</view>
					<view>{{orderSurveyDetail.villageAddress}}</view>
				</view>
				<view class="order-detail-line">
					<view class="order-detail-label">客服专员</view>
					<view>{{orderSurveyDetail.custServer.nickname}}</view>
				</view>
				<view class="order-detail-line">
					<view class="order-detail-label">客服手机号</view>
					<view>{{orderSurveyDetail.custServer.phone}}</view>
				</view>
				<view class="order-detail-line">
					<view class="order-detail-label">订单状态</view>
					<view>{{orderSurveyDetail.stateSubText}}</view>
				</view>
				<view class="order-detail-line">
					<view class="order-detail-label">勘测工程师</view>
					<view>{{orderSurveyDetail.survey.engineer.nickname}}</view>
				</view>
			</view>

			<view class="bottom-box">
				<view class="red-title">
					<u-section title="位置信息" :right="false" line-color="#FF2C34" font-size="32"></u-section>
				</view>
				<view class="order-detail-line order-detail-input">
					<view class="order-detail-label">物业名称</view>
					<view class="gray">
						<u-input v-model="orderSurveyDetail.propertyName"  placeholder="请输入物业名称" input-align="right"/>
					</view>
				</view>
				<view class="order-detail-line order-detail-input">
					<view class="order-detail-label">小区名称</view>
					<u-input v-model="orderSurveyDetail.villageName"   placeholder="请输入小区名称" input-align="right"/>
				</view>
				<view class="order-detail-line order-detail-input">
					<view class="order-detail-label">变更地址</view>
					<u-input v-model="orderSurveyDetail.villageAddress"  placeholder="请输入变更地址" input-align="right"/>
				</view>
			</view>

			<view class="bottom-box">
				<view class="red-title">
					<u-section title="专员信息" :right="false" line-color="#FF2C34" font-size="32"></u-section>
				</view>
				<view class="order-detail-line">
					<view class="order-detail-label">预约勘测时间</view>
					<view @click="timePickerShow=!timePickerShow" v-if="!orderSurveyDetail.survey.timePre">
						<u-icon class="gray" name="arrow-right" size="40"></u-icon>
					</view>
					<view>{{orderSurveyDetail.survey.timePre}}</view>
				</view>
			</view>
		</view>


		<RedButton title="提交"></RedButton>
		<u-picker show="timePickerShow"  mode="time" title="选择日期" confirm-color="#FC615F" cancel-color="#969799"
			:params="params" @confirm="timeConfirm"></u-picker>

	</view>
</template>

<script>
	import navbar from '../../compoents/navbar/navbar.vue'
	import TimePicker from '../../compoents/time-picker.vue'
	import RedButton from '../../compoents/red-button.vue'
	export default {
		components: {
			navbar,
			TimePicker,
			RedButton
		},
		data() {
			return {
				timeShow:true,
				orderId:'', //订单id
				orderSurveyDetail:{},//勘测订单详情对象
				timePickerShow: false,
				params: {
					year:true,
					month: true,
					day: true,
					hour: true,
					minute: true,
					second: true
				},
			}
		},
		methods: {
			toAssignList() {
				uni.navigateTo({
					url: '../assign-list/assign-list'
				})
			},
			// 获取勘测订单详情
			getOrderSurveyDetail() {
				this.$lsxmApi.getOrderSurveyDetail(this.orderId
				).then(res => {
					if (res.data.data.code == 200 || res.data.data.code == 1) {
						// 请求成功,返回数据
						this.orderSurveyDetail  = res.data.data.data
						console.log(this.orderSurveyDetail);
						
					} else {
						// 弹出错误提示消息
					}
				})
			},
			// 确定预约勘测时间
			timeConfirm(e){
				console.log(e);
			}
		},
		onLoad(options) {
			this.orderId = options.orderId
			this.getOrderSurveyDetail()
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
		justify-content: space-between;
		padding: 32rpx 0;
		border-top: 2rpx solid #E1E1E1;
	}

	.order-detail-label {
		color: #999;
	}

	.gray {
		color: #999999;
	}

	.survey-detail {
		padding-bottom: 150rpx;
	}
	.order-detail-input{
		display: flex;
		align-items: center;
		padding: 10rpx 0;
	}
</style>
