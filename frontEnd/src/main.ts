import { createApp, defineAsyncComponent } from 'vue';
import { store, key } from '../store'
import ElementPlus from 'element-plus';

import { createI18n } from 'vue-i18n'
// i18n 範例: https://github.com/intlify/vue-i18n-loader/blob/next/example/global/main.js

// 要 import .json 的話要先在 tsconfig.json 裡面設定
//     "resolveJsonModule": true,
import en from './locales/en.json';
import zhTW from './locales/zhTW.json';

import router from './router/'
import 'element-plus/lib/theme-chalk/index.css'
import App from './App.vue';
import './index.css';

// Vue3 + i18n 設定
const i18n = createI18n({
  // legacy: false,
  locale: 'en', 
  messages: {
    en, zhTW
  }
})
// const localeCode = store.getters.getCurrentLocale;
// console.log('localeCode: ', localeCode);


import 'element-plus/lib/theme-chalk/index.css';
createApp(App)
  .use(ElementPlus)
  .use(i18n)
  .use(router)
  .use(store, key)
  .mount('#app');
