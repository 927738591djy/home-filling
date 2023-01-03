<template>
	<view>
		<view class="top">
			<view :style="{height:(statusBarHeight+10)+'px'}" class="status_bar"></view>
			<view class="title">家充装</view>
			<view class="home">
				<image src="../../static/img/home/logo.png" alt="">
			</view>
		</view>
		<view>
			<view class="app-manage">
				<u-section title="应用管理" :right="false" line-color="#FF2C34" font-size="32"></u-section>
			</view>

			<u-grid :col="3" :border="false">
				<u-grid-item @click="clickMenuItem" v-for="(item,index) in homeMenuList"
					:custom-style="{padding:'50rpx 0'}" :key="item.id">
					<image open-type="getPhoneNumber" @getphonenumber="getPhoneNumber" style="width: 80rpx; height:80rpx;margin-bottom: 24rpx;" :src="item.icon" mode="">
					</image>
					<view class="grid-text">{{item.name}}</view>
				</u-grid-item>
			</u-grid>

			 <!-- <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">唤起授权手机号</button> -->

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight: 0,
				homeMenuList: [{
						icon: '../../static/img/home/order.png',
						name: '订单分配'
					},
					{
						icon: '../../static/img/home/survey.png',
						name: '待勘测'
					},
					{
						icon: '../../static/img/home/install.png',
						name: '待安装'
					},
					{
						icon: '../../static/img/home/imporve.png',
						name: '待整改'
					},
					{
						icon: '../../static/img/home/count.png',
						name: '结算单'
					},
					{
						icon: '../../static/img/home/statement.png',
						name: '售后订单'
					},
					{
						icon: '../../static/img/home/my.png',
						name: '我的'
					},
					{
						icon: '../../static/img/home/stock.png',
						name: '库存查看'
					},
					{
						icon: '../../static/img/home/trip.png',
						name: '行程安排'
					},
				] //首页图文列表假数据

			}
		},
		onLoad() {
			// 状态栏高度，单位：px
			this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
			if(uni.getStorageSync('token') !== ''){
				this.getHomeMenuList()
			}
		},
		onShow() {
			if(uni.getStorageSync('token') !== ''){
				this.getHomeMenuList()
			}
		},
		methods: {
			// 获取首页菜单列表图文
			getHomeMenuList() {
				this.$lsxmApi.getHomeMenuList().then(res => {
					if (res.data.data.code == 200 || res.data.data.code == 1) {
						// 请求成功,返回数据
						this.homeMenuList = res.data.data.data
					} else {
						// 弹出错误提示消息
						console.log(res);
					}
				})
			},

			// 点击菜单,判断是本地缓存否有token,有的话就不掉用授权登录接口
			clickMenuItem() {
				if (uni.getStorageSync('token') == '') {
					// 获取手机号,再调用登录获取token接口
					this.loginAuthorization()
				}
			},

			// 获取登录token
			loginAuthorization() {
				this.$lsxmApi.loginAuthorization('17630150994').then(res => {
					if (res.data.data.code == 200 || res.data.data.code == 1) {
						// 请求成功,返回数据
						let tokenObj = res.data.data.data
						uni.setStorageSync('token', tokenObj.access_token) //将token存入本地缓存中
						console.log(3333);
						console.log(uni.getStorageSync('token'));
						if(uni.getStorageSync('token') !== ''){
							this.getHomeMenuList()
						}
					} else {
						// 弹出错误提示消息
						console.log('不是内部人员');
					}
				})
			},

			// 获取code
			getuserNew() {
				uni.login({
					provider: 'weixin',
					success: res => {
						console.log(res.code);
					}
				});
			},
			
			// 获取用户手机号
				getPhoneNumber(e){
					console.log(22);
					console.log(e.detail.errMsg)                                            // 判断用户是否允许获取手机号
					console.log(e.detail.iv)                                                    // 参数 iv
					console.log(e.detail.encryptedData)                               // 参数encryptedData
					if(e.detail.errMsg == "getPhoneNumber:ok"){                // 用户允许或去手机号
						uni.request({
							url:"http://192.168.0.93:6042/login/miniProgramLogin",
							method:"POST",
							data:{
								data:{
									encryptedData: e.detail.encryptedData,
									iv: e.detail.iv,
									sessionKey: this.session_key,
									openId: this.openId,
								}
							},
							success:(res)=>{
								if(res.data.errorinfo == null){
									console.log(res.data)       // 这个里面就有手机号了
									
								}
							}
						})
					}
				},
						



		}
	}
</script>

<style>
	.status_bar {
		width: 100%;
	}

	.top {
		height: 25vh;
		background: linear-gradient(to bottom, #FF2C2E, #FC615F);

	}

	.title {
		color: #fff;
		font-size: 36rpx;
		padding-left: 30rpx;
	}

	.home {
		display: flex;
		justify-content: center;
		margin-top: 60rpx;
	}

	.home image {
		width: 148rpx;
		height: 148rpx;
	}

	.app-manage {
		font-family: "PingFang SC";
		padding: 36rpx 0 28rpx 24rpx;
		margin-top: 36rpx;
	}

	/deep/.u-section .u-section__title__text {
		padding-left: 20rpx;
	}
</style>
