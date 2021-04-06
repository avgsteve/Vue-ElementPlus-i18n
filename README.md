## Vue project starter template: 
 with multi language support, prebuilt UI component & type checking dev envelopment
### Demo page: [143.198.198.203](http://143.198.198.203)

##### ##有些小地方需注意，請先看過完整的說明之後再clone檔案

***
### 說明
這個 front-end 專案的目的是建立 Vue 專案的範本檔案，並利用以下 library & package:
  - 透過 Vite 快速建立開發server & 編譯 + 輸出 Vue 檔案，解決 Vue CLI 建立 dev server 速度緩慢的問題
  - TypeScript 幫助建立型別檢查，減少型別錯誤和透過VS Code + TS 的 intellisense輔助加速開發時間 
  - i18n 建立語系切換功能
  - Element Plus 建立 UI 版面和組件 
    - (另外再加上Vue 的router transition)
  - 其他 Vue 的相關 lib & plugin: 如  Vuex, Vue Router 
<br>

### 程式碼 & 說明
[連結](https://github.com/avgsteve/Vue-ElementPlus-i18n/tree/main/frontEnd)

<br>

***
目前這個專案只針對前端的功能作開發和Vue template的建立，可以將專案在 IaaS platform 上發佈
(如DigitalOcean，需要在Ubuntu環境安裝，並使用和設定git和nginx) <br>

  ### Nginx設定
  可以參考這個[連結](https://www.digitalocean.com/community/questions/how-to-configure-vuejs-and-laravel-on-nginx)，不過這個參考內容與我的設定有點不同，差別在於我把在 nginx 的根目路檔案路徑設定為
  ```
  root /var/www/html/Vue-ElementPlus-i18n/frontEnd/dist; 
  ```
  因為目前作法將本地端 compile + 測試之後，輸出到dist資料夾的網頁檔案上傳到git，然後在遠端主機git pull 更新即可

  ### Ubuntu安全性: 關閉 root user 登入 & 使用 SSH 登入

<br>

## 注意 

1. 安裝 npm package 的時候會有一個 package "eslint-config-prettier" 跟 "vue-i18n" 裡面的 eslint 起衝突，需要改用其他方式安裝 "eslint-config-prettier"

參考: [Package conflict with eslint-config-prettier](https://github.com/avgsteve/Vue-ElementPlus-i18n/tree/main/frontEnd#npm-install--d-eslint-config-prettier)


### 參考資料

  1. [Vue 3 全家桶](https://segmentfault.com/a/1190000039157357) <br> 註:很有參考價值，不過參考後發現有些地方會出錯(例如eslint的package衝突問題)，也沒有加入 Vue CLI ，花了不少時間額外作修改

  2. [Vue + TypeScript + Element-UI的Blog](https://biaochenxuying.cn/articleDetail?article_id=5c9d8ce5f181945ddd6b0ffc)  <br> 註: 透過參考這個 repo 修正了一些問題

  3. [ithome鐵人賽 Day.6 Vue3 介紹 Part 1](https://ithelp.ithome.com.tw/articles/10236320)  文章中有提到: 
   ```
   在 v2 大家通過 new Vue 建立根實例，而 v3 改為使用 createApp 
   ```
   剛好有一些 Vue plugin 或是 package 的說明文件 & 使用範例中會出現不同版本和不同用法的差異，也可以參考一下



***
### 其他
  1. [這個專案在 frontEnd 資料夾的說明檔案:](https://github.com/avgsteve/Vue-ElementPlus-i18n/blob/main/frontEnd/readme.md)
##### PS: 有興趣在DigitalOcean上快速建立Node.js和其他專案的話，可以取得免費試用 $USD 100 的 credit, 也可以順便幫助我取得digital ocean的credit，建立更多public side project & project template。請參考連結:
[DigitalOcean 60天 $USD100 試用 credit](https://m.do.co/c/219f220fca1f) 