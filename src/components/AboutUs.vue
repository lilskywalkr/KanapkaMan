<script setup>
    import {ref} from 'vue';

    const aboutUsContent = ref([
        {id: 0, text: 'Our clients get industry leading digital products, all looking into the future. Years pass by and designs we provide are still worthy.'},
        {id: 1, text: 'We make it possible as 10+ years experience in digital world doesn’t go unnoticed.'},
        {id: 2, text: 'Gathering the best talents — engineers in minds helps us craft the best thought-out solutions.'}
    ]);

    
</script>

<template>
    <div class="about-container" id="about">
        <div class="about-upper">
            <div class="upper-one">
                <h2>We empower<br>client <span>to be loved</span></h2>
            </div>
            <div class="upper-two">
                <p><span>We deliver</span> <span>what we promise</span></p>
                <p>Engaging user experience, classy<br>web design & development, unique<br>brand identity solutions to shine.</p>
            </div>
        </div>
        <div class="about-lower">
            <div class="lower-content" v-for="content in aboutUsContent" v-bind:key="content.id">
                <p>{{ content.text }}</p>
            </div>
        </div>

        <div class="about-team">
            <p>Our team puts client’s<br>business needs above all, and <br>by saying that <span class="gradient-text">we make communication with <br><span class="last-line">clients the priority number one.</span></span></p>
        </div>
    </div>
</template>

<style lang="scss">
    .about-container {
        width: 100vw;
        height: 100vw;
        background: var(--sh-pinkish);
        border-radius: 3vw 3vw 0 0;
        position: relative;
        z-index: -1;
        margin-top: -5vw;
        display: flex;
        align-items: center;
        flex-flow: column nowrap;
        color: var(--sh-black);
        padding: 15vw 0 0 0;

        .about-upper {
            width: 65vw;
            padding: 5vw 0;
            display: flex;
            justify-content: center;
            border-bottom: 0.1vw solid var(--sh-pink);
            gap: 5vw;

            .upper-one {
                line-height: 4vw;

                h2 {
                    font-size: 3.5vw;

                    span {
                        font-weight: 200;
                        font-style: italic;
                    }
                }
            }

            .upper-two {
                line-height: 2vw;

                p:nth-of-type(1) {
                    font-size: 1vw;
                    margin-bottom: 2vw;

                    span {
                        display: inline-block;

                        &:nth-of-type(1) {
                            margin-right: 9vw;
                        }
                    }
                }

                p:nth-of-type(2) {
                    font-size: 2vw;
                }
            }
        }

        .about-lower {
            width: 65vw;
            padding: 5vw 0;
            display: flex;
            justify-content: space-between;

            .lower-content {
                width: 17.5vw;
                height: auto;
                
                p {
                    font-size: 1.5vw;
                }
            }
        }

        .about-team {
            width: 65vw;
            padding: 5vw 0;
            display: flex;
            justify-content: center;
            
            p {
                font-size: 1.8vw;

                .gradient-text {
                    background: linear-gradient(90deg, rgba(119,0,112,1) 0%, rgba(9,9,121,1) 37%, rgba(0,212,255,1) 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;

                    .last-line {
                        display: inline-block;
                        padding-left: 12vw;
                    }
                }
            }
        }
    }
</style>