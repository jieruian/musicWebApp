
import {
  getSongVKey
  }
  from "api/recommend"

export const singer = state => state.singer

export const playing = state => state.playing

export const fullScreen = state => state.fullScreen

export const playlist = state => state.playlist

export const sequenceList = state => state.sequenceList

export const mode = state => state.mode

export const currentIndex = state => state.currentIndex

export const currentSong = (state) => {
  return state.playlist[state.currentIndex] || {}
}

export const playUrl = (state) => {
  var song = state.playlist[state.currentIndex] || {}
  
  getSongVKey('003JXflt0ohuO9').then(res => {
    console.log('这VUEX是结果：');
    console.log(res);
    var playURL = res.response.playLists.length ? res.response.playLists[1] : 'http://221.228.219.152/amobile.music.tc.qq.com/C400000tGLJl2gM0Tw.m4a?guid=6972026032&vkey=F3C1EB534E2BE04B9E7B9A862497435626F39F72AA3B87ADF76D93ABBAD217AB0A496BD40B2EF62CCE05F1DDC27D17C5E1C32EE97DB79B41&uin=5278&fromtag=66'
    console.log(playURL);
    return playURL
  }).catch(err => {
    return 'http://221.228.219.152/amobile.music.tc.qq.com/C400000tGLJl2gM0Tw.m4a?guid=6972026032&vkey=F3C1EB534E2BE04B9E7B9A862497435626F39F72AA3B87ADF76D93ABBAD217AB0A496BD40B2EF62CCE05F1DDC27D17C5E1C32EE97DB79B41&uin=5278&fromtag=66'
  })
}

export const test = state => state.test