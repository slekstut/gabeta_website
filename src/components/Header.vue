<template>
    <header>
        <div class="header">
            <div class="logo">
                <a href="#">Gabeta</a>
            </div>
            <div class="nav">
                <nav>
                    <ul>
                        <li><a class="animated" href="#">Pagrindinis</a></li>
                        <li><a class="animated" href="#">Atlikti darbai</a></li>
                        <li><a class="animated" href="#">Apie Mus</a></li>
                        <li><a class="animated" href="#">Kontaktai</a></li>
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

.logo a:hover {
    color: var(--c-black-soft);
    
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