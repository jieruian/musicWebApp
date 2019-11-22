<template>
  <div id="app">
    <nav-header></nav-header>
    <tab/>
    <keep-alive>
     <router-view/>
    </keep-alive>
    <player></player>
  </div>
</template>

<script>
import navHeader from "components/m-header/m-header"
import tab from "components/tab/tab"
import Player from 'components/player/player'

export default {
  name: "app",
  components: {
    navHeader,
    tab,
    Player
  }
};
</script>



<style scoped lang="stylus" rel="stylesheet/stylus">
// @import 'assets/css/base.css';
@import 'assets/style/variable.styl'
// #app
//    background-color red

</style>
