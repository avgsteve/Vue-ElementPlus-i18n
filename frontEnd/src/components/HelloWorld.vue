<template>
  <el-row type="flex" class="row-bg sub-contentContainer" justify="center">
    <el-col :xs="24" :sm="22" :md="20" :lg="18" :xl="16">
      <!-- 透過 i18n 選顯不同語言 -->
      <h2>{{ $t('helloWorld.templateProject') }}</h2>

      <el-button icon="el-icon-success" type="primary" @click="inCrement">
        count is: {{ count }}
      </el-button>

      <p>
        {{ $t('helloWorld.edit') }}
        <code>components/HelloWorld.vue</code>
        {{ $t('helloWorld.testHMR') }}
      </p>
    </el-col>
  </el-row>
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
        inCrement: () => store.commit('increment')
      }
    }
  })
</script>

<style scoped>
  .sub-contentContainer {
    padding: 0 1rem;
  }
  .sub-contentContainer * {
    margin: 1rem 0;
    text-align: center;
  }

  a {
    color: #42b983;
  }
  .element-plus-logo {
    width: 50%;
  }
</style>
