<script setup>
    import { ref, onMounted } from 'vue';
    import { useI18n } from 'vue-i18n';

    const { t } = useI18n(); 

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

    // client array
    const clients = ref([
        {id: 0, src: "../src/assets/client_1.webp"},
        {id: 1, src: "../src/assets/client_2.webp"},
        {id: 2, src: "../src/assets/client_3.webp"}
    ])
</script>

<template>
    <section class="our-clients">
        <h1>{{t('ourClientsServices')}}</h1>

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
</template>

<style scoped lang="scss">
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