# ricky-and-morty

## Project setup
```
npm install
```
### Compiles and hot-reloads for development
```
npm run serve
```
### Compiles and minifies for production
```
npm run build
```
### Lints and fixes files
```
npm run lint
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Deploy
## Paso 1 revisar el archivo vue.confing.js
```
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/nombre-proyecto/' : '/',
});
```
## Paso 2 agregar en package.json incluier en scripts los siguiente:
```
"scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
```
## Paso 3
```
npm run lint
```
## Paso 4
```
npm run lint
```

## Paso 5
```
npm run lint
```
## Paso 6
```
npm run lint
```



