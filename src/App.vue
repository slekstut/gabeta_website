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
</template>

<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Intro from './components/Intro.vue'
import ServiceSection from './components/ServiceSection.vue'
import Testimonals from './components/Testimonals.vue'

const title = 'Profiliuoto plieno namų, angarų ir garažų statyba';
const description = 'Mūsų metalinės konstrukcijos yra kruopščiai suprojektuotos, atsižvelgiant į tikslumą ir ilgaamžiškumą, todėl užtikrinamas neprilygstamas funkcionalumas ir efektyvumas.';
const imageUrl = '/src/assets/images/service_1.jpg';
const reverse = false;
const title1 = 'pramoninių pastatų sandwich plokščių, storasienių plieno montavimas';
const description1 = 'Mūsų kūrybingi, pritaikyti sprendimai nuolat viršija klientų lūkesčius ir padeda įmonėms išnaudoti visą savo potencialą.';
const imageUrl1 = '/src/assets/images/service_2.jpg';
const reverse1 = true;
</script>

<style scoped>

</style>
