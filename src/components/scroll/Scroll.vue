<template>
  <div class="warpper" ref="warpper">
    <div class="scroll-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",

  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    },


  },

  data() {
    return {
      scroll: null
    };
  },

  mounted() {
    // 1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.warpper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      bounceTime:700,
      pullDownRefresh:{threshold: -10   //当下拉长度距离盒子顶部的高度超过10px的时候,就派发一个下拉刷新的事件
                    },
      useTransition:false  // 防止iphone微信滑动卡顿
    });
    // 2.监听滚动的位置
    if (this.probeType == 2 || this.probeType == 3) {
      this.scroll.on("scroll", position => {
        // console.log(position);
        this.$emit("scroll", position);
      });
    }

    // 3.监听scroll滚动到底部
    if (this.pullUpLoad) {
      this.scroll.on('pullingUp', () => {  
        // console.log('开始加载更多');
              
          this.$emit("pullingUp")
        })
    }

    //下拉
    this.scroll.on('pullingDown',()=>{
        console.log('刷新----');
        this.$emit("pullingDown")  
        this.scroll.finishPullDown()      
    })


  },



  methods: {
    //跳转都顶部
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    //加载更多
     finishPullUp() {
        this.scroll && this.scroll.finishPullUp()
      },
    //刷新图片
    refresh() {
      console.log('+++++++++');
        this.scroll && this.scroll.refresh()
      },
     //获取滚动的y值
    getScrollY() {
    return this.scroll ? this.scroll.y : 0
     },
     //刷新数据
    pullingDown(){
     console.log("刷新+++");
     this.scroll && this.scroll.finishPullDown()
     this.scroll && this.scroll.refresh()
   },
  
     scrollToElement() {
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
      },
       disable() {
        this.scroll && this.scroll.disable()
      },
      enable() {
        this.scroll && this.scroll.enable()
      },
    
  }
};
</script>

<style  scoped>
</style>