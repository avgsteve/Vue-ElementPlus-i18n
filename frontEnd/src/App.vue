<template>
  <router-link :to="{ name: `HelloWorld`, params: { msg: `Hello Vue 3.0 + Element Plus + Vite` } }">
    <el-button class="btn">
      Home
    </el-button>
  </router-link>

  <router-link to="/about">
    <el-button  class="btn"> About </el-button>
  </router-link>

  <div>
    <router-view>
    </router-view>
  </div>

</template>

<script lang="ts">
  import HelloWorld from './components/HelloWorld.vue'
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'App',
    components: {
      HelloWorld
    },
    computed: {},
    created() {},
    watch: {}
  })
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
  .element-plus-logo {
    width: 50%;
  }

  a {
    color: #42b983;
  }

  * {
    box-sizing: border-box;
  }

  html {
    font-family: 'Roboto', sans-serif;
  }

  body {
    margin: 0;
  }

  .btn {
    margin: 0 1rem 0;
  }

  .route-enter-from {
    opacity: 0;
    transform: translateY(-30px);
  }

  .route-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

  .route-enter-active {
    transition: all 0.3s ease-out;
  }

  .route-leave-active {
    transition: all 0.3s ease-in;
  }

  .route-enter-to,
  .route-leave-from {
    opacity: 1;
    transform: translateY(0);
  }
</style>
