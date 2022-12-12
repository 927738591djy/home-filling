// import App from './App'

// // #ifndef VUE3
// import Vue from 'vue'
// Vue.config.productionTip = false
// App.mpType = 'app'
// const app = new Vue({
//     ...App,apis
// })
// app.$mount()
// // #endif

// // #ifdef VUE3
// import { createSSRApp } from 'vue'
// export function createApp() {
//   const app = createSSRApp(App)
//   return {
//     app
//   }
// }
// // #endif

// import uView from "uview-ui";
// import LsxmRequest from './service/request.js'
// import apis from './service/api.js'
// import lsxmRequest from './service/config.js'
// Vue.use(uView);
// Vue.use(LsxmRequest)
// Vue.prototype.baseDomain = lsxmRequest.getConfig().baseURL
// Vue.config.productionTip = false
// App.mpType = 'app'
import Vue from 'vue'
import App from './App'
import LsxmRequest from './service/request.js'
import apis from './service/api.js'
import lsxmRequest from './service/config.js'
import uView from "uview-ui";
Vue.use(uView);
Vue.use(LsxmRequest)
Vue.prototype.baseDomain = lsxmRequest.getConfig().baseURL
Vue.config.productionTip = false

App.mpType = 'app'
const app = new Vue({
	apis,
    ...App
})
app.$mount()