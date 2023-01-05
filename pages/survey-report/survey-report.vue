<template>
	<view class="survey-report">
		<view class="top">
			<navbar color="#000" title="勘测报告">
			</navbar>
		</view>

		<view class="bottom">
			<view class="bottom-box">
				<view class="report-detail">
					<view class="box-label">客户姓名：</view>
					<view>{{orderSurveyDetail.cust.name}}</view>
				</view>
				<view class="report-detail">
					<view class="box-label">安装地址：</view>
					<view class="address">{{orderSurveyDetail.villageAddress}}</view>
				</view>
			</view>
			<view class="bottom-box time">
				<view class="box-label">勘测完成时间：</view>
				<view v-if="orderSurveyDetail.survey.finishedTime">{{orderSurveyDetail.survey.finishedTime}}</view>
				<view v-else @click="timePickerShow=!timePickerShow">
					<u-icon name="arrow-right" size="40"></u-icon>
				</view>
			</view>
			<view class="bottom-box">
				<view class="box-label">勘测总结：</view>
				<view class="survey-textarea">
					<textarea v-model="orderSurveyDetail.survey.summary" placeholder="请输入勘测总结" />
				</view>
				<view class="survey-textarea survey-upload">
					<u-upload :action="action" :file-list="fileList" upload-text="上传现场勘测照片" :custom-btn="true">
						<view slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
							<image style="width: 72rpx;height: 72rpx" src="../../static/img/order/addbtn.png" mode="">
							</image>
							<view style="color:#000;font-size: 24rpx;">上传现场勘测照片</view>
						</view>
					</u-upload>
				</view>
			</view>
		</view>


		<RedButton v-if="orderSurveyDetail.stateSub == 'TO_BE_SURVEYED'" @click.native="surveySubmit" title="提交审核"></RedButton>
		<u-picker v-model="timePickerShow" mode="time" title="选择日期" confirm-color="#FC615F" cancel-color="#969799"
			:params="params" @confirm="timeConfirm"></u-picker>
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
				orderId: '',
				orderSurveyDetail: {},
				timePickerShow:false,
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
			// 获取勘测订单详情
			getOrderSurveyDetail() {
				this.$lsxmApi.getOrderSurveyDetail(this.orderId).then(res => {
					if (res.data.data.code == 200 || res.data.data.code == 1) {
						// 请求成功,返回数据
						this.orderSurveyDetail = res.data.data.data
						console.log(this.orderSurveyDetail);

					} else {
						// 弹出错误提示消息
					}
				})
			},

			// 勘测报告提交
			surveySubmit() {
				this.$lsxmApi.surveySubmit(this.orderSurveyDetail).then(res => {
					if (res.data.data.code == 200 || res.data.data.code == 1) {
						// 请求成功,返回数据
						uni.showToast({
							title: '勘测报告提交成功',
							duration: 1500,
						});
						setTimeout(()=> {
							uni.navigateBack()
						},1500)

					} else {
						// 弹出错误提示消息
					}
				})
			},
			
			// 确定勘测完成时间
			timeConfirm(e){
				let year = new Date().getFullYear()
				this.orderSurveyDetail.survey.finishedTime =  year + '-' + e.month + '-' + e.day + ' ' + e.hour + ':' + e.minute + ":"+ e.second
				
			},

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

	.survey-upload {
		text-align: center;
		padding: 44rpx 0;
		display: flex;
		justify-content: center;
	}

	.survey-report {
		padding-bottom: 100rpx;
	}
</style>
