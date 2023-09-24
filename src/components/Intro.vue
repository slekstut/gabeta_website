<template>
    <section class="section--intro" id="about-us">
        <div class="intro" data-aos="fade-in">
            <h3 class="subtitle">Sukurta sėkmei</h3>
            <div class="intro__content">
                <p>Esame patyrusių inžinierių ir architektų komanda, kuri nenuilstamai dirba, kad pasiūlytume Jums
                    aukščiausios klasės, pažangiausius pramoninius pastatus. Mūsų atsidavimas naujovėms ir kompetencijai
                    suteikė mums metalo konstrukcijų pramonės lyderių reputaciją.</p>
            </div>
        </div>
        <div class="intro technology" data-aos="fade-in">
            <h3 class="subtitle">Naudojamos technologijų privalumai</h3>
            <div class="intro__content">
                <div class="card">
                    <div class="card__header">
                        <div class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
                                <path fill="#ffffff" d="m24,2v3H0v-3h24ZM7,22h17v-3H7v3Zm0-9h17v-3H7v3ZM0,22h3v-12H0v12Z" />
                            </svg>
                        </div>
                        <div class="card__title">Lengvųjų plieno konstrukcijų technologija (LPKT)</div>
                    </div>
                    <div class="card__content">
                        <p>Gamybos proceso
                            automatizavimas
                            ir itin aukšta įrangos kokybė leidžia išlaikyti vos 1 mm karkasų geometrijos paklaidą. Pastatų iš
                            lengvų plieno konstrukcijų parametrai – itin tikslūs. Tokios konstrukcijos apsaugotos
                            nuo
                            biologinio drėgmės poveikio ir temperatūrų svyravimo. Dėl šių charakteristikų pastatai gali būti
                            eksploatuojami itin ilgą laiką, o jų remontas kainuoja mažiau nei įprasto tradicinio pastato,
                            kas
                            įtakoja tokių pastatų ekonominį pagrįstumą.</p>
                    </div>
                </div>

                <div class="card">
                    <div class="card__header">
                        <div class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
                                <path fill="#ffffff" d="m24,2v3H0v-3h24ZM7,22h17v-3H7v3Zm0-9h17v-3H7v3ZM0,22h3v-12H0v12Z" />
                            </svg>
                        </div>
                        <div class="card__title">Sandwich daugiasluoksnės plokštės</div>

                    </div>
                    <div class="card__content">
                        <p>Klasifikuojamos pagal izoliacinės medžiagos rūšį. Prekyboje yra
                            plokščių
                            su
                            putų polistireno, mineralinės vatos ir poliuretano (poliizocianurato – PIR) užpildu.

                            Daugiausia skiriasi jų šilumos ir garso izoliacinės savybės, atsparumas ugniai, svoris.</p>
                    </div>
                </div>

                <div class="card">
                    <div class="card__header">
                        <div class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
                                <path fill="#ffffff" d="m24,2v3H0v-3h24ZM7,22h17v-3H7v3Zm0-9h17v-3H7v3ZM0,22h3v-12H0v12Z" />
                            </svg>
                        </div>
                        <div class="card__title">Sluoksninė plokštė</div>

                    </div>
                    <div class="card__content">
                        <p>Pastatų sienų ir stogų apdailos medžiaga, sudaryta iš šilumą
                            izoliuojančio
                            užpildo ir skardos. Tai ne konstrukcinė, o dengiamoji medžiaga. Konstrukcinę funkciją atlieka ne
                            pačios
                            plokštės, o plieninis karkasas, prie kurio jos tvirtinamos.

                        </p>
                    </div>
                </div>
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
    flex-wrap: wrap;
    gap: 24px;
    margin-top: 48px;
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    color: var(--c-white);
}

intro.technology {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}

.intro.technology .subtitle {
    margin-top: 64px;
    max-width: 550px;
}

.card .card__header {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
}

.card .card__title {
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    text-transform: uppercase;
    color: var(--c-white);
}

.card__content {
    margin-top: 12px;
}

.card {
    padding: 24px;
    width: calc(33.333% - 24px);
    background-color: var(--c-black-mute);
}

.intro.technology .card .icon {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.intro .intro__content p {
    display: flex;
    width: 100%;
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
}</style>