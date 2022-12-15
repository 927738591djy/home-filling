<template>
	<view class="install-detail">
		<view class="top">
			<navbar color="#000"  title="订单详情">
			</navbar>
		</view>

		<view class="bottom">
			<view class="bottom-box">
				<view class="report-detail">
					<view class="box-label">安装完成时间:：</view>
					<view class="address">2022-11-23 12:30:30</view>
				</view>
				<view class="line"></view>
				<view class="report-detail">
					<view class="box-label">充电桩型号(TPN):</view>
					<view>16287628-02-G</view>
				</view>
				<view class="report-detail">
					<view class="box-label">充电桩编号(TSN):</view>
					<view class="address">PGT237292839203</view>
				</view>
				<view class="report-detail">
					<view class="box-label">电缆规格:</view>
					<view class="address"> 3*6</view>
				</view>
				<view class="report-detail">
					<view class="box-label">电缆长度:</view>
					<view class="address">37</view>
				</view>
				<view class="report-detail">
					<view class="box-label">管长</view>
					<view class="address">10</view>
				</view>
				<view class="line"></view>
				<view class="report-detail">
					<view class="box-label">付费金额:</view>
					<view class="address">37</view>
				</view>
				<view class="report-detail">
					<view class="box-label">付费备注</view>
					<view class="address">10</view>
				</view>
				<view class="line"></view>
				<view class="box-label">安装总结：</view>
				<view class="survey-textarea">
					<textarea v-model="text" placeholder="" />
				</view>
					<view class="line"></view>
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
					<view class="box-label">增项报价单(最多上传2张):</view>
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
					<view class="box-label">电源点(最多上传2张):</view>
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
					<view class="box-label">控制箱内部接线(最多上传1张):</view>
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
					<view class="report-detail">
						<view class="box-label">整改金额</view>
						<view class="address">1033</view>
					</view>
					<view class="line"></view>
					<view class="box-label">上传售后传片(最多上传5张):</view>
					<view class="survey-textarea survey-upload">
						<u-upload :action="action" :file-list="fileList" upload-text="上传现场勘测照片" :custom-btn="true">
							<view slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
								<image style="width: 72rpx;height: 72rpx" src="../../static/img/order/addbtn.png" mode="">
								</image>
								<view style="color:#000;font-size: 24rpx;">确认书</view>
							</view>
						</u-upload>
					</view>
					
			</view>
		</view>



		<view class="button" @click="backOrderAssign">
			提交审核
		</view>



	</view>
</template>

<script>
	import navbar from '../../compoents/navbar/navbar.vue'
	export default {
		components: {
			navbar
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
	.survey-upload {
		text-align: center;
		padding: 44rpx 0;
		display: flex;
		justify-content: center;
		background-color: #FAFAFA;
		border: 6rpx dotted #E7E7E7;
		margin: 28rpx 0 40rpx 0;
	}
</style>
