import Vue from 'vue'
import VueRouter from 'vue-router'; //引入插件
Vue.use(VueRouter); //安装插件
 
// 创建 router 实例，然后传 `routes` 配置
export default new VueRouter({
    mode: 'history',// 默认为hash模式
    routes:[
        {
            name:'default', 
            path:'',
            redirect:{name:'foo'}
        },
        {
            name:'foo',
            path:'/foo',
            component:() => import('./view/foo.vue')
        },
        {
            name:'bar',
            path:'/bar',
            component:() => import('./view/bar.vue')
        }
    ]
})