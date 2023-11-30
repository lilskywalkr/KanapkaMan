<script setup>
    import { ref, onMounted } from 'vue';
    import { getImagesFromUnsplush } from '../modules/getImages';

    // random image url
    const imgArray = ref([]);
    const projects = ref([
        {id: 0, name: 'Lorem ipsum', desc: 'Web Design, Development'}, 
        {id: 1, name: 'sit dolor', desc: 'Web Design, Illustration, Motion, Development'}, 
        {id: 2, name: 'consectetur adipiscing', desc: 'Web Design, Development, Animations'}
    ]);

    const floatinTextHeader = ref(null);
    const floatingTextDesc = ref(null);
    const floatingBox = ref(null);
    const projectBoxes = ref([]);

    // function for displaying the floating box
    function floatingBoxFadeIn(e, id) {
        floatingBox.value.style.opacity = 1;

        floatingBox.value.style.left = `${e.pageX}px`;
        floatingBox.value.style.top = `${e.pageY}px`;
        floatingBox.value.style.transform = 'rotateX(0deg)';

        floatinTextHeader.value.textContent = projectBoxes.value[id].lastChild.firstChild.textContent;
        floatingTextDesc.value.textContent = projectBoxes.value[id].lastChild.lastChild.textContent;
    }

    // function for hiding the floating box
    function floatingBoxFadeOur() {
        floatingBox.value.style.opacity = 0;
        floatingBox.value.style.transform = 'rotateX(90deg)';
    }
    
    onMounted(async () => {
        await getImagesFromUnsplush(3, imgArray.value);
    });
</script>

<template>
    <div class="projects-container" id="projects">
        <div class="upper-header">
            <h1>Selected</h1>
            <div class="arrow-container">
                <div class="arrow"></div>
                <div class="go">
                    <p>Go</p>
                </div>
            </div>
        </div>
        <div class="projects">
            <div v-for="project in projects" v-bind:key="project.id" class="project-container" ref="projectBoxes" @mousemove="e => { floatingBoxFadeIn(e, project.id) }" @mouseleave="floatingBoxFadeOur">
                <div class="project">
                    <img v-bind:src="`${imgArray[project.id]}`" alt="">
                </div>
                <div class="project-text">
                    <h2>{{ project.name }}</h2>
                    <p> {{ project.desc }} </p>
                </div>
            </div>
        </div>

        <div class="floating-info" ref="floatingBox">
            <h2 ref="floatinTextHeader"></h2>
            <p ref="floatingTextDesc"></p>
        </div>
    </div>
</template>

