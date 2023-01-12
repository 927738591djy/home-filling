<template>
	<view class="install-report">
		<view class="top">
			<navbar color="#000" title="安装报告">
			</navbar>
		</view>
		<view class="bottom">

			<view class="bottom-box">

				<view class="box-label">安装确认书(最多上传5张):</view>
				<view style="display: flex;justify-content: center;">
					<u-upload :action="action" :fileList="confirmFileList" upload-text="上传现场勘测照片" :custom-btn="true"
						:max-count="5" del-bg-color="#676767" @on-remove="onConFirmRemove"
						@on-choose-complete="onConFirmChange" :auto-upload="false">
						<view slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
							<view  class="survey-upload">
								<image style="width: 72rpx;height: 72rpx" src="../../static/img/order/addbtn.png"
									mode="">
								</image>
								<view style="color:#000;font-size: 24rpx;">确认书</view>
							</view>
						</view>
					</u-upload>
				</view>

				<view class="line"></view>
			</view>

			<view class="bottom-box">
				<view class="box-label">增项报价单(最多上传2张):</view>
				<view class="survey-textarea survey-upload">
				</view>
				<view class="line"></view>
			</view>
			<view class="bottom-box">
				<view class="box-label">电源点(最多上传2张):</view>
				<view class="survey-textarea survey-upload">
					<u-upload :action="action" :file-list="fileList" upload-text="电源点" :custom-btn="true"
						:max-count="2">
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
					<u-upload :action="action" :file-list="fileList" upload-text="控制箱内部接线" :custom-btn="true"
						:max-count="1">
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
				confirmFileList: [], //安装确认书上传列表
			}
		},
		methods: {
			onConFirmRemove(index, lists, name) {
				this.confirmFileList = lists
				console.log(this.confirmFileList);
			},
			onConFirmChange(lists, name) {
				this.confirmFileList = lists
				console.log(this.confirmFileList);
			}
		},
		onLoad() {},
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
		background-color: #fff;
		/* margin-bottom: 32rpx 24rpx 100rpx 24rpx; */
		border-radius: 20rpx;
		padding: 20rpx;
		padding-bottom: 15rpx;
		margin-top: 13vh;
	}

	.line {
		height: 3rpx;
		background-color: #E7E7E7;
		margin-bottom: 40rpx;
	}

	.survey-upload {
		text-align: center;
		justify-content: center;
		background-color: #FAFAFA;
		display: flex;
		align-items: center;
		flex-direction: column;
		border: 4rpx dotted #E7E7E7;
		margin: 30rpx auto;
		height: 192rpx;
		width: 640rpx;

	}

	.box-label {
		color: #999;
	}

	.install-report {
		padding: 0rpx 24rpx 150rpx 24rpx;
	}

	.out {
		display: flex;
		justify-content: center;
		margin: 28rpx 0 40rpx 0;
	}
</style>
