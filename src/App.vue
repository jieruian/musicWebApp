<template>
  <div id="app">
    <nav-header></nav-header>
    <tab/>
    <router-view/>
  </div>
</template>

<script>
import navHeader from "components/m-header/m-header"
import tab from "components/tab/tab"

export default {
  name: "app",
  components: {
    navHeader,
    tab
  }
};
</script>



<style scoped lang="stylus" rel="stylesheet/stylus">
// @import 'assets/css/base.css';
@import 'assets/style/variable.styl'
// #app
//    background-color red

</style>
