import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';

import 'bootstrap/dist/css/bootstrap.min.css'; // Подключение Bootstrap

const app = createApp(App);

app.use(router); // Добавление роутера
app.mount('#app');
