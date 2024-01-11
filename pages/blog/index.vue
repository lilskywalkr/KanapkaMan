<script setup lang="ts">
import moment from 'moment'

// array for blogs
const blogs: Ref<any> = ref([])
const pageSize = 6 // Number of blogs per page
const currentPage = ref(1)

const { getBlogsLanguage } = useBlog()

const { locale } = useI18n()

async function gettingBlogs() {
  blogs.value = await getBlogsLanguage(locale.value)
}

onMounted(async () => {
  await gettingBlogs()
})

// Compute the visible blogs based on the current page
const visibleBlogs = computed(() => {
  const startIndex = (currentPage.value - 1) * pageSize
  const endIndex = startIndex + pageSize

  return blogs.value.slice(startIndex, endIndex)
})

// Compute the total number of pages
const totalPages = computed(() => Math.ceil(blogs.value.length / pageSize))

// Method to load the next page
function loadNextPage() {
  if (currentPage.value < totalPages.value)
    currentPage.value++
}

// Method to load the previous page
function loadPreviousPage() {
  if (currentPage.value > 1)
    currentPage.value--
}
</script>

<template>
  <div class="blogs-container">
    <header>
      <h2>{{ $t('blogPostsHeader') }}</h2>
    </header>

    <div class="blogs">
      <BlogPost
        v-for="(blog, index) in visibleBlogs"
        :key="index"
        :title="blog.title"
        :author="blog.author"
        :time="blog.time"
        :date="moment.unix(`${blog.date.seconds}`).format('DD<br>MMM<br>YYYY')"
        :desc="blog.desc"
        :post-name="blog.title.toLowerCase().replace(/[.,?]/gm, ' ').split(' ').join('-')"
        :post-id="index"
      />
    </div>

    <div
      v-if="totalPages > 1"
      class="pagination"
    >
      <button
        type="button"
        :disabled="currentPage === totalPages / totalPages"
        class="arrow-container"
        @click="loadPreviousPage"
      >
        <div
          id="arrow_1"
          class="arrow"
        />

        <div class="go">
          <p>{{ $t('go') }}</p>
        </div>
      </button>

      <p class="page-number">
        {{ currentPage }}
      </p>

      <button
        type="button"
        :disabled="currentPage === totalPages"
        class="arrow-container"
        @click="loadNextPage"
      >
        <div
          id="arrow_2"
          class="arrow"
        />

        <div class="go">
          <p>{{ $t('go') }}</p>
        </div>
      </button>
      <!--
        <button @click="loadPreviousPage" :disabled="currentPage === totalPages / totalPages">Prev Page</button>
        <button @click="loadNextPage" :disabled="currentPage === totalPages">Next Page</button>
      -->
    </div>
  </div>

  <ContactForm />

  <Footer />
</template>

<style scoped lang="scss">
    .blogs-container {
        width: 100vw;
        height: auto;
        padding: 5vw 5vw;
        // border: 0.1vw solid var(--sh-white);

        header {
            margin-bottom: 3vw;
            margin-left: 5vw;

            h2 {
                font-size: 7vw;
                color: var(--sh-white);
                line-height: 7vw;
            }
        }

        .blogs {
            width: 100%;
            height: auto;
            display: flex;
            flex-flow: row wrap;
            justify-content: space-around;
            // gap: 3vw;
        }

        .pagination {
            width: 100%;
            margin-top: 5vw;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 5vw;

            @media screen and (max-width: 768px) {
                margin-top: 10vw;
            }

            .page-number {
                font-size: 2vw;
                color: var(--sh-blue);

                @media screen and (max-width: 768px) {
                    font-size: 5vw;
                }
            }

            .arrow-container {
                width: 4vw;
                height: 4vw;
                border-radius: 4vw;
                border: none;
                background: var(--sh-blue);
                display: grid;
                align-items: center;
                justify-items: center;
                cursor: pointer;
                position: relative;
                overflow: hidden;

                @media screen and (max-width: 768px) {
                    width: 8vw;
                    height: 8vw;
                }

                .arrow {
                    width: 2vw;
                    height: 0.1vw;
                    background: var(--sh-white);
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

                #arrow_1 {
                    transform: rotate(-180deg);
                }

                #arrow_2 {
                    transform: rotate(0deg);
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
                        transform: translate(0, 9vw);
                        font-size: 2vw;
                    }
                }

                &:hover {
                    #arrow_1 {
                        transform: translate(1vw, 1vw) rotate(45deg);
                        opacity: 0;
                    }

                    #arrow_2 {
                        transform: translate(1vw, 1vw) rotate(90deg);
                        opacity: 0;
                    }

                    .go {
                        width: 100%;
                        transform: translate(0, 0);
                    }
                }
            }
        }
    }
</style>
