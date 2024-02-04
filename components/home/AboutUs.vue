<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { gsap } from 'gsap'

const { t } = useI18n()

const upperRef = ref(null)
const upperOneRef = ref(null)
const upperTwoRef = ref(null)
const teamRef = ref(null)

const translationKeys = ['ourClientsHome', 'weMake', 'gathering']
const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 })

const aboutUsContent = computed(() => {
  return translationKeys.map((key, index) => ({
    id: index,
    text: t(key),
  }))
})

function handleIntersection(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      playAnimations()
      observer.unobserve(entry.target)
    }
  })
}

function playAnimations() {
  const tl = gsap.timeline()

  tl.from(upperRef.value, { opacity: 0, duration: 1 })
  tl.from(upperOneRef.value, { opacity: 0, y: -50, duration: 1 }, '-=0.5')
  tl.from(upperTwoRef.value, { opacity: 0, x: -50, duration: 1 }, '-=0.5')
  tl.from(teamRef.value, { opacity: 0, y: 20, duration: 1 }, '-=0.5')
}

onMounted(() => {
  observer.observe(upperRef.value)
})
</script>

<template>
  <div
    id="about"
    class="about-container"
  >
    <div
      ref="upperRef"
      class="about-upper"
    >
      <div
        ref="upperOneRef"
        class="upper-one"
      >
        <h2>
          {{ $t('weEmpower') }}
          <span>{{ $t('weEmpowerSpan') }}</span>
        </h2>
      </div>

      <div
        ref="upperTwoRef"
        class="upper-two"
      >
        <p>
          <span>{{ $t('weDeliverSpanOne') }}</span>

          <span>{{ $t('weDeliverSpanTwo') }}</span>
        </p>

        <p>{{ $t('engagingUser') }}</p>
      </div>
    </div>

    <div class="about-lower">
      <div
        v-for="content in aboutUsContent"
        :key="content.id"
        class="lower-content"
      >
        <p>{{ content.text }}</p>
      </div>
    </div>

    <div
      ref="teamRef"
      class="about-team"
    >
      <p>
        {{ $t('ourTeamOne') }}
        <br>
        {{ $t('ourTeamTwo') }}
        <br>
        {{ $t('ourTeamThree') }}
        <span class="gradient-text">
          {{ $t('ourTeamSpanOne') }}
          <br>

          <span class="last-line">
            {{ $t('ourTeamSpanTwo') }}
          </span>
        </span>
      </p>
    </div>
  </div>
</template>

<style lang="scss">
    .about-container {
        width: 100vw;
        height: 100vw;
        background: var(--sh-pinkish);
        border-radius: 3vw 3vw 0 0;
        position: relative;
        z-index: -1;
        margin-top: -5vw;
        display: flex;
        align-items: center;
        flex-flow: column nowrap;
        color: var(--sh-black);
        padding: 15vw 0 0 0;

        @media screen and (max-width: 768px) {
            padding: 15vw 0 0 8vw;
            align-items: start;
            height: 180vw;
        }

        .about-upper {
            width: 65vw;
            padding: 5vw 0;
            display: flex;
            justify-content: center;
            border-bottom: 0.1vw solid var(--sh-pink);
            gap: 5vw;

            @media screen and (max-width: 768px) {
                flex-flow: column nowrap;
            }

            .upper-one {
                line-height: 4vw;

                @media screen and (max-width: 768px) {
                    line-height: 6vw;
                }

                h2 {
                    font-size: 3.5vw;

                    @media screen and (max-width: 768px) {
                        font-size: 7vw;
                    }

                    span {
                        font-weight: 200;
                        font-style: italic;
                    }
                }
            }

            .upper-two {
                line-height: 2vw;

                p:nth-of-type(1) {
                    font-size: 1vw;
                    margin-bottom: 2vw;

                    @media screen and (max-width: 768px) {
                        font-size: 2vw;
                        margin-bottom: 5vw;
                    }

                    span {
                        display: inline-block;

                        &:nth-of-type(1) {
                            margin-right: 9vw;
                        }
                    }
                }

                p:nth-of-type(2) {
                    font-size: 2vw;

                    @media screen and (max-width: 768px) {
                        font-size: 4vw;
                        line-height: 4vw;
                    }
                }
            }
        }

        .about-lower {
            width: 65vw;
            padding: 5vw 0;
            display: flex;
            justify-content: space-between;

            @media screen and (max-width: 768px) {
                width: 90vw;
                flex-flow: column nowrap;
                padding: 0 3vw 0 0;
            }

            .lower-content {
                width: 17.5vw;
                height: auto;

                @media screen and (max-width: 768px) {
                    width: 100%;
                }

                p {
                    font-size: 1.5vw;

                    @media screen and (max-width: 768px) {
                        font-size: 2.5vw;
                        padding: 2vw 0;
                    }
                }
            }
        }

        .about-team {
            width: 65vw;
            padding: 5vw 0;
            display: flex;
            justify-content: center;

            p {
                font-size: 1.8vw;

                @media screen and (max-width: 768px) {
                    width: 100vw;
                    font-size: 3vw;
                }

                .gradient-text {
                    background: linear-gradient(90deg, rgba(119,0,112,1) 0%, rgba(9,9,121,1) 37%, rgba(0,212,255,1) 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;

                    .last-line {
                        display: inline-block;
                        padding-left: 12vw;

                        @media screen and (max-width: 768px) {
                            padding-left: 10vw;
                        }
                    }
                }
            }
        }
    }
</style>
