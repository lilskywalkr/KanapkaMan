<script setup>
    import { ref, onMounted } from 'vue';
    import { getImagesFromUnsplush } from '../modules/getImages';

    // random image url
    const imgArray = ref([]);
    const projects = ref([
        {id: 0, name: 'Lorem ipsum', desc: 'Web Design, Development'}, 
        {id: 1, name: 'sit dolor', desc: 'Web Design, Illustration, Motion, Development'}, 
        {id: 2, name: 'consectetur adipiscing', desc: 'Web Design, Development, Animations'},
        {id: 3, name: 'Lorem ipsum', desc: 'Web Design, Development'}, 
        {id: 4, name: 'sit dolor', desc: 'Web Design, Illustration, Motion, Development'}, 
        {id: 5, name: 'consectetur adipiscing', desc: 'Web Design, Development, Animations'},
        {id: 6, name: 'sit dolor', desc: 'Web Design, Illustration, Motion, Development'}, 
        {id: 7, name: 'consectetur adipiscing', desc: 'Web Design, Development, Animations'},
        {id: 8, name: 'Lorem ipsum', desc: 'Web Design, Development'}
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
        await getImagesFromUnsplush(9, imgArray.value);
    });
</script>

<template>
    <div class="projects-container" id="projects">
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

<style scoped lang="scss">
    .projects-container {
        width: 90vw;
        height: auto;
        padding-bottom: 10vw;
        border-radius: 4vw;
        margin: auto;
        background: var(--sh-blackish);
        position: relative;
        transform: translate(0, -5vw);

        .projects {
            width: 100%;
            height: auto;
            display: flex;
            justify-content: space-between;
            flex-flow: row wrap;
            padding: 0 3vw;

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
                    margin-top: 10vw;

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