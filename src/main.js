import { createApp } from 'vue';
import App from './App.vue';
import store from './store'; // Importa el store de Vuex
import 'bootstrap/dist/css/bootstrap.css';


const app = createApp(App);  // Crea la instancia de la aplicación

app.use(store);  // Registra Vuex como un plugin en tu aplicación

app.mount('#app');  // Monta la aplicación en el DOM