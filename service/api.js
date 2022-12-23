import lsxmRequest from './config.js'
export default{
    apis:{
        //获取首页图文列表
        getHomeMenuList(){
            return lsxmRequest.get('/sys/menu-applet/menus')
        },
		
		//登录授权
		loginAuthorization(data){
		    return lsxmRequest.post('/mockLogin',data)
		},
		
		//订单分配列表
		getOrderAllocationList(data){
		    return lsxmRequest.post('/order/allocationList',data)
		},
		
		//订单分配详情
		getOrderAllocationDetail(data){
		    return lsxmRequest.post('/order/allocationDetail',data)
		},
		
		// 服务商工程师列表查询
		getEngineerNameList(data){
			return lsxmRequest.post('/engineername/list',data)
		},
		
		//订单指派提交
		orderAssignmentSubmit(data){
			return lsxmRequest.post('/order/assignment/submit',data)
		},
		
		
		
		//登录
		login(data){
		    return lsxmRequest.post('/app/auth/login', data)
		},
	}
}
