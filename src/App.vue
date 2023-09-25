<script setup>
  import Hero from './components/Hero.vue';
  import Menu from './components/Menu.vue';
  import Projects from './components/Projects.vue';
  import AboutUs from './components/AboutUs.vue';
  import Contact from './components/Contact.vue';
  import Footer from './components/Footer.vue'
  import Canvas from './components/Canvas.vue';
</script>

<template>
  <Menu></Menu>
  
  <Canvas></Canvas>
  <Hero />
  <Projects/>
  <AboutUs />
  <Contact />

  <Footer></Footer>
</template>

<style scoped>

</style>
