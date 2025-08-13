import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './assets/styles/global.scss'
import './assets/styles/style.css'

createApp(App).use(router).use(createPinia()).mount('#app')
