<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { getImagesFromUnsplush } from '../modules/getImages'

const imgArray = ref<string[]>([])
const contactImgRef = ref(null)
const contactTextRef = ref(null)
const animationsPlayed = ref(false) // Flag to track whether animations have been played

onMounted(async () => {
  await getImagesFromUnsplush(1, imgArray.value)
  const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 })
  observer.observe(contactTextRef.value)
})

function handleIntersection(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !animationsPlayed.value) {
      playAnimations()
      animationsPlayed.value = true // Set the flag to true to indicate animations have been played
    }
  })
}

function playAnimations() {
  const tl = gsap.timeline()

  // Animation for contact image
  tl.from(contactImgRef.value, { opacity: 0, duration: 1, delay: 0.5 })

  // Animation for contact text
  tl.from(contactTextRef.value, { opacity: 0, y: -20, duration: 1 }, '-=0.5')
}
</script>

<template>
  <div
    id="contact"
    class="contact-container"
  >
    <div
      ref="contactImgRef"
      class="contact-img"
      :style="{'backgroundImage': `url(${imgArray[0]})`}"
    />

    <div
      ref="contactTextRef"
      class="contact-text"
    >
      <p>UX/UI</p>

      <p>{{ $t('weveBeen') }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
    .contact-container {
        width: 120vw;
        height: 50vw;
        background: var(--sh-another-black);
        border-radius: 80%;
        position: absolute;
        z-index: 1;
        transform: translate(-10vw, -15vw);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10vw;
        padding: 0vw 0 0 0;

        @media screen and (max-width: 768px) {
            width: 150vw;
            height: auto;
            transform: translate(-25vw, -25vw);
            padding-bottom: 25vw;
            flex-flow: column nowrap;
            position: relative;
        }

        .contact-img {
            width: 20vw;
            height: 30vw;
            background-position: center;
            background-size: cover;
            border-radius: 2vw;

            @media screen and (max-width: 768px) {
                margin: auto;
                width: 80vw;
                height: 120vw;
            }
        }

        .contact-text {
            width: 30vw;
            color: var(--sh-white);
            padding: 2vw 0 0 0;

            @media screen and (max-width: 768px) {
                width: 80vw;
                display: block;
                margin: auto;
            }

            p:nth-of-type(1) {
                font-size: 1.2vw;

                @media screen and (max-width: 768px) {
                    font-size: 3vw;
                }
            }

            p:nth-of-type(2) {
                font-size: 2vw;
                padding: 3vw 0 0 0;

                @media screen and (max-width: 768px) {
                    font-size: 5vw;
                }
            }
        }
    }
</style>
