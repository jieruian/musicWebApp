import Vue from 'vue'
import App from './App.vue'
import VueLazyLoad from 'vue-lazyload'
import router from './router'
import store from './store'
import 'vant/lib/index.css';
import FastClick from 'fastclick'

import 'assets/style/index.styl'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
//解决移动端300ms延迟
FastClick.attach(document.body)
Vue.use(VueLazyLoad, {
  preLoad: 1,
  loading: require('assets/logo.png')
})
import {
  Swipe,
  SwipeItem,
  Toast,
  Loading,
  Notify,
  IndexBar, 
  IndexAnchor
} from 'vant';

Vue.use(Swipe).use(SwipeItem).use(Toast).use(Loading).use(Notify).use(IndexBar).use(IndexAnchor);
Vue.use(VueResource)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')