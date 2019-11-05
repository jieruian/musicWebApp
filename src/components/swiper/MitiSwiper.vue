<template>
  <div id="swiper">
    <van-swipe :autoplay="3000"  @change="onChange" indicator-color="white">
      <van-swipe-item v-for="item in banners" :key="item + Math.random()" @click="itemClick">
        <!-- <a :href="item.link"> -->
          <img :src="item.picUrl" alt="" @load="imageLoaded" />
        <!-- </a> -->
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "MitiSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    },
    test: String
  },
  data() {
    return {
      isLoad: false
    };
  },
  //   components: {
  //     SwiperItem,
  //     Swiper
  //   },
  methods: {
    imageLoaded() {
      if (!this.isLoad) {
        this.$emit("swiperImageLoad");
        this.isLoad = true;
      }
    },
    onChange(index) {
    //   Toast('当前 Swipe 索引：' + index);
    },
    itemClick(index){
        console.log(index);
    //    Toast('当前 Swipe 索引：' + index);  
       this.$toast('当前 Swipe 索引：' + index);   
    }

  }
};
</script>

<style  scoped>
/* #swiper {
  height: 200px;
} */
img {
  width: 100%;
}
</style>