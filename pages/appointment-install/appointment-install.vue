<template>
	<view class="appointment-install">
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
				<!-- <view v-if="orderInstallDetail.survey.finishedTime">
					<u-icon name="arrow-right" size="40"></u-icon>
				</view> -->
				<view>{{orderInstallDetail.survey.finishedTime}}</view>
			</view>
			<view class="bottom-box">
				<view class="box-label">勘测总结：</view>
				<view class="survey-textarea">
					<textarea v-model="orderInstallDetail.survey.summary" placeholder="请输入勘测总结" />
				</view>
			</view>
			<view class="bottom-box time">
				<view class="box-label">安装人员：</view>
				<view>{{orderInstallDetail.install.engineer.nickname}}</view>
			</view>

			<view class="bottom-box time">
				<view class="box-label">预约安装时间：</view>
				<view v-if="orderInstallDetail.install.timePre" @click="timeSelectShow = true">{{orderInstallDetail.install.timePre}}</view>
				<view v-else style="color:#D3D3D3;" @click="timeSelectShow = true">请选择</view>
			</view>

		</view>

		<u-picker v-model="timeSelectShow" mode="time" title="完成时间" confirm-color="#FC615F" cancel-color="#969799"
			:params="params" @confirm="timeConfirm"></u-picker>

		<RedButton @click.native="preInstall" :bgColor="orderInstallDetail.install.timePre?'#FE3738':'#D9D9D9'"  title="提交"></RedButton>
		
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
				orderInstallDetail: {
					install:{
						timePre:''
					} //这里写一下防止计算属性报错
				}, //安装订单详情对象
				timeSelectShow: false, //选择预约安装的时间 
				params: {
					// year:true,
					month: true,
					day: true,
					hour: true,
					minute: true,
				}, //时间选择器的配置参数
			}
		},


		computed: {
			bgColor(){
				return this.orderInstallDetail.install.timePre ? 'red':''
			}
		},

		methods: {
			// 预约安装
			preInstall() {
				this.$lsxmApi.preInstall(this.orderInstallDetail).then(res => {
					if (res.data.data.code == 200 || res.data.data.code == 1) {
						// 请求成功,返回数据
						// 安装成功跳转到安装列表页面
						uni.showToast({
							title: '安装预约成功',
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

			// 获取安装订单详情
			getOrderInstallDetail() {
				this.$lsxmApi.getOrderInstallDetail(this.orderId).then(res => {
					if (res.data.data.code == 200 || res.data.data.code == 1) {
						// 请求成功,返回数据
						this.orderInstallDetail = res.data.data.data

					} else {
						// 弹出错误提示消息
					}
				})
			},

			// 预约安装时间确认
			timeConfirm(e) {
				let year = new Date().getFullYear()
				this.orderInstallDetail.install.timePre = year + '-' + e.month + '-' + e.day + ' ' + e.hour + ':' + e
					.minute
			}


		},

		onLoad(options) {
			this.orderId = options.orderId
			this.getOrderInstallDetail()
			console.log(this.orderInstallDetail.install.timePre);
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

	.appointment-install {
		padding-bottom: 150rpx;
	}
</style>
