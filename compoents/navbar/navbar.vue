<template>
	<view :style="{top:statusBarHeight + 'px',height:(cachetHeight + 8)+'px',lineHeight:(cachetHeight + 8)+'px'}" class="navbar">
		<image style="height: 50rpx;width: 50rpx;margin: 0 20rpx;" src="../../static/left-arrow.png"></image>
		<view class="title">{{title}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		props: {
			statusBarHeight: {
				type: Number,
				default: 0
			},
			cachetHeight: {
				type: Number,
				default: 0
			},

			title: {
				required: true,
				default: ''
			}
		},
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

