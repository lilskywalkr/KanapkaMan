<script setup>
    import Footer from '@/components/Footer.vue';
    import Hero from '@/components/Hero.vue';
    import { ref, onMounted } from 'vue';
    import { getImagesFromUnsplush } from '../components/modules/getImages';

    const imgArray = ref([]);

    // content for hero section
    const heroHeader = ref('Kim jesteśmy');
    const heroContent = ref('Firma KanapkaMan powstała z pasji do nowych technologii. Do dzielenia<br>się naszą wiedzą. Do projektowania i tworzenia użytecznych i<br>nowoczesnych rozwiązań dla Was - naszych klientów.');

    onMounted(async () => {
        await getImagesFromUnsplush(1, imgArray.value);
    });

</script>

<template>
    <Hero :imgArray="imgArray" :header="heroHeader" :content="heroContent"/>

    <Footer></Footer>
</template>

<style scoped lang="scss">

</style>