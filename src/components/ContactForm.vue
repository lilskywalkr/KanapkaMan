<script setup>

</script>

<template>
    <div class="contact-form-container">
        <div class="header-cont">
            <h1>{{ $t('contactHeader') }}</h1>
        </div>

        <div class="form-content">
            <form action="">
                <input :placeholder="$t('contactName')" type="text">
                <input :placeholder="$t('contactEmail')" type="email">
                <input :placeholder="$t('contactPhone')" type="tel">
                <input :placeholder="$t('contactTopic')" type="text">
                <input :placeholder="$t('contactMessage')" type="text">

                <button class="arrow-container">
                    <div class="arrow"></div>
                    <div class="go">
                        <p v-html="$t('contactSendMessage')"></p>
                    </div>
                </button>
            </form>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .contact-form-container {
        width: 100vw;
        height: auto;
        background: var(--sh-other-black);
        padding: 20vw 0 0 20vw;

        @media screen and (max-width: 768px) {
            padding: 20vw 0 0 10vw;
        }

        .header-cont {
            width: 55vw;
            padding-bottom: 2vw;
            border-bottom: 0.1vw solid var(--sh-blackish);

            @media screen and (max-width: 768px) {
                width: 75vw;
                padding-bottom: 4vw;
            }

            h1 {
                color: var(--sh-white);
                font-size: 3vw;

                @media screen and (max-width: 768px) {
                    font-size: 6vw;
                }
            }
        }

        .form-content {
            width: 55vw;
            height: auto;
            padding: 2vw 0 0 0;

            @media screen and (max-width: 768px) {
                width: 75vw;
            }

            form {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                gap: 1vw;
                flex-flow: row wrap;

                input {
                    width: 20vw;
                    height: auto;
                    padding: 4vw 2vw 1vw 1vw;
                    background: var(--sh-blackish);
                    border: none;
                    font-size: 1.5vw;
                    color: var(--sh-white);

                    @media screen and (max-width: 768px) {
                        width: 35vw;
                        padding: 7vw 4vw 3vw 3vw;
                        font-size: 2.5vw;
                    }

                    &:nth-of-type(5) {
                        margin-right: 21vw;

                        @media screen and (max-width: 768px) {
                            margin-right: 36vw;
                        }
                    }
                }

                .arrow-container {
                    width: 40vw;
                    height: 20vw;
                    border: none;
                    border-radius: 10vw;
                    background: var(--sh-blue);
                    display: grid;
                    align-items: center;
                    justify-items: center;
                    cursor: pointer;
                    position: relative;
                    transform: translate(0vw, 5vw);
                    overflow: hidden;

                    @media screen and (max-width: 768px) {
                        transform: translate(0, 6vw);
                    }

                    .arrow {
                        width: 4vw;
                        height: 0.1vw;
                        background: var(--sh-white);
                        transform: rotate(-45deg);
                        transition: all .6s cubic-bezier(.23,1,.32,1);

                        &::before {
                            content: '';
                            display: block;
                            position: absolute;
                            width: 3vw;
                            height: 0.1vw;
                            background: var(--sh-white);
                            transform: translate(1.6vw, -1vw) rotate(45deg);
                        }

                        &::after {
                            content: '';
                            display: block;
                            position: absolute;
                            width: 3vw;
                            height: 0.1vw;
                            background: var(--sh-white);
                            transform: translate(1.6vw, 1vw) rotate(-45deg);
                        }
                    }

                    .go {
                        width: 100%;
                        height: 200%;
                        background: var(--sh-white);
                        border-radius: 50vw;
                        display: grid;
                        justify-items: center;
                        align-items: center;
                        color: var(--sh-blue);
                        font-weight: bold;
                        font-size: 1vw;
                        position: absolute;
                        transform: translate(0, 31vw);
                        transition: all .4s cubic-bezier(.23,1,.32,1);

                        @media screen and (max-width: 768px) {
                            font-size: 2.5vw;
                        }
                    }

                    &:hover {
                        .arrow {
                            transform: translate(1vw, -1vw) rotate(-45deg);
                            opacity: 0;
                        }

                        .go {
                            width: 100%;
                            height: 100%;
                            border-radius: 10vw;
                            transform: translate(0, 0);
                        }
                    }
                }
            }
        }
    }
</style>