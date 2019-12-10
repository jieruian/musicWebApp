<template>
  <transition name="slide">
    <music-list :songs='songs' :title='title' :bg-image='bgImage'></music-list>
  </transition>
</template>

<script>
import {mapGetters} from 'vuex'
import {getSingerDetail,getLocalSingerDetail} from 'api/singer'
import {ERR_OK} from 'api/config'
import {createSong, createSongWithVKey} from 'common/js/song'
import MusicList from 'components/music-list/music-list'

export default {
  name: "SingerDeatil",
  components:{
    MusicList
  },
  data() {
      return {
          songs: []
      }
  },
  computed: {
     ...mapGetters([
          'singer'
      ]), 
      title(){
          return this.singer.name
      },
      bgImage() {
        return this.singer.avatar
      },
  },
 
  created() {
      
    //  console.log('地址'+this.$route.path);
    //  console.log(this.singer); 
    this._getSingerDeatil() 

    
  },
  methods: {
      _getSingerDeatil(){
          if (!this.singer.id) {
             this.$router.push('/singer') 
             return
          }
         getSingerDetail(this.singer.id).then(res => {
             console.log(res); 
             if(res.code == ERR_OK){
                 this.songs = this._normalizeSongs(res.data.list)
             }      
         })
        //   getLocalSingerDetail(this.singer.id).then(res => {
        //     console.log("歌曲详情的结果+++");
        //      console.log(res); 
        //     //  if(res.code == ERR_OK){
        //     //      this.songs = this._normalizeSongs(res.data.list)
        //     //  }      
        //  })
          
      },
      _normalizeSongs(list) {
        let ret = []
        

        let urlArray = [
          'http://58.216.6.151/amobile.music.tc.qq.com/C400003mBrF72dILfK.m4a?guid=6972026032&vkey=66BE8D3B9E41BB8F6C95DCA63E9EEA19C32D27EC1E69BF28D9B4101D81982659AB4C262DCBB5C3E6BDA3FA5FD4C0B17FCAFAEC9074BD4FE8&uin=5278&fromtag=66',
          'http://58.216.6.144/amobile.music.tc.qq.com/C4000044WshM2IZBay.m4a?guid=6972026032&vkey=877686FCD15C910E3F112A129020CAFB9D1C7EDA98C440C3FF087ED9084110417E8395B1905B338D90B9CC91457C9C965B6E30A4B8F640B0&uin=5278&fromtag=66',
          'http://58.216.6.156/amobile.music.tc.qq.com/C400001F8BTd1TZYWZ.m4a?guid=6972026032&vkey=9CBA253056C1F07EAE6273E675DE5D658C1F3DFBD86B086C6C71B9F15F137F88F27D602C4B7CEACADCF2FA9B88450D69EB8590E08333A957&uin=5278&fromtag=66',
          'http://221.228.219.152/amobile.music.tc.qq.com/C400000tGLJl2gM0Tw.m4a?guid=6972026032&vkey=F3C1EB534E2BE04B9E7B9A862497435626F39F72AA3B87ADF76D93ABBAD217AB0A496BD40B2EF62CCE05F1DDC27D17C5E1C32EE97DB79B41&uin=5278&fromtag=66',
        ]
        list.forEach((item,index) => {
          // let {musicData} = item
          let musicData = item.musicData
        //   console.log(item);
          if (musicData.songid && musicData.albummid) {
            ret.push(createSong(musicData, urlArray[index%4]))
            // ret.push(createSongWithVKey(musicData))
          }
        })
        return ret
      }
  },
};
</script>

<style  scoped lang="stylus" rel="stylesheet/stylus">
@import '~assets/style/variable';

 .slide-enter-active, .slide-leave-active
    transition: all 0.4s

 .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)

</style>