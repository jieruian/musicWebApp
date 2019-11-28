import jsonp from 'common/js/jsonp'
import {
  commonParams,
  options,
} from './config'
import axios from 'axios'
//获取轮播图
export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  //合并对象
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })

  return jsonp(url, data, options)
}
export function testDemo(url) {
  console.log(`地址:${url}`);

  // return jsonp('http://localhost:3200/getSongListCategories', options)
  return axios.get('api/'+url, {
  }).then((res) => {
    // console.log('看看'+url);

    return Promise.resolve(res.data)
  })
}

export function getDiscList() {
  const url = '/api/getDiscList'

  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    loginUin: 469841820,
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    // console.log('看看'+url);

    return Promise.resolve(res.data)
  })

}

