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
					<view>INSTAR-28197289</view>
				</view>
				<view class="order-detail-line">
					<view class="order-detail-label">品牌</view>
					<view>特斯拉</view>
				</view>
				<view class="order-detail-line">
					<view class="order-detail-label">客户姓名</view>
					<view>孙权</view>
				</view>
				<view class="order-detail-line">
					<view class="order-detail-label">客户手机号</view>
					<view>177653830400</view>
				</view>
				<view class="order-detail-line">
					<view class="order-detail-label">地址</view>
					<view>上海市仁德路1349号</view>
				</view>
				<view class="order-detail-line">
					<view class="order-detail-label">客服专员</view>
					<view>小米</view>
				</view>
				<view class="order-detail-line">
					<view class="order-detail-label">客服手机号</view>
					<view>1373444447</view>
				</view>
				<view class="order-detail-line">
					<view class="order-detail-label">订单状态</view>
					<view>已派单</view>
				</view>
				<view class="order-detail-line">
					<view class="order-detail-label">勘测工程师</view>
					<view>张飞</view>
				</view>
			</view>

			<view class="bottom-box">
				<view class="red-title">
					<u-section title="位置信息" :right="false" line-color="#FF2C34" font-size="32"></u-section>
				</view>
				<view class="order-detail-line order-detail-input">
					<view class="order-detail-label">物业名称</view>
					<view class="gray">
						<u-input v-model="value"  placeholder="请输入物业名称" input-align="right"/>
					</view>
				</view>
				<view class="order-detail-line order-detail-input">
					<view class="order-detail-label">小区名称</view>
					<u-input v-model="value"   placeholder="请输入小区名称" input-align="right"/>
				</view>
				<view class="order-detail-line order-detail-input">
					<view class="order-detail-label">变更地址</view>
					<u-input v-model="value"  placeholder="请输入变更地址" input-align="right"/>
				</view>
			</view>

			<view class="bottom-box">
				<view class="red-title">
					<u-section title="专员信息" :right="false" line-color="#FF2C34" font-size="32"></u-section>
				</view>
				<view class="order-detail-line">
					<view class="order-detail-label">预约勘测时间</view>
					<view @click="timePickerShow =!timePickerShow">
						<u-icon class="gray" name="arrow-right" size="40"></u-icon>
					</view>
				</view>
			</view>
		</view>


		<RedButton title="提交"></RedButton>
		
		<u-popup v-model="timePickerShow" mode="bottom" border-radius="30" :closeable="true">
			<TimePicker></TimePicker>
		</u-popup>

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
				timePickerShow: false,
				params: {
					month: true,
					day: true,
					hour: true,
					minute: true,
					second: false
				},
			}
		},
		methods: {
			toAssignList() {
				uni.navigateTo({
					url: '../assign-list/assign-list'
				})
			}
		},
		onLoad() {
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
