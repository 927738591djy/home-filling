<template>
	<view @click="back" :style="{top:statusBarHeight + 'px',height:(cachetHeight + 8)+'px',lineHeight:(cachetHeight + 8)+'px'}" class="navbar">
		<image v-if="blackArrow" style="height: 50rpx;width: 50rpx;margin: 0 20rpx;" src="../../static/left-arrow.png"></image>
		<image v-if="!blackArrow" style="height: 50rpx;width: 50rpx;margin: 0 20rpx;" src="../../static/left-arrow-black.png"></image>
		<view :style="{color:color}" class="title">{{title}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight:0,
				cachetHeight:0
			}
		},
		props: {
			title: {
				required: true,
				default: ''
			},
			color:{
				default:'#fff'
			},
			blackArrow:{
				default:false
			}
		},
		methods:{
			back(){
				uni.navigateBack({
					delta:1
				})
			}
		},
			
		created(){
			// #ifndef H5 || APP-PLUS || MP-ALIPAY
			// 状态栏高度，单位：rpx
			this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
			this.cachetHeight = uni.getMenuButtonBoundingClientRect().height
			console.log('statusBarHeight'+this.statusBarHeight);
			console.log('cachetHeight'+this.cachetHeight);
			// #endif
		}
	}
</script>
<style scoped>
	.navbar {
		display: flex;
		color: #000;
		align-items: center;
		position: absolute;
		width: 100%;
		z-index: 100;
	}

	.title {
		color: #fff;
		font-size: 36rpx;
	}
</style>

