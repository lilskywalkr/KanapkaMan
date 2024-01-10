<script setup>
  import Greedings from '@/components/home/Greedings.vue';
  import SelectedProjects from '@/components/home/SelectedProjects.vue';
  import AboutUs from '@/components/home/AboutUs.vue';
  import Contact from '@/components/home/Contact.vue';
  import Footer from '@/components/Footer.vue'
  import Canvas from '@/components/home/Canvas.vue';
</script>

<template>
  <Canvas></Canvas>
  <Greedings />
  <SelectedProjects />
  <AboutUs />
  <Contact />

  <Footer></Footer>
</template>

<style scoped>
  .home-container {
    height: 250vh;
  }
</style>
