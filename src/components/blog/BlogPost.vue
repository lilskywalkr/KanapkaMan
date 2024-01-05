<script setup>
    import { ref, onMounted, defineProps } from 'vue';
    import { useI18n } from 'vue-i18n';

    const props = defineProps(['title', 'author', 'time', 'date', 'desc', 'postName', 'postId']);

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

        <router-link class="post-link" v-bind:to="{name: 'blogPostDetail', params: { postName: props.postName, postId: props.postId }}"><p>read more</p></router-link>
    </div>
</template>

<style scoped lang="scss">
    .blog {
        width: 40%;
        height: auto;
        margin-top: 5vw;
        // border: 0.1vw solid var(--sh-white);

        @media screen and (max-width: 768px) {
            width: 100%;
            margin-top: 10vw;
        }

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

                    @media screen and (max-width: 768px) {
                        font-size: 6vw;
                        line-height: 6vw;
                    }
                }

                p {
                    font-size: 1.5vw;
                    padding-top: 2vw;

                    @media screen and (max-width: 768px) {
                        font-size: 3vw;
                    }

                    span {
                        display: inline-block;
                        margin-left: 2vw;

                        @media screen and (max-width: 768px) {
                            margin-left: 5vw;
                        }

                        &::before {
                            content: '';
                            position: absolute;
                            width: 0.2vw;
                            height: 2vw;
                            background: var(--sh-white);
                            transform: translate(-1.2vw, 0);

                            @media screen and (max-width: 768px) {
                                width: 0.4vw;
                                height: 3vw;
                                transform: translate(-2.5vw, 0.5vw);
                            }
                        }
                    }
                }
            }

            .date {
                border-left: 0.2vw solid var(--sh-pink);
                display: grid;
                place-items: center;

                @media screen and (max-width: 768px) {
                    border-left: 0.4vw solid var(--sh-pink);
                }

                h3 {
                    color: var(--sh-pink);
                    font-size: 2vw;
                    text-align: center;
                    // padding-top: 3vw;

                    @media screen and (max-width: 768px) {
                        font-size: 3vw;
                    }
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

                @media screen and (max-width: 768px) {
                        font-size: 3vw;
                }
            }
        }


        .post-link {
            font-size: 2vw;
            padding-top: 4vw;
            text-align: right;
            transition: all 0.6s;

            @media screen and (max-width: 768px) {
                font-size: 4vw;
                display: block;
                margin-right: 4vw;
            }

            &:hover {
                color: var(--sh-pink);
            }
        }
    }
</style>