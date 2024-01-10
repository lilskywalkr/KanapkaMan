<script setup>
    import Footer from '@/components/Footer.vue';
    import ContactForm from '@/components/ContactForm.vue';
    import Hero from '@/components/Hero.vue';
    import AllProjects from '@/components/projects/AllProjects.vue';

    import { ref, onMounted } from 'vue';
    import { getImagesFromUnsplush } from '../components/modules/getImages';

    const imgArray = ref([]);

    onMounted(async () => {
        await getImagesFromUnsplush(1, imgArray.value);
    });
</script>

<template>
    <Hero :imgArray="imgArray" :header="$t('projectsHeader')" :content="$t('projectsContent')"/>

    <AllProjects />

    <ContactForm />

    <Footer></Footer>
</template>

<style scoped lang="scss">

</style>