import {getLyric} from 'api/song'
import {ERR_OK} from 'api/config'
import {Base64} from 'js-base64'

export default class Song {
  constructor({id, mid, singer, name, album, duration, image, url}) {
    this.id = id
    this.mid = mid
    this.singer = singer
    this.name = name
    this.album = album
    this.duration = duration
    this.image = image
    this.url = url
  }

  getLyric() {
    if (this.lyric) {
      return Promise.resolve(this.lyric)
    }

    return new Promise((resolve, reject) => {
      getLyric(this.mid).then((res) => {
        if (res.retcode === ERR_OK) {
          this.lyric = Base64.decode(res.lyric)
          resolve(this.lyric)
        } else {
          reject('no lyric')
        }
      })
    })
  }
}

export function createSong(musicData) {
  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
    // url: `http://ws.stream.qqmusic.qq.com/${musicData.songid}.m4a?fromtag=46`
    url: `http://58.216.6.146/amobile.music.tc.qq.com/C400003mBrF72dILfK.m4a?guid=6972026032&vkey=264360AA7F6AE3D4F28A268FBAE6F45A7AB1611B6C26547ADF4E7451361845FA74996E5E6DB4FBDEE1FE4AEF4B1C1EFEFF6145C2B7971632&uin=5278&fromtag=66&nsukey=Aw3D%2BlJ1fRF5K7XLnSTGAeQKuxy%2BJbG8F6G4ir%2BStoJkDym6dQIcUIJg4bciiyMmMtA8z9y3OfW8%2F3MpJsG5IwoxVRDFrWmFjab4Zd7EWKPGIHlEwAOLjKTePZP86RsCeSh9nbjNPxRQSlXuinv8Dt%2FMTw1jJ1QCkraI8L5K2UrEK2wIH88rpYKMmDQpaTmQxhM%2B0ujE6iJpIf8Ahf%2Fjtg%3D%3D`
  })
}

function filterSinger(singer) {
  let ret = []
  if (!singer) {
    return ''
  }
  singer.forEach((s) => {
    ret.push(s.name)
  })
  return ret.join('/')
}

