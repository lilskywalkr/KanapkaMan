<script setup>
    import Footer from '@/components/Footer.vue';
    import Hero from '@/components/Hero.vue';
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

    // content for hero section
    const heroHeader = ref('Kim jesteśmy');
    const heroContent = ref('Firma KanapkaMan powstała z pasji do nowych technologii. Do dzielenia<br>się naszą wiedzą. Do projektowania i tworzenia użytecznych i<br>nowoczesnych rozwiązań dla Was - naszych klientów.');

    onMounted(async () => {
        await getImagesFromUnsplush(1, imgArray.value);
    });

</script>

<template>
    <Hero :imgArray="imgArray" :header="heroHeader" :content="heroContent"/>

    <Footer></Footer>
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