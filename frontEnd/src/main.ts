import { createApp } from 'vue';
import { store, key } from '../store'
import ElementPlus from 'element-plus';
import router from './router/'
import 'element-plus/lib/theme-chalk/index.css'
import App from './App.vue';
import './index.css';


import 'element-plus/lib/theme-chalk/index.css';
createApp(App)
  .use(ElementPlus)
  .use(router)
  .use(store, key)
  .mount('#app');
