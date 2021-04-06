<template>
  <el-row type="flex" class="row-bg" justify="center">
    <el-col :xs="24" :sm="22" :md="20" :lg="18" :xl="16">
      <!-- Navigation 按鈕  -->
      <!-- 使用 params 傳入參數"msg"和值到 HelloWorld component-->
      <nav class="navContainer">
        <router-link
          :to="{ name: `HelloWorld`, params: { msg: $t('helloWorld.templateProject') } }"
        >
          <el-button class="btn">
            {{ $t('navigation.buttons.home') }}
          </el-button>
        </router-link>

        <router-link to="/about">
          <el-button class="btn"> {{ $t('navigation.buttons.about') }} </el-button>
        </router-link>

        <!-- 切換語系的選單 Language Menu -->
        <el-select v-model="localOptionValue" clearable placeholder="Languages">
          <el-option
            v-for="item in languagesOptionsMenu"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </nav>
    </el-col>
  </el-row>

  <el-row type="flex" class="row-bg" justify="center">
    <el-col :xs="24" :sm="22" :md="20" :lg="18" :xl="16">
      <div class="nav-logo">
        <img class="element-plus-logo" alt="Vue logo" src="./assets/logo.png" />
      </div>
    </el-col>
  </el-row>

  <el-row type="flex" class="row-bg contentContainer" justify="center">
    <el-col :xs="24" :sm="22" :md="20" :lg="18" :xl="16">
      <router-view v-slot="slotProps">
        <transition name="route_animation" mode="out-in">
          <component :is="slotProps.Component"></component>
        </transition>
      </router-view>
    </el-col>
  </el-row>
</template>

<script lang="ts">
  import HelloWorld from './components/HelloWorld.vue'
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'App',
    components: {
      HelloWorld
    },
    setup() {},
    data(): { languagesOptionsMenu: Object[]; localOptionValue: string } {
      return {
        // 顯示語言選單的Array
        languagesOptionsMenu: [
          {
            value: 'zhTW',
            label: '繁體中文'
          },
          {
            value: 'en',
            label: 'English'
          }
        ],
        localOptionValue: ''
      }
    },
    computed: {
      helloWorldMessage() {
        return
      }
    },
    created(): void {
      // 讓頁面進入 root path 以觸發 <router-view>裡面的 animation，並且傳入 msg 這個 param 和值
      console.log('entering root path')
      this.$router.replace({
        name: 'HelloWorld',
        params: { msg: this.$t('helloWorld.templateProject') }
      })
    },
    watch: {
      // 透過監看 localOptionValue 值的變化，讓語系的設定可以自動動態修改
      // 並同時修改 i18n 的 locale ，連動修改UI的語言
      localOptionValue: function(newVal, oldVal) {
        // console.log( {newVal, oldVal} );
        this.$store.dispatch('changeLocalAction', newVal)
        // 只要修改了 ↓ locale 就可以動態的修改目前使用 i18n 的 變數
        this.$root.$i18n.locale = newVal
        // console.log( ' this.$root.$i18n.locale: ',  this.$root.$i18n.locale );
      }
    }
  })
</script>

<style>
  html {
    font-family: 'Roboto', sans-serif;
    height: 100vh;
    font-size: 62.5%;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 1.5rem;
  }
  .element-plus-logo {
    width: 100%;
    min-width: 15rem;
  }

  a {
    color: #42b983;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .mainContainer {
    margin: 0;
    margin-top: 1rem;
  }

  .navContainer {
    margin: 1rem 0 0.7rem;
  }

  .navContainer .btn {
    margin: 1rem 1rem 1rem;
  }

  .element-plus-logo {
    max-width: 24rem;
    min-width: 12rem;
    padding: 0 1rem;
  }

  .btn {
    margin: 0 1rem 0 0;
  }

  .contentContainer {
    margin: 1rem 0 2rem;
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
