<template>
  <router-link :to="{ name: `HelloWorld`, params: { msg: `Vue Project Template` } }">
    <el-button class="btn">
      Home
    </el-button>
  </router-link>

  <router-link to="/about">
    <el-button class="btn"> About </el-button>
  </router-link>

      <router-view v-slot="slotProps"> 
          <transition name="route_animation" mode="out-in">
          <component :is="slotProps.Component"></component>
      </transition>

    </router-view>
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
    created() {
      // 讓頁面進入 root path 以觸發 <router-view>裡面的 animation
      console.log( 'entering root path' );
      this.$router.replace('/')
    },
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

  .route_animation-enter-from {
    opacity: 0;
    transform: translateY(-30px);
  }

  .route_animation-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

  .route_animation-enter-active {
    transition: all 0.3s ease-out;
  }

  .route_animation-leave-active {
    transition: all 0.3s ease-in;
  }

  .route_animation-enter-to,
  .route_animation-leave-from {
    opacity: 1;
    transform: translateY(0);
  }
</style>
