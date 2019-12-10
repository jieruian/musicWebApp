import {
  commonParams
} from './config'
import axios from 'axios'

export function getLyric(mid) {
  const url = '/api/lyric'

  const data = Object.assign({}, commonParams, {
    songmid: mid,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    categoryId: 10000000,
    pcachetime: +new Date(),
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getSongVKeyUrl(mid) {
  var urlString = 'localApi/' +
    `/getSingerDesc?singermid=${mid}`
  console.log(urlString);

  return axios.get('/localApi/' +
    `/getMusicVKey?songmid=${mid}`).then((res) => {

    // console.log(res);
    return Promise.resolve(res.data)
  })
}