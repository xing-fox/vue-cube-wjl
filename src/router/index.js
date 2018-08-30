import Vue from 'vue'
import Router from 'vue-router'
Vue.use(require('vue-wechat-title'))

const Index = resolve => require(['@/view/index/index'], resolve)
const Home = resolve => require(['@/view/self/home'], resolve)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/index',
      name: 'Index',
      component: Index,
      meta: {
        title: '首页'
      }
    }, {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        title: '我的'
      }
    }
  ]
})
