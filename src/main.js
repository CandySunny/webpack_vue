import './style.css'
// 导入vue框架
import Vue from 'vue'
// import VueRouter from 'vue-router'; //引入插件
// Vue.use(VueRouter); //安装插件
import router from './router.js'

// 导入app.vue
import App from './App.vue'
 
// import Foo from './view/foo.vue';
// import Bar from './view/bar.vue';
 
// // 定义路由
// const routes = [
// 	{ name: 'default',path: '',redirect: {name: 'foo'}}, // 设置默认路由
//     { name: 'foo',path: '/foo', component: Foo },
//     { name: 'bar',path: '/bar', component: Bar }
// ]
 
// // 创建 router 实例，然后传 `routes` 配置
// const router = new VueRouter({
//     mode: 'history',// 默认为hash模式
//     routes // (缩写) 相当于 routes: routes
// })

// 创建vue实例
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})