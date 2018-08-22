import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as filters from './filters'

import VueTimeago from 'vue-timeago'

Vue.use(VueTimeago, {
  name: 'timeago', // component name, `timeago` by default
  autoUpdate: 1,
  maxTime: 86400,
  locale: 'zh-CN',
  locales: {
    'zh-CN': require('date-fns/locale/zh_cn'),
    'ja': require('date-fns/locale/ja')
  }
})

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

const app = new Vue({
  router,
  store,
  ...App // Object spread copying everything from App.vue : render: h => h(App)
}).$mount('#app')// 挂载到DOM元素

export { app, store, router }

// new Vue({
//   render: h => h(App)
// }).$mount('#app')
