<template>
  <Header/>
  <Hero/>
  <Intro/>
  <ServiceSection
    :title="title"
    :description="description"
    :imageUrl="imageUrl"
    :reverse="reverse"
  />
  <ServiceSection
    :title="title1"
    :description="description1"
    :imageUrl="imageUrl1"
    :reverse="reverse1"
  />
  <Testimonals/>
  <Motto/>
  <Projects/>
  <Contact/>
  <Footer/>
</template>

<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Intro from './components/Intro.vue'
import ServiceSection from './components/ServiceSection.vue'
import Testimonals from './components/Testimonals.vue'
import Motto from './components/Motto.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

const title = 'Profiliuoto plieno konstrukcijų statyba';
const description = 'Mūsų metalinės konstrukcijos yra kruopščiai suprojektuotos, atsižvelgiant į tikslumą ir ilgaamžiškumą, todėl užtikrinamas neprilygstamas funkcionalumas ir efektyvumas. Statome ir montuojame pramoninius ir ūkinius pastatus iš metalo konstrukcijų. Taip pat įvairius statybinius metalo profilius, pramonines gyvenamųjų pastatų metalo konstrukcijas, santvaras, pertvaras, nestandartines konstrukcijas, laiptus ir jų aikšteles, priestatus, anstatus, mansardas, pastoges, perdangas, balkonus, santvaras ir kita.';
const imageUrl = '/images/service_1.jpg';
const reverse = false;
const title1 = 'pramoninių pastatų sandwich plokščių, storasienių plieno montavimas';
const description1 = 'Mūsų kūrybingi, pritaikyti sprendimai nuolat viršija klientų lūkesčius ir padeda įmonėms išnaudoti visą savo potencialą. Teikiame aukštos kokybės pramoninių objecktų, gyvenamųjų namų ir profiliuoto plieno montavimo paslaugas. Įskaitant profiliuotos skardos, sandwich panelių montavimo paslaugos tiek Lietuvoje tiek užsienyje.';
const imageUrl1 = '/images/service_2.jpg';
const reverse1 = true;
</script>

<style scoped>

</style>
