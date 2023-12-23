<script setup>
    import { ref, onMounted, defineProps } from 'vue';
    import { useI18n } from 'vue-i18n';

    const props = defineProps(['title', 'author', 'time', 'date', 'desc']);

</script>

<template>
    <div class="blog">
        <div class="blog-header">
            <div class="title">
                <h3>{{ props.title }}</h3>
                <p> {{ props.author }}  <span>{{ props.time }}</span> </p>
            </div>

            <div class="date">
                <h3 v-html="props.date"></h3>
            </div>
        </div>

        <div class="blog-desc">
            <p>{{ props.desc }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .blog {
        width: 40%;
        height: auto;
        margin-top: 5vw;
        // border: 0.1vw solid var(--sh-white);

        &-header {
            width: 100%;
            height: auto;
            display: grid;
            grid-template-columns: 0.7fr 0.3fr;
            grid-template-rows: 1fr;

            .title {
                color: var(--sh-white);

                h3 {
                    font-size: 3vw;
                    line-height: 3vw;
                }

                p {
                    font-size: 1.5vw;
                    padding-top: 2vw;

                    span {
                        display: inline-block;
                        margin-left: 2vw;

                        &::before {
                            content: '';
                            position: absolute;
                            width: 0.2vw;
                            height: 2vw;
                            background: var(--sh-white);
                            transform: translate(-1.2vw, 0);
                        }
                    }
                }
            }

            .date {
                border-left: 0.2vw solid var(--sh-pink);

                h3 {
                    color: var(--sh-pink);
                    font-size: 2vw;
                    text-align: center;
                    padding-top: 3vw;
                }
            }
        }

        &-desc {
            width: 100%;
            height: auto;
            padding-top: 4vw;

            p {
                font-size: 1.2vw;
                color: var(--sh-white);
            }
        }
    }
</style>