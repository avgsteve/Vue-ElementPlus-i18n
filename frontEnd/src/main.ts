import { createApp } from 'vue';
import App from './App.vue'
import { store, key } from '../store'

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
createApp(App)
  .use(ElementPlus)
  .use(store, key)
  .mount('#app');
