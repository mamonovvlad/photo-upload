import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from "./router/index.js";
import App from './App.vue'

import './assets/scss/main.scss'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')
