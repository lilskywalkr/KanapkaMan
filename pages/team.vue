<script setup lang="ts">
import { getImagesFromUnsplush } from '~/components/modules/getImages'

const imgArray = ref([])

onMounted(async () => {
  await getImagesFromUnsplush(7, imgArray.value)
})

// props for people (team members)
const names = ref(['Mateusz Milczarek', 'Filip Lecrut', 'Jakub Tutka', 'Paweł Rutkowski', 'Vitalii Shcherbyna', 'Piotr Jasiński', 'Jakub Sońta', 'Bartek Palmowski'])
const descs = ref([])
</script>

<template>
  <Hero
    :img-array="imgArray"
    :header="$t('ourTeamHeroHeader')"
    :content="$t('ourTeamHeroContent')"
  />

  <TeamPeople
    :img-array="imgArray"
    :names="names"
    :desc="descs"
  />

  <ContactForm />

  <Footer />
</template>
