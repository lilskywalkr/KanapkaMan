<script setup>
    import { ref } from 'vue';

    const menuText = ref([{id: 0, text: "Projects"}, {id: 1, text: "About us"}, {id: 2, text: "Contacts"}]);
</script>

<template>
    <menu>
        <div class="content">
            <div class="logo">
                <img src="../assets/kanapka_white.png" alt="thunderbolt logo">
            </div>
            <div class="links">
                <ul>
                    <li v-for="(menu) in menuText" v-bind:key="menu.id">
                        <a href="#">
                            <div class="text-1">
                                <span v-for="(char) in menu.text">{{ char.charCodeAt(0) === 32 ? "&nbsp;" : char }}</span>
                            </div>
                            <div class="text-2">
                                <span v-for="(char) in menu.text">{{ char.charCodeAt(0) === 32 ? "&nbsp;" : char  }}</span>
                            </div>
                        </a>
                    </li>
                </ul>
                <div class="burger-container">
                    <div class="burger"></div>
                </div>
            </div>
        </div>
    </menu>
</template>

<style scoped lang="scss">
    menu {
        width: 100vw;
        height: auto;
        display: flex;
        font-size: 1.8vw;
        padding: 2vw 0;
        .content {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .logo {
                margin: 0 0 0 5vw;
                img {
                    width: 6vw;
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
                    .burger {
                        width: 3vw;
                        height: 0.1vw;
                        background: var(--sh-white);
                        transition: all .6s cubic-bezier(.23,1,.32,1);
                        transform: rotate(180deg);

                        &::before, &::after {
                            content: '';
                            position: absolute;
                            display: block;
                            width: 3vw;
                            height: 0.1vw;
                            background: var(--sh-white);
                            transition: all .6s cubic-bezier(.23,1,.32,1);
                        }

                        &::before {
                            transform: translate(0, 1vw);
                        }

                        &::after {
                            transform: translate(0, -1vw);
                        }
                    }

                    &:hover {
                        .burger::after { width: 2vw; }
                        .burger::before { width: 1.5vw;}
                        .burger { width: 2.5vw; }
                    }
                }

                ul li {
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
                                    transition-delay: calc(1.5s / ($i * 10));
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
</style>