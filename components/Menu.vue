<script setup lang="ts">
import { onMounted, ref } from 'vue'

import type { Ref } from 'vue'

const { t, setLocale, locale } = useI18n()

const menuRef: Ref<any> = ref(null)

const burger: Ref<any> = ref(null)
const openMenu = ref(false)

function changeBurgerClass() {
  burger.value.classList.toggle('close')
  openMenu.value = !openMenu.value
}

// creating reactive variable for locale value
const sessionLocale: Ref<any> = ref(locale.value)

// handling the locale change
function changeLocale() {
  setLocale(sessionLocale.value)
}

const route = useRoute()
const isLinkActive = (link: string) => route.fullPath.startsWith(link)

// change menu background on scroll
function changeMenuBackground() {
  window?.addEventListener('scroll', () => {
    if (window?.scrollY) {
      menuRef.value.style.background = 'var(--sh-black)'

      return
    }

    menuRef.value.style.background = 'none'
  }, false)
}

function closeMenu() {
  openMenu.value = false
  burger.value.classList.toggle('close')
}

onMounted(() => {
  // console.log(menuRef.value)
  changeMenuBackground()
})
</script>

<template>
  <menu ref="menuRef">
    <div class="content">
      <div class="logo">
        <router-link to="/">
          <img
            src="../assets/kanapka_white.png"
            alt="thunderbolt logo"
          >
        </router-link>
      </div>

      <div class="links">
        <ul>
          <li
            v-for="(menu) in [
              {'id': 0,
               'text': t('menuBlog'),
               'link': '/blog'},
              {'id': 1,
               'text': t('menuAbout'),
               'link': '/about'},
              {'id': 2,
               'text': t('menuTeam'),
               'link': '/team'},
              {'id': 3,
               'text': t('menuServices'),
               'link': '/services'},
              {'id': 4,
               'text': t('menuProjects'),
               'link': '/projects'},
            ]"
            :key="menu.id"
          >
            <NuxtLink
              :to="menu.link"
              :class="{'active': isLinkActive(menu.link)}"
            >
              <div class="text-1">
                <span
                  v-for="(char, index) in menu.text"
                  :key="index"
                >
                  {{ char.charCodeAt(0) === 32
                    ? "&nbsp;"
                    : char }}
                </span>
              </div>

              <div class="text-2">
                <span
                  v-for="(char, index) in menu.text"
                  :key="index"
                >
                  {{ char.charCodeAt(0) === 32
                    ? "&nbsp;"
                    : char }}
                </span>
              </div>
            </NuxtLink>
          </li>
        </ul>

        <div class="language">
          <select
            id="lang"
            v-model="sessionLocale"
            name="language"
            @change="changeLocale"
          >
            <option value="en">
              🇬🇧
            </option>

            <option value="pl">
              🇵🇱
            </option>

            <option value="ua">
              🇺🇦
            </option>

            <option value="ru">
              🇷🇺
            </option>
          </select>
        </div>

        <div
          class="burger-container"
          @click="changeBurgerClass"
        >
          <div
            ref="burger"
            class="burger"
          />
        </div>
      </div>
    </div>

    <ModulesOpenMenu
      v-if="openMenu"
      change-burger-class="changeBurgerClass"
      @change-burger-class="closeMenu"
    />
  </menu>
</template>