<style lang="scss">
    .projects-container {
        width: 90vw;
        height: 55vw;
        border-radius: 4vw;
        margin: auto;
        background: var(--sh-blackish);

        @media screen and (max-width: 768px) {
            height: auto;
            margin-top: 25vw;
        }

        .upper-header {
            width: 100%;
            display: flex;
            gap: 2vw;
            padding: 4vw 0 0 4vw;

            h1 {
                font-size: 3vw;
                color: var(--sh-white);

                @media screen and (max-width: 768px) {
                    font-size: 6vw;
                }
            }

            .arrow-container {
                width: 4vw;
                height: 4vw;
                border-radius: 4vw;
                background: var(--sh-blue);
                display: grid;
                align-items: center;
                justify-items: center;
                cursor: pointer;
                position: relative;
                overflow: hidden;

                @media screen and (max-width: 768px) {
                    width: 6vw;
                    height: 6vw;
                }

                .arrow {
                    width: 2vw;
                    height: 0.1vw;
                    background: var(--sh-white);
                    transform: rotate(45deg);
                    transition: all .6s cubic-bezier(.23,1,.32,1);

                    @media screen and (max-width: 768px) {
                        width: 3vw;
                        height: 0.2vw;
                    }

                    &::before {
                        content: '';
                        display: block;
                        position: absolute;
                        width: 1.5vw;
                        height: 0.1vw;
                        background: var(--sh-white);
                        transform: translate(0.8vw, -0.5vw) rotate(45deg);

                        @media screen and (max-width: 768px) {
                            width: 2.5vw;
                            height: 0.2vw;
                            transform: translate(1vw, -0.8vw) rotate(45deg);
                        }
                    }

                    &::after {
                        content: '';
                        display: block;
                        position: absolute;
                        width: 1.5vw;
                        height: 0.1vw;
                        background: var(--sh-white);
                        transform: translate(0.8vw, 0.5vw) rotate(-45deg);

                        @media screen and (max-width: 768px) {
                            width: 2.5vw;
                            height: 0.2vw;
                            transform: translate(1vw, 0.8vw) rotate(-45deg);
                        }
                    }
                }

                .go {
                    width: 50%;
                    height: 100%;
                    background: var(--sh-white);
                    border-radius: 4vw;
                    display: grid;
                    justify-items: center;
                    align-items: center;
                    color: var(--sh-blue);
                    font-weight: bold;
                    font-size: 1vw;
                    position: absolute;
                    transform: translate(0, 5vw);
                    transition: all .4s cubic-bezier(.23,1,.32,1);

                    @media screen and (max-width: 768px) {
                        transform: translate(0, 7vw);
                        font-size: 2vw;
                    }
                }

                &:hover {
                    .arrow {
                        transform: translate(1vw, 1vw) rotate(45deg);
                        opacity: 0;
                    }

                    .go {
                        width: 100%;
                        transform: translate(0, 0);
                    }
                }
            }
        }

        .projects {
            width: 100%;
            height: auto;
            display: flex;
            justify-content: space-between;
            padding: 5vw 3vw 0 3vw;

            @media screen and (max-width: 768px) {
                flex-flow: column nowrap;
                align-items: center;
            }

            .project-container {
                cursor: pointer;
                overflow: hidden;

                @media screen and (max-width: 768px) {
                    margin-bottom: 20vw;
                }

                .project {
                    width: 25vw;
                    height: 25vw;
                    border-radius: 2vw;
                    transition: all .4s cubic-bezier(.23,1,.32,1);
                    overflow: hidden;

                    img {
                        width: 100%;
                        height: auto;
                        transition: all .4s cubic-bezier(.23,1,.32,1);
                    }

                    @media screen and (max-width: 768px) {
                        width: 80vw;
                        height: 80vw;
                        margin-bottom: 4vw;
                        background-size: cover;;
                    }
                }

                .project-text {
                    padding: 0.5vw 0 0 1vw;
                    transition: all .4s cubic-bezier(.23,1,.32,1);
                    position: absolute;

                    h2 {
                        font-size: 2vw;
                        font-weight: 600;
                        color: var(--sh-pink);

                        @media screen and (max-width: 768px) {
                            font-size: 5vw;
                        }
                    }

                    p {
                        width: auto;
                        display: block;
                        padding: 0.3vw;
                        border: 0.1vw solid var(--sh-white);
                        border-radius: 0.7vw;
                        font-size: 1.1vw;
                        opacity: 0.3;
                        color: var(--sh-white);

                        @media screen and (max-width: 768px) {
                            font-size: 3vw;
                        }
                    }
                }

                @media screen and (min-width: 769px) {
                    &:hover {
                        .project {
                            img {
                                width: 120%;
                            }
                        }

                        .project-text {
                            transform: translate(0, -2vw);
                            opacity: 0;
                        }
                    }   
                }
            }
        }

        .floating-info {
            position: absolute;
            transition: opacity .6s cubic-bezier(.23,1,.32,1), transform .6s cubic-bezier(.23,1,.32,1);
            opacity: 0;
            width: 25vw;
            padding: 0.5vw 0;
            border-radius: 1vw;
            background: rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(8px);
            text-align: center;
            line-height: 3vw;
            user-select: none;
            color: var(--sh-blue);

            @media screen and (max-width: 768px) {
                opacity: 0 !important;
            }


            h2 {
                font-size: 3vw;
            }

            p {
                font-size: 1vw;
            }
        }
    }
</style>