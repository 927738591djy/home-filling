<template>
	<view class="order-allocation">
		<view style="position: fixed;top:0;left:0;width: 100%;">
			<view class="top">
				<navbar title="订单分配" :blackArrow="true">
				</navbar>
				<view class="light-circle"></view>
				<view class="light-circle-right"></view>
			</view>
			<view class="search">
				<view class="search-input">
					<image style="width: 48rpx;height: 48rpx;margin-right: 12rpx;" src="../../static/img/order/search.png">
					</image>
					<input type="text" v-model="queryParameter.conditionWords" placeholder="搜索预设文案" class="debounce"
						@input="$u.debounce(search, 600)">
				</view>
			</view>
			
			<view class="tabs" >
				<u-tabs font-size="27" :list="tabsList" :is-scroll="false" :current="tabsCurrent" @change="tabsChange"
					active-color="#FC615F"></u-tabs>
			</view>
		</view>

		<view class="bottom-boxs">
			<view class="bottom-box" v-for="item in orderList" :key="item.orderId">
				<view>
					<image style="width: 36rpx;height: 36rpx;vertical-align: middle;"
						src="../../static/img/order/order.png"></image>
				</view>

				<view class="box-right">
					<view class="bottom-box-title">{{item.type}}</view>
					<view class="order-detail">
						<view class="red-circle"></view>
						<view class="order-label">下单时间：</view>
						<view>{{item.dispatchDate}}</view>
					</view>
					<view class="order-detail">
						<view class="blue-circle"></view>
						<view class="order-label">客户信息：</view>
						<view>{{item.custName+item.mobile}}</view>
					</view>
					<view @click="toOrderDetail(item.orderId)" class="button">立即指派</view>
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
					}, {
						name: '勘测单',
					},
					{
						name: '安装单',
					},
					{
						name: '售后单',
					}
				],
				tabsCurrent: 0,
				orderAllocationList: [], //订单分配列表
				// 查询参数
				queryParameter: {
					total: 0, //订单总数
					current: 1, //当前页
					size: 10, //每页限制10条
					type: '', //订单类型
					conditionWords: '' //关键字
				},
			}
		},
		
		//利用计算属性替换订单种类名字
		computed: {
			orderList() {
				 this.orderAllocationList.filter(item => {
					switch (item.type) {
						case 'INSTALL_ORDER':
							item.type = "安装单"
							break;
						case 'SURVEY_ORDER':
							item.type = "勘测单"
							break;
						case 'AFTER_SALES_ORDER':
							item.type = "售后单"
							break;
						default:
							break;
					}
				})
				return this.orderAllocationList
			}
			
		},
		methods: {

			// tab栏改变
			tabsChange(index) {
				this.tabsCurrent = index;
				switch (index) {
					case 0:
						this.queryParameter.type = ''
						break;
					case 1:
						this.queryParameter.type = "SURVEY_ORDER"
						break;
					case 2:
						this.queryParameter.type = "INSTALL_ORDER"
						break;
					case 3:
						this.queryParameter.type = "AFTER_SALES_ORDER"
						break;
					default:
						break;
				}
				this.queryParameter.current = 1
				this.queryParameter.total = 0
				this.orderAllocationList = []
				this.getOrderAllocationList()
			},
			
			// 跳转到订单指派详情页面
			toOrderDetail(orderId) {
				uni.navigateTo({
					url: '../order-assign/order-assign?orderId=' + orderId
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
				this.getOrderAllocationList()

			},

			// 获取订单分配列表
			getOrderAllocationList() {
				this.$lsxmApi.getOrderAllocationList(this.queryParameter).then(res => {
					if (res.data.data.code == 200 || res.data.data.code == 1) {
						// 请求成功,返回数据
						this.orderAllocationList = this.orderAllocationList.concat(res.data.data.data.records)
						this.queryParameter.total = res.data.data.data.total //分页总数
					} else {
						// 弹出错误提示消息
					}
				})
			},

			// 鼠标输入事件
			search() {
				this.orderAllocationList = []
				this.getOrderAllocationList()
			},
		},



		onLoad() {
			this.getOrderAllocationList()
		}
	}
</script>

<style scoped>
	.top {
		background: linear-gradient(to bottom, #FF2C2E, #FC615F);
		overflow: hidden;
		height: 11vh;
		position: relative;
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

	.bottom-boxs {
		padding: 32rpx 24rpx 50rpx 24rpx;
	}

	.bottom-box {
		background-color: #fff;
		padding: 24rpx 32rpx;
		border-radius: 5px;
		display: flex;
		margin-bottom: 24rpx;
	}

	.bottom-box-title {
		width: 100%;
		font-size: 32rpx;
		border-bottom: 2rpx solid #E1E1E1;
		color: #000;
		padding-bottom: 20rpx;
	}

	.box-title {
		display: flex;
		align-items: center;
	}

	.order-detail {
		display: flex;
		align-items: center;
		font-size: 28rpx;
		padding: 15rpx 0;
		color: #666666;
	}

	.red-circle {
		width: 16rpx;
		height: 16rpx;
		background-color: #FF2C34;
		border-radius: 50%;
	}

	.blue-circle {
		width: 16rpx;
		height: 16rpx;
		background-color: #0083FF;
		border-radius: 50%;
	}

	.order-label {
		color: #999999;
		margin: 0 20rpx;
	}

	.order-detail:nth-child(3) {
		border-bottom: 2rpx dotted #E1E1E1;
		padding-top: 0;
	}

	.box-right {
		width: 100%;
		margin-left: 16rpx;
	}

	.button {
		width: 152rpx;
		height: 56rpx;
		background: #FF9600;
		box-shadow: 0px 3px 6px 0px rgba(225, 225, 225, 0.5);
		border-radius: 14px;
		font-size: 24rpx;
		color: #E1E1E1;
		text-align: center;
		line-height: 56rpx;
		float: right;
		margin: 24rpx 0 0 0;
	}
	.tabs{
		padding: 0 40rpx 0 0;width: 100%; background-color: #fff;
	}
	/* .order-allocation{
		padding-top: 20vh;
	} */
</style>
