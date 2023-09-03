<template>
    <section class="section--hero">
        <div class="wrapper">
            <div class="current-date">
                <p>Pirmadienis, Rugpjūčio 28, 2023</p>
            </div>
            <div class="main-title">
                <h1>Inovatyvūs konstrukcinai sprendimai Jūsų verslui</h1>
            </div>
            <div class="subtitle">
                <p>Padarykite revoliuciją savo pramoninėje ir asmeninėje erdvėje naudodami mūsų naujausius, specialiai pritaikytus sprendimus.</p>
            </div>
            <div class="action-btn">
                <button>peržiūrėti projektus</button>
            </div>
            <div class="hero-img">
                <img src="../assets/images/hero_img-modified.jpg" alt="hero_img-modified.jpg">
            </div>
        </div>
    </section>
</template>


<style scoped>
.section--hero {
    width: 100%;
    background-color: var(--c-white-soft);
    color: var(--c-black);
}
.section--hero .wrapper {
    max-width: 1200px;
    margin: 0 auto;
}
.current-date {
    display: flex;
    justify-content: center;
    font-size: 18px;
    font-weight: 400;
}

.current-date p {
    letter-spacing: 1.8rem;
}
.main-title {
    margin-top: 24px;   
}
.main-title h1 {
    font-size: 90px;
    font-family: var(--font2-type);
    font-weight: 900;
    line-height: 121px;
    text-align: center;
}
.subtitle {
    width: 100%;
    margin-top: 48px;
    display: flex;
    justify-content: center;
}
.subtitle p {
    max-width: 640px;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    text-align: center;
    text-transform: uppercase;
}
.action-btn {
    width: 100%;
    margin-top: 48px;
    display: flex;
    justify-content: center;
}
.action-btn button {
    padding: 21px 41px;
    height: 60px;
    background-color: var(--c-black);
    color: var(--c-yellow);
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    text-transform: uppercase;
    border: none;
    border-radius: 0;
    cursor: pointer;
}

.hero-img {
    max-width: 100%;
    margin-top: 124px;
}

.hero-img img {
    width: 100%;
    max-width: 100%;
    max-height: 690px;
    object-fit: cover;
}
</style>