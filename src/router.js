import Vue from 'vue'

Vue.use(VueRouter)
//1.导入路由(定义路由组件)
import VueRouter from 'vue-router'

//导入组件
import login from "./components/login.vue"
import index from "./components/index.vue"
import users from "./components/userList.vue"
//定义路由
const routes = [
  { path: "/login", component: login },
  { path: '/', redirect: '/login' },
  { path: "/index", component: index ,
            children:[
              {path:"users", component:users }
            ]
   },
 
]
//路由规则
// 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
    routes
})

//导航守卫
router.beforeEach((to, from, next) => {
  if(to.path.indexOf('index') != -1 ){
       //去首页判断是否带token
       if(window.localStorage.getItem('token')){
        // 有值放行
         next();
       } else {
         Vue.prototype.$message.error('请先登录!');
         router.push('/login')
       }
  } else {      
       //不去首页放行
   next();
  }
 })

 export default  router ;