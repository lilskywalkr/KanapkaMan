<script setup lang="ts">
defineProps<{
  imgArray: any
  names: any
  desc: any
}>()
</script>

<template>
  <div class="people-container">
    <div
      v-for="(img, index) in imgArray"
      :key="index"
      class="person-box"
    >
      <div
        class="person-img"
        :style="{'backgroundImage': `url(${img})`}"
      />

      <div class="person-desc">
        <h1>{{ names[index] }}</h1>

        <p>
          Co-Founder,<br>

          Key Account<br>Manager
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
    .people-container {
        width: 100vw;
        height: auto;
        padding: 10vw 5vw;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: row wrap;
        gap: 5vw 10vw;

        @media screen and (max-width: 768px) {
            // padding: 10vw 5vw;
        }

        .person-box {
            width: auto;
            height: auto;
            display: flex;
            flex-flow: column;

            .person-img {
                width: 10vw;
                height: 10vw;
                border-radius: 10vw;
                background-position: center;
                background-size: contain;
                margin: auto;

                background: white;

                @media screen and (max-width: 768px) {
                    width: 25vw;
                    height: 25vw;
                    border-radius: 20vw;
                }
            }

            .person-desc {
                color: var(--sh-white);
                text-align: center;
                padding: 1vw 0 0 0;

                h1 {
                    font-size: 1.5vw;

                    @media screen and (max-width: 768px) {
                        font-size: 3.5vw;
                    }
                }

                p {
                    font-size: 1vw;

                    @media screen and (max-width: 768px) {
                        font-size: 2.5vw;
                    }
                }
            }
        }
    }
</style>
