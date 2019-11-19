import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Rank = () => import('../views/rank/rank')
const Recommend = () => import('../views/recommend/recommend')
const Search = () => import('../views/search/search')
const Singer = () => import('../views/singer/singer')
const SingerDetail = () => import('../views/singer/SingerDeatil/SingerDeatil')


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
    component: Singer,
     children: [{
       path: ':id',
       component: SingerDetail
     }]
  },
  {
    path: '/search',
    component: Search
  },
  // {
  //   path: '/singer/:id',
  //   component: SingerDeatil
  // }
]

export default new VueRouter({
    base: '/',
    mode: 'history',
    routes
});