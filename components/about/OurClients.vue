<script setup lang="ts">
import SwiperCore from 'swiper'

// import Swiper core and required modules
import { A11y, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

defineProps<{
  imgArray: any[]
}>()

// Define the modules property
const modules = [Pagination, A11y]

// Define the modules property
SwiperCore.use([Pagination, A11y])
</script>

<template>
  <div class="client-container">
    <h1>{{ $t('ourClientsHeader') }}</h1>

    <Swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="0"
      :pagination="{'clickable': true}"
      :style="{'--swiper-pagination-bullet-inactive-color': '#fff'}"
    >
      <!-- Dynamic rendering of slides -->
      <SwiperSlide class="slide">
        <div
          :style="{'backgroundImage': `url(${imgArray[4]})`}"
          alt="Client 1"
          class="img-box"
        />

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus recusandae minima aliquam modi facilis. Id facilis fugit asperiores, voluptas voluptatibus rem alias molestiae natus, mollitia commodi enim recusandae atque voluptatem.</p>
      </SwiperSlide>

      <SwiperSlide class="slide">
        <div
          :style="{'backgroundImage': `url(${imgArray[5]})`}"
          alt="Client 2"
          class="img-box"
        />

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, amet temporibus. Reiciendis voluptas maxime tempore amet, incidunt debitis deserunt similique ratione aspernatur voluptatibus dicta eius cupiditate et. Totam, nulla ad!</p>
      </SwiperSlide>

      <SwiperSlide class="slide">
        <div
          :style="{'backgroundImage': `url(${imgArray[6]})`}"
          alt="Client 3"
          class="img-box"
        />

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora rem earum architecto animi dolor odit voluptas at doloremque aliquid, consectetur sapiente nisi! Velit dicta repellat aspernatur possimus quia alias maiores!</p>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped lang="scss">
    .client-container {
        width: 100vw;
        height: auto;
        padding: 5vw 0;

        @media screen and (max-width: 768px) {
            padding: 10vw 0;
        }

        h1 {
            font-size: 3vw;
            color: var(--sh-white);
            text-align: center;
            margin: 3vw 0;

            @media screen and (max-width: 768px) {
                font-size: 7vw;
            }
        }

        .slide {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10vw;

            @media screen and (max-width: 768px) {
                flex-flow: column nowrap;
            }

            .img-box {
                width: 25vw;
                height: 25vw;
                border-radius: 25vw;

                @media screen and (max-width: 768px) {
                    width: 45vw;
                    height: 45vw;
                }
            }

            p {
                width: 40vw;
                font-size: 1.5vw;
                color: var(--sh-white);

                @media screen and (max-width: 768px) {
                    width: 80vw;
                    text-align: center;
                    font-size: 3.5vw;
                }
            }
        }
    }
</style>
