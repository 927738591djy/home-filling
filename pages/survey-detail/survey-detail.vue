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
					<u-section title="勘测时间" :right="false" line-color="#FF2C34" font-size="32"></u-section>
				</view>
				<view class="order-detail-line">
					<view class="order-detail-label">预约勘测时间</view>
					<view @click="timePickerShow=!timePickerShow" v-if="!orderSurveyDetail.survey.timePre">
						<u-icon class="gray" name="arrow-right" size="40"></u-icon>
					</view>
					<view v-else>{{orderSurveyDetail.survey.timePre}}</view>
				</view>
			</view>
		</view>


		<RedButton @click.native="appointmentSurvey" :bgColor="orderSurveyDetail.survey.timePre?'#FE3738':'#D9D9D9'"  title="提交"></RedButton>
		
		<u-picker v-model="timePickerShow"  mode="time" title="选择日期" confirm-color="#FC615F" cancel-color="#969799"
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
					// year:true,
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
			
			// 预约勘测
			preSurvey() {
				this.$lsxmApi.preSurvey(this.orderSurveyDetail).then(res => {
					if (res.data.data.code == 200 || res.data.data.code == 1) {
						// 请求成功,返回数据
					uni.showToast({
						title: '预约勘测成功',
						duration: 1500,
					});
					setTimeout(() => {
						uni.navigateBack({
							delta:1
						})
					}, 1500)
						
					} 
				})
			},
			
			// 确定预约勘测时间
			timeConfirm(e){
				let year = new Date().getFullYear()
				this.orderSurveyDetail.survey.timePre =  year + '-' + e.month + '-' + e.day + ' ' + e.hour + ':' + e.minute + ":"+ e.second
				
			},
			
			// 点击提交预约勘测
			appointmentSurvey(){
				this.preSurvey()
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
		margin-top: 13vh;
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
