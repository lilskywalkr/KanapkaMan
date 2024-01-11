<script setup lang="ts">
// flag for opening the menu

// defining an emit for handling the burger animation
const emit = defineEmits<{
  (e: 'changeBurgerClass'): void
}>()
// Icons for socials
const icons = ref(['facebook-f', 'instagram', 'linkedin'])
const openMenu = ref(true)// calling the emmit in a function
function handleClicking() {
  emit('changeBurgerClass')
}
</script>

<template>
  <div
    v-if="openMenu"
    class="open-menu-container"
  >
    <div class="menu-left">
      <div class="content-box">
        <!-- <p>Hello stranger!<br>So, you need some beautiful solutions for your business? Great! We're here to help you! Tell us what are you looking for. </p> -->
        <p>{{ $t('helloStranger') }}</p>

        <p>hello@kanapka.digital</p>

        <p>+48 001 002 003</p>
      </div>
    </div>

    <div class="menu-right">
      <div class="links">
        <router-link
          :to="{'name': 'blog'}"
          @click="handleClicking"
        >
          <span>Juicy<br>things</span>{{ $t('menuBlog') }}
        </router-link>

        <router-link
          :to="{'name': 'about'}"
          @click="handleClicking"
        >
          {{ $t('menuAbout') }}<span>Coffe<br>time</span>
        </router-link>

        <router-link
          :to="{'name': 'team'}"
          @click="handleClicking"
        >
          <span>Good<br>company</span>{{ $t('menuTeam') }}
        </router-link>

        <router-link
          :to="{'name': 'services'}"
          @click="handleClicking"
        >
          <span>No<br>Sandwiches</span>{{ $t('menuServices') }}
        </router-link>

        <router-link
          :to="{'name': 'projects'}"
          @click="handleClicking"
        >
          {{ $t('menuProjects') }}<span>Unreal<br>art</span>
        </router-link>
      </div>

      <div class="socials">
        <p>{{ $t('followUs') }}</p>

        <ul>
          <li
            v-for="(icon, index) in icons"
            :key="index"
          >
            <a href="#"><fa
              class="icon"
              :icon="[
                'fab',
                `${icon}`,
              ]"
            /></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
    .open-menu-container {
        width: 100vw;
        height: 100vh;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 1;
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 40vw 60vw;
        opacity: 0;
        animation-name: appear;
        animation-duration: 0.6s;
        animation-timing-function: cubic-bezier(.23,1,.32,1);
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        user-select: none;

        @media screen and (max-width: 768px) {
            grid-template-columns: 1fr;
        }

        .menu-left {
            background: var(--sh-another-black);
            display: flex;
            justify-content: center;
            align-items: center;

            @media screen and (max-width: 768px) {
                display: none;
            }

            .content-box {
                width: 65%;
                color: var(--sh-white);

                p:nth-of-type(1) {
                    font-size: 1vw;
                    margin-bottom: 2vw;
                }

                p:nth-of-type(2), p:nth-of-type(3) {
                    font-size: 2vw;
                    padding: 0.2vw 0;
                }
            }
        }

        .menu-right {
            background: var(--sh-blackish);
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column nowrap;

            .links {
                border-bottom: 0.2vw solid var(--sh-black);
                padding-bottom: 2vw;
                text-align: center;

                @media screen and (max-width: 768px) {
                    border-bottom: 0.3vw solid var(--sh-black);
                }

                a {
                    display: block;
                    overflow: hidden;
                    font-size: 5vw;
                    color: var(--sh-pink);
                    transition: all .6s cubic-bezier(.23,1,.32,1);
                    border-radius: 2vw;
                    padding: 0;

                    @media screen and (max-width: 768px) {
                        font-size: 13vw;
                    }

                    span {
                        font-size: 1vw;
                        position: absolute;

                        @media screen and (max-width: 768px) {
                            font-size: 3vw;
                        }
                    }

                    &:hover {
                        background: var(--sh-black);
                        color: var(--sh-blue);
                    }

                    &:nth-of-type(1), &:nth-of-type(3) {
                        span {
                            transform: translate(-4vw, 1vw);

                            @media screen and (max-width: 768px) {
                                transform: translate(-6vw, -5vw);
                            }
                        }
                    }

                    &:nth-of-type(4) {
                        span {
                            transform: translate(-6vw, 1vw);

                            @media screen and (max-width: 768px) {
                                transform: translate(-6vw, -5vw);
                            }
                        }
                    }
                }
            }

            .socials {
                width: 40vw;
                padding: 4vw 0 0 0;
                display: flex;
                justify-content: space-between;

                @media screen and (max-width: 768px) {
                    width: 60vw;
                    padding: 5vw 0 0 0;
                }

                p {
                    font-size: 1.5vw;
                    color: var(--sh-pink);

                    @media screen and (max-width: 768px) {
                        font-size: 3vw;
                    }
                }

                ul {
                    display: flex;

                    li {
                        margin-left: 2vw;

                        @media screen and (max-width: 768px) {
                            margin-left: 3vw;
                        }

                        a {
                            color: var(--sh-pink);
                        }
                    }
                }

                .icon {
                    font-size: 1.5vw;
                    transition: all .6s cubic-bezier(.23,1,.32,1);

                    &:hover {
                        transform: scale(1.5);
                    }

                    @media screen and (max-width: 768px) {
                        font-size: 3vw;
                    }
                }
            }
        }

        @keyframes appear {
            from {
                opacity: 0;
            }

            to {
                opacity: 1;
            }
        }
    }
</style>
