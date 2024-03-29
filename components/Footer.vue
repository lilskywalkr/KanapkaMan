<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

import { gsap } from 'gsap'
import FooterCanvas from './modules/FooterCanvas.vue'

const { t } = useI18n()
const footerRef = ref(null)
const observer = ref(null)
const footerUpperRef = ref(null)
const footerMiddleContentRef = ref(null)
const footerLowerContentRef = ref(null)
const footerLowestContentRef = ref(null)
const socialsRef = ref(null)

const footerMiddleContent = computed(() => {
  return ['startup', 'eCommerce', 'premium'].map((key, index) => {
    return { id: index, text: t(key) }
  })
})

const footerLowerContent = ref([
  { id: 0, text: 'hello@kanapka.digital' },
  { id: 1, text: '+48 001 002 003' },
])

const footerLowestContent = computed(() => {
  return ['cookies', 'privacy'].map((key, index) => {
    return { id: index, text: t(key), link: key }
  })
})

// Icons for socials
const icons = ref([
  { icon: 'bxl:facebook', link: 'https://www.facebook.com/kanapkaman/' },
  { icon: 'bxl:instagram', link: 'https://www.instagram.com/kanapkaman' },
  { icon: 'bxl:linkedin', link: 'https://pl.linkedin.com/showcase/kanapkaman/' },
])

const route = useRoute()

function handleIntersection(entries: any) {
  entries.forEach((entry: any) => {
    if (entry.isIntersecting) {
      // Play GSAP animations when the footer is visible
      playAnimations()
      // Stop observing once the animations are played
      observer.value.unobserve(entry.target)
    }
  })
}

function playAnimations() {
  // GSAP Animations
  const tl = gsap.timeline()

  tl.fromTo(
    footerUpperRef.value,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
  )
    .fromTo(
      footerMiddleContentRef.value,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
      '-=0.5',
    )
    .fromTo(
      footerLowerContentRef.value,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
      '-=0.5',
    )
    .fromTo(
      footerLowestContentRef.value,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
      '-=0.5',
    )
    .fromTo(
      socialsRef.value,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
      '-=0.5',
    )
}

onMounted(() => {
  // Intersection Observer setup
  observer.value = new IntersectionObserver(handleIntersection, { threshold: 0.5 })
  observer.value.observe(footerRef.value)
})
</script>

