<template>
	<view>
		<!-- <u-picker v-model="show" mode="time" :params="params" title="完成时间" confirm-color="#FC615F" cancel-color="#969799" closeable="true"></u-picker> -->
		<TimePicker></TimePicker>
	</view>
</template>

<script>
	import TimePicker from '../../compoents/time-picker.vue'
	export default {
		components: {
			TimePicker
		},
		data() {
			return {
				show: true,
				params: {
					year: false,
					month:true,
					day: true,
					hour: true,
					minute: true,
					second: false
				},
			}
		},
		methods: {

		}
	}
</script>

<style>

	/deep/.u-datetime-picker {
		border-radius: 30rpx !important;
	}

	/deep/.u-picker__title {
		color: #000;
		font-size: 32rpx;
		font-weight: 500;
	}

	/deep/.u-btn-picker {
		font-size: 28rpx;
	}
</style>
