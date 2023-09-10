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
            <div class="mobile-menu" @click="toggleMobileMenu">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="33" viewBox="0 0 36 33" fill="none">
                    <path
                        d="M0 32.0936V26.8358H36V32.0936H0ZM0 18.9491V13.6913H36V18.9491H0ZM0 5.80458V0.546783H36V5.80458H0Z"
                        fill="black" />
                </svg>
            </div>
        </div>
        <div class="mobile-menu-content" :class="{ 'open': isMobileMenuOpen }">
                <div class="close-btn" @click="closeMobileMenu">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path
                            d="M2.8 28L0 25.2L11.2 14L0 2.8L2.8 0L14 11.2L25.2 0L28 2.8L16.8 14L28 25.2L25.2 28L14 16.8L2.8 28Z"
                            fill="white" />
                    </svg>
                </div>
                <nav>
                    <ul>
                        <li><a class="animated" @click="scrollToSection('hero')">Pagrindinis</a></li>
                        <li><a class="animated" @click="scrollToSection('projects')">Atlikti darbai</a></li>
                        <li><a class="animated" @click="scrollToSection('about-us')">Apie Mus</a></li>
                        <li><a class="animated" @click="scrollToSection('contact')">Kontaktai</a></li>
                    </ul>
                </nav>
            </div>
    </header>
</template>

<script>
export default {
    data: () => ({
        isMobileMenuOpen: false
    }),
    methods: {
        scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                this.closeMobileMenu()
                section.scrollIntoView({ behavior: 'smooth' });
            }
        },
        toggleMobileMenu() {
            this.isMobileMenuOpen = !this.isMobileMenuOpen;
            if (this.isMobileMenuOpen) {
                document.body.classList.add('no-scroll');
            } else {
                document.body.classList.remove('no-scroll');
            }
        },
        closeMobileMenu() {
            this.isMobileMenuOpen = false;
            document.body.classList.remove('no-scroll');
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

.mobile-menu,
.mobile-menu-content {
    display: none;
}

@media (max-width: 768px) {
    header {
        position: relative;
    }
    .header {
        padding: 24px 12px 0 12px;
    }

    .nav {
        display: none;
    }

    .header .mobile-menu {
        display: flex;
    }

    .mobile-menu-content {
        position: absolute;
        top: 0;
        right: 0;
        width: 286px;
        height: 100vh;
        background: rgba(32, 32, 32, 0.95);
        padding: 24px 0;
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        gap: 24px;
        transition: right 0.3s ease-in-out; 
        right: -286px;
    }

    .mobile-menu-content nav ul {
        margin-top: 109px;
        margin-right: 38px;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .mobile-menu-content nav li {
        display: flex;
        justify-content: flex-end;
        width: 100%;
    }

    .mobile-menu-content nav li a {
        color: var(--c-white);
        text-align: right;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: capitalize;
    }
    .mobile-menu-content .close-btn {
        position: absolute;
        top: 24px;
        right: 24px;
        cursor: pointer;
    }

.mobile-menu-content.open {
    right: 0; 
}
}</style>