<template>
    <section class="section__testimonals">
        <div class="section" id="section1" data-aos="fade-up"
     data-aos-duration="1000">
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
                                <p>{{ card.name }}</p>
                                <p>{{ card.position }}</p>
                                <p>{{ card.company }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                    <div class="swiper-button-next"></div>
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
        name: 'Jonas Jonaitis',
        position: 'Direktorius',
        company: 'UAB "TEST COMPANY1"',
        image: 'https://i.pravatar.cc/64?img=3',
        content: 'Kokybiškai ir laiku atliktas angaro statybos projektas!'
    },
    {
        id: 2,
        name: 'Vardenis Pavardenis',
        position: 'Vykdantysis direktorius',
        company: 'UAB "TEST COMPANY2"',
        image: 'https://i.pravatar.cc/64?img=14',
        content: 'profesionaliai atlikti darbai. Mes, kaip klientai, esame labai patenkinti.'
    },
    {
        id: 3,
        name: 'Vadovė Vadovaitė',
        position: 'Komercijos vadovė',
        company: 'UAB "TEST COMPANY3"',
        image: 'https://i.pravatar.cc/64?img=5',
        content: 'likome patenkinti suteiktomis paslaugomis. ačiū!'
    },
    {
        id: 4,
        name: 'Vardas Pavarde',
        position: 'Direktorius',
        company: 'UAB "TEST COMPANY4"',
        image: 'https://i.pravatar.cc/64?img=6',
        content: 'Kokybiškai ir laiku atliktas angaro statybos projektas!'
    },
    {
        id: 5,
        name: 'Vardas Pavarde',
        position: 'Direktorius',
        company: 'UAB "TEST COMPANY5"',
        image: 'https://i.pravatar.cc/64?img=7',
        content: 'Kokybiškai ir laiku atliktas angaro statybos projektas!'
    },
    {
        id: 6,
        name: 'Vardas Pavarde',
        position: 'Direktorius',
        company: 'UAB "TEST COMPANY6"',
        image: 'https://i.pravatar.cc/64?img=8',
        content: 'Kokybiškai ir laiku atliktas angaro statybos projektas!'
    },
]
    onMounted(() => {
      new Swiper('.swiper-container', {
        slidesPerView: 3.3,
        spaceBetween: 24,
        draggable: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          0: {
            slidesPerView: 1.3,
          },
          1024: {
            slidesPerView: 2.3,
          },
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
    margin: 0 auto;
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
.card:hover {
    transition: all .3s ease-in-out;
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.25);

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

.swiper-container {
    position: relative;
  padding: 12px !important;

}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  height: auto;
}

.swiper-button-next,
.swiper-button-prev {
    color: var(--c-white);
}

@media (max-width: 768px) {
    .cards .card__content {
        margin-top: 33px;
    }
    .cards .card__content p {
        font-size: 16px;
        line-height: normal;
    }
    .cards .card__footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 55px;
    }
    .cards .card__footer p {
        font-size: 14px;
        line-height: 1.2;
        text-align: center;
    }
}
</style>