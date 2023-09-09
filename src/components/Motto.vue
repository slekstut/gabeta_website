<template>
    <section class="section__motto">
        <div class="section">
            <div class="background-image">
                <h3 class="title">„Kokybė nėra veiksmas, tai įprotis“. – Aristotelis</h3>
            </div>
        </div>
    </section>
</template>

<style scoped>
.section__motto {
    background-image: url('../assets/images/motto_img.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 960px;
    color: var(--c-white);
}

.section {
    max-width: 1200px;
    margin: 0 auto;
}

.section .title {
    margin-top: 143px;
    color: var(--c-white);
    text-align: center;
    font-family: var(--font2-type);
    font-size: 76px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

@media (max-width: 768px) {
    section {
        padding: 0 12px 138px 12px;
    }
    .section {
        padding: 0;
    }

    .section__motto {
        height: 100%;
    }

    .section__motto .title {
        margin-top: 38px;
        font-size: 40px;
    }
}
</style>