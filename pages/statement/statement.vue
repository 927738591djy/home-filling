<template>
	<view>
		<view class="top">
			<navbar title="结算单" :blackArrow="true">
			</navbar>
			<view class="light-circle"></view>
			<view class="light-circle-right"></view>
		</view>
		<view class="search">
			<view class="search-input">
				<image style="width: 48rpx;height: 48rpx;margin-right: 12rpx;" src="../../static/img/order/search.png">
				</image>
				<input v-model="likeKeyWords" type="text" placeholder="搜索预设文案">
			</view>
		</view>
		<view style="padding: 0 40rpx 0 0;width: 100%; background-color: #fff;">
			<u-tabs font-size="27" :list="tabsList" :is-scroll="false" :current="tabsCurrent" @change="tabsChange"
				active-color="#FC615F"></u-tabs>
		</view>

		<view class="bottom">
			<u-cell-group>
				<u-cell-item @click="toStateMentDetail(111)" v-for="(i,index) in 10" :key="index" title="舒启海敏iike2021-12-31结算单"></u-cell-item>
			</u-cell-group>
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
				tabsList: [{
					name: '已结算',
					count: 4
				}, {
					name: '待确认',
					count: 4
				}],
				tabsCurrent: 0,
				orderList:[],
				likeKeyWords:''
			}
		},
		methods: {
			tabsChange(index) {
				this.tabsCurrent = index;
				if(this.tabsCurrent == 0){
					this.getToConfirmSettleOrderList()
				}
				if(this.tabsCurrent == 0){
					this.getPayedSettleOrderList()
				}
			},
			toStateMentDetail(orderId){
				uni.navigateTo({
					url:'../statement-detail/statement-detail?orderId='+orderId
				})
			},
			// 待确认订单列表查询
			getToConfirmSettleOrderList() {
				this.$lsxmApi.getToConfirmSettleOrderList(this.likeKeyWords).then(res => {
					if (res.data.data.code == 200 || res.data.data.code == 1) {
						// 请求成功,返回数据
						this.orderList = res.data.data.data.records
					} else {
						// 弹出错误提示消息
					}
				})
			},
			// 已结算订单列表查询
			getPayedSettleOrderList() {
				this.$lsxmApi.getPayedSettleOrderList(this.likeKeyWords).then(res => {
					if (res.data.data.code == 200 || res.data.data.code == 1) {
						// 请求成功,返回数据
						this.orderList = res.data.data.data.records
					} else {
						// 弹出错误提示消息
					}
				})
			},
		},
		onLoad() {
		},
	}
</script>

<style>
	.top {
		background: linear-gradient(to bottom, #FF2C2E, #FC615F);
		position: relative;
		overflow: hidden;
		height: 11vh;
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
		z-index: 1;
	}

	.search {
		background-color: #fff;
		padding: 16rpx 24rpx;
	}

	.search-input {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #F8F8F8;
		height: 64rpx;
		border-radius: 30rpx;
	}

	.search-input::placeholder {
		font-size: 28rpx;
		color: #999;
	}
</style>
