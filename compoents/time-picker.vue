<template>
	<view>
		<view>
			<view class="title">
				<span>选择日期</span>
			</view>
			<view class="line"></view>
			<view style="margin-top: -698rpx;">
				<picker-view immediate-change v-if="visible" :indicator-style="indicatorStyle" :value="value"
					@change="bindChange" class="picker-view">
					<picker-view-column style="padding: 0 60rpx;">
						<view class="item left" :class="{selected:index==value[0]}" v-for="(item,index) in list"
							:key="index">{{item}}</view>
					</picker-view-column>
					<!-- <picker-view-column>
							<view class="item right" :class="{selected:index==value[1]}" v-for="(item,index) in timeList" :key="index">{{item}}<image v-if="index==value[1]" class="icon" src="../static/selected.png" mode=""></image> </view>
						</picker-view-column> -->
					<picker-view-column >
						<view class="item right" v-for="(item,index) in hourList" :key="index">{{item}}时</view>
					</picker-view-column>
					<picker-view-column>
						<view class="item right" v-for="(item,index) in minList" :key="index">{{item}}分</view>
					</picker-view-column>
					<picker-view-column>
						<view class="item right" v-for="(item,index) in secondList" :key="index">{{item}}秒</view>
					</picker-view-column>
				</picker-view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data: function() {
			const date = new Date()
			const month = date.getMonth() + 1
			const day = date.getDate()
			const list = []
			const hourList = []
			const minList = []
			const secondList = []
			for (let i = month; i <= month + 1; i++) {
				for (let j = 1; j <= 31; j++) {
					if (i >= 13) {
						list.push((1) + '月' + j + '日')
					} else {
						list.push(i + '月' + j + '日')
					}
				}
			}
			for (let i = 0; i <= 23; i++) {
				hourList.push(i)
			}
			for (let i = 0; i <= 59; i++) {
				minList.push(i)
				secondList.push(i)

			}
			list.splice(day - 1, 1, "今天")
			return {
				indicatorStyle: `height: 50px;`,
				title: 'picker-view',
				month, //当前月份
				day, //当前日
				list: list.slice(day - 1, list.length),
				value: [0, 0],
				visible: true,
				timeList: ['8：00-8：30', '9：00-9：30', '10：00-10：30', '11:00-11:30', '12:00-12:30', '13:00-13:00',
					'14:00-14:30', '15:00-15:30', '16:00-16:30'
				], //时间段数组，这个是固定的，自定义的。
				hourList: hourList, //循环小时
				minList:minList,
				secondList:secondList
			}
		},
		methods: {
			bindChange: function(e) {
				console.log(e);
				const val = e.detail.value
				// this.day = this.days[val[2]]
				this.value = e.detail.value
			}
		},
		props: {
			popupShow: {
				default: false,
				required: true
			}
		},
	}
</script>
<style>
	/* .line {
		background-color: #E7E7E7;
		height: 2rpx;
		margin-top: 30rpx;
	} */

	.title {
		text-align: center;
		font-size: 32rpx;
		font-weight: 600;
		position: relative;
		z-index: 100;
		background-color: #fff;
		width: 90%;
		height: 100rpx;
		line-height: 100rpx;
	}

	.title span {
		position: absolute;
		left: 330rpx;
	}

	.picker-view {
		width: 100%;
		height: 1500rpx;
	}

	.item {
		position: relative;
		line-height: 100rpx;
		align-items: center;
		justify-content: center;
		text-align: center;
		font-size: 28rpx;
	}

	.left {
		background-color: #F6F6F6;
		color: #999;
	}

	.right {
		text-align: center;
	}

	.selected {
		color: #FF2C34;
	}

	.icon {
		height: 30rpx;
		width: 30rpx;
		position: absolute;
		right: 30rpx;
		top: 30rpx;
	}

	/deep/.uni-picker-view-content {
		/* padding: 0!important; */
		/* transform: translateY(0)!important; */
	}
</style>
