<script setup lang="ts">
defineProps<{
  imgArray: any
  header: any
  content: any
}>()
</script>

<template>
  <section class="hero-container">
    <div class="desc-box">
      <h1>{{ header }}</h1>

      <p>{{ content }}</p>
    </div>

    <div class="image-box">
      <img
        :src="`${imgArray[0]}`"
        alt="kanapka man hero"
      >
    </div>
  </section>
</template>

<style scoped lang="scss">
    .hero-container {
        width: 100vw;
        height: 50vw;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        border-radius: 4vw 4vw 0 0;
        overflow: hidden;

        @media screen and (max-width: 768px) {
            min-height: 150vw;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr;
        }

        .desc-box {
            padding-left: 10vw;
            padding-top: 10vw;
            background: var(--sh-white);

            h1 {
                font-size: 4vw;
                line-height: 4vw;
                width: 35vw;

                @media screen and (max-width: 768px) {
                    font-size: 10vw;
                    line-height: 10vw;
                    width: 85vw;
                }
            }

            p {
                font-size: 1vw;
                padding: 3vw 10vw 0 0;

                @media screen and (max-width: 768px) {
                    font-size: 2.5vw;
                }
            }
        }

        .image-box {
            overflow: hidden;

            img {
                width: 100%;
            }
        }
    }
</style>
