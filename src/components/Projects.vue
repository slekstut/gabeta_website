<template>
    <section class="section__projects">
        <div class="section">
            <h3 class="title">Mūsų projektai</h3>
            <div class="cards">
                <div v-for="(project, index) in projects" :key="index" class="card">
                    <div class="card__image">
                        <img :src="project.image" :alt="project.image">
                    </div>
                    <div class="card__content">
                        <p class="sub-text">{{ project.area }}</p>
                        <p class="text">{{ project.title }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    setup() {
        const projects = [
            {
                id: 1,
                image: '../../src/assets/images/project_1.jpg',
                area: '120m2',
                title: 'garliavos stoginė'
            },
            {
                id: 2,
                image: '../../src/assets/images/project_2.jpg',
                area: '250m2',
                title: 'kultūros sfera jaunimui'
            },
            {
                id: 3,
                image: '../../src/assets/images/project_3.jpg',
                area: '150m2',
                title: 'sandėliavimo platforma'
            },
            {
                id: 4,
                image: '../../src/assets/images/project_4.jpg',
                area: '300m2',
                title: 'moderni oazė vilnius'
            },
        ]

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
    gap: 48px;
}
.card {
    position: relative;
    flex: 0 0 calc(50% - 48px);
}
.card__image img {
    max-width: 540px;
}
.card__content {
    position: absolute;
    bottom: 13px;
    left: 30px;
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
</style>