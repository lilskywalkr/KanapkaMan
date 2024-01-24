<script setup lang="ts">
// Importing custom function that fetches images from unsplush api
import { getImagesFromUnsplush } from '../modules/getImages.js'

// random image url
const imgArray = ref([])

onMounted(async () => {
  await getImagesFromUnsplush(2, imgArray.value)
})
</script>

<template>
  <div
    id="hero"
    class="hero-container"
  >
    <div id="hero-text-content-1">
      <p>{{ $t('welcomeTo') }}</p>

      <h1>
        KanapkaMan<br>

        Software <span>House</span>
      </h1>
    </div>

    <div id="hero-text-content-2">
      <div
        class="image-rect"
        :style="{'backgroundImage': `url(${imgArray[0]})`}"
      >
        <div class="play-button" />
      </div>
    </div>

    <div id="hero-text-content-3">
      <p>{{ $t('placeWhere') }}</p>
    </div>

    <div id="hero-text-content-4">
      <h1>{{ $t('ofDigitalAesthetics') }}</h1>

      <div class="bottom-text">
        <p>{{ $t('weProduce') }}</p>

        <p>{{ $t('digitalAndBrandDesign') }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
    .hero-container {
        width: 100vw;
        color: var(--sh-white);
        display: grid;
        grid-template-rows: 25vw 25vw;
        grid-template-columns: 1fr 1fr;
        position: relative;

        @media screen and (max-width: 768px) {
            grid-template-rows: 70vw 30vw;
        }

        #hero-text-content {
            &-1 {
                padding: 4vw 0 0 5vw;

                h1 {
                    font-size: 5vw;
                    line-height: 5vw;

                    @media screen and (max-width: 768px) {
                        font-size: 7vw;
                        line-height: 8vw;
                        padding: 3vw 0 0 0vw;
                    }

                    span {
                        font-weight: 200;
                        color: var(--sh-pink);
                    }
                }

                p {
                    font-size: 1.2vw;

                    @media screen and (max-width: 768px) {
                        font-size: 2.5vw;
                    }
                }
            }

            &-2 {
                display: flex;
                justify-content: flex-end;
                padding: 4vw 5vw 0 0;

                @media screen and (max-width: 768px) {
                    padding-right: 12vw;
                }

                .image-rect {
                    width: 10vw;
                    height: 15vw;
                    background-position: center;
                    background-size: 250%;
                    border-radius: 1vw;
                    transition: all .6s cubic-bezier(.23,1,.32,1);
                    position: relative;
                    cursor: pointer;

                    @media screen and (max-width: 768px) {
                        width: 25vw;
                        height: 40vw;
                    }

                    &:hover {
                        background-size: 280%;
                    }

                    .play-button {
                        width: 3vw;
                        height: 3vw;
                        border-radius: 2vw;
                        background: var(--sh-blue);
                        position: absolute;
                        right: 0;
                        z-index: 0;
                        transform: translate(1vw, -1.5vw);

                        @media screen and (max-width: 768px) {
                            width: 6vw;
                            height: 6vw;
                            border-radius: 6vw;
                            transform: translate(2vw, -2.5vw);
                        }
                    }
                }
            }

            &-3 {
                width: 30vw;
                padding: 0vw 0 0 5vw;
                display: flex;
                flex-flow: column nowrap;
                justify-content: space-between;

                p {
                    font-size: 1.2vw;

                    @media screen and (max-width: 768px) {
                        font-size: 2.5vw;
                    }
                }

                .subscribe {
                    width: 40vw;
                    height: 6vw;
                    background: var(--sh-blackish);
                    border-radius: 1.5vw;
                    position: absolute;
                    left: 50%;
                    bottom: 1vw;
                    transform: translate(-50%, -1vw);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    z-index: 0;

                    @media screen and (max-width: 768px) {
                        width: 90vw;
                        height: 30vw;
                        border-radius: 4vw;
                        flex-flow: column nowrap;
                        bottom: -10vw;
                        transform: translate(-50%, 10vw);
                        padding: 4vw 0;
                    }

                    .image-circle {
                        width: 5vw;
                        height: 5vw;
                        border-radius: 3vw;
                        background: #fff;
                        margin-left: 0.7vw;
                        background-size: cover;
                        background-position: center;

                        @media screen and (max-width: 768px) {
                            width: 12vw;
                            height: 12vw;
                            border-radius: 12vw;
                            margin-left: -10vw;
                        }

                        p {
                            display: block;
                            font-size: 1.3vw;
                            transform: translate(5.5vw, 1.2vw);
                            line-height: 1.3vw;

                            @media screen and (max-width: 768px) {
                                font-size: 3vw;
                                line-height: 2.7vw;
                                transform: translate(13.5vw, 3vw);
                            }

                            span {
                                color: var(--sh-blue);
                            }
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
                        margin-right: 1.5vw;
                        cursor: pointer;
                        overflow: hidden;
                        position: relative;

                        @media screen and (max-width: 768px) {
                            width: 70vw;
                            height: 6vw;
                            border-radius: 2vw;
                        }

                        p {
                            font-size: 1.4vw;
                            position: relative;
                            z-index: 1;
                            transition: all 1s cubic-bezier(.23,1,.32,1);

                            @media screen and (max-width: 768px) {
                                font-size: 3vw;
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
                                transform: translate(0, 120%);
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
            }

            &-4 {
                display: flex;
                flex-flow: column nowrap;
                align-items: flex-end;
                padding: 0 5vw 0 0;

                @media screen and (max-width: 768px) {
                    padding: 0 5vw 0 0;
                }

                h1 {
                    font-size: 5vw;
                    line-height: 5vw;
                    display: block;
                    margin-top: -4vw;
                    text-align: right;
                    margin-right: 4vw;

                    @media screen and (max-width: 768px) {
                        font-size: 8vw;
                        line-height: 7vw;
                        margin-top: -10vw;
                    }

                    i {
                        font-weight: 200;
                    }
                }

                .bottom-text {
                    padding: 3vw 0 0 0;
                    display: flex;
                    text-align: left;
                    font-size: 1vw;

                    p {
                        width: 9vw;
                        font-size: 1.2vw;
                        display: block;
                        margin: 0 4.7vw 0 0;

                        @media screen and (max-width: 768px) {
                            font-size: 2vw;
                            margin: 0 3vw 0 0;
                        }
                    }
                }
            }
        }
    }
</style>
