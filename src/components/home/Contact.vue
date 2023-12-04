<script setup>
    import {ref, onMounted} from 'vue';
    import { getImagesFromUnsplush } from '../modules/getImages';

    const imgArray = ref([]);

    onMounted(async () => {
        await getImagesFromUnsplush(1, imgArray.value);
    });
</script>

<template>
    <div class="contact-container" id="contact">
        <div class="contact-img" v-bind:style="{backgroundImage: `url(${imgArray[0]})`}"></div>
        <div class="contact-text">
            <p>UX/UI</p>
            <p v-html="$t('weveBeen')"></p>
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
        transform: translate(-10vw, -15vw);
        display: flex;
        justify-content: center;
        gap: 10vw;
        padding: 2vw 0 0 0;

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