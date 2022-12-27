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
			return lsxmRequest.get('/order/order/get_survey_list?orderStatus='+ orderStatus + '&likeKeyWords=' + likeKeyWords)
		},


		// 勘测订单详情
		getOrderSurveyDetail(orderId) {
			return lsxmRequest.get('/order/order/get_survey_detail?orderId='+orderId )
		},








	}
}
