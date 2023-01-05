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


			<view v-if="orderInstallDetail.stateSub !== 'WAIT_INSTALL'">
				<view class="bottom-box">
					<view class="report-detail">
						<view>性别</view>
						<view class="select-right">
							<input type="text" disabled style="text-align: right;" v-model="value.sex"
								@click="selectShow=true" placeholder="请选择">
							<u-icon v-if="!value.sex" style="margin-left: 10rpx;color: #999;" top="2"
								name="arrow-right"></u-icon>
						</view>
						<!-- <view  @click="selectShow=true" v-if="value.sex">{{value.sex}}</view> -->
						<!-- 	<view @click="selectShow=true" class="select-right">
							请选择
							<u-icon style="margin-left: 10rpx;" top="2" name="arrow-right"></u-icon>
						</view> -->

					</view>

					<view class="report-detail">
						<view class="box-label">充电桩型号(TPN):</view>
						<view class="select-right">
							<input type="text" disabled style="text-align: right;"
								v-model="orderInstallDetail.install.installMaterial.chargeModelId"
								@click="selectMaterial('chargeModelId')" placeholder="请选择">
							<u-icon v-if="!orderInstallDetail.install.installMaterial.chargeModelId"
								style="margin-left: 10rpx;color: #999;" top="2" name="arrow-right"></u-icon>
						</view>
					</view>

					<view class="report-detail">
						<view class="box-label">充电桩编号(TSN):</view>
						<view class="select-right">
							<input type="text" disabled style="text-align: right;"
								v-model="orderInstallDetail.install.installMaterial.serialNo" @click="selectShow=true"
								placeholder="请选择">
							<u-icon v-if="!orderInstallDetail.install.installMaterial.serialNo"
								style="margin-left: 10rpx;color: #999;" top="2" name="arrow-right"></u-icon>
						</view>
					</view>

					<view class="report-detail">
						<view class="box-label">电缆规格:</view>
						<view class="select-right">
							<input type="text" disabled style="text-align: right;"
								v-model="orderInstallDetail.install.installMaterial.cableType" @click="selectShow=true"
								placeholder="请选择">
							<u-icon v-if="!orderInstallDetail.install.installMaterial.cableType"
								style="margin-left: 10rpx;color: #999;" top="2" name="arrow-right"></u-icon>
						</view>
					</view>

					<view class="report-detail">
						<view class="box-label">电缆长度:</view>
						<view class="select-right">
							<input type="text" disabled style="text-align: right;"
								v-model="orderInstallDetail.install.installMaterial.cableLength" @click="selectShow=true"
								placeholder="请选择">
							<u-icon v-if="!orderInstallDetail.install.installMaterial.cableLength"
								style="margin-left: 10rpx;color: #999;" top="2" name="arrow-right"></u-icon>
						</view>
					</view>

					<view class="report-detail">
						<view class="box-label">管长</view>
						<view class="select-right">
							<input type="text" disabled style="text-align: right;"
								v-model="orderInstallDetail.install.installMaterial.pipaLength" @click="selectShow=true"
								placeholder="请选择">
							<u-icon v-if="!orderInstallDetail.install.installMaterial.pipaLength"
								style="margin-left: 10rpx;color: #999;" top="2" name="arrow-right"></u-icon>
						</view>
					</view>

					<view class="line"></view>
					<view class="report-detail">
						<view class="box-label">付费金额:</view>
						<view></view>
					</view>
					<view class="report-detail">
						<view class="box-label">付费备注</view>
						<view></view>
					</view>
				</view>

				<view class="bottom-box">
					<view class="report-detail">
						<view class="box-label">安装完成时间:</view>
						
						<view class="select-right" @click="timeSelectShow = !timeSelectShow">
							<input type="text" disabled style="text-align: right;"
								v-model="orderInstallDetail.install.finishedTime" 
								placeholder="请选择">
							<u-icon v-if="!orderInstallDetail.install.finishedTime"
								style="margin-left: 10rpx;color: #999;" top="2" name="arrow-right"></u-icon>
						</view>
					</view>
					<view class="line"></view>
					<view class="box-label">安装总结：</view>
					<view class="survey-textarea">
						<textarea v-model="orderInstallDetail.install.summary" placeholder="请输入安装总结" />
					</view>
				</view>
			</view>
		</view>


		<RedButton v-if="orderInstallDetail.stateSub == 'WAIT_INSTALL'" @click.native="installSubmit"
			:bgColor="orderInstallDetail.install.timePre?'#FE3738':'#D9D9D9'" title="打卡"></RedButton>

		<RedButton v-else @click.native="installSubmit" :bgColor="noEmpty?'#FE3738':'#D9D9D9'" title="提交"></RedButton>

		<u-picker v-model="timeSelectShow" mode="time" title="完成时间" confirm-color="#FC615F" cancel-color="#969799"
			:params="params"></u-picker>

		<!-- 充电桩材料选择框 -->
		<u-select v-model="selectShow" :list="list" @confirm="selectConfirm"></u-select>

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
		watch:{
			orderInstallDetail:{  //监听订单详情对象的修改，实时判断必填项是否为空
				handler(newVal){
					let {
						chargeModelId,
						serialNo,
						cableType,
						cableLength,
						pipaLength,
					} =  newVal.install.installMaterial
					let newObj = {
						chargeModelId,
						serialNo,
						cableType,
						cableLength,
						pipaLength,
						finishedTime:newVal.install.finishedTime,
						summary:newVal.install.summary,
					} 
					Object.keys(newObj).filter(item => {
						if(newObj[item] == '' || item == null){
							this.noEmpty = false
						}else{
							this.noEmpty = true
						}
					})
					
					
				},
				deep: true
			}
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
				noEmpty: true,
				value: {

				},
				list: [{
						value: '难',
						label: '男'
					}, {
						value: '女',
						label: '女'
					},
					{
						value: '',
						label: ''
					}
				],
				selectShow: false, //材料选择框显
				name:'' //这项是表示打开的是哪个属性名的选择框
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
					}
				})
			},

			// 安装提交
			installSubmit() {
				this.$lsxmApi.installSubmit(this.orderInstallDetail).then(res => {
					if (res.data.data.code == 200 || res.data.data.code == 1) {
						// 请求成功,返回数据
						console.log(res);
					} else {
						// 弹出错误提示消息
					}
				})
			},

			// 打开选择材料框，并把点击的那个订单详情对象属性名传进去
			selectMaterial(name){
				this.selectShow = true
				this.name = name 
			},
				
			// 确定选择框的内容的回调
			selectConfirm(e) {
				this.orderInstallDetail.install.installMaterial[this.name] = e[0].label
			},
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
		top: 0;
		z-index:100;
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
		display: flex;
	}
</style>
