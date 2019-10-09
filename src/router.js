// 导入了 vue
import Vue from 'vue'
// 导入了第三方包 vue-router
import Router from 'vue-router'
// 导入 login & Comment
import Login from '@/views/login'
import Comment from '@/views/comment'

// 使用路由
Vue.use(Router)

// 创建并且导出一个 Router 对象
export default new Router({
  // 设置路由选项
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/comment',
      name: 'comment',
      component: Comment
    }
  ]
})
