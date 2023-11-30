<script setup>
    import Hero from '@/components/Hero.vue';
    import Footer from '@/components/Footer.vue';
    import { ref, onMounted } from 'vue';
    import { getImagesFromUnsplush } from '../components/modules/getImages';
    

    const imgArray = ref([]);

    // content for hero section component
    const heroHeader = ref('');
    const heroContent = ref('')

    onMounted(async () => {
        await getImagesFromUnsplush(1, imgArray.value);
    });
</script>

<template>
    <Hero :imgArray="imgArray"/>

    <Footer></Footer>
</template>