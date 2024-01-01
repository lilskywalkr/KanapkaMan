<script setup>
  import Greedings from '@/components/home/Greedings.vue';
  import Projects from '@/components/home/Projects.vue';
  import AboutUs from '@/components/home/AboutUs.vue';
  import Contact from '@/components/home/Contact.vue';
  import Footer from '@/components/Footer.vue'
  import Canvas from '@/components/home/Canvas.vue';

  import LocomotiveScroll from 'locomotive-scroll';
  import { onMounted } from 'vue';

  onMounted(() => {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        resetNativeScroll: true
    });
  })
</script>

<template>
  <div class="home-container" data-scroll-container>
    <Canvas></Canvas>
    <Greedings />
    <Projects />
    <AboutUs />
    <Contact />

    <Footer></Footer>
  </div>
</template>

<style scoped>
  .home-container {
    height: 250vh;
  }
</style>
