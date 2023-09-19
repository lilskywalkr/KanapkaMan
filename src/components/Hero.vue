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
        <div id="hero-text-content-1" :style="{background: '#297'}">
            <p>Welcome to</p>
            <h1>Thunderbolt<br>Software <span><span class="h-house">H</span>ouse</span></h1>
        </div>

        <div id="hero-text-content-2" :style="{background: '#fff'}">
            <div class="image" v-bind:style="{ backgroundImage: `url(${imageUrl})` }"></div>
        </div>

        <div id="hero-text-content-3" :style="{background: '#245'}">
            <p>Place where well-crafted <br>software projects are born.</p>
        </div>

        <div id="hero-text-content-4" :style="{background: '#789'}">
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
                padding: 4vw 0 0 4vw;

                span {
                    color: var(--sh-pink);
                    
                    .h-house {
                        display: inline-block;
                        transform: rotateZ(30deg) translate(-2px, -2px);
                    }
                }
            }
        }

        .image {
            width: 10vw;
            height: 15vw;
            background-position: center;
            background-size: cover;
            border-radius: 1vw;
        }
    }
</style>