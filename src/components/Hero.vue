<script setup>
    import { ref, onMounted } from 'vue';

    // random image url
    const rectImageUrl = ref('');
    const circleImageUrl = ref('');

    // function for handling new images request
    const requestUrl = 'https://api.unsplash.com/photos/?query=human&client_id=vH6o9AwtVj5590-cuJIt5YegPLHKJqqg66Tr_FlDC3k';
    async function getNewImage(data) {
        let randomNumber = Math.floor(Math.random() * 10);
        let result = await fetch(requestUrl).then((res) => res.json()).then((data) => data);
        
        data.value = result[randomNumber].urls.regular
    }

    onMounted(async () => {
        await getNewImage(rectImageUrl);
        await getNewImage(circleImageUrl);
    })
</script>

<template>
    <div class="hero-container">
        <div id="hero-text-content-1">
            <p>Welcome to</p>
            <h1>KanapkaMan<br>Software <span>House</span></h1>
        </div>

        <div id="hero-text-content-2">
            <div class="image-rect" v-bind:style="{ backgroundImage: `url(${rectImageUrl})` }">
                <div class="play-button"></div>
            </div>
        </div>

        <div id="hero-text-content-3">
            <p>Place where well-crafted <br>software projects are born.</p>
            <div class="subscribe">
                <div class="image-circle" v-bind:style="{backgroundImage: `url(${circleImageUrl})`}"></div>
                <div class="button">
                    <p>Subscribe</p>
                    <div class="button-bg"></div>
                </div>
            </div>
        </div>

        <div id="hero-text-content-4">
            <h1><i>Of</i> digital <br>aesthetics</h1>
            <div class="bottom-text">
                <p>We produce</p>
                <p>digital & <br>brand design</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .hero-container {
        width: 100vw;
        color: var(--sh-white);
        display: grid;
        grid-template-rows: 25vw 25vw;
        grid-template-columns: 1fr 1fr;
        position: relative;
    
        #hero-text-content {
            &-1 {
                padding: 4vw 0 0 5vw;

                h1 {
                    font-size: 5vw;
                    line-height: 5vw;
                    span {
                        color: var(--sh-pink);
                    }
                }

                p {
                    font-size: 1.2vw;
                }
            }

            &-2 {
                display: flex;
                justify-content: flex-end;
                padding: 4vw 5vw 0 0;
            }

            &-3 {
                padding: 0vw 0 0 5vw;
                display: flex;
                flex-flow: column nowrap;
                justify-content: space-between;

                p {
                    font-size: 1.2vw;
                }

                .subscribe {
                    width: 40vw;
                    height: 6vw;
                    background: var(--sh-blackish);
                    border-radius: 1.5vw;
                    position: absolute;
                    left: 50%;
                    bottom: 1vw;
                    transform: translate(-50%, -1vw);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .image-circle {
                        width: 5vw;
                        height: 5vw;
                        border-radius: 3vw;
                        background: #fff;
                        margin-left: 0.7vw;
                        background-size: cover;
                        background-position: center;
                    }

                    .button {
                        width: 12vw;
                        height: 4vw;
                        border-radius: 1vw;
                        background: var(--sh-blue);
                        display: grid;
                        align-items: center;
                        justify-items: center;
                        margin-right: 1.5vw;
                        cursor: pointer;
                        overflow: hidden;
                        position: relative;

                        p {
                            font-size: 1.4vw;
                            position: relative;
                            z-index: 1;
                            transition: all 1s cubic-bezier(.23,1,.32,1);
                        }

                        &-bg {
                            position: absolute;
                            width: 5vw;
                            height: 5vw;
                            border-radius: 50vw;
                            background: var(--sh-white);
                            z-index: 0;
                            transition: all 1s cubic-bezier(.23,1,.32,1);
                            transform: translate(0, 100%);
                        }

                        &:hover {
                            .button-bg {
                                transform: translate(0, 0%);
                                width: 20vw;
                                height: 20vw;
                            }

                            p {
                                color: var(--sh-blue);
                            }
                        }
                    }
                }
            }
        
            &-4 {
                display: flex;
                flex-flow: column nowrap;
                align-items: end;
                padding: 0 5vw 0 0;

                h1 {
                    font-size: 5vw;
                    line-height: 5vw;
                    display: block;
                    margin-top: -4vw;
                }

                .bottom-text {
                    padding: 3vw 0 0 0;
                    display: flex;
                    text-align: left;
                    font-size: 1vw;

                    p {
                        font-size: 1.2vw;
                        display: block;
                        margin: 0 4.7vw 0 0;
                    }
                }
            }
        }

        .image-rect {
            width: 10vw;
            height: 15vw;
            background-position: center;
            background-size: 250%;
            border-radius: 1vw;
            transition: all .6s cubic-bezier(.23,1,.32,1);
            position: relative;
            cursor: pointer;

            &:hover {
                background-size: 280%;
            }

            .play-button {
                width: 3vw;
                height: 3vw;
                border-radius: 2vw;
                background: var(--sh-blue);
                position: absolute;
                right: 0;
                z-index: 1;
                transform: translate(1vw, -1.5vw);
            }
        }
    }
</style>