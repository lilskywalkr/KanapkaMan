<script setup>
    import { ref, onMounted } from 'vue';

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
</script>

<template>
    <section class="technologies">
        <h1>{{ $t('techWeUse') }}</h1>
        <div class="boxes-container">
            <div class="boxes" v-for="technology in technologies" v-bind:key="technology.id">
                <img v-bind:src="`${technology.icon}`" alt="">
            </div>
        </div>
    </section>
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
</style>