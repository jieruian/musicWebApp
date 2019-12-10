import jsonp from 'common/js/jsonp'
import {
  commonParams,
  options,
} from './config'

import axios from 'axios'

export function getSingerList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'

  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq'
  })

  return jsonp(url, data, options)
}

export function getSingerDetail(singerId) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'

  const data = Object.assign({}, commonParams, {
    loginUin: 469841820,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq',
    order: 'listen',
    begin: 0,
    num: 80,
    songstatus: 1,
    singermid: singerId
  })

  return jsonp(url, data, options)
}

export function getLocalSingerDetail(singerId) {
  var urlString = 'localApi/' +
    `/getSingerDesc?singermid=${singerId}`
    console.log(urlString);
    
  return axios.get('localApi/'
      +`/getSingerDesc?singermid=${singerId}`).then((res) => {
    console.log("歌曲详情的结果----");
    console.log(res);  
    return Promise.resolve(res.data)
  })
}
