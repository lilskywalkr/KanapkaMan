<script setup>
    import Footer from '@/components/Footer.vue';
    import BlogPost from '@/components/blog/BlogPost.vue';
    import ContactForm  from '@/components/ContactForm.vue';
    import { getBlogs } from '../firebase';
    import { ref, onMounted, computed } from 'vue';
    import { useI18n } from 'vue-i18n';

    // array for blogs
    const blogs = ref([]);
    const pageSize = 1; // Number of blogs per page
    const currentPage = ref(1);

    async function gettingBlogs() {
        blogs.value =  await getBlogs();
        console.log(blogs.value)
    }

    gettingBlogs();

    onMounted(async () => {
        await gettingBlogs();
    })

    // Compute the visible blogs based on the current page
    const visibleBlogs = computed(() => {
        const startIndex = (currentPage.value - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        return blogs.value.slice(startIndex, endIndex);
    });

    // Compute the total number of pages
    const totalPages = computed(() => Math.ceil(blogs.value.length / pageSize));

    // Method to load the next page
    const loadNextPage = () => {
        if (currentPage.value < totalPages.value) {
            currentPage.value++;
        }
    };
</script>

<template>
    <div class="blogs-container">
        <header>
            <h2 v-html="$t('blogPostsHeader')"></h2>
        </header>

        <div class="blogs">
            <BlogPost v-for="(blog, index) in blogs" :key="index" 
                :title="blog.title" 
                :author="blog.author" 
                :time="blog.time" 
                :date="blog.date" 
                :desc="blog.desc" 
            />

            <BlogPost v-for="(blog, index) in blogs" :key="index" 
                :title="blog.title" 
                :author="blog.author" 
                :time="blog.time" 
                :date="blog.date" 
                :desc="blog.desc" 
            />

            <BlogPost v-for="(blog, index) in blogs" :key="index" 
                :title="blog.title" 
                :author="blog.author" 
                :time="blog.time" 
                :date="blog.date" 
                :desc="blog.desc" 
            />
        </div>

        <div v-if="totalPages > 1" class="pagination">
            <button @click="loadNextPage" :disabled="currentPage === totalPages">
                Next Page
            </button>
        </div>
    </div>

    <ContactForm />
    <Footer></Footer>
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
    }
</style>