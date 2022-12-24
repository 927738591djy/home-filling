const config = Symbol('config')
const isCompleteURL = Symbol('isCompleteURL')
const requestBefore = Symbol('requestBefore')
const requestAfter = Symbol('requestAfter')
class LsxmRequest {

	//默认配置
	[config] = {
		baseURL: '',
		header: {
			'content-type': 'application/json',
			// 'Content-Type': 'text/plain',
			'tenant': 'MDAwMA==',
		},
		method: 'GET',
		dataType: 'json',
		responseType: 'text'
	}
	//拦截器
	interceptors = {
		request: (func) => {
			if (func) {
				LsxmRequest[requestBefore] = func
			} else {
				LsxmRequest[requestBefore] = (request) => request
			}
		},
		response: (func) => {
			if (func) {
				LsxmRequest[requestAfter] = func
			} else {
				LsxmRequest[requestAfter] = (response) => response
			}
		}
	}

	static[requestBefore](config) {
		return config
	}

	static[requestAfter](response) {
		return response
	}

	static[isCompleteURL](url) {
		return /(http|https):\/\/([\w.]+\/?)\S*/.test(url)
	}

	request(options = {}) {
		options.baseURL = options.baseURL || this[config].baseURL
		options.dataType = options.dataType || this[config].dataType
		options.url = LsxmRequest[isCompleteURL](options.url) ? options.url : (options.baseURL + options.url)
		options.data = options.data
		options.header = {
			...options.header,
			...this[config].header
		}
		options.method = options.method || this[config].method
		//       var version = 222;
		//       if( options.url.indexOf("app/config/indexNav")!=-1){
		//           options.data =  {key: options.data.key, version:version};
		//       }else{
		// 	if(!options.data){
		// 		options.data = {};
		// 	}
		// 	options.data.version = version;
		// }

		options = {
			...options,
			...LsxmRequest[requestBefore](options)
		}

		return new Promise((resolve, reject) => {
			options.success = function(res) {
				//console.log(navigator.userAgent);

				// #ifdef APP-PLUS
				if (res && res.data && res.data.message === "您不是最新版本,请先升级!!!") {
					console.log("你需要升级后才能使用！！！");
					uni.getSystemInfo({
						success: (res) => {
							//检测当前平台，如果是安卓则启动安卓更新
							if (res.platform == "android") {
								uni.showModal({
									title: '提示',
									content: '程序已启动自动更新，新版本下载完成后将自动弹出安装程序！',
									confirmColor: '#ee6666', //确定字体颜色
									showCancel: false, //没有取消按钮的弹框
									buttonText: '确定',
									success: function(res) {
										if (res.confirm) {
											uni.showLoading({
												title: '下载安装中，请您稍后，不要退出！',
												mask: true,
											});
											uni.downloadFile({
												url: 'https://jhspace.oss-cn-shanghai.aliyuncs.com/_package/package.apk',
												success: (
													downloadResult) => {
													if (downloadResult
														.statusCode ===
														200) {
														plus.runtime
															.install(
																downloadResult
																.tempFilePath, { //下载完成后进行安装
																	force: false
																},
																function() {
																	/*uni.showToast({
																	    title: '更新成功',
																	    icon: 'none',
																	    mask: true,
																	    duration: 1500
																	})*/
																	console
																		.log(
																			'install success...'
																			);
																	plus.runtime
																		.restart();
																},
																function(
																	e
																	) {
																	uni.showToast({
																		title: '更新失败',
																		icon: 'none',
																		mask: true,
																		duration: 1500
																	})
																	console
																		.error(
																			'install fail...'
																			);
																});
													}
												},
												fail(res) {
													uni.showToast({
														title: '下载失败',
														icon: 'none',
														mask: true,
														duration: 1500
													})
												},
											});
											// plus.runtime.openURL(data.pkgUrl);
										} else if (res.cancel) {
											console.log('用户点击取消');
										}
									}
								});
							}
						}
					})
				}
				// #endif


				let data = {
					data: res,
					request: options
				}
				resolve(LsxmRequest[requestAfter](data))
			}
			options.fail = function(err) {
				reject(LsxmRequest[requestAfter](err))
			}
			uni.request(options)
		})
	}

	get(url, data, options = {}) {
		options.url = url
		options.data = data
		options.method = 'GET'
		return this.request(options)
	}

	post(url, data, options = {}) {
		options.url = url
		options.data = data
		options.method = 'POST'
		return this.request(options)
	}

	setConfig(func) {
		this[config] = func(this[config]);
	}
	getConfig() {
		return this[config];
	}
}



LsxmRequest.install = function(Vue) {
	Vue.mixin({
		beforeCreate: function() {
			if (this.$options.apis) {
				Vue._lsxmRequest = this.$options.apis
			}
		}
	})
	Object.defineProperty(Vue.prototype, '$lsxmApi', {
		get: function() {
			return Vue._lsxmRequest.apis
		}
	})
}

export default LsxmRequest
