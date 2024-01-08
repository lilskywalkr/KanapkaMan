<script setup>
    import {ref} from 'vue';
    import { useI18n } from 'vue-i18n';

    const { t } = useI18n(); 

    const footerMiddleContent = ref([{id: 0, text: t('startup')}, {id: 1, text: t('eCommerce')}, {id: 2, text: t('premium')}]);
    const footerLowerContent = ref([{id: 0, text: 'hello@kanapka.digital'}, {id: 1, text: '+48 001 002 003'}])
    
    const footerLowestContent = ref([
        {id: 0, text: t('cookies'), link: 'cookies'}, 
        {id: 1, text: t('privacy'), link: 'privacy'}
    ]);

    // Icons for socials
    const icons = ref([
        {icon: 'facebook-f', link: 'https://www.facebook.com/kanapkaman/'}, 
        {icon: 'instagram', link: 'https://www.instagram.com/kanapkaman'},
        {icon: 'linkedin', link: 'https://pl.linkedin.com/showcase/kanapkaman/'}
    ]);
</script>

<template>
    <div class="footer-container">
        <div class="footer-upper">
            <p>{{ $t('needSoftware') }}</p>

            <router-link v-bind:to="{name: 'services'}" class="button">
                <p>{{ $t('becomeClient') }}</p>
                <div class="button-bg"></div>
            </router-link>
        </div> 

        <div class="footer-content">
            <div class="conter" v-for="content in footerMiddleContent" v-bind:key="content.id">
                <div>
                    <span v-for="n in (content.id + 1)"></span>
                </div>
                <p>{{ content.text }}</p>
            </div>
        </div>

        <div class="footer-content lower-content">
            <div class="conter" v-for="content in footerLowerContent" v-bind:key="content.id">
                <div>
                    <p>{{ content.text }}</p>
                </div>
            </div>
        </div>

        <div class="footer-content lower-content">
            <div class="conter" v-for="content in footerLowestContent" v-bind:key="content.id">
                <div>
                    <router-link v-bind:to="{name: content.link}" class="footer-links">
                        <p>{{ content.text }}</p>
                    </router-link>
                </div>
            </div>
        </div>
        
        <div class="socials">
            <ul>
                <li v-for="(icon, index) in icons" v-bind:key="index">
                    <a :href="icon.link" target="_blank"><fa class="icon" v-bind:icon="['fab', `${icon.icon}`]"/></a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .footer-container {
        width: 100vw;
        height: auto;
        background: var(--sh-other-black);
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        padding: 40vw 0 5vw 0;

        @media screen and (max-width: 768px) {
            padding: 15vw 0 0 0;
            height: auto;
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
                    width: 25vw;
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

        .footer-content {
            display: flex;
            justify-content: space-between;
            width: 60vw;
            padding: 2vw 0;

            @media screen and (max-width: 768px) {
                width: 85vw;
                padding: 5vw 0;
                flex-flow: column nowrap;
            }

            &.lower-content {
                justify-content: flex-start;
                gap: 5vw;

                @media screen and (max-width: 768px) {
                    gap: 0vw;
                }
            }

            .conter {
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

                .footer-links {
                    display: block;
                    border-bottom: 0.2vw solid var(--sh-pink);

                    p {
                        transition: all .6s cubic-bezier(.23,1,.32,1);
                        color: var(--sh-white);
                        
                        &:hover {
                            color: var(--sh-pink)
                        }
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

        .socials {
            width: 60vw;
            display: flex;
            justify-content: flex-start;
            padding: 2vw 0 0 0;
            
            @media screen and (max-width: 768px) {
                width: 85vw;
                padding: 0vw 0 8vw 0;
                flex-flow: column nowrap;
            }

            ul {
                display: flex;
                gap: 2vw;

                @media screen and (max-width: 768px) {
                    gap: 4vw;
                }
                
                a {
                    color: var(--sh-pink);

                    .icon {
                        font-size: 2vw;
                        transition: all .6s cubic-bezier(.23,1,.32,1);

                        &:hover {
                            transform: scale(1.5);
                        }

                        @media screen and (max-width: 768px) {
                            font-size: 4vw;
                        }
                    }
                }
                
            }
        }
    }
</style>