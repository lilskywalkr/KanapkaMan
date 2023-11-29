<script setup>
    import Footer from '@/components/Footer.vue';
    import { ref, onMounted } from 'vue';
    import { getImagesFromUnsplush } from '../components/modules/getImages';

    // content for "we-do" section
    const weDoing = ref([
        {id: 0, name: 'Aplikacje webowe', icon: "../src/assets/web-development.svg", desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut turpis arcu. Ut quis efficitur nunc.'}, 
        {id: 1, name: 'Aplikcaje mobilne', icon: "../src/assets/app-development.svg", desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut turpis arcu. Ut quis efficitur nunc.'}, 
        {id: 2, name: 'Outsourcing', icon: "../src/assets/outsourcing.svg", desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut turpis arcu. Ut quis efficitur nunc.'},
        {id: 3, name: 'Product Design', icon: "../src/assets/product-design.svg",  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut turpis arcu. Ut quis efficitur nunc.'},
        {id: 4, name: 'Hardware + software', icon: "../src/assets/hardware.svg", desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut turpis arcu. Ut quis efficitur nunc.'}
    ])

    const imgArray = ref([]);

    onMounted(async () => {
        await getImagesFromUnsplush(1, imgArray.value);
    });

</script>

<template>
    <section class="our-services">
        <div class="desc-box">
            <h1>Kim jesteśmy</h1>
            <p>
                Firma it-solve powstała z pasji do nowych technologii. Do dzielenia<br>
                się naszą wiedzą. Do projektowania i tworzenia użytecznych i<br>
                nowoczesnych rozwiązań dla Was - naszych klientów.
            </p>
        </div>
        <div class="image-box">
            <img v-bind:src="`${imgArray[0]}`" alt="">
        </div>
    </section>

    <section class="we-do">
        <div class="doing-box" v-for="doing in weDoing" v-bind:key="doing.id">
            <div class="doing-box-header">
                <img v-bind:src="`${doing.icon}`" alt="">
                <h1>{{ doing.name }}</h1>
            </div>
            <p class="doing-desc">{{ doing.desc }}</p>
            <div class="button">
                <p>See more</p>
                <div class="button-bg"></div>
            </div>
        </div>
    </section>

    <Footer></Footer>
</template>

<style scoped lang="scss">
    .our-services {
        width: 100vw;
        height: 50vw;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        border-radius: 4vw 4vw 0 0;
        overflow: hidden;

        @media screen and (max-width: 768px) {
            min-height: 150vw;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr;
        }

        .desc-box {
            padding-left: 10vw;
            padding-top: 10vw;
            background: var(--sh-white);


            h1 {
                font-size: 4vw;
                line-height: 4vw;

                @media screen and (max-width: 768px) {
                    font-size: 10vw;
                    line-height: 10vw;
                }
            }

            p {
                font-size: 1vw;
                padding: 3vw 0 0 0;

                @media screen and (max-width: 768px) {
                    font-size: 2.5vw;
                }
            }
        }

        .image-box {
            overflow: hidden;

            img {
                width: 100%;
            }
        }
    }

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
                        font-size: 6vw;
                    }
                }

                img {
                    width: 4vw;

                    @media screen and (max-width: 768px) {
                        width: 12vw;
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
                    width: 40vw;
                    height: 10vw;
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