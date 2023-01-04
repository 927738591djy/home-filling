import lsxmRequest from './config.js'
export default {
	apis: {
		//获取首页图文列表
		getHomeMenuList() {
			return lsxmRequest.get('/sys/menu-applet/menus')
		},

		//登录授权
		loginAuthorization(data) {
			return lsxmRequest.post('/mockLogin', data)
		},

		// 获取工程师列表 需要传服务商id
		getEngineersList(providerId, data) {
			return lsxmRequest.get('/biz/user/engineers?providerId=' + providerId, data)
		},

		// 订单分配列表查询
		getOrderAllocationList(query) {
			return lsxmRequest.get('/order/order/tobeAssignees',
				query)
		},

		// 订单待分配详情查询
		getOrderAllocationDetail(orderId) {
			return lsxmRequest.get('/order/order/getOrderDetails?orderId=' + orderId)
		},

		// 待勘测订单列表查询
		getOrderSurveyList(orderStatus, likeKeyWords) {
			return lsxmRequest.get('/order/order/get_survey_list?orderStatus=' + orderStatus + '&likeKeyWords=' +
				likeKeyWords)
		},


		// 勘测订单详情
		getOrderSurveyDetail(orderId) {
			return lsxmRequest.get('/order/order/get_survey_detail?orderId=' + orderId)
		},

		// 预约勘测
		preSurvey(data) {
			return lsxmRequest.post('/order/order/pre_survey', data)
		},

		// 勘测报告提交
		surveySubmit(data) {
			return lsxmRequest.post('/order/order/survey_submit', data)
		},


		//待安装订单列表查询
		getOrderInstallList(orderStatus, likeKeyWords) {
			return lsxmRequest.get('/order/order/get_install_list?orderStatus=' + orderStatus + '&likeKeyWords=' +
				likeKeyWords)
		},

		// 安装订单详情
		getOrderInstallDetail(orderId) {
			return lsxmRequest.get('/order/order/get_install_detail?orderId=' + orderId)
		},
		
		// 安装提交
		installSubmit(data) {
			return lsxmRequest.post('/order/order/install_submit', data)
		},
		
		// 预约安装
		preInstall(data) {
			return lsxmRequest.post('/install/install/pre_install', data)
		},
		
		
		//待整改订单列表查询
		getOrderRemoveList(orderStatus, likeKeyWords) {
			return lsxmRequest.get('/order/order/get_rectify_list?orderStatus=' + orderStatus + '&likeKeyWords=' +
				likeKeyWords)
		},
		
		// 整改订单详情
		getOrderReformDetail(orderId) {
			return lsxmRequest.get('/order/order/get_rectify_detail?orderId=' + orderId)
		},
		
		// 整改提交
		ReformSubmit(data) {
			return lsxmRequest.post('/order/order/rectify_submit', data)
		},
		
		//售后订单列表查询
		getAfterSaleOrderList(orderStatus, likeKeyWords) {
			return lsxmRequest.get('/order/order/get_after_sale_list?orderStatus=' + orderStatus + '&likeKeyWords=' +
				likeKeyWords)
		},
		// 售后订单详情
		getAfterSaleOrderDetail(orderId) {
			return lsxmRequest.get('/order/order/get_after_sale_detail?orderId=' + orderId)
		},
		
		// 售后提交
		AfterSaleSubmit(data) {
			return lsxmRequest.get('/aftersale/after-sale/after_sale_submit', data)
		},
		
		// 结算单列表待确认
		getToConfirmSettleOrderList(likeKeyWords) {
			return lsxmRequest.get('/settle/settle/get_to_confirm_settle_list?likeKeyWords'+ likeKeyWords)
		},
		
		// 结算单列表已结算
		getPayedSettleOrderList(likeKeyWords) {
			return lsxmRequest.get('/settle/settle/get_payed_settle_list?likeKeyWords='+ likeKeyWords)
		},
		
		// 结算订单详情
		getSettleDetail(orderId) {
			return lsxmRequest.get('/settle/settle/get_settle_detail?id=' + orderId)
		},
		
		// 结算单提交审批
		settleSubmit(data) {
			return lsxmRequest.post('/settle/settle/settle_submit',data)
		},
		
		// 库存列表
		getAssetsOrderList(likeKeyWords) {
			return lsxmRequest.get('/asset/asset/get_asset_list?likeKeyWords'+ likeKeyWords)
		},
		
		// 我的行程
		getMyTrip(tripDate) {
			return lsxmRequest.get('/order/order/get_my_trip?tripDate'+ tripDate)
		},
		
		// 我的订单
		getMyOrder(orderStatus, likeKeyWords) {
			return lsxmRequest.get('/order/order/get_my_orders?orderStatus=' + orderStatus + '&likeKeyWords=' +
				likeKeyWords)
		},
		
	}
}
