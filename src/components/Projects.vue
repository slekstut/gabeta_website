<template>
    <section class="section__projects">
        <div class="section">
            <h3 class="title">Mūsų projektai</h3>
            <div class="cards">
                <div class="card">
                    <div class="card__image">
                        <img src="../assets/images/project_1.jpg" alt="/assets/images/project_1.jpg">
                    </div>
                    <div class="card__content">
                        <p class="sub-text">120m2</p>
                        <p class="text">garliavos stoginė</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

</script>

<style scoped>
.section__projects {
    background-color: var(--c-black-soft);
}
.section {
    max-width: 1200px;
    margin: 0 auto;
}
.cards {
    position: relative;
    margin-top: 48px;
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