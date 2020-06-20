import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import VueRouter from 'vue-router'
// 在main中引入路由文件
import router from './router'
import { NavBar } from 'vant';
import { Popup } from 'vant';
import { List,Notify} from 'vant';
import { NoticeBar } from 'vant';
import {getCookie}from '@/util/cookieUtil.js';
import { getId } from "@/api/login.js";
// import BaiduMap from 'vue-baidu-map';
//     Vue.use(BaiduMap, {
//           /* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */
//           ak: 'vSPqE8AZ2GOsVLZoXIp6P4S8zL8fPGV5'
//     })
Vue.use(NoticeBar);
Vue.use(List);
Vue.use(Popup);
Vue.use(NavBar);
Vue.use(Notify);
// 引用axios
var axios = require('axios')
// 将API方法绑定到全局
Vue.prototype.$axios = axios
Vue.use(Vant)
Vue.use(VueRouter)
Vue.config.productionTip = false
var userAccount=getCookie("userName");
var password=getCookie("password");
//console.log(this.userAccount);
getId(userAccount).then(res=>{
  Vue.prototype.$numberId=res.data.data.numberId;
  Vue.prototype.$userId=res.data.data.id
})
Vue.prototype.$password=password
Vue.prototype.$userAccount=userAccount
new Vue({
  // 引用路由
  router,
  render: h => h(App),
}).$mount('#app')
