<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

import type { Ref } from 'vue'
import { useBlog } from '../../composables/useBlog'

const blogPost: Ref<any> = ref(null)

const route = useRoute()
const { locale } = useI18n()
const { getBlogPostById } = useBlog()

async function gettingBlogPostById(postId: string) {
  blogPost.value = await getBlogPostById(postId, locale.value)
}

onMounted(async () => {
  const postId = (route.params as { postId?: string }).postId || ''
  await gettingBlogPostById(postId)
})

watch(() => locale.value, async () => {
  const postId = (route.params as { postId?: string }).postId || ''
  await gettingBlogPostById(postId)
})
</script>

<template>
  <div class="content-container">
    <h2 v-if="blogPost && blogPost[0]">
      {{ blogPost[0].title }}
    </h2>

    <h2 v-else>
      {{ $t('blogPostNoLanguage') }}
    </h2>

    <p v-if="blogPost && blogPost[0]">
      {{ blogPost[0].content }}
    </p>
  </div>

  <ContactForm />

  <Footer />
</template>

<style scoped lang="scss">
    .content-container {
        width: 100vw;
        padding: 10vw 5vw;
        color: var(--sh-white);

        @media screen and (max-width: 768px) {

        }

        h2 {
            font-size: 4.5vw;
            text-align: center;

            @media screen and (max-width: 768px) {
                font-size: 6.5vw;
            }
        }

        p {
            font-size: 1.5vw;
            line-height: 2.5vw;
            margin-top: 5vw;
            text-align: justify;

            @media screen and (max-width: 768px) {
                font-size: 3.5vw;
                line-height: 4.5vw;
            }
        }
    }
</style>