<template>
  <div
    ref="footerRef"
    class="footer-container"
  >
    <FooterCanvas v-if="route.fullPath !== '/'" />

    <div
      ref="footerUpperRef"
      class="footer-upper"
    >
      <p>{{ $t('needSoftware') }}</p>

      <NuxtLink
        to="services"
        class="button"
      >
        <p>{{ $t('becomeClient') }}</p>

        <div class="button-bg" />
      </NuxtLink>
    </div>

    <div
      ref="footerMiddleContentRef"
      class="footer-content"
    >
      <div
        v-for="content in footerMiddleContent"
        :key="content.id"
        class="conter"
      >
        <div>
          <span
            v-for="n in (content.id + 1)"
            :key="n"
          />
        </div>

        <p>{{ content.text }}</p>
      </div>
    </div>

    <div
      ref="footerLowerContentRef"
      class="footer-content lower-content"
    >
      <div
        v-for="content in footerLowerContent"
        :key="content.id"
        class="conter"
      >
        <div>
          <p>{{ content.text }}</p>
        </div>
      </div>
    </div>

    <div
      ref="footerLowestContentRef"
      class="footer-content lower-content"
    >
      <div
        v-for="content in footerLowestContent"
        :key="content.id"
        class="conter"
      >
        <div>
          <NuxtLink
            :to="{'name': content.link}"
            class="footer-links"
          >
            <p>{{ content.text }}</p>
          </NuxtLink>
        </div>
      </div>
    </div>

    <div
      ref="socialsRef"
      class="socials"
    >
      <ul>
        <li
          v-for="(icon, index) in icons"
          :key="index"
        >
          <NuxtLink
            :to="icon.link"
            rel="noreferrer noopener"
            target="_blank"
          >
            <Icon :name="`${icon.icon}`" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
    .footer-container {
        width: 100vw;
        height: auto;
        background: var(--sh-other-black);
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        padding: 40vw 0 5vw 0;
        position: relative;
        z-index: 0;

        @media screen and (max-width: 768px) {
            padding: 15vw 0 0 0;
            height: auto;
        }

        .footer-upper {
            width: 60vw;
            padding: 2vw 0;
            display: flex;
            justify-content: space-between;
            border-bottom: 0.1vw solid var(--sh-blackish);

            @media screen and (max-width: 768px) {
                width: 85vw;
                border-bottom: 0.2vw solid var(--sh-blackish);
            }

            p {
                color: var(--sh-white);
                font-size: 3vw;

                @media screen and (max-width: 768px) {
                    font-size: 6vw;
                }
            }

            .button {
                width: 12vw;
                height: 4vw;
                border-radius: 1vw;
                background: var(--sh-blue);
                display: grid;
                align-items: center;
                justify-items: center;
                cursor: pointer;
                overflow: hidden;
                position: relative;
                z-index: 0;

                @media screen and (max-width: 768px) {
                    width: 25vw;
                    height: 7vw;
                }

                p {
                    font-size: 1.4vw;
                    position: relative;
                    z-index: 1;
                    transition: all 1s cubic-bezier(.23,1,.32,1);

                    @media screen and (max-width: 768px) {
                        font-size: 2.4vw;
                    }
                }

                &-bg {
                    position: absolute;
                    width: 5vw;
                    height: 5vw;
                    border-radius: 50vw;
                    background: var(--sh-white);
                    z-index: 0;
                    transition: all 1s cubic-bezier(.23,1,.32,1);
                    transform: translate(0, 100%);

                    @media screen and (max-width: 768px) {
                        transform: translate(0, 150%);
                    }
                }

                @media screen and (min-width: 769px) {
                    &:hover {
                        .button-bg {
                            transform: translate(0, 0%);
                            width: 20vw;
                            height: 20vw;
                        }

                        p {
                            color: var(--sh-blue);
                        }
                    }
                }
            }
        }

        .footer-content {
            display: flex;
            justify-content: space-between;
            width: 60vw;
            padding: 2vw 0;

            @media screen and (max-width: 768px) {
                width: 85vw;
                padding: 5vw 0;
                flex-flow: column nowrap;
            }

            &.lower-content {
                justify-content: flex-start;
                gap: 5vw;

                @media screen and (max-width: 768px) {
                    gap: 0vw;
                }
            }

            .conter {
                @media screen and (max-width: 768px) {
                    padding: 2vw 0;
                    display: flex;
                    justify-content: space-between;
                }

                span {
                    display: inline-block;
                    width: 1vw;
                    height: 1vw;
                    border-radius: 1vw;
                    background: var(--sh-pink);
                    margin: 0 1vw 1vw 0;

                    @media screen and (max-width: 768px) {
                        width: 2vw;
                        height: 2vw;
                        border-radius: 2vw;
                    }
                }

                .footer-links {
                    display: block;
                    border-bottom: 0.2vw solid var(--sh-pink);

                    p {
                        transition: all .6s cubic-bezier(.23,1,.32,1);
                        color: var(--sh-white);

                        &:hover {
                            color: var(--sh-pink)
                        }
                    }
                }

                p {
                    font-size: 2vw;
                    color: var(--sh-white);

                    @media screen and (max-width: 768px) {
                        font-size: 3vw;
                    }
                }
            }
        }

        .socials {
            width: 60vw;
            display: flex;
            justify-content: flex-start;
            padding: 2vw 0 0 0;

            @media screen and (max-width: 768px) {
                width: 85vw;
                padding: 0vw 0 8vw 0;
                flex-flow: column nowrap;
            }

            ul {
                display: flex;
                gap: 2vw;

                @media screen and (max-width: 768px) {
                    gap: 4vw;
                }

                a {
                    color: var(--sh-pink);

                    .icon {
                        font-size: 2vw;
                        transition: all .6s cubic-bezier(.23,1,.32,1);

                        &:hover {
                            transform: scale(1.5);
                        }

                        @media screen and (max-width: 768px) {
                            font-size: 4vw;
                        }
                    }
                }

            }
        }
    }
</style>
