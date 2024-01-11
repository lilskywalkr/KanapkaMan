<script setup lang="ts">
import { getImagesFromUnsplush } from '~/components/modules/getImages'

const imgArray = ref([])

onMounted(async () => {
  await getImagesFromUnsplush(7, imgArray.value)
})
</script>

<template>
  <Hero
    :img-array="imgArray"
    :header="$t('aboutHeroHeader')"
    :content="$t('aboutHeroContent')"
  />

  <WhatWeDo />

  <AboutOurMission :img-array="imgArray" />

  <AboutOurOffices :img-array="imgArray" />

  <AboutOurClients :img-array="imgArray" />

  <ContactForm />

  <Footer />
</template>
