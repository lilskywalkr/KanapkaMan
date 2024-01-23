<script setup lang="ts">
const { t } = useI18n()

// content for "starting-from" section
const startFrom = ref([
  { id: 0, name: t('startFromQueriesName'), icon: '_nuxt/assets/bidness_qna_white.svg', desc: t('startFromQueriesDesc') },
  { id: 1, name: t('startFromWorkshopName'), icon: '_nuxt/assets/meeting_white.svg', desc: t('startFromWorkshopDesc') },
  { id: 2, name: t('startFromSoftName'), icon: '_nuxt/assets/software_dev_white.svg', desc: t('startFromSoftDesc') },
  { id: 3, name: t('startFromSupportName'), icon: '_nuxt/assets/support_white.svg', desc: t('startFromSupportDesc') },
])
</script>

<template>
  <section class="starting-from">
    <h1>{{ $t('startFromWhere') }}</h1>

    <div class="boxes-container">
      <div
        v-for="start in startFrom"
        :key="start.id"
        class="boxes"
      >
        <img
          :src="`${start.icon}`"
          alt=""
        >

        <h3>{{ start.name }}</h3>

        <p>{{ start.desc }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
    .starting-from {
        width: 100vw;
        height: auto;
        background: var(--sh-black);
        position: relative;
        transform: translate(0, -10vw);

        h1 {
            font-size: 3vw;
            color: var(--sh-white);
            text-align: center;
            padding: 5vw 0 5vw 0;

            @media screen and (max-width: 768px) {
                font-size: 5vw;
            }
        }

        .boxes-container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: row wrap;
            gap: 1vw;

            .boxes {
                width: 40vw;
                height: 20vw;
                display: flex;
                align-items: center;
                flex-flow: column nowrap;
                gap: 1vw;
                padding: 1.5vw 2vw 0 2vw;

                @media screen and (max-width: 768px) {
                    width: 80vw;
                    height: 30vw;
                }

                img {
                    width: 3vw;

                    @media screen and (max-width: 768px) {
                        width: 10vw;
                    }
                }

                h3 {
                    color: var(--sh-white);
                    font-size: 2vw;
                    text-align: center;

                    @media screen and (max-width: 768px) {
                        font-size: 3vw;
                    }
                }

                p {
                    color: var(--sh-white);
                    text-align: center;
                    font-size: 1vw;

                    @media screen and (max-width: 768px) {
                        font-size: 1.6vw;
                    }
                }
            }
        }
    }
</style>
