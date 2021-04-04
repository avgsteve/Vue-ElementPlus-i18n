<template>
  <router-link :to="{ name: `HelloWorld`, params: { msg: `Vue Project Template` } }">
    <el-button class="btn">
      Home
    </el-button>
  </router-link>

  <router-link to="/about">
    <el-button class="btn"> About </el-button>
  </router-link>

  <el-select  v-model="localOptionValue" clearable placeholder="Languages">
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
    </el-option>
  </el-select>

  <router-view v-slot="slotProps">
    <transition name="route_animation" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script lang="ts">
  import HelloWorld from './components/HelloWorld.vue'
  import { defineComponent } from 'vue'
  import { useI18n } from 'vue-i18n';

  export default defineComponent({
    name: 'App',
    components: {
      HelloWorld
    },
    setup() {
    const { t, locale, messages } = useI18n({
      useScope: 'global',
      locale: 'en'
    })
    console.log('global locale messages', messages.value)
    return { t, locale }
    },
    data(): { options: Object[]; localOptionValue: string } {
      return {
        options: [{
          value: 'zhTW',
          label: '中文'
        }, {
          value: 'en',
          label: 'English'
        }],
        localOptionValue: ''
      }
    },
    computed: {
      helloWorldMessage(){
        return 
      }
    },
    created() {
      // 讓頁面進入 root path 以觸發 <router-view>裡面的 animation
      console.log('entering root path')
      this.$router.replace('/')
    },
    watch: {
        localOptionValue: function (newVal, oldVal) {
        // console.log( {newVal, oldVal} );
        this.$store.dispatch('changeLocalAction',newVal);
        // 只要修改了 ↓ locale 就可以動態的修改目前使用 i18n 的 變數
        this.$root.$i18n.locale = newVal;
        // console.log( ' this.$root.$i18n.locale: ',  this.$root.$i18n.locale );
    },
    },
    
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

  .btn{
    margin: 0 1rem 0 0;
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
