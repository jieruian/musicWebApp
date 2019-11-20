<template>
  <transition name="slide">
    <div class="singer-detail">
      详情啊
    </div>
  </transition>
</template>

<script>
export default {
  name: "SingerDeatil",
  created() {
     console.log('地址'+this.$route.path);
      
  },
};
</script>

<style  scoped lang="stylus" rel="stylesheet/stylus">
@import '~assets/style/variable';

.singer-detail {
  background-color: $color-background;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
 .slide-enter-active, .slide-leave-active
    transition: all 0.4s

 .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)

</style>