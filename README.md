# ricky-and-morty
Este proyecto consume la API de Rick and Morty como endpoint. Fue desarrollado utilizando el framework Vue.js, e incluye tecnologías como Vuex para el manejo de estado, Bootstrap para el diseño y la implementación de filtros para los personajes.

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
### Crear carpeta .env.local y dentro crear el archivo .env y agregar lo siguiente.
```
VUE_APP_BASE_URL = "/”
```
### Crear carpeta .env.production.local y dentro crear el archivo .env y agregar lo siguiente.
```
VUE_APP_BASE_URL = "/nombre-proyecto/”
```

## Paso 4 evisar el archivo .gitignore y comentar los siguientes archivos
```
#/dist
#.env.local
#.env.*.local
```

## Paso 5 incorporar los siguientes comandos en el siguiente orden : 
```
npm run build
```
```
npm run deploy
```
## Paso 6
```
luego revisar git-pages en github el proyecto
```



