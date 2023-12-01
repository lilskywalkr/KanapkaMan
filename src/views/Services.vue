<script setup>
    import Footer from '@/components/Footer.vue';
    import ContactForm from '@/components/ContactForm.vue';
    import Hero from '@/components/Hero.vue';
    import WhatWeDo from '@/components/WhatWeDo.vue';
    import { ref, onMounted } from 'vue';
    import { getImagesFromUnsplush } from '../components/modules/getImages';

    import SwiperCore from 'swiper';

    // import Swiper core and required modules
    import {Pagination, A11y } from 'swiper/modules';
    // Define the modules property
    const modules = [Pagination, A11y];

    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/pagination';

    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';

    // Define the modules property
    SwiperCore.use([Pagination, A11y]);

    // content for "technologies" section
    const technologies = ref([
        {id: 0, icon: '../src/assets/aws.png'},
        {id: 1, icon: '../src/assets/firebase.png'},
        {id: 2, icon: '../src/assets/flutter.png'},
        {id: 3, icon: '../src/assets/java.png'},
        {id: 4, icon: '../src/assets/mongo.png'},
        {id: 5, icon: '../src/assets/pwa.png'},
        {id: 6, icon: '../src/assets/ruby.png'},
        {id: 7, icon: '../src/assets/swift.png'},
        {id: 8, icon: '../src/assets/vue.png'},
    ]);

    // content for "starting-from" section
    const startingFrom = ref([
        {id: 0, name: "Zapytanie biznesowe", icon: "../src/assets/bidness_qna_white.svg", desc: "Na początku przeprowadzamy wstępną analizę biznesową, której celem jest dogłębne zrozumienie Twoich potrzeb. Proponujemy spotkanie, gdzie zapoznamy się z Twoimi celami, problemami i głównym celem oprogramowania. Posiadasz kod lub aplikację? Na tym etapie możemy je poddać analizie."},
        {id: 1, name: "Warsztaty projektowe", icon: "../src/assets/meeting_white.svg", desc: "Następnym etapem jest organizacja warsztatów projektowych. Jesteśmy elastyczni, stąd Ty zadecydujesz czy odbędą się u nas czy w Twojej firmie. Podczas zajęć wyszczególniamy zakres prac, dobierzemy zespół do Twoich wymagań, a także dołączymy opiekuna projektu (reprezentanta, który w każdym momencie będzie reprezentował Twoją firmę). W tym momencie ustalimy wszystkie szczegóły projektu i zaczynamy współpracę."},
        {id: 2, name: "Rozwój oprogramowania", icon: "../src/assets/software_dev_white.svg", desc: "To najważniejszy moment podczas tworzenia Twojego programu. Projekt zostanie rozdzielony na dwutygodniowe sprinty. Po każdym z nich dostaniesz aplikację do sprawdzenia i zatwierdzenia. W tym momencie Twoja drużyna może zostać rozwinięta o grafika i testerów. Wszystko zależy od zapotrzebowania."},
        {id: 3, name: "Wsparcie i dalszy rozwój projektu", icon: "../src/assets/support_white.svg",  desc: "Nie jesteśmy jedną z firm porzucających swoich klientów po zakończeniu projektów. Oferujemy długofalową współpracę. Jeśli oczekujesz pomocy technologicznej, zapewnimy Ci zespół. Zapewniamy wszystko co będzie niezbędne do rozwoju Twojego projektu, w tym dostosowanie go do nowych wersji systemów czy przeglądarek oraz tworzenie nowych funkcji."}
    ])

    // client array
    const clients = ref([
        {id: 0, src: "../src/assets/client_1.webp"},
        {id: 1, src: "../src/assets/client_2.webp"},
        {id: 2, src: "../src/assets/client_3.webp"}
    ])

    const imgArray = ref([]);

    // content for hero section
    const heroHeader = ref('Usługi<br>programistyczne<br>dla firm');
    const heroContent = ref("Wytwarzamy oprogramowanie rozwiązujące potrzeby<br>użytkowników a dzięki naszemu doświadczeniu, zajmuje ono solidną<br>pozycję na rynku. Ogromna pasja oraz precyzja sprawiają, że<br>pisany przez nas kod jest czysty i bardzo wysokiej jakości. Dzięki<br>temu, jest on łatwy do zrozumienia, utrzymania i rozszerzania przez<br>inne zespoły programistyczne.");

    onMounted(async () => {
        await getImagesFromUnsplush(1, imgArray.value);
    });
</script>

