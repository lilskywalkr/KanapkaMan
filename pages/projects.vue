<script setup lang="ts">
import { getImagesFromUnsplush } from '~/components/modules/getImages'

const imgArray = ref([])

onMounted(async () => {
  await getImagesFromUnsplush(1, imgArray.value)
})
</script>

<template>
  <Hero
    :img-array="imgArray"
    :header="$t('projectsHeader')"
    :content="$t('projectsContent')"
  />

  <ProjectsAllProjects />

  <ContactForm />

  <Footer />
</template>
