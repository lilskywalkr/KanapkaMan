<script setup>
    import Footer from '@/components/Footer.vue';
    import Hero from '@/components/Hero.vue';
    import WhatWeDo from '@/components/WhatWeDo.vue';
    import OurMission from '../components/about/OurMission.vue';
    import { ref, onMounted } from 'vue';
    import { getImagesFromUnsplush } from '../components/modules/getImages';

    const imgArray = ref([]);

    onMounted(async () => {
        await getImagesFromUnsplush(1, imgArray.value);
    });

</script>

<template>
    <Hero :imgArray="imgArray" :header="$t('aboutHeroHeader')" :content="$t('aboutHeroContent')"/>
    <WhatWeDo />
    <OurMission />

    <Footer></Footer>
</template>

<style scoped lang="scss">

</style>