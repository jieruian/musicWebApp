<template>
  <div id="app">
    <nav-header></nav-header>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import navHeader from "components/m-header/m-header";
export default {
  name: "app",
  components: {
    HelloWorld,
    navHeader
  }
};
</script>



<style scoped lang="stylus" rel="stylesheet/stylus">
@import 'assets/css/base.css';
// @import 'assets/style/variable.styl'
#app
   background-color red
</style>
