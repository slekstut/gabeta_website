<template>
    <header>
        <div class="header">
            <div class="logo">
                <a href="#">Gabeta</a>
            </div>
            <div class="nav">
                <nav>
                    <ul>
                        <li><a class="animated" @click="scrollToSection('hero')">Pagrindinis</a></li>
                        <li><a class="animated" @click="scrollToSection('projects')">Atlikti darbai</a></li>
                        <li><a class="animated" @click="scrollToSection('about-us')">Apie Mus</a></li>
                        <li><a class="animated" @click="scrollToSection('contact')">Kontaktai</a></li>
                    </ul>
                </nav>
            </div>
            <div class="mobile-menu">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="33" viewBox="0 0 36 33" fill="none">
                    <path
                        d="M0 32.0936V26.8358H36V32.0936H0ZM0 18.9491V13.6913H36V18.9491H0ZM0 5.80458V0.546783H36V5.80458H0Z"
                        fill="black" />
                </svg>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    methods: {
        scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        },
    }
}

</script>

<style scoped>
header {
    background-color: var(--c-white-soft);
}

.header {
    padding: 40px 0 64px 0;
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header a {
    color: var(--c-black);
}
.header .mobile-menu {
    display: none;
}
.logo a {
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
}

.logo a:hover {
    color: var(--c-black-soft);

}

.nav li a {
    font-size: 18px;
}

.nav a:hover {
    cursor: pointer;
}

.nav li+li {
    margin-left: 62px;
}

ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
}

@media (max-width: 768px) {
    .header {
        padding: 24px 12px 0 12px;
    }
    .nav {
        display: none;
    }
    .header .mobile-menu {
        display: flex;
    }
}</style>