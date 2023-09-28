<template>
    <section class="section__projects" id="projects">
        <div class="section" data-aos="fade-up" data-aos-duration="1000">
            <h3 class="title">Mūsų projektai</h3>
            <div class="cards">
                <div v-for="(project, index) in projects" :key="index" class="card"
                    @mouseenter="project.hovered = true; console.log('Mouse entered')"
                    @mouseleave="project.hovered = false">
                    <div class="card__wrapper">
                        <div class="card__image">
                            <img
                                v-if="project.hovered && project.images[1]"
                                :src="project.images[1].image"
                                :alt="project.images[1].image"
                            />
                            <img
                                v-else
                                :src="project.images[0].image"
                                :alt="project.images[0].image"
                            />
                        </div>
                        <div class="card__content">
                            <!-- <p class="sub-text">{{ project.area }}</p> -->
                            <p class="text">{{ project.title }}</p>
                        </div>
                    </div>
                    <!-- <p class="description">{{ project.description }}</p> -->
                    <div class="card__blur"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        const projects = ref([
            {
                id: 1,
                images: [
                    {
                        id: 1,
                        image: '/images/project_1.jpg',
                    },
                    {
                        id: 2,
                        image: '/images/project_2.jpg',
                    },
                ],
                area: '120m2',
                title: 'IKI PARDUOTUVĖS PASTATAS',
                hovered: false,
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
            },
        
            {
                id: 3,
                images: [
                    {
                        id: 1,
                        image: '/images/project_3.jpg',
                    },
                    {
                        id: 1,
                        image: '/images/project_4.jpg',
                    }
                ],
                area: '150m2',
                title: 'SANDĖLIO STATYBA',
                hovered: false,
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
            },
            {
                id: 4,
                images: [
                    {
                        id: 1,
                        image: '/images/project_house_1.jpg',
                    },
                    {
                        id: 2,
                        image: '/images/project_house_2.jpg',
                    }
                ],
                area: '300m2',
                title: 'NAMO STATYBA',
                hovered: false,
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
            },
                {
                id: 2,
                images: [
                    {
                        id: 1,
                        image: '/images/featured_project.jpg',
                    },

                ],
                area: '250m2',
                title: 'STATYBA PROGRESE...',
                hovered: false,
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
            },
        ])

        
        console.log(projects)
        return {
            projects
        }
    }
}
</script>

<style scoped>
.section__projects {
    background-color: var(--c-black-soft);
}

.section {
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: 0 auto;
}

.cards {
    position: relative;
    margin-top: 48px;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.card {
    position: relative;
    flex: 0 0 calc(50% - 12px);
    /* min-height: 400px; */
}

.card__wrapper {
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    opacity: 1;
    transition: opacity .3s ease-in-out;
}

/* .card:hover .card__wrapper {
    background-color: var(--c-black-soft);
    opacity: .3;
} */

/* .card .description {
    display: none;
    width: 100%;
    max-width: calc(100% - 64px);
    opacity: 0;
    transition: all .3s ease-in-out;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 32px;
    line-height: 1.2;
    text-align: center;
} */

/* .card:hover .description {
    display: flex;
    opacity: 1;
} */

.card__image {
    display: flex;
    flex-grow: 1;
    max-height: 400px;
    min-height: 400px;
}

.card__wrapper img {
    /* max-width: 540px; */
    max-height: 100%;
    object-fit: cover;
    transition: all .3s ease-in-out;
}

.card__image:nth-child(1n) img {
    max-height: 650px;
}

.card__content {
    position: absolute;
    bottom: 13px;
    left: 30px;
    z-index: 100;
}

.card__content .sub-text {
    color: var(--c-white);
    font-family: var(--font2-type);
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
}

.card__content .text {
    margin-top: 6px;
    color: var(--c-white);
    font-family: var(--font2-type);
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
}

.card__blur {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 76px;
    background: rgba(64, 66, 64, 0.15);
    backdrop-filter: blur(1px);
}

@media (max-width: 768px) {
    .section__projects .section {
        padding-left: 0;
        padding-right: 0;
    }

    .cards {
        margin-top: 0;
        gap: 24px;
    }

    .card {
        flex: 0 0 100%;
    }

    .card__content .sub-text {
        font-size: 14px;
    }

    .card__content .text {
        font-size: 16px;
    }
}</style>