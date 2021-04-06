
## 已知問題:
### 1. package: eslint-config-prettier
出現安裝錯誤: 
eslint-config-prettier unable to resolve dependency tree ...

https://stackoverflow.com/questions/64573177/unable-to-resolve-dependency-tree-error-when-installing-npm-packages

解決: 
  1. 先把這個package從 package.json移除
  ```
  eslint-config-prettier
  ``` 
  2. 接著 npm install 安裝其他全部的package
  3. 再另外安裝 eslint-config-prettier
  ```
  npm install --save --legacy-peer-deps eslint-config-prettier
  ```
  ##### (為何不事先移除的原因是，當第2步驟安裝了eslint-config-prettier之後，會又跑回去package.json，接著會被作為新的package.json檔案被commit到git上面，就乾脆在readme.md先說明怎麼解決，避免刪掉之後影響後面的package安裝) 
  <br>


### 2. 使用 Webpack 跟 vite 衝突
這個連結有詳細的Vue 3 + webpack設定: <br>
https://lmiller1990.github.io/electic/posts/20200406_webpack_for_vue_3.html
<br>但是會跟 vite 的設定有衝突，且目前還用不到 webpack ，所以先不加入 package.json