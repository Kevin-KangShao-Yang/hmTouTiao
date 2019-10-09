// 导入了 vue
import Vue from 'vue'
// 导入了组件 App.vue (根组件)
import App from './App.vue'
// 导入了路由
import router from './router'
// 导入了 vuex
import store from './store'
// 导入 Elemnent-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 导入全局样式
import '@/styles/index.less'

// 导入axios
import axios from 'axios'

// 注册ElementUI路由,让Vue使用
Vue.use(ElementUI)

// 将axios方法设置给Vue原型
Vue.prototype.$axios = axios

// 设置当前项目的模式：当前模式为 开发模式   true 为上线模式,有没有没影响
Vue.config.productionTip = false

// 创建一个 vue 实例
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
