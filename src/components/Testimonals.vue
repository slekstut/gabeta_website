<template>
    <section class="section__testimonals">
        <div class="section">
            <h3 class="title">Atsiliepimai</h3>
            <div class="cards">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div v-for="card in cards" :key="card.id" class="swiper-slide card">
                            <div class="card__image">
                                <img :src="card.image" :alt="card.image">
                            </div>
                            <div class="card__content">
                                <p>{{ card.content }}</p>
                            </div>
                            <div class="card__footer">
                                <p>{{card.name}}</p>
                                <p>{{ card.position }}</p>
                                <p>{{ card.company }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                    <div class="swiper-button-next">next</div>
                    <div class="swiper-button-prev"></div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
import { ref, onMounted } from 'vue';
import Swiper from '../../node_modules/swiper/swiper-bundle'; 
import '../../node_modules/swiper/swiper-bundle.css';
export default {
  setup() {
    const cards = [
    {
        id: 1,
        name: 'Vardas Pavarde',
        position: 'Direktorius',
        company: 'UAB "TEST COMPANY"',
        image: 'https://i.pravatar.cc/64',
        content: 'Kokybiškai ir laiku atliktas angaro statybos projektas!'
    },
    {
        id: 2,
        name: 'Vardas Pavarde',
        position: 'Direktorius',
        company: 'UAB "TEST COMPANY"',
        image: 'https://i.pravatar.cc/64',
        content: 'Kokybiškai ir laiku atliktas angaro statybos projektas!'
    },
    {
        id: 3,
        name: 'Vardas Pavarde',
        position: 'Direktorius',
        company: 'UAB "TEST COMPANY"',
        image: 'https://i.pravatar.cc/64',
        content: 'Kokybiškai ir laiku atliktas angaro statybos projektas!'
    },
    {
        id: 4,
        name: 'Vardas Pavarde',
        position: 'Direktorius',
        company: 'UAB "TEST COMPANY"',
        image: 'https://i.pravatar.cc/64',
        content: 'Kokybiškai ir laiku atliktas angaro statybos projektas!'
    },
    {
        id: 5,
        name: 'Vardas Pavarde',
        position: 'Direktorius',
        company: 'UAB "TEST COMPANY"',
        image: 'https://i.pravatar.cc/64',
        content: 'Kokybiškai ir laiku atliktas angaro statybos projektas!'
    },
    {
        id: 6,
        name: 'Vardas Pavarde',
        position: 'Direktorius',
        company: 'UAB "TEST COMPANY"',
        image: 'https://i.pravatar.cc/64',
        content: 'Kokybiškai ir laiku atliktas angaro statybos projektas!'
    },
]
    onMounted(() => {
      new Swiper('.swiper-container', {
        slidesPerView: 3.3,
        spaceBetween: 48,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    });

    return {
        cards,
    };
  },
};
</script>

<style scoped>
.section__testimonals {
    background-color: var(--c-black-soft);
}
.section {
    display: flex;
    flex-direction: column;
    gap: 48px;
    max-width: 1200px;
    overflow: hidden;
}
.title {
    width: 100%;
}
.cards {
    width: 100%;
}
.card {
    max-width: 378px;
    padding: 54px 45px 24px 45px;
    background-color: var(--c-black-mute);
}
.card > * {
    text-align: center;
    margin: 0 auto;
}
.card__image {
    width: 64px;
    height: 64px;
}
.card__image img {
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
}

.card__content {
    margin-top: 52px;
}
.card__content p {
    font-size: 20px;
    line-height: 30px;
    font-weight: 400;
    text-transform: uppercase;
}
.card__footer {
    margin-top: 130px;
}
.card__footer p {
    font-size: 18px;
    line-height: 30px;
    font-weight: 400;
}
</style>