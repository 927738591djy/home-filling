<template>
	<view class="install-report">
		<view class="top">
			<navbar color="#000" :statusBarHeight="statusBarHeight" :cachetHeight="cachetHeight" title="安装报告"
				@onBack="goBack">
			</navbar>
		</view>
		<view class="bottom">
			<view class="bottom-box">
				<view class="box-label">安装确认书(最多上传5张):</view>
				<view class="survey-textarea survey-upload">
					<u-upload :action="action" :file-list="fileList" upload-text="上传现场勘测照片" :custom-btn="true">
						<view slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
							<image style="width: 72rpx;height: 72rpx" src="../../static/img/order/addbtn.png" mode="">
							</image>
							<view style="color:#000;font-size: 24rpx;">确认书</view>
						</view>
					</u-upload>
				</view>
				<view class="line"></view>
			</view>
			<view class="bottom-box">
				<view class="box-label">增项报价单(最多上传2张):</view>
				<view class="survey-textarea survey-upload">
					<u-upload :action="action" :file-list="fileList" upload-text="增项报价单" :custom-btn="true">
						<view slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
							<image style="width: 72rpx;height: 72rpx" src="../../static/img/order/addbtn.png" mode="">
							</image>
							<view style="color:#000;font-size: 24rpx;">增项报价单</view>
						</view>
					</u-upload>
				</view>
				<view class="line"></view>
			</view>
			<view class="bottom-box">
				<view class="box-label">电源点(最多上传2张):</view>
				<view class="survey-textarea survey-upload">
					<u-upload :action="action" :file-list="fileList" upload-text="电源点" :custom-btn="true">
						<view slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
							<image style="width: 72rpx;height: 72rpx" src="../../static/img/order/addbtn.png" mode="">
							</image>
							<view style="color:#000;font-size: 24rpx;">电源点</view>
						</view>
					</u-upload>
				</view>
				<view class="line"></view>
			</view>
			<view class="bottom-box">
				<view class="box-label">控制箱内部接线(最多上传1张):</view>
				<view class="survey-textarea survey-upload">
					<u-upload :action="action" :file-list="fileList" upload-text="控制箱内部接线" :custom-btn="true">
						<view slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
							<image style="width: 72rpx;height: 72rpx" src="../../static/img/order/addbtn.png" mode="">
							</image>
							<view style="color:#000;font-size: 24rpx;">控制箱内部接线</view>
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
				statusBarHeight: 0,
				cachetHeight: 0,
			}
		},
		methods: {

		},
		onLoad() {
			// 状态栏高度，单位：rpx
			this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
			console.log(this.statusBarHeight + '状态');
			this.cachetHeight = uni.getMenuButtonBoundingClientRect().height
			console.log(this.cachetHeight);
		},
	}
</script>

<style>
	.top {
		/* background: #fff; */
		position: relative;
		overflow: hidden;
		height: 11vh;
		color: #000;
	}

	.bottom {
		background-color: #fff;
		/* margin-bottom: 32rpx 24rpx 100rpx 24rpx; */
		border-radius: 20rpx;
		padding: 40rpx;
		padding-bottom: 15rpx;
		margin-top: 32rpx;
	}

	.line {
		height: 3rpx;
		background-color: #E7E7E7;
		margin-bottom: 40rpx;
	}

	.survey-upload {
		text-align: center;
		padding: 44rpx 0;
		display: flex;
		justify-content: center;
		background-color: #FAFAFA;
		border: 6rpx dotted #E7E7E7;
		margin: 28rpx 0 40rpx 0;
	}

	.box-label {
		color: #999;
	}

	.install-report {
		padding: 0rpx 24rpx 150rpx 24rpx;
	}
</style>
