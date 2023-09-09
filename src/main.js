import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import '../node_modules/swiper/swiper-bundle.min.css';
import { Swiper, SwiperSlide } from 'swiper/vue';
const app = createApp(App);
app.component('Swiper', Swiper);
app.component('SwiperSlide', SwiperSlide);

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

createApp(App).mount('#app')
