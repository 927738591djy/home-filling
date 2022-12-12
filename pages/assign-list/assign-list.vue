<template>
	<view>
		<view class="top">
			<navbar color="#000" :statusBarHeight="statusBarHeight" :cachetHeight="cachetHeight" title="指派列表"
				@onBack="goBack">
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
				<u-cell-item v-for="item in engineerNameList" :key="item.engineerId" @click="selectEngineer(item.engineerId,item.engineerName)" :title="item.engineerName"
					:title-style="{color: currentId == item.engineerId?'#FF2B2F':'#000',  fontSize:currentId == item.engineerId?'32rpx':'28rpx'}" :index="item.engineerId"
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
				statusBarHeight: 0,
				cachetHeight: 0,
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
					url:''
				})
			},
			// 服务商工程师列表查询
			getEngineerNameList(){
				this.$lsxmApi.getEngineerNameList().then(res => {
					if (res.data.data.code == 200 || res.data.data.code == 1) {
						// 请求成功,返回数据
							this.engineerNameList = res.data.data.data
					} else {
						// 弹出错误提示消息
					}
				})
			}
		},
		onLoad() {
			this.getEngineerNameList()
			// 状态栏高度，单位：rpx
			this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
			console.log(this.statusBarHeight + '状态');
			this.cachetHeight = uni.getMenuButtonBoundingClientRect().height
			console.log(this.cachetHeight);
		},
	}
</script>

<style scoped>
	.top {
		background: #fff;
		position: relative;
		overflow: hidden;
		height: 11vh;
		color: #000;
	}

	.bottom {
		margin-top: 32rpx;
		background-color: #fff;
		padding: 0 20rpx;
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
</style>
