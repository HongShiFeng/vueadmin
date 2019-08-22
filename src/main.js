import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

//饿了么ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import router from "./router"



//导入css
import './assets/css/base.less'
//面包屑
import bread from "./components/bread.vue"
Vue.component('bread',bread)

new Vue({
  render: h => h(App),
   router
}).$mount('#app')
