import lsxmRequest from './config.js'
export default{
	getUserInfo(data){//获取账号信息
	    return lsxmRequest.get('/app/auth/getUserInfo', data)
	},
	getinfo(data){//获取账号信息
	    return lsxmRequest.get('/app/user/info', data)
	},
	myGoodslist(data){//获取我的
	    return lsxmRequest.get('/app/myGoods/list', data)
	},
	myGoodsdetails(data){//获取详情
	    return lsxmRequest.get('/app/myGoods/details/'+data)
	},
	validaUsername(data){//检验用户名是否存在
	    return lsxmRequest.post('/app/auth/validaUsername',data)
	},
	updateUserInfo(data){//账号信息更新
	    return lsxmRequest.post('/app/auth/updateUserInfo',data)
	},
	upload(data){//上传存储对象接口
	    return lsxmRequest.post('/app/storage/upload',data)
	},
	resetMobile(data){//手机号重置
	    return lsxmRequest.post('/app/auth/resetMobile',data)
	},
	checkdonate(data){//判断是否能够转赠
	    return lsxmRequest.get('/app/user/goods/check/donate',data)
	},
	goodsdonate(data){//转赠
	    return lsxmRequest.post('/app/user/goods/donate',data)
	},
	verifiedIdentity(data){//实名认证
	    return lsxmRequest.post('/app/auth/verifiedIdentity',data)
	},
	logout(data){//退出
	    return lsxmRequest.get('/app/auth/logout',data)
	},
	deleteUserInfo(data){//注销账号信息
	    return lsxmRequest.get('/app/auth/deleteUserInfo',data)
	},
	versionupdate(data){//是否需要更新版本
	    return lsxmRequest.get('/app/user/version/update',data)
	},
	collectlist(data){//用户喜爱的
	    return lsxmRequest.get('/app/collect/list',data)
	},
	resetPassword(data){//密码重置
	    return lsxmRequest.post('/app/auth/resetPassword',data)
	},
	bindBankCard(data){//绑定银行卡
	    return lsxmRequest.post('/app/bankCardSignRecord/addBankCard',data)
	},
	bankCardList(data){//查看已绑定的银行卡
	    return lsxmRequest.get('/app/bankCardSignRecord/list',data)
	},
	cheekIsSign(data){//校验是否签约成功
	    return lsxmRequest.get('/app/bankCardSignRecord/checkIsSign',data)
	},
	deleteSign(data){//删除签约
	    return lsxmRequest.get('/app/bankCardSignRecord/delete',data)
	},
	getVerifyCode(data){//获取密码修改验证码
		 return lsxmRequest.get('/app/auth/captcha',data)
	},
	isOpenOutWallet(){//查询是否开通汇企通钱包
		 return lsxmRequest.get('/app/userOutWallet/isOpenOutWallet')
	},
	registerOrLogin(){//注册/登录用户钱包
		 return lsxmRequest.get('/app/userOutWallet/registerOrLogin')
	},
	consignmentApply(data){//提交寄售申请
		 return lsxmRequest.post('/app/consignment/submit',data)
	},
	configValue(data){//获取佣金比例
		 return lsxmRequest.get('/app/systemConfig/configValue?'+data)
	},
	submitRechargeOrder(data){//充值
		 return lsxmRequest.post('/app/userRecharge/submitRechargeOrder',data)
	},
	userRechargeSendPaySms(data){//充值短信
		 return lsxmRequest.post('/app/userRecharge/userRechargeSendPaySms',data)
	},
	userRechargeConfirmPay(data){//确认充值
		 return lsxmRequest.post('/app/userRecharge/userRechargeConfirmPay',data)
	},
	submitUserWithdrawal(data){//体现
		 return lsxmRequest.post('/app/userWithdrawal/submitUserWithdrawal',data)
	},
	contractOrderList(data){//寄售订单列表（买）
		 return lsxmRequest.get('/app/consignmentOrder/list',data)
	},
	contractOrderDetail(data){//寄售订单详情(买)
		 return lsxmRequest.get('/app/consignmentOrder/details',data)
	},
	myConsignmentList(data){//寄售订单列表
		 return lsxmRequest.get('/app/consignment/myConsignmentList',data)
	},
	myConsignmentListDetail(data){//寄售订单详情
		 return lsxmRequest.get('/app/consignment/details',data)
	},
	myConsignmentListCancel(data){//取消上架
		 return lsxmRequest.get('/app/consignment/cancel',data)
	},
	inviteRank(data){//排行榜列表
		 return lsxmRequest.get('/app/inviteRank/list',data)
	},
	inviteRecordDetail(data){//取消上架
		 return lsxmRequest.get('/app/inviteRank/inviteRecordDetail',data)
	},
	getmyGoods(data){//盲盒
		 return lsxmRequest.get('/app/myGoods/list',data)
	},
	openMyGoods(data){//开启盲盒
		 return lsxmRequest.get('/app/myGoods/open',data)
	},
}