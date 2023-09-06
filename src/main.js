import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// // import 'swiper/swiper-bundle.min.css';
import '../node_modules/swiper/swiper-bundle.min.css';
// // import Swiper from 'swiper/swiper-bundle.min.js';
// import Swiper from '../node_modules/swiper/swiper-bundle.min.js';
// Import specific Swiper components and features
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
// import 'swiper/swiper-bundle.min.css';

// Create your Vue app
const app = createApp(App);

// Use Swiper components globally
app.component('Swiper', Swiper);
app.component('SwiperSlide', SwiperSlide);

createApp(App).mount('#app')
