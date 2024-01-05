<script setup>
    import Footer from '@/components/Footer.vue';
    import ContactForm from '@/components/ContactForm.vue';
    import Hero from '@/components/Hero.vue';
    import WhatWeDo from '@/components/WhatWeDo.vue';
    import Technologies from '@/components/services/Technologies.vue';
    import StartingFrom from '@/components/services/StartingFrom.vue';
    import ClientsSlider from '@/components/services/ClientsSlider.vue';
    import { ref, onMounted } from 'vue';
    import { getImagesFromUnsplush } from '../components/modules/getImages';

    const imgArray = ref([]);

    onMounted(async () => {
        await getImagesFromUnsplush(1, imgArray.value);
    });
</script>

<template>
    <Hero :imgArray="imgArray" :header="$t('servicesHeroHeader')" :content="$t('servicesHeroContent')"/>
    <WhatWeDo />
    
    <Technologies/>
    <StartingFrom/>
    <ClientsSlider/>

    <ContactForm/>

    <Footer></Footer>
</template>


<style scoped lang="scss">

</style>