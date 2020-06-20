// 路由配置文件
import Vue from 'vue'
import VueRouter from 'vue-router'

//引入组件
 import hello from '@/components/hello.vue'
import login from '@/components/account/login.vue'
import register from '@/components/account/register.vue'
import menu from '@/components/content/menu.vue'
import faceRegister from '@/components/face/faceRegister.vue'
import faceLogin from '@/components/face/faceLogin.vue'
import mine from '@/components/content/mine.vue'
import records from '@/components/content/records.vue'
import message from '@/components/content/message.vue'
import signInfo from '@/components/content/signInfo.vue'
import index from '@/components/content/index.vue'
import sign from '@/components/content/sign.vue'
import temperature from '@/components/content/temperature.vue'
import temperatureInfo from '@/components/content/temperatureInfo.vue'
import person from '@/components/content/person.vue'
// 使用路由
Vue.use(VueRouter)

// 配置路由
export default new VueRouter ({
    routes:[
        {
            // 配置路由路径及其跳转的组件
            path:'/',component: hello  //首页
        },
        {
            path:'/index',component:index   //跳转到登录的路由
        },
        {
            path:'/login',component:login   //跳转到登录的路由
        },
        {
            path:'/register',component:register   //跳转到注册的路由
        },
        {
            path:'/menu',component:menu   //跳转到导航的路由
        },
        {
            path:'/faceRegister',component:faceRegister   //跳转到人脸注册的路由
        },
        {
            path:'/faceLogin',component:faceLogin   //跳转到人脸登陆的路由
        },
        {
            path:'/mine',component:mine   //跳转到我的界面的路由
        },
        {
            path:'/records',component:records   //跳转到详情界面的路由
        },
        {
            path:'/message',component: message   //跳转到消息界面的路由
        },
        {
            path:'/signInfo',component: signInfo   //跳转到消息界面的路由
        },
        {
            path:'/sign',component: sign  //跳转到消息界面的路由
        },
        {
            path:'/temperature',component: temperature  //跳转到消息界面的路由
        },
        {
            path:'/temperatureInfo',component: temperatureInfo  //跳转到消息界面的路由
        },
        {
            path:'/person',component: person  //跳转到消息界面的路由
        },
        //倘若路由找不到就默认跳转到首页
        {
            path:'*',redirect:'/'      
        }
    ],
    mode:'history'    //去除路径上的#
})