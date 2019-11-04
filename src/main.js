import Vue from 'vue'
import App from './App.vue'
import VueLazyLoad from 'vue-lazyload'
import router from './router'
import store from './store'

import FastClick from 'fastclick'

Vue.config.productionTip = false
//解决移动端300ms延迟
FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')