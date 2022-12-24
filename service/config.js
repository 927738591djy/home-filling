import LsxmRequest from './request.js'

const lsxmRequest = new LsxmRequest()
let timers
let reson=true
// 请求拦截器
lsxmRequest.interceptors.request((request) => {
    if (uni.getStorageSync('token')) {
        request.header['X-Jhspace-Token'] = uni.getStorageSync('token');
    }
	// 在请求前
    if(reson){
		reson=false
		uni.showLoading({
		  mask:true //是否显示透明蒙层，防止触摸穿透，默认：false
		});
		timers=setTimeout(()=>{
			reson=true
			clearTimeout(timers)
		},2000)
	}
    return request
})

// 响应拦截器
lsxmRequest.interceptors.response((response) => {
	// 在拿到数据后
	// clearTimeout()
	uni.hideLoading()
    // 超时重新登录
    if(response.data.data.code ===501 ){
		// uni.reLaunch({
		// 	url: '../pages/login/login.vue'
		// })
		//debugger
		uni.reLaunch({
			url: '../../pages/login/login',
			fail(e){

			}
		});
    }else{
        return response;
    }
})

// 设置默认配置
lsxmRequest.setConfig((config) => {
	// let url=process.env.NODE_ENV=='development'?'http://127.0.0.1:8080':'http://127.0.0.1:8080'

	// let url=process.env.NODE_ENV=='development'?'http://prd-app.jinghong.art':'http://prd-app.jinghong.art'
	// let url=process.env.NODE_ENV=='development'?'http://yapi.smart-xwork.cn/mock/190880':'http://yapi.smart-xwork.cn/mock/190880'
	let url=process.env.NODE_ENV=='development'?'http://106.15.52.75:80/api':'http://106.15.52.75:80/api'
	
    config.baseURL = url

    if (uni.getStorageSync('token')) {
        // config.header['X-Jhspace-Token'] = uni.getStorageSync('token');
		config.header['Authorization'] = 'Bearer'+ ' ' + uni.getStorageSync('token');
		config.header['content-type'] = 'multipart/form-data'
		
    }
	
    return config;
})
console.log(lsxmRequest)
export default lsxmRequest