<template>
    <Hero :imgArray="imgArray" :header="heroHeader" :content="heroContent"/>
    <WhatWeDo />

    <section class="technologies">
        <h1>Technologie jakie używamy</h1>
        <div class="boxes-container">
            <div class="boxes" v-for="technology in technologies" v-bind:key="technology.id">
                <img v-bind:src="`${technology.icon}`" alt="">
            </div>
        </div>
    </section>

    <section class="starting-from">
        <h1>Od czego zaczynamy</h1>

        <div class="boxes-container">
            <div class="boxes" v-for="start in startingFrom" v-bind:key="start.id">
                <img v-bind:src="`${start.icon}`" alt="">
                <h3>{{ start.name }}</h3>
                <p>{{ start.desc }}</p>
            </div>
        </div>
    </section>

    <section class="our-clients">
        <h1>Nasi klienci</h1>

        <swiper
            :modules="modules"
            :slides-per-view="1"
            :space-between="0"
            :pagination="{ clickable: true }"
        >
            <!-- Dynamic rendering of slides -->
            <swiper-slide v-for="client in clients" :key="client.id">
                <img :src="client.src" alt="Client 1">
            </swiper-slide>
        </swiper>

    </section>

    <ContactForm/>

    <Footer></Footer>
</template>


<style scoped lang="scss">
    .technologies {
        width: 100vw;
        height: auto;
        padding: 15vw 10vw 10vw 15vw;
        background: var(--sh-pinkish);
        border-radius: 5vw 5vw 0 0;
        position: relative;
        transform: translate(0, -10vw);
        z-index: -1;

        @media screen and (max-width: 768px) {
            padding-left: 20vw;
        }

        h1 {
            text-align: center;
            font-size: 3vw;
            letter-spacing: 1vws;
            margin-bottom: 5vw;

            @media screen and (max-width: 768px) {
                font-size: 5vw;
            }
        }
        

        .boxes-container {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-flow: row wrap;
            gap: 0vw;

            .boxes {
                width: 15vw;
                height: 15vw;
                display: grid;
                place-items: center;
                border-right: 0.15vw solid var(--sh-black);
                border-bottom: 0.15vw solid var(--sh-black);

                @media screen and (max-width: 768px) {
                    width: 20vw;
                    height: 20vw;
                }

                
                @media screen and (min-width: 769px) {
                    &:nth-child(6), &:nth-child(7), &:nth-child(8), &:nth-child(9) {
                        border-bottom: none;
                    }

                    &:nth-child(5) {
                        border-right: none;
                    }
                }

                @media screen and (max-width: 768px) {
                    &:nth-child(3), &:nth-child(6), &:nth-child(9) {
                        border-right: none;
                    }

                    &:nth-child(7), &:nth-child(8), &:nth-child(9) {
                        border-bottom: none;
                    }
                }

                img {
                    width: 10vw;

                    @media screen and (max-width: 768px) {
                        width: 17vw;
                    }
                }
            }
        }
    }

    .starting-from {
        width: 100vw;
        height: auto;
        background: var(--sh-black);
        position: relative;
        transform: translate(0, -10vw);

        h1 {
            font-size: 3vw;
            color: var(--sh-white);
            text-align: center;
            padding: 5vw 0 5vw 0;

            @media screen and (max-width: 768px) {
                font-size: 5vw;
            }
        }

        .boxes-container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: row wrap;
            gap: 1vw;

            .boxes {
                width: 40vw;
                height: 20vw;
                display: flex;
                align-items: center;
                flex-flow: column nowrap;
                gap: 1vw;
                padding: 1.5vw 2vw 0 2vw;

                @media screen and (max-width: 768px) {
                    width: 80vw;
                    height: 30vw;
                }


                @media screen and (min-width: 769px) {
                    &:nth-child(1), &:nth-child(2) {
                        border-bottom: 0.2vw solid var(--sh-white);
                    }   
                }

                img {
                    width: 3vw;

                    @media screen and (max-width: 768px) {
                        width: 10vw;
                    }
                }

                h3 {
                    color: var(--sh-white);
                    font-size: 2vw;

                    @media screen and (max-width: 768px) {
                        font-size: 3vw;
                    }
                }

                p {
                    color: var(--sh-white);
                    text-align: center;
                    font-size: 1vw;

                    @media screen and (max-width: 768px) {
                        font-size: 1.6vw;
                    }
                }
            }
        }
    }

    .our-clients {
        width: 100vw;
        height: auto;
        padding: 10vw 10vw 10vw 15vw;
        // background: var(--sh-white);
        background: var(--sh-pinkish);
        border-radius: 5vw 5vw 0 0;
        position: relative;
        z-index: 1;

        h1 {
            text-align: center;
            font-size: 3vw;
            letter-spacing: 1vws;
            margin-bottom: 5vw;

            @media screen and (max-width: 768px) {
                font-size: 6vw;
            }
        }

        .swiper-slide {
            padding-bottom: 1vw;

            img {
                width: 15vw;
                display: block;
                margin: auto;
                user-select: none;

                @media screen and (max-width: 768px) {
                    width: 30vw;
                }
            }
        }
    }
</style>