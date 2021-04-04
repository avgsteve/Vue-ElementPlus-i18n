
### npm install -D eslint-config-prettier
出現安裝錯誤: 
eslint-config-prettier unable to resolve dependency tree ...

https://stackoverflow.com/questions/64573177/unable-to-resolve-dependency-tree-error-when-installing-npm-packages

解決: npm install --save --legacy-peer-deps eslint-config-prettier

### 使用 Webpack 設定 
https://lmiller1990.github.io/electic/posts/20200406_webpack_for_vue_3.html