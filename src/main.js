import './style.css'
// 导入vue框架
import Vue from 'vue'
// import VueRouter from 'vue-router'; //引入插件
// Vue.use(VueRouter); //安装插件
import router from './router.js'

// 导入app.vue
import App from './App.vue'

// 创建vue实例
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})