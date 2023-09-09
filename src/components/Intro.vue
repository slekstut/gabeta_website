<template>
      <!-- <div
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"
  >
  </div> -->
    <section class="section--intro" id="about-us">
        <div 
        class="intro"
        
        >
            <h3 class="subtitle">Sukurta sėkmei</h3>
            <div class="intro__content">
                <p>Esame patyrusių inžinierių ir architektų komanda, kuri nenuilstamai dirba, kad pasiūlytume Jums aukščiausios klasės, pažangiausius pramoninius pastatus. Mūsų atsidavimas naujovėms ir kompetencijai suteikė mums metalo konstrukcijų pramonės lyderių reputaciją.</p>
                <p>Mūsų metalinės konstrukcijos užtikrina aukštą našumą ir pritaikomumą, suteikdamos idealią aplinką jūsų pramoninei veiklai. Mūsų konstrukcijos sukurtos taip, kad atlaikytų sudėtingiausias sąlygas, užtikrindamos ilgalaikę investicijų grąžą.</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
.section--intro {
    width: 100%;
    background-color: var(--c-black-soft);
    color: var(--c-white);
}

.intro {
    max-width: 1200px;
    margin: 0 auto;
}

.intro .intro__content {
    display: flex;
    gap: 100px;
    margin-top: 48px;
}
.intro .intro__content {
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    color: var(--c-white);
}
@media (max-width: 768px) {
    .intro {
        padding-left: 12px;
        padding-right: 12px;
    }
    .intro__content p {
        font-size: 16px;
        line-height: 30px;
    }
    .intro .intro__content {
        margin-top: 24px;
        flex-direction: column;
        gap: 24px;
    }
}
</style>