<template>
    <section class="section--hero" id="hero">
        <div 
            class="wrapper"
            data-aos="fade-up"
            data-aos-duration="3000"
        >
            <div class="current-date">
                <!-- <p>Pirmadienis, Rugpjūčio 28, 2023</p> -->
                <p>{{ formattedCurrentDate }}</p>
            </div>
            <div class="main-title">
                <h1>Inovatyvūs konstrukcinai sprendimai Jūsų verslui</h1>
            </div>
            <div class="subtitle">
                <p>Padarykite revoliuciją savo pramoninėje ir asmeninėje erdvėje naudodami mūsų naujausius, specialiai
                    pritaikytus sprendimus.</p>
            </div>
            <div class="action-btn" @click="scrollToSection('projects')">
                <button>peržiūrėti projektus</button>
            </div>
            <div class="hero-img">
                <img src="../assets/images/hero_img-modified.jpg" alt="hero_img-modified.jpg">
            </div>
        </div>
    </section>
</template>
<script>
export default {
    setup() {
        const date = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const locale = 'lt-LT';
        const currentDate = date.toLocaleDateString(locale, options);
        const parts = currentDate.split(' ');
        const formattedCurrentDate = `${parts[5].charAt(0).toUpperCase() + parts[5].slice(1)}, ${parts[2].charAt(0).toUpperCase() + parts[2].slice(1)} ${parts[3]}, ${parts[0]}`;

        const scrollToSection = (sectionId) => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
        return {
            formattedCurrentDate,
            scrollToSection
        }
    }
}
</script>

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
    color: var(--c-black);
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
    display: flex;
    padding: 21px 41px;
    height: 60px;
    background-color: var(--c-black);
    color: var(--c-yellow);
    font-size: 18px;
    font-weight: 700;
    line-height: 1.2;
    text-transform: uppercase;
    border: none;
    border-radius: 0;
    cursor: pointer;
}

.action-btn button:hover {
    background-color: var(--c-yellow);
    color: var(--c-black);
    transition: all .3s ease-in-out;
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

@media (max-width: 768px) {
    section {
        padding-top: 29px;
        padding-bottom: 0;
    }
    .wrapper {
        padding: 0 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }
    .main-title {
        margin-top: 16px;
    }
    .main-title h1 {
        font-size: 32px;
        line-height: normal;
    }
    .current-date {
        font-size: 14px;
    }

    .current-date p {
        letter-spacing: 3px;
    }

    .subtitle {
        margin-top: 16px;
        display: flex;
        justify-content: center;
        max-width: 270px;
    }

    .subtitle p {
        font-size: 16px;
        text-align: center;
        line-height: normal;
    }
    .action-btn button {
        width: 100%;
        display: flex;
        justify-content: center;;
        font-size: 16px;
        line-height: 22px;
        font-weight: 400;
    }
    .hero-img {
        margin-top: 24px;
    }
   
}</style>