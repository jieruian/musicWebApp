<template>
  <transition name="slide">
    <music-list :songs='songs' :title='title' :bg-image='bgImage'></music-list>
  </transition>
</template>

<script>
import {mapGetters} from 'vuex'
import {getSingerDetail} from 'api/singer'
import {ERR_OK} from 'api/config'
import {createSong} from 'common/js/song'
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
          
      },
      _normalizeSongs(list) {
        let ret = []
        list.forEach((item) => {
          // let {musicData} = item
          let musicData = item.musicData
        //   console.log(item);
          if (musicData.songid && musicData.albummid) {
            ret.push(createSong(musicData))
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