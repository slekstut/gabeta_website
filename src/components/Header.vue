<template>
    <header>
        <div class="header">
            <div class="logo">
                <a href="#">Gabeta</a>
            </div>
            <div class="nav">
                <nav>
                    <ul>
                        <li><a href="#">Pagrindinis</a></li>
                        <li><a href="#">Atlikti darbai</a></li>
                        <li><a href="#">Apie Mus</a></li>
                        <li><a href="#">Kontaktai</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>

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

.logo a {
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
}

.nav li a {
    font-size: 18px;
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
</style>