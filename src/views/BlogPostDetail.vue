<script setup>
    import Footer from '@/components/Footer.vue';
    import { getBlogPostById } from '../firebase';
    import { ref, onMounted, inject } from 'vue';

    const router = inject('router');
    const blogPost = ref(null);

    async function gettingBlogPostById(postId) {
        blogPost.value = await getBlogPostById(postId);
        console.log(blogPost.value);
    }

    onMounted(async () => {
        const postId = router.currentRoute.value.params.postId;
        await gettingBlogPostById(postId)
    });
</script>

<template>
    <div v-if="blogPost" class="content-container">
        <h2>{{ blogPost[0].title}}</h2>
        <p>{{ blogPost[0].content }}</p>
    </div>

    <Footer></Footer>
</template>

<style scoped lang="scss">
    .content-container {
        width: 100vw;
        padding: 10vw 5vw;
        color: var(--sh-white);

        h2 {
            font-size: 4.5vw;
            text-align: center;
        }

        p {
            font-size: 1.5vw;
            line-height: 2vw;
            margin-top: 5vw;
            text-align: justify;
        }
    }
</style>
