<template>
	<view class="assign-list">
		<view class="top">
			<navbar color="#000" title="指派列表">
			</navbar>
		</view>
		<view class="search">
			<view class="search-input">
				<image style="width: 48rpx;height: 48rpx;margin-right: 12rpx;" src="../../static/img/order/search.png">
				</image>
				<input type="text" placeholder="搜索工程师">
			</view>
		</view>
		<view class="bottom">
			<u-cell-group>
				<u-cell-item v-for="item in engineerNameList" :key="item.id" @click="selectEngineer(item.id,item.nickname)" :title="item.nickname"
					:title-style="{color: currentId == item.id?'#FF2B2F':'#000',  fontSize:currentId == item.id?'32rpx':'28rpx'}" :index="item.id"
					:arrow="false" :border-bottom="true"
					></u-cell-item>
			</u-cell-group>
		</view>
		<view class="button" @click="backOrderAssign">
			立即指派
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
				orderId:'',//订单id
				currentId:0,
				currentEnginnerName:'',
				engineerNameList:[] //工程师姓名列表
			}
		},
		methods: {
			selectEngineer(id,name) {
				this.currentId = id
				this.currentEnginnerName = name
			},
			backOrderAssign(){
				uni.navigateTo({
					url:'../order-assign/order-assign?engineerId=' + this.currentId +'&engineerName='+ this.currentEnginnerName +'&orderId='+ this.orderId
				})
			},
			// 服务商工程师列表查询
			getEngineersList(){
				this.$lsxmApi.getEngineersList('1603271820159483904').then(res => {
					if (res.data.data.code == 200 || res.data.data.code == 1) {
						// 请求成功,返回数据
						console.log(res.data.data.data);
							this.engineerNameList = res.data.data.data
					} else {
						// 弹出错误提示消息
					}
				})
			}
		},
		onLoad(options) {
			this.orderId = options.orderId
			this.getEngineersList()
		},
	}
</script>

<style scoped>
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
		/* margin-top: 11vh; */
		background-color: #fff;
		padding: 0 20rpx;
	}

	.search {
		margin-top: 11vh;
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

	.cell-hover-class {
		background-color: #000;
	}
	.button{
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
	.assign-list{
		padding-bottom: 400rpx;
	}
</style>
