<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->  
    <!-- <login /> -->
    <!-- <register /> -->
     <keep-alive exclude="Detail">
    <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
 //import login from './components/login.vue'
//import register from './components/register.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
     //login,
    // register
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
