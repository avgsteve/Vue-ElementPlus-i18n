<template>
  <div>
    <img alt="Vue logo" class="element-plus-logo" src="../assets/logo.png" />
    <!-- 透過 i18n 選顯不同語言 -->
    <h1>{{ $t('helloWorld.templateProject') }}</h1>

    <el-button icon="el-icon-success" type="primary" @click="inCrement">
      count is: {{ count }}
    </el-button>

    <p>
      {{ $t('helloWorld.edit')}}
        <code>components/HelloWorld.vue</code> 
      {{ $t('helloWorld.testHMR')}}
    </p>
  </div>
</template>

<script>
  import { defineComponent, computed } from 'vue'
  import { useStore } from 'vuex'
  import { key } from '../../store'

  export default defineComponent({
    name: 'HelloWorld',
    props: {
      msg: {
        type: String,
        default: ''
      }
    },
    setup() {
      const store = useStore(key)
      const count = computed(() => store.state.count)


      return {
        count,
        inCrement: () => store.commit('increment'),

      }
    }
  })
</script>

<style scoped>
  a {
    color: #42b983;
  }
  .element-plus-logo {
    width: 50%;
  }
</style>
