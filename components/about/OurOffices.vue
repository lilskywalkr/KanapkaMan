<script setup lang="ts">
// getting images through propps
defineProps<{
  imgArray: any[]
}>()

const { t } = useI18n()
</script>

<template>
  <div class="offices-container">
    <div class="office-1">
      <div
        :style="{'backgroundImage': `url(${imgArray[2]})`}"
        class="office-image-box"
      />

      <div class="content">
        <h2>{{ $t('ourOfficesOneHeader') }}</h2>

        <p>{{ $t('ourOfficesOneContent') }}</p>
      </div>
    </div>

    <div class="office-2">
      <div
        :style="{'backgroundImage': `url(${imgArray[3]})`}"
        class="office-image-box"
      />

      <div class="content">
        <h2>{{ $t('ourOfficesTwoHeader') }}</h2>

        <p>{{ t('ourOfficesTwoContent') }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
    .offices-container {
        width: 100vw;
        height: auto;
        background: var(--sh-pinkish);
        padding: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        border-radius: 6vw;

        .office-1 {
            width: 70vw;
            display: flex;
            justify-content: space-between;

            @media screen and (max-width: 768px) {
                width: 100vw;
                flex-flow: column nowrap;
                align-items: center;
            }

            .office-image-box {
                width: 30vw;
                height: 30vw;
                background-position: center;
                background-size: cover;
                border-radius: 15vw;
                position: relative;
                transform: translate(-5vw, -5vw);

                @media screen and (max-width: 768px) {
                    width: 60vw;
                    height: 60vw;
                    border-radius: 35vw;
                    transform: translate(0vw, -7vw);
                }
            }

            .content {
                width: 35vw;
                padding: 5vw 0 0 0;

                @media screen and (max-width: 768px) {
                    width: 90vw;
                }

                h2 {
                    font-size: 3vw;
                    color: var(--sh-blackish);

                    @media screen and (max-width: 768px) {
                        font-size: 10vw;
                    }
                }

                p {
                    font-size: 1.5vw;
                    color: var(--sh-blackish);

                    @media screen and (max-width: 768px) {
                        font-size: 5vw;
                    }
                }
            }
        }

        .office-2 {
            width: 70vw;
            height: auto;
            padding: 3vw 0 10vw 0;
            display: flex;
            flex-flow: column nowrap;
            align-items: end;
            gap: 3vw;

            @media screen and (max-width: 768px) {
                width: 100vw;
                flex-flow: column nowrap;
                align-items: center;
                justify-content: center;
                gap: 5vw;
            }

            .office-image-box {
                width: 40vw;
                height: 40vw;
                border-radius: 1vw;

                @media screen and (max-width: 768px) {
                    width: 80vw;
                    height: 80vw;
                    border-radius: 3vw;
                }

            }

            .content {
                width: 30vw;
                position: relative;
                transform: translate(-35vw, 2vw);

                @media screen and (max-width: 768px) {
                    width: 90vw;
                    transform: translate(0vw, 2vw);
                }

                h2 {
                    font-size: 3vw;
                    color: var(--sh-blackish);

                    @media screen and (max-width: 768px) {
                        font-size: 10vw;
                    }
                }

                p {
                    font-size: 1.5vw;
                    color: var(--sh-blackish);

                    @media screen and (max-width: 768px) {
                        font-size: 5vw;
                    }
                }
            }
        }
    }
</style>
