import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false


Vue.use(VueRouter)
//1.导入路由(定义路由组件)
import VueRouter from 'vue-router'

//导入组件
import login from "./components/login.vue"
import index from "./components/index.vue"
//定义路由
const routes = [
  { path: "/login", component: login },
  { path: "/index", component: index },
 
]
//路由规则
// 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
    routes
})




new Vue({
  render: h => h(App),
   router
}).$mount('#app')
