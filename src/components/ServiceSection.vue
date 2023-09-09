<template>
    <section class="section__service">
        <div class="section" :class="{'reverse': reverse}">
            <div class="description">
                <h3 class="subtitle">{{title}}</h3>
                <div class="content">
                    <p>{{ description }}</p>
                </div>
            </div>
            <div class="image">
                <img :src="imageUrl" :alt="title">
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  title: String,
  description: String,
  imageUrl: String,
  reverse: Boolean
});
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
.section.reverse {
    flex-direction: row-reverse;
}
@media (max-width: 768px) {
    .section,
    .section.reverse {
        padding-left: 12px;
        padding-right: 12px;
        flex-direction: column;
        gap: 24px;
    }
    .section__service .description {
        gap: 24px;
    }
    .section__service .description .content p {
        font-size: 14px;
        line-height: 30px;
    }
    .section__service h3.subtitle {
        max-width: 100%;
    }
    .section__service .description .image {
        max-height: 400px;
    }
}
</style>