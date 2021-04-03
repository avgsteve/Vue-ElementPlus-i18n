
npm install -D eslint-config-prettier
出現安裝錯誤: 
eslint-config-prettier unable to resolve dependency tree ...

https://stackoverflow.com/questions/64573177/unable-to-resolve-dependency-tree-error-when-installing-npm-packages

解決: npm install --save --legacy-peer-deps eslint-config-prettier
