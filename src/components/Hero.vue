<script setup>
    import { ref, onMounted } from 'vue';

    // random image url
    const imageUrl = ref('');

    // function for handling new images request
    const requestUrl = 'https://api.unsplash.com/photos/?query=human&client_id=vH6o9AwtVj5590-cuJIt5YegPLHKJqqg66Tr_FlDC3k';
    async function getNewImage() {
        let randomNumber = Math.floor(Math.random() * 10);
        let result = await fetch(requestUrl).then((res) => res.json()).then((data) => data);
        
       imageUrl.value = result[randomNumber].urls.regular
    }

    onMounted(async () => {
        await getNewImage();
        console.log(imageUrl.value)
    })
</script>

<template>
    <div class="hero-container">
        <div id="hero-text-content-1">
            <p>Welcome to</p>
            <h1>Thunderbolt<br>Software <span><span class="h-house">H</span>ouse</span></h1>
        </div>

        <div id="hero-text-content-2">
            <div class="image" v-bind:style="{ backgroundImage: `url(${imageUrl})` }">
                <div class="play-button"></div>
            </div>
        </div>

        <div id="hero-text-content-3">
            <p>Place where well-crafted <br>software projects are born.</p>
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
        background: var(--sh-black);
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
                        
                        .h-house {
                            display: inline-block;
                            transform: rotateZ(30deg) translate(-2px, -2px);
                        }
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

                p {
                    font-size: 1.2vw;
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

        .image {
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