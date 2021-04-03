<template>
  <img alt="Vue logo" class="element-plus-logo" src="../assets/logo.png" />
  <h1>{{ msg }}</h1>

  <el-button icon="el-icon-success" type="primary" 
  @click="inCrement"> count is: {{ count }} </el-button>

  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script>
  import { defineComponent,computed } from 'vue';
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
a {
  color: #42b983;
}
.element-plus-logo {
  width: 50%
}
</style>