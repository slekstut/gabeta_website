import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import '../node_modules/swiper/swiper-bundle.min.css';
import { Swiper, SwiperSlide } from 'swiper/vue';
const app = createApp(App);
app.component('Swiper', Swiper);
app.component('SwiperSlide', SwiperSlide);

createApp(App).mount('#app')
