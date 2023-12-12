<script setup>
    import { ref, defineProps, onMounted } from 'vue';
    import { useI18n } from 'vue-i18n';


    const props = defineProps(['imgArray', 'names', 'descs']);
</script>

<template>
    {{ console.log(props.names) }}
    <div class="people-container">
        <div class="person-box" v-for="(img, index) in imgArray" :key="index">
            <div class="person-img" v-bind:style="{backgroundImage: `url(${img})`}"></div>
            <div class="person-desc">
                <h1>{{ props.names[index] }}</h1>
                <p>Co-Founder,<br>Key Account<br>Manager</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .people-container {
        width: 100vw;
        height: auto;
        padding: 10vw 5vw;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: row wrap;
        gap: 5vw 10vw;

        .person-box {
            width: auto;
            height: auto;
            display: flex;
            flex-flow: column;

            .person-img {
                width: 10vw;
                height: 10vw;
                border-radius: 10vw;
                background-position: center;
                background-size: contain;

                background: white;
            }

            .person-desc {
                color: var(--sh-white);
                text-align: center;
                padding: 1vw 0 0 0;

                h1 {
                    font-size: 1.5vw;
                }

                p {
                    font-size: 1vw;
                }
            }
        }
    }
</style>