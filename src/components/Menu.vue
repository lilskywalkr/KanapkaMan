<script setup>
    import { ref } from 'vue';

    const menuText = ref([{id: 0, text: "About us"}, {id: 1, text: "Project"}, {id: 2, text: "Contacts"}]);
</script>

<template>
    <menu>
        <div class="content">
            <div class="logo">
                <img src="../assets/bolt_white.png" alt="thunderbolt logo">
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
            </div>
        </div>
    </menu>
</template>

<style scoped lang="scss">
    menu {
        width: 100vw;
        height: auto;
        background: var(--sh-black);
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
                margin: 0 0 0 1vw;
                img {
                    width: 6vw;
                }
            }

            .links {
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