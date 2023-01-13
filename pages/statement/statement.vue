<template>
	<view>
	<view style="position: fixed;top:0;left:0;width: 100%;z-index: 100;">
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
	</view>

		<view class="bottom">
			ddd
			<u-cell-group>
				ddd
				<u-cell-item @click="toStateMentDetail(item.id)" v-for="item in orderList" :key="item.id" :title="item.name">wwww</u-cell-item>
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
				}, {
					name: '待确认',
				}],
				tabsCurrent: 0,
				orderList:[], //结算订单列表
				// 查询参数
				queryParameter: {
					total: 0, //订单总数
					current: 1, //当前页
					size: 10, //每页限制10条
					likeKeyWords: '' //关键字
				},
			}
		},
		methods: {
			tabsChange(index) {
				this.tabsCurrent = index;
				this.queryParameter.current = 1
				this.queryParameter.total = 0
				this.orderList = []
				if(this.tabsCurrent == 0){
					this.getPayedSettleOrderList()
				}
				if(this.tabsCurrent == 1){
					this.getToConfirmSettleOrderList()
				}
			},
			toStateMentDetail(id){
				uni.navigateTo({
					url:'../statement-detail/statement-detail?id='+ id
				})
			},
			// 待确认订单列表查询
			getToConfirmSettleOrderList() {
				this.$lsxmApi.getToConfirmSettleOrderList(this.queryParameter).then(res => {
					if (res.data.data.code == 200 || res.data.data.code == 1) {
						// 请求成功,返回数据
						this.orderList = this.orderList.concat(res.data.data.data.records)
						console.log(this.orderList);
						this.queryParameter.total = res.data.data.data.total //分页总数
					} 
				})
			},
			// 已结算订单列表查询
			getPayedSettleOrderList() {
				this.$lsxmApi.getPayedSettleOrderList(this.queryParameter).then(res => {
					if (res.data.data.code == 200 || res.data.data.code == 1) {
						// 请求成功,返回数据
						this.orderList = this.orderList.concat(res.data.data.data.records)
						this.queryParameter.total = res.data.data.data.total //分页总数
					} 
				})
			},
		},
		onLoad() {
			this.getPayedSettleOrderList()
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
	.botom{
		padding-top: 300rpx;
	}
</style>
