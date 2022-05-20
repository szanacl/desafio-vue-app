import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/router";
import './assets/style.css'

export const app = createApp(App);

app.use(router);

app.mount("#app");