<style scoped lang="scss">
    menu {
        position: sticky;
        position: -webkit-sticky;
        top: 0vw;
        width: 100vw;
        height: auto;
        display: flex;
        font-size: 1.8vw;
        padding: 0.5vw 0;
        z-index: 4;
        border-radius: 0 0 4vw 4vw;
        transition: all .6s cubic-bezier(.23,1,.32,1);
        background: none;

        .content {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .logo {
                margin: 0 0 0 5vw;
                position: relative;
                z-index: 2;

                @media screen and (max-width: 768px) {
                    margin: 0 0 0 5vw;
                }

                img {
                    width: 4vw;
                    margin: 0.5vw 0;

                    @media screen and (max-width: 768px) {
                        width: 10vw;
                        margin: 2vw 0;
                    }
                }
            }

            .links {
                display: flex;
                align-items: center;

                .burger-container {
                    cursor: pointer;
                    width: 3vw;
                    height: 3vw;
                    display: grid;
                    align-items: center;
                    justify-items: center;
                    margin-right: 5vw;
                    position: relative;
                    z-index: 2;

                    @media screen and (max-width: 768px) {
                        width: 5vw;
                        height: 5vw;
                    }

                    .burger {
                        width: 3vw;
                        height: 0.1vw;
                        background: var(--sh-white);
                        transition: all .6s cubic-bezier(.23,1,.32,1);
                        transform: rotate(180deg);

                        @media screen and (max-width: 768px) {
                            width: 5vw;
                            height: 0.3vw;
                        }

                        &::before, &::after {
                            content: '';
                            position: absolute;
                            display: block;
                            width: 3vw;
                            height: 0.1vw;
                            background: var(--sh-white);
                            transition: all .6s cubic-bezier(.23,1,.32,1);

                            @media screen and (max-width: 768px) {
                                width: 5vw;
                                height: 0.3vw;
                            }
                        }

                        &::before {
                            transform: translate(0, 1vw);

                            @media screen and (max-width: 768px) {
                                transform: translate(0, 1.5vw);
                            }
                        }
                        &::after {
                            transform: translate(0, -1vw);

                            @media screen and (max-width: 768px) {
                                transform: translate(0, -1.5vw);
                            }
                        }
                    }

                    .close {
                        transform: rotate(45deg);

                        &::after {
                            transform: translate(0, 0vw) rotate(-95deg);
                        }

                        &::before {
                            opacity: 0;
                        }
                    }

                    @media screen and (min-width: 769px) {
                        &:hover {
                            .burger::after { width: 2vw; }
                            .burger::before { width: 1.5vw;}
                            .burger { width: 2.5vw; }
                        }
                    }
                }

                ul {
                    @media screen and (max-width: 768px) {
                        display: none;
                    }

                    li {
                        display: inline-block;
                        margin: 0 7vw 0 0;

                        a {
                            display: block;
                            height: 1.8vw;
                            line-height: 1.7vw;
                            position: relative;
                            font-weight: 500;
                            overflow-y: hidden;

                            &.active {
                              color: var(--sh-blue);
                            }

                            .text-1, .text-2 {
                                transition: all .6s cubic-bezier(.23,1,.32,1);

                                span {
                                    transition: all .6s cubic-bezier(.23,1,.32,1);
                                    position: relative;
                                    display: inline-block;
                                }

                                @for $i from 1 through 8 {
                                    span:nth-of-type(#{$i}) {
                                        transition-delay: calc(0.2s * ($i / 10));
                                    }
                                }
                            }

                            .text-2 {
                                opacity: 0;
                                transform: rotateX(-90deg);
                                color: var(--sh-blue);
                            }

                            &:hover {
                                span { transform: translate(0, -1.8vw); }
                                .text-2 {
                                    transform: rotateX(0deg);
                                    opacity: 1;
                                }

                                .text-1 {
                                    transform: rotateX(90deg);
                                    opacity: 0;
                                }
                            }
                        }
                    }
                }

                #lang {
                    width: 4vw;
                    height: 4vw;
                    display: block;
                    background: transparent;
                    border: none;
                    color: var(--sh-white);
                    font-size: 2vw;
                    transform: translate(-3.5vw, -0.3vw);

                    @media screen and (max-width: 768px) {
                        width: 10vw;
                        height: 5vw;
                        font-size: 4vw;
                    }

                    option {
                        background: var(--sh-blackish);
                        border: none;
                    }
                }
            }
        }
    }
</style>
