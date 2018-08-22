import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const asyncRouterMap = [
  {
    path: '*',
    redirect: '/login'
  },
  {
    path: '/',
    redirect: '/login',
    component: resolve => require(['./views/pages/login'], resolve)
  },
  {
    path: '/login',
    name: 'login',
    component: resolve => require(['./views/pages/login'], resolve)
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: resolve => require(['./views/pages/dashboard'], resolve),
    children: [{
      path: '/chat/:id/:name',
      name: 'chat',
      component: resolve => require(['./views/pages/chat'], resolve)
    }]
  }
]

export default new Router({
  mode: 'history',
  routes: asyncRouterMap
})
