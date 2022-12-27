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

		// 获取当前用户可见的服务商列表
		getProviderList(data) {
			return lsxmRequest.get('/provider/provider', data)
		},

		// 获取可见的服务商树形列表
		getProviderTreeList(data) {
			return lsxmRequest.get('/provider/provider/tree', data)
		},

		// 获取工程师列表 需要传服务商id
		getEngineersList(providerId, data) {
			return lsxmRequest.get('/biz/user/engineers?providerId=' + providerId, data)
		},

		// 订单分配列表查询
		getOrderAllocationList(conditionWords, type, data) {
			return lsxmRequest.get('/order/order/tobeAssignees?conditionWords=' + conditionWords + '&type=' + type,
				data)
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
			return lsxmRequest.get('/order/order/rectify_submit', data)
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
	}
}
