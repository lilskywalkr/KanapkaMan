<script setup>
    import {ref} from 'vue';
    import { useI18n } from 'vue-i18n';

    const { t } = useI18n(); 

    const footerContent = ref([{id: 0, text: t('startup')}, {id: 1, text: t('eCommerce')}, {id: 2, text: t('premium')}]);
</script>

<template>
    <div class="footer-container">
        <div class="footer-upper">
            <p>{{ $t('needSoftware') }}</p>
            <div class="button">
                <p>{{ $t('becomeClient') }}</p>
                <div class="button-bg"></div>
            </div>
        </div> 
        <div class="footer-lower">
            <div class="lower-conter" v-for="content in footerContent" v-bind:key="content.id">
                <div>
                    <span v-for="n in (content.id + 1)"></span>
                </div>
                <p>{{ content.text }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .footer-container {
        width: 100vw;
        height: 70vw;
        background: var(--sh-other-black);
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        padding: 30vw 0 0 0;

        @media screen and (max-width: 768px) {
            padding: 0;
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
                    width: 20vw;
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

        .footer-lower {
            display: flex;
            justify-content: space-between;
            width: 60vw;
            padding: 3vw 0;

            @media screen and (max-width: 768px) {
                width: 85vw;
                padding: 5vw 0;
                flex-flow: column nowrap;
            }

            .lower-conter {
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

                p {
                    font-size: 2vw;
                    color: var(--sh-white);

                    @media screen and (max-width: 768px) {
                        font-size: 3vw;
                    }
                }
            }
        }
    }
</style>