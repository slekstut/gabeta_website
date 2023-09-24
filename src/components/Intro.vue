<template>
    <section class="section--intro" id="about-us">
        <div class="intro" data-aos="fade-in">
            <h3 class="subtitle">Sukurta sėkmei</h3>
            <div class="intro__content">
                <p>Esame patyrusių inžinierių ir architektų komanda, kuri nenuilstamai dirba, kad pasiūlytume Jums
                    aukščiausios klasės, pažangiausius pramoninius pastatus. Mūsų atsidavimas naujovėms ir kompetencijai
                    suteikė mums metalo konstrukcijų pramonės lyderių reputaciją.</p>
            </div>
            <h3 class="subtitle technology">Naudojamos technologijos</h3>
            <div class="intro__content">
                <p>Lengvųjų plieno konstrukcijų technologija (LPKT) – tai pirmaujanti statybos technologija, grindžiama
                    naujausiais taikytinais statybų srityje mokslo ir technikos atradimais. Gamybos proceso automatizavimas
                    ir itin aukšta įrangos kokybė leidžia išlaikyti vos 1 mm karkasų geometrijos paklaidą.</p>
                <p>Pastatų iš lengvų plieno konstrukcijų parametrai – itin tikslūs. Tokios konstrukcijos apsaugotos nuo
                    biologinio drėgmės poveikio ir temperatūrų svyravimo. Dėl šių charakteristikų pastatai gali būti
                    eksploatuojami itin ilgą laiką, o jų remontas kainuoja mažiau nei įprasto tradicinio pastato, kas
                    įtakoja tokių pastatų ekonominį pagrįstumą.</p>
                <p>Sluoksninė plokštė – tai pastatų sienų ir stogų apdailos medžiaga, sudaryta iš šilumą izoliuojančio
                    užpildo ir skardos. Tai ne konstrukcinė, o dengiamoji medžiaga. Konstrukcinę funkciją atlieka ne pačios
                    plokštės, o plieninis karkasas, prie kurio jos tvirtinamos.

                    Sdaugiasluoksnės plokštės klasifikuojamos pagal izoliacinės medžiagos rūšį. Prekyboje yra plokščių su
                    putų polistireno, mineralinės vatos ir poliuretano (poliizocianurato – PIR) užpildu.

                    Daugiausia skiriasi jų šilumos ir garso izoliacinės savybės, atsparumas ugniai, svoris.</p>
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

.intro .subtitle.technology {
    margin-top: 64px;
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