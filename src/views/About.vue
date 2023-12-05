<script setup>
    import Footer from '@/components/Footer.vue';
    import Hero from '@/components/Hero.vue';
    import WhatWeDo from '@/components/WhatWeDo.vue';
    import OurMission from '@/components/about/OurMission.vue';
    import OurOffices from '@/components/about/OurOffices.vue';
    import OurClients from '@/components/about/OurClients.vue';

    import { ref, onMounted } from 'vue';
    import { getImagesFromUnsplush } from '../components/modules/getImages';

    const imgArray = ref([]);

    onMounted(async () => {
        await getImagesFromUnsplush(7, imgArray.value);
    });

</script>

<template>
    <Hero :imgArray="imgArray" :header="$t('aboutHeroHeader')" :content="$t('aboutHeroContent')"/>
    <WhatWeDo />
    <OurMission :imgArray="imgArray" />
    <OurOffices :imgArray="imgArray" />
    <OurClients :imgArray="imgArray" />

    <Footer></Footer>
</template>

<style scoped lang="scss">

</style>