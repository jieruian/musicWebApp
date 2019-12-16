<template>
  <div class="recommend" ref="recommend">
    <div class="loading-show" v-show="isShowRefresh">
      <van-loading type="spinner" color="#28B8A1" size="36"></van-loading>
    </div>
<previewer :list="list" ref="previewer" :options="{tapToClose:false}">
      <!-- <template slot-scope="{current}" slot="topbar">
        <div>
          <span>{{current+1}} of {{list.length}}</span>
          <a @click="$refs.previewer.close()">关闭</a>
        </div>
      </template>
      <template slot-scope="{current}" slot="caption">
        <some-caption :captionData="list[current].captionData"></some-caption>
      </template> -->
    </previewer>
    <scroll
      class="recommend-content"
      ref="scroll"
      :probe-type="3"
      @scroll="scrollDelegate"
      :pullUpLoad="true"
      @pullingUp="loadMore"
      @pullingDown="refreshData"
    >
      <miti-swiper
        :banners="banners"
        @swiperImageLoad="swiperImageLoad"
        @itemClick='itemClick'
      ></miti-swiper>
      <div class="recommend-list">
        <h1 class="list-title">热门歌单推荐</h1>
        <div class="loading-container" v-show="!discList.length">
          <loading title="加载ing"></loading>
        </div>
        <ul>
          <li v-for="(item, index) in discList" :key="index" class="item" @click="songListItemClick(index)">
            <div class="icon">
              <img v-lazy="item.imgurl" style="height:60px;width:60px" />
            </div>
            <div class="text">
              <h2 class="name">{{ item.creator.name }}</h2>
              <p class="desc">{{ item.dissname }}</p>
            </div>
          </li>
        </ul>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import previewer from 'vue-photoswipe-mobile'
import Loading from "components/loading/loading";
import MitiSwiper from "components/swiper/MitiSwiper";
import Scroll from "components/scroll/Scroll";
import { getRecommend, getDiscList ,testDemo, getSongVKey} from "api/recommend";
//   import {playlistMixin} from 'common/js/mixin'
import { ERR_OK } from "api/config";
//   import {mapMutations} from 'vuex'

export default {
  name: "recommend",
  components: {
    MitiSwiper,
    Scroll,
    Loading,
    previewer
  },
  data() {
    return {
      banners: [],
      discList: [],
      isShowRefresh: false,
      list:[]
    };
  },
  created() {
    this._getRecommend();
    this._getDiscList();
    testDemo('/getSongListCategories').then(res => {
      console.log('这是下面的测试结果：');
      console.log(res);
      
    })
    // getSongVKey('003JXflt0ohuO9').then(res => {
    //   console.log('这是歌曲的测试结果：');
    //   console.log(res);
      
    // })
  },
  methods: {
    _getRecommend() {
      getRecommend().then(res => {
        // console.log(res.data.slider)
        if (res.code === ERR_OK) {
          this.banners = res.data.slider;
          this.list = this._getNewListImage(this.banners)
        } else {
        }
      });
    },
    _getDiscList() {
      getDiscList().then(res => {
        // console.log(res.data.slider)
        if (res.code === ERR_OK) {
          console.log(res.data.list);
          this.discList = res.data.list;
        } else {
        }
      });
    },
    scrollDelegate() {},
    loadMore() {
      console.log("加载更多");
    },
    refreshData() {
      this.isShowRefresh = true;
      setTimeout(() => {
        this.$notify({
          message: "刷新成功",
          color: "#fff",
          duration: 1000,
          background: "#28B8A1"
        });
        this.isShowRefresh = false;
        this.$refs.scroll.refresh();
      }, 2000);
    },
    swiperImageLoad() {
      console.log("图片加载完毕");
      if (!this.checkloaded) {
        this.checkloaded = true;
        this.$refs.scroll.refresh();
      }
    },
    itemClick(index){ 
      this.list = this._getNewListImage(this.banners)
      this.$nextTick(()=>{
      this.$refs.previewer.show(index)
      })     
    },
    songListItemClick(index){
     this.list = [{src: "https://img2.ch999img.com/newstatic/1380/01392af47d6b9550"}]
     this.list.splice(0);
     this.discList.forEach((item) => {
      this.list.push({src:item.imgurl})
     })
     this.$nextTick(() => {
       this.$refs.previewer.show(index)
     }) 
    },
    _getNewListImage(array){
     if (!array.length) return
     var box = []
     array.forEach((item) => {
      box.push({src:item.picUrl})
     })
     return box
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~assets/style/variable';

.loading-show {
  position: fixed;
  padding: 20px;
  top: 50%;
  left: 50%;
  width: 36px;
  height: 36px;
  background: rgba(0, 0, 0, 0.7);
  transform: translateY(-18px);
  transform: translateX(-36px);
}

.recommend {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;

  .recommend-content {
    height: 100%;
    overflow: hidden;

    .slider-wrapper {
      position: relative;
      width: 100%;
      overflow: hidden;
    }

    .recommend-list {
      .list-title {
        height: 65px;
        line-height: 65px;
        text-align: center;
        font-size: $font-size-medium;
        color: $color-theme;
      }

      .item {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        padding: 0 20px 20px 20px;

        .icon {
          flex: 0 0 60px;
          width: 60px;
          padding-right: 20px;
        }

        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          line-height: 20px;
          overflow: hidden;
          font-size: $font-size-medium;

          .name {
            margin-bottom: 10px;
            color: $color-text;
          }

          .desc {
            color: $color-text-d;
          }
        }
      }
    }

    .loading-container {
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>