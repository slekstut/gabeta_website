<template>
    <section class="section__service">
        <div class="section">
            <div class="description">
                <h3 class="subtitle">Profiliuoto plieno namų, angarų ir garažų statyba</h3>
                <div class="content">
                    <p>Mūsų metalinės konstrukcijos yra kruopščiai suprojektuotos, atsižvelgiant į tikslumą ir ilgaamžiškumą, todėl užtikrinamas neprilygstamas funkcionalumas ir efektyvumas.</p>
                </div>
            </div>
            <div class="image">
                <img src="../assets/images/service_1.jpg" alt="images/service_1.jpg">
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style>
.section__service {
    background-color: var(--c-black-soft);
}
.section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 100px;
    max-width: 1200px;
    margin: 0 auto;
}
.section__service h3.subtitle {
    font-size: 32px;
    max-width: 430px;
    line-height: normal;
}
.section__service .description {
    display: flex;
    flex-direction: column;
    gap: 48px;
}
.section__service .image img{
    max-width: 590px;
}

.section__service .content {
    font-size: 18px;
    line-height: 30px;
}
</style>