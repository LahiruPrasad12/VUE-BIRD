<template>
  <div id="app">
    <top-nav/>
    <router-view/>
  </div>
</template>

<script>
import TopNav from "./layouts/top-nav";
export default {
  name: 'App',
  components: {TopNav}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
