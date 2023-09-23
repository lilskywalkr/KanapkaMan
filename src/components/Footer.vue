<script setup>
    import {ref} from 'vue';

    const footerContent = ref([{id: 0, text: 'Startup companies'}, {id: 1, text: 'E-commerce'}, {id: 2, text: 'Premium products'}]);
</script>

<template>
    <div class="footer-container">
        <div class="footer-upper">
            <p>Need a software?</p>
            <div class="button">
                <p>Become a client</p>
                <div class="button-bg"></div>
            </div>
        </div> 
        <div class="footer-lower">
            <div class="lower-conter" v-for="content in footerContent" v-bind:key="content.id">
                <span v-for="n in (content.id + 1)"></span>
                <p>{{ content.text }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .footer-container {
        width: 100vw;
        height: 70vw;
        background: var(--sh-other-black);
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        padding: 30vw 0 0 0;

        .footer-upper {
            width: 60vw;
            padding: 2vw 0;
            display: flex;
            justify-content: space-between;
            border-bottom: 0.1vw solid var(--sh-blackish);

            p {
                color: var(--sh-white);
                font-size: 3vw;
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

                p {
                    font-size: 1.4vw;
                    position: relative;
                    z-index: 1;
                    transition: all 1s cubic-bezier(.23,1,.32,1);
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
                }

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

        .footer-lower {
            display: flex;
            justify-content: space-between;
            width: 60vw;
            padding: 3vw 0;

            .lower-conter {


                span {
                    display: inline-block;
                    width: 1vw;
                    height: 1vw;
                    border-radius: 1vw;
                    background: var(--sh-pink);
                    margin: 0 1vw 1vw 0;
                }

                p {
                    font-size: 2vw;
                    color: var(--sh-white);
                }
            }
        }
    }
</style>