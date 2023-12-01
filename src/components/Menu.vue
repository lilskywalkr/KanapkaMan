<script setup>
    import OpenMenu from './modules/OpenMenu.vue';
    import { ref } from 'vue';

    const menuText = ref([
            {id: 0, text: "Projects", link: 'projects'}, 
            {id: 1, text: "About us", link: 'about'}, 
            {id: 2, text: "Team", link: 'team'},
            {id: 3, text: "Services", link: "services"}
        ]);
    const burger = ref(null);
    const openMenu = ref(false);

    function changeBurgerClass() {
        burger.value.classList.toggle('close');
        openMenu.value = !openMenu.value;
    }
</script>

<template>
    <menu>
        <div class="content">
            <div class="logo">
                <router-link v-bind:to="{name: 'home'}"><img src="../assets/kanapka_white.png" alt="thunderbolt logo"></router-link>
            </div>
            <div class="links">
                <ul>
                    <li v-for="(menu) in menuText" v-bind:key="menu.id">
                        <router-link v-bind:to="{name: menu.link}">
                            <div class="text-1">
                                <span v-for="(char) in menu.text">{{ char.charCodeAt(0) === 32 ? "&nbsp;" : char }}</span>
                            </div>
                            <div class="text-2">
                                <span v-for="(char) in menu.text">{{ char.charCodeAt(0) === 32 ? "&nbsp;" : char  }}</span>
                            </div>
                        </router-link>
                    </li>
                </ul>
                <div class="burger-container" @click="changeBurgerClass">
                    <div class="burger" ref="burger"></div>
                </div>
            </div>
        </div>
        <OpenMenu @change-burger-class="changeBurgerClass" v-if="openMenu" />
    </menu>
</template>

<style scoped lang="scss">
    menu {
        position: sticky;
        position: -webkit-sticky;
        top: 0vw;
        width: 100vw;
        height: auto;
        display: flex;
        font-size: 1.8vw;
        padding: 2vw 0;
        z-index: 1;
        .content {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .logo {
                margin: 0 0 0 5vw;
                position: relative;
                z-index: 2;

                @media screen and (max-width: 768px) {
                    margin: 0 0 0 5vw;
                }

                img { 
                    width: 6vw;
                    
                    @media screen and (max-width: 768px) {
                        width: 10vw;
                    }
                }
            }

            .links {
                display: flex;
                align-items: center;

                .burger-container {
                    cursor: pointer;
                    width: 3vw;
                    height: 3vw;
                    display: grid;
                    align-items: center;
                    justify-items: center;
                    margin-right: 5vw;
                    position: relative;
                    z-index: 2;

                    @media screen and (max-width: 768px) {
                        width: 5vw;
                        height: 5vw;
                    }

                    .burger {
                        width: 3vw;
                        height: 0.1vw;
                        background: var(--sh-white);
                        transition: all .6s cubic-bezier(.23,1,.32,1);
                        transform: rotate(180deg);

                        @media screen and (max-width: 768px) {
                            width: 5vw;
                            height: 0.3vw;
                        }

                        &::before, &::after {
                            content: '';
                            position: absolute;
                            display: block;
                            width: 3vw;
                            height: 0.1vw;
                            background: var(--sh-white);
                            transition: all .6s cubic-bezier(.23,1,.32,1);

                            @media screen and (max-width: 768px) {
                                width: 5vw;
                                height: 0.3vw;
                            }
                        }

                        &::before { 
                            transform: translate(0, 1vw); 

                            @media screen and (max-width: 768px) {
                                transform: translate(0, 1.5vw); 
                            }
                        }
                        &::after { 
                            transform: translate(0, -1vw); 

                            @media screen and (max-width: 768px) {
                                transform: translate(0, -1.5vw); 
                            }
                        }
                    }

                    .close {
                        transform: rotate(45deg);

                        &::after {
                            transform: translate(0, 0vw) rotate(-95deg);
                        }

                        &::before {
                            opacity: 0;
                        }
                    }

                    @media screen and (min-width: 769px) {
                        &:hover {
                            .burger::after { width: 2vw; }
                            .burger::before { width: 1.5vw;}
                            .burger { width: 2.5vw; }
                        }   
                    }
                }

                ul {
                    @media screen and (max-width: 768px) {
                        display: none;
                    }

                    li {
                        display: inline-block;
                        margin: 0 7vw 0 0;

                        a {
                            display: block;
                            height: 1.8vw;
                            line-height: 1.7vw;
                            position: relative;
                            font-weight: 500;
                            overflow-y: hidden;

                            .text-1, .text-2 {
                                transition: all .6s cubic-bezier(.23,1,.32,1);

                                span {
                                    transition: all .6s cubic-bezier(.23,1,.32,1);
                                    position: relative;
                                    display: inline-block;
                                }

                                @for $i from 1 through 8 {
                                    span:nth-of-type(#{$i}) {
                                        transition-delay: calc(0.2s * ($i / 10));
                                    }
                                }
                            }

                            .text-2 {
                                opacity: 0;
                                transform: rotateX(-90deg);
                                color: var(--sh-blue);
                            }

                            &:hover {
                                span { transform: translate(0, -1.8vw); }
                                .text-2 { 
                                    transform: rotateX(0deg); 
                                    opacity: 1;
                                }

                                .text-1 {
                                    transform: rotateX(90deg);
                                    opacity: 0;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>