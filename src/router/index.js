import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Rank = () => import('../views/rank/rank')
const Recommend = () => import('../views/recommend/recommend')
const Search = () => import('../views/search/search')
const Singer = () => import('../views/singer/singer')


// 2.创建router
const routes = [
   {
     path: '/',
     redirect: '/recommend'
   },
 {
   path: '/recommend',
   component: Recommend
 },
  {
    path: '/rank',
    component: Rank
  },
  {
    path: '/singer',
    component: Singer
  },
  {
    path: '/search',
    component: Search
  },
//   {
//     path: '/detail/:iid',
//     component: Detail
//   }
]

export default new VueRouter({
    base: '/',
    mode: 'hash',
    routes
});