<template>
	<view class="trip">
		<view class="top">
			<navbar  title="行程安排" :blackArrow="true" >
			</navbar>
			<view class="light-circle"></view>
			<view class="light-circle-right"></view>
		</view>
		<view class="middle">
			<u-calendar mask-close-able v-model="show" mode="date" :closeable="true" @date="dateChange" :change-year="false" active-bg-color="#FF2C34">
				<view slot="tooltip">
						</view>
			</u-calendar>
		</view>
		<view class="bottom" >
			<view class="bottom-title">今日事项</view>
			<view v-if="orderList.length>0" class="bottom-boxs">
				<view v-for="item in orderList" class="bottom-box">
					<view class="type">勘测</view>
					<view class="car-name">{{item.brandInfo.name}}</view>
					<view class="trip-intro">
						<view class="detail-intro">
							<view class="tag-name letter">车主:</view>
							<view class="tag-intro">{{item.cust.name}}</view>
						</view>
						<view class="detail-intro">
							<view class="tag-name letter">工程师:</view>
							<view class="tag-intro">{{item.engineer.nickname}}</view>
						</view>
						<view class="detail-intro">
							<view class="tag-name">安装地址:</view>
							<view class="tag-intro">{{item.install.villageAddress}}</view>
						</view>
						<view class="detail-intro">
							<view class="tag-name">安装时间:</view>
							<view class="tag-intro">{{item.install.startTime}}</view>
						</view>

					</view>
				</view>
			</view>
			
			<view style="display: flex;width:100%;justify-content: center;" v-else>暂无今日行程</view>
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
				show: true,
				orderList:[], //
				tripDate:'' //选择的日期
			}
		},
		methods:{
			// 我的行程列表查询
			getMyTrip() {
				this.$lsxmApi.getMyTrip(this.tripDate).then(res => {
					if (res.data.data.code == 200 || res.data.data.code == 1) {
						// 请求成功,返回数据
						this.orderList = res.data.data.data.records
					} else {
						// 弹出错误提示消息
					}
				})
			},
			dateChange(e){
				this.tripDate = e.date
				this.getMyTrip()
			}
		},
		onLoad() {
			this.tripDate = new Date().getFullYear() + '-'+ (new Date().getMonth()+1)+ '-'+ new Date().getDate()
			this.getMyTrip()
		},
		mounted() {
			
		}
	}
</script>

<style scoped>
	.trip {
		background-color: #F5F5F5;
		position: relative;
		height: 100vh;
	}
	.top {
		height: 20vh;
		background: linear-gradient(to bottom, #FF2C2E, #FC615F);
		position: relative;
		overflow: hidden;
		z-index: 1;
	}
	.light-circle {
		background-color: #FD7B79;
		width: 1000rpx;
		height: 700rpx;
		border-radius: 60%;
		position: absolute;
		left: -700rpx;
		top: -100px;
		z-index: 1;
	}

	.light-circle-right {
		background-color: #FD7B79;
		width: 1000rpx;
		height: 700rpx;
		border-radius: 60%;
		position: absolute;
		right: -800rpx;
		top: -100px;
	}

	.middle {
		position: relative;
		z-index: 100;
		margin-top: -100rpx;
		background-color: #fff;
		border-radius: 50rpx;
		padding-bottom: 30rpx;
		box-shadow: #B1B1B1;
	}

	/deep/.u-calendar__action__text {
		color: #B1B1B1 !important;
		font-weight: normal !important;
	}

	/deep/.u-icon__icon {
		color: #B1B1B1 !important;
		font-weight: normal !important;
	}

	.bottom-title {
		font-size: 32rpx;
		padding: 36rpx 0 28rpx 24rpx;
	}

	.bottom-box {
		position: relative;
		background-color: #fff;
		border-radius: 20rpx;
		overflow: hidden;
		padding: 0 60rpx 40rpx 40rpx;
		margin-bottom: 36rpx;
	}

	.bottom-box::before {
		content: '';
		background-color: #FC615F;
		width: 16rpx;
		height: 150%;
		position: absolute;
		left: 0;
		top: -30%;
	}

	.bottom-boxs {
		padding: 0 24rpx;
	}

	.car-name {
		font-size: 32rpx;
		line-height: 80rpx;
		height: 80rpx;
		font-weight: 600;
	}

	.trip-intro {
		background-color: #fafafa;
		padding: 24rpx 0 10rpx 0;
		border-radius: 20rpx;
	}

	.detail-intro {
		display: flex;
		font-size: 28rpx;
		margin-bottom: 28rpx;
	}

	.tag-name {
		color: #999;
		margin-left: 24rpx;
		width: 150rpx;
	}

	.tag-intro {
		letter-spacing: 5rpx;
	}

	.type {
		position: absolute;
		background-color: #FF9600;
		border-bottom-left-radius: 20rpx;
		width: 100rpx;
		height: 40rpx;
		right: 0;
		top: 0;
		text-align: center;
		line-height: 40rpx;
		color: #fff;
		font-size: 24rpx;
	}
</style>
