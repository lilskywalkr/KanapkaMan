<script setup>
    import Hero from '@/components/Hero.vue';
    import Footer from '@/components/Footer.vue';
    import People from '@/components/team/People.vue';
    import ContactForm from '@/components/ContactForm.vue';
    import { ref, onMounted } from 'vue';
    import { getImagesFromUnsplush } from '../components/modules/getImages';
    

    const imgArray = ref([]);

    // content for hero section component
    const heroHeader = ref('');
    const heroContent = ref('')

    onMounted(async () => {
        await getImagesFromUnsplush(7, imgArray.value);
    });

    // props for people (team members)
    const names = ref(['Mateusz Milczarek', 'Filip Lecrut', 'Jakub Tutka', 'Paweł Rutkowski', 'Vitalii Shcherbyna', 'Piotr Jasiński', 'Jakub Sońta', 'Bartek Palmowski']);
    const descs = ref([]);
</script>

<template>
    <Hero :imgArray="imgArray" :header="$t('ourTeamHeroHeader')" :content="$t('ourTeamHeroContent')"/>
    <People :imgArray="imgArray" :names="names" :desc="descs" />
    <ContactForm />

    <Footer></Footer>
</template>