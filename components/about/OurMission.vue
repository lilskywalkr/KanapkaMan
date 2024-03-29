<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'

defineProps<{
  imgArray: string[]
}>()

const weDoingRef = ref(null)
const ourMissionRef = ref(null)

const animationsPlayed = {
  weDoing: false,
  ourMission: false,
}

onMounted(() => {
  const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 })
  observer.observe(weDoingRef.value)
  observer.observe(ourMissionRef.value)
})

function handleIntersection(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting)
      playAnimations(entry.target)
  })
}

function playAnimations(target) {
  const tl = gsap.timeline()

  if (target === weDoingRef.value && !animationsPlayed.weDoing) {
    // Animation for we-doing section
    tl.from(weDoingRef.value, { opacity: 0, y: 50, duration: 1 })
    animationsPlayed.weDoing = true
  }
  else if (target === ourMissionRef.value && !animationsPlayed.ourMission) {
    // Animation for our-mission section
    tl.from(ourMissionRef.value, { opacity: 0, y: 50, duration: 1 }, '-=0.5')
    animationsPlayed.ourMission = true
  }
}
</script>

<template>
  <div class="we-doing-mission-container">
    <div
      ref="weDoingRef"
      class="we-doing-section"
    >
      <div class="we-doing">
        <h2>{{ $t('weDoHeader') }}</h2>

        <img
          :src="`${useRequestURL().origin}//publuc/light-bulb_white.svg`"
          alt="light bulb"
          class="light-bulb"
        >

        <p class="we-doing-content">
          {{ $t('weDoContent') }}
        </p>
      </div>

      <div
        :style="{'backgroundImage': `url(${imgArray[1]})`}"
        class="we-doing-img"
      />
    </div>

    <div
      ref="ourMissionRef"
      class="our-mission-section"
    >
      <div class="our-mission">
        <h2>{{ $t('ourMissionHeader') }}</h2>

        <img
          :src="`${useRequestURL().origin}//publuc/compass_white.svg`"
          alt="compass"
          class="compass"
        >

        <p class="our-mission-conent">
          {{ $t('ourMissionContent') }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
    .we-doing-mission-container {
        width: 90vw;
        height: auto;
        margin: auto;
        // border: 1px solid var(--sh-white);
        padding: 5vw 0 10vw 0;

        @media screen and (max-width: 768px) {
            width: 100vw;
            padding: 10vw 0;
        }

        .we-doing-section {
            display: flex;
            justify-content: space-around;

            .we-doing{
                position: relative;
                transform: translate(0, 10vw);

                @media screen and (max-width: 768px) {
                    padding-left: 6vw;
                }

                h2 {
                    background: linear-gradient(70deg,#a166ed,#5777ff);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    font-weight: 500;
                    line-height: 6vw;
                    font-size: 5vw;
                    width: 55vw;

                    @media screen and (max-width: 768px) {
                        font-size: 7vw;
                        width: 50vw;
                        line-height: 7vw;
                    }
                }

                .light-bulb {
                    width: 5vw;
                    position: relative;
                    position: relative;
                    transform: translate(16vw, -4vw);

                    @media screen and (max-width: 768px) {
                        width: 10vw;
                        transform: translate(22vw, -4vw);
                    }
                }

                .we-doing-content {
                    display: block;
                    position: relative;
                    transform: translate(20vw, 0vw);
                    width: 50vw;
                    color: var(--sh-white);
                    font-size: 1.5vw;

                    @media screen and (max-width: 768px) {
                        font-size: 2.5vw;
                        width: 70vw;
                    }
                }
            }

            .we-doing-img {
                width: 15vw;
                height: 15vw;
                background: white;
                border-radius: 10vw;
                position: relative;
                transform: translate(-15vw, 0);
                background-size: cover;
                background-position: center;

                @media screen and (max-width: 768px) {
                    transform: translate(-15vw, -5vw);
                }
            }
        }

        .our-mission-section {
            display: flex;
            justify-content: space-around;

            .our-mission {
                margin-top: 15vw;
                margin-left: 45vw;

                h2 {
                    background: linear-gradient(70deg,#a166ed,#5777ff);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    font-weight: 500;
                    line-height: 6vw;
                    font-size: 5vw;

                    @media screen and (max-width: 768px) {
                        font-size: 7vw;
                        line-height: 7vw;
                    }
                }

                .compass {
                    width: 5vw;
                    transform: translate(-6vw, -6vw);

                    @media screen and (max-width: 768px) {
                        width: 8vw;
                        transform: translate(-9vw, -8vw);
                    }
                }

                .our-mission-conent {
                    width: 50vw;
                    color: var(--sh-white);
                    font-size: 1.5vw;
                    position: relative;
                    transform: translate(-25vw, 0);

                    @media screen and (max-width: 768px) {
                        font-size: 2.5vw;
                        width: 70vw;
                    }
                }
            }
        }
    }
</style>
