<template>
	<view>
		<view style="position: fixed;top:0;left:0;width: 100%;z-index: 100;">
			<view class="top">
				<navbar :title="navBarTitle" :blackArrow="true">
				</navbar>
				<view class="light-circle"></view>
				<view class="light-circle-right"></view>
			</view>
			<view class="search">
				<view class="search-input">
					<image style="width: 48rpx;height: 48rpx;margin-right: 12rpx;"
						src="../../static/img/order/search.png">
					</image>
					<input type="text" placeholder="搜索预设文案" v-model="queryParameter.likeKeyWords"
						@input="$u.debounce(search, 600)">
				</view>
			</view>

			<view style="padding: 0 40rpx 0 0;width: 100%; background-color: #fff;">
				<u-tabs font-size="27" :list="tabsList" :is-scroll="false" :current="tabsCurrent" @change="tabsChange"
					active-color="#FC615F"></u-tabs>
			</view>

		</view>

		<view class="bottom-boxs">
			<view class="bottom-box" v-for="item in orderReformList" :key="item.id">
				<view class="box-left">
					<view class="box-title">
						<view class="tag">
							<view class="tag-text">
								{{item.stateSubText}}
							</view>
						</view>
						<view class="bottom-box-title">{{item.brandInfo.name}}</view>
					</view>
					<view class="order-detail">
						<view class="order-label">下单时间：</view>
						<view>{{item.createdDate}}</view>
					</view>
					<view class="order-detail">
						<view class="order-label">客户信息：</view>
						<view>{{item.cust.name + item.cust.mobile}}</view>
					</view>
					<view class="order-detail">
						<view class="order-label">勘测时间：</view>
						<view>{{item.survey.createdDate}}</view>
					</view>
					<view class="order-detail">
						<view class="order-label">安装地址：</view>
						<view>{{item.villageAddress}}</view>
					</view>
				</view>

				<view class="box-right" @click="jump(item.id)">
					<u-icon size="50" name="arrow-right"></u-icon>
				</view>
			</view>


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
					name: '全部',
					count: 4
				}, {
					name: '进行中',
				}, {
					name: '已完成',
				}, ],
				tabsCurrent: 0,
				orderReformList: [], //待勘测订单列表

				// 查询参数
				queryParameter: {
					total: 0, //订单总数
					current: 1, //当前页
					size: 10, //每页限制10条
					orderStatus: 'ALL', //订单状态:全部，已完成，进行中
					likeKeyWords: '' //关键字
				},

				navBarTitle: '', //头部导航栏文字
				a: 2 //区分是整改还是售后订单的代码
			}
		},
		methods: {
			tabsChange(index) {
				this.tabsCurrent = index;
				console.log(index);
				switch (index) {
					case 0:
						this.queryParameter.orderStatus = 'ALL'
						break;
					case 1:
						this.queryParameter.orderStatus = 'DOING'
						break;
					case 2:
						this.queryParameter.orderStatus = 'FINISHED'
						break;
					default:
						break;
				}
				this.queryParameter.current = 1
				this.queryParameter.total = 0
				this.orderReformList = []
				if (this.a == 1) {
					this.getOrderRemoveList()
				} else {
					this.getAfterSaleOrderList()
				}
			},

			jump(orderId) {
				if (this.a == 1) {
					this.toReformDetail(orderId)
				}
				if (this.a == 2) {
					this.toOrderDetail(orderId)
				}

			},
			// 跳转到整改详情
			toReformDetail(orderId) {
				uni.navigateTo({
					url: '../reform-detail/reform-detail?orderId=' + orderId
				})
			},
			// 跳转到售后详情
			toOrderDetail(orderId) {
				uni.navigateTo({
					url: '../order-detail/order-detail?orderId=' + orderId
				})
			},


			// 待整改订单列表查询
			getOrderRemoveList() {
				this.$lsxmApi.getOrderRemoveList(this.queryParameter).then(res => {
					if (res.data.data.code == 200 || res.data.data.code == 1) {
						// 请求成功,返回数据
						this.orderReformList = this.orderReformList.concat(res.data.data.data.records)
						this.queryParameter.total = res.data.data.data.total //分页总数
					}
				})
			},


			//uniapp页面触底事件
			onReachBottom() {
				if (this.queryParameter.current * this.queryParameter.size >= this.queryParameter.total) {
					uni.showToast({
						title: "已经到底啦",
						icon: 'none'
					})
					return
				}
				this.queryParameter.current += 1
				if (this.a == 1) {
					this.getOrderRemoveList()
				}
				if (this.a == 2) {
					this.getAfterSaleOrderList()
				}
			},

			// 鼠标输入事件
			search() {
				this.orderReformList = []
				if (this.a == 1) {
					this.getOrderRemoveList()
				}
				if (this.a == 2) {
					this.getAfterSaleOrderList()
				}
			},

			//售后订单列表查询
			getAfterSaleOrderList() {
				this.$lsxmApi.getAfterSaleOrderList(this.queryParameter).then(res => {
					if (res.data.data.code == 200 || res.data.data.code == 1) {
						// 请求成功,返回数据
						this.orderReformList = this.orderReformList.concat(res.data.data.data.records)
						this.queryParameter.total = res.data.data.data.total //分页总数
					}
				})
			},



		},

		onLoad() {
			if (this.a == 1) {
				this.getOrderRemoveList()
				this.navBarTitle = '待整改'
			}
			if (this.a == 2) {
				this.getAfterSaleOrderList()
				this.navBarTitle = '售后订单'
			}

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


	.tag {
		background-color: #FF9600;
		height: 30rpx;
		font-size: 20rpx;
		color: #fff;
		padding: 0 10rpx;
		transform: skewX(-15deg);
		text-align: center;
		margin-right: 20rpx;
	}

	.tag-text {
		transform: skewX(15deg);
	}

	.bottom-boxs {
		margin-top: 22vh;
		padding: 32rpx 24rpx 0 24rpx;
	}

	.bottom-box {
		background-color: #fff;
		padding: 24rpx 32rpx;
		border-radius: 5px;
		display: flex;
		margin-bottom: 24rpx;
		justify-content: space-between;
		align-items: center;
		color: #000;
	}

	.bottom-box-title {
		font-size: 32rpx;
		color: #000;
	}

	.box-title {
		display: flex;
		align-items: center;
		margin-bottom: 20rpx;
	}

	.order-detail {
		display: flex;
		align-items: center;
		font-size: 28rpx;
		padding: 15rpx 0;

	}

	.order-label {
		color: #999999;
	}

	.box-left {}
</style>
