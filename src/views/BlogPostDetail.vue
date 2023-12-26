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
        await gettingBlogPostById(postId);
    });
</script>

<template>
    <div class="content-container">
        <p></p>
    </div>

    <Footer></Footer>
</template>

<style scoped lang="scss">
    .content-container {
        width: 100vw;
        padding: 10vw 5vw;
        font-size: 3vw;
        line-height: 4vw;
        color: var(--sh-white);
    }
</style>
