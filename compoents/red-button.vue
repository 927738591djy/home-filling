<template>
	<view class="button" :style="{backgroundColor:bgColor}">
		{{title}}
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:{
			title:{
				required:true,
				default:''
			},
			bgColor:{
				default:'#D9D9D9',
				required:true
			}
		}
	}
</script>

<style>
	.button {
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