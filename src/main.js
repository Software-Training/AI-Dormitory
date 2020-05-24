import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import VueRouter from 'vue-router'
// 在main中引入路由文件
import router from './router'
import { NavBar } from 'vant';
import { Popup } from 'vant';

Vue.use(Popup);
Vue.use(NavBar);
// 引用axios
var axios = require('axios')
// 将API方法绑定到全局
Vue.prototype.$axios = axios
Vue.use(Vant)
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  // 引用路由
  router,
  render: h => h(App),
}).$mount('#app')
