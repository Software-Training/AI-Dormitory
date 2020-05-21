// 路由配置文件
import Vue from 'vue'
import VueRouter from 'vue-router'

//引入组件
import HelloWorld from '@/components/HelloWorld.vue'
import login from '@/components/login.vue'
import register from '@/components/register.vue'

// 使用路由
Vue.use(VueRouter)

// 配置路由
export default new VueRouter ({
    routes:[
        {
            // 配置路由路径及其跳转的组件
            path:'/',component:HelloWorld   //首页
        },
        {
            path:'/login',component:login   //跳转到登录的路由
        },
        {
            path:'/register',component:register   //跳转到注册的路由
        },
        //倘若路由找不到就默认跳转到首页
        {
            path:'*',redirect:'/'      
        }
    ],
    mode:'history'    //去除路径上的#
})