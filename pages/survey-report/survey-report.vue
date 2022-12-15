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
					<view>张无忌</view>
				</view>
				<view class="report-detail">
					<view class="box-label">安装地址：</view>
					<view class="address">上海市嘉定区众仁路勇立大厦M22 4-6</view>
				</view>
			</view>
			<view class="bottom-box time">
				<view class="box-label">勘测时间：</view>
				<view>
					<u-icon name="arrow-right" size="40"></u-icon>
				</view>
			</view>
			<view class="bottom-box">
				<view class="box-label">勘测总结：</view>
				<view class="survey-textarea">
					<textarea v-model="text" placeholder="请输入勘测总结" />
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


		<RedButton title="提交审核"></RedButton>

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
				
			}
		},
		methods: {

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
