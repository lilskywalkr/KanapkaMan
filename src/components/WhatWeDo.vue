<script setup>
    import { ref } from 'vue';
    import { useI18n } from 'vue-i18n';

    const { t } = useI18n(); 

    // content for "we-do" section
    const weDoing = ref([
        {id: 0, name: t('doingWebName'), icon: "../src/assets/web-development.svg", desc: t('doingWebDesc')}, 
        {id: 1, name: t('doingMobName'), icon: "../src/assets/app-development.svg", desc: t('doingMobDesc')}, 
        {id: 2, name: t('doingOutName'), icon: "../src/assets/outsourcing.svg", desc: t('doingOutDesc')},
        {id: 3, name: t('doingDesignName'), icon: "../src/assets/product-design.svg",  desc: t('doingDesignDesc')},
        {id: 4, name: t('doingHardSoftName'), icon: "../src/assets/hardware.svg", desc: t('doingHardSoftDesc')}
    ])
</script>

<template>
    <section class="we-do">
        <div class="doing-box" v-for="doing in weDoing" v-bind:key="doing.id">
            <div class="doing-box-header">
                <img v-bind:src="`${doing.icon}`" alt="">
                <h1>{{ doing.name }}</h1>
            </div>
            <p class="doing-desc">{{ doing.desc }}</p>
            <div class="button">
                <p>{{ $t('seeMore') }}</p>
                <div class="button-bg"></div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
    .we-do {
        width: 90vw;
        height: auto;
        padding: 4vw 0;
        background: var(--sh-blue);
        margin: auto;
        border-radius: 4vw;
        position: relative;
        transform: translate(0, -4vw);

        display: flex;
        justify-content: center;
        flex-flow: row wrap;
        gap: 1vw;

        .doing-box {
           width: 29vw;
           height: 20vw;
           padding: 0vw 3vw 0 3vw;
           display: flex;
           align-content: center;
           justify-content: center;
           flex-flow: column wrap;
           color: var(--sh-white);

           @media screen and (max-width: 768px) {
                width: 80vw;
                height: 40vw;
           }

           &-header {
                display: flex;
                align-items: center;
                gap: 2vw;

                h1 {
                    font-size: 1.5vw;

                    @media screen and (max-width: 768px) {
                        font-size: 4vw;
                    }
                }

                img {
                    width: 4vw;

                    @media screen and (max-width: 768px) {
                        width: 10vw;
                    }
                }
           }

           .doing-desc {
                font-size: 1vw;
                margin-top: 2vw;

                @media screen and (max-width: 768px) {
                    font-size: 3vw;
                }
           }

           .button {
                width: 12vw;
                height: 4vw;
                border-radius: 1vw;
                background: var(--sh-black);
                display: grid;
                align-items: center;
                justify-items: center;
                cursor: pointer;
                overflow: hidden;
                position: relative;
                margin: 2vw auto 0 auto;

                @media screen and (max-width: 768px) {
                    width: 35vw;
                    height: 8vw;
                    border-radius: 2vw;
                }

                p {
                    font-size: 1.2vw;
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
                    transform: translate(0, 150%);

                    @media screen {
                        width: 12vw;
                        height: 12vw;
                    }
                }

                &:hover {
                    .button-bg {
                        transform: translate(0, 0%);
                        width: 20vw;
                        height: 20vw;

                        @media screen and (max-width: 768px) {
                            width: 45vw;
                            height: 35vw;

                        }
                    }

                    p {
                        color: var(--sh-blue);
                    }
                }
            }
        }
    }
</style>