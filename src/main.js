import Vue from 'vue'
import App from './App'
import store from '@/store'
import router from './router'
import fastclick from 'fastclick'

Vue.config.productionTip = false
Vue.config.debug = true
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', () => {
    fastclick.attach(document.body)
  }, false)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
