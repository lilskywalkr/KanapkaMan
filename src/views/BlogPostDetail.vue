<script setup>
    import Footer from '@/components/Footer.vue';
    import ContactForm from '@/components/ContactForm.vue'
    import { getBlogPostById } from '../firebase';
    import { ref, onMounted, inject } from 'vue';

    const router = inject('router');
    const blogPost = ref(null);

    async function gettingBlogPostById(postId) {
        blogPost.value = await getBlogPostById(postId);
    }

    onMounted(async () => {
        const postId = router.currentRoute.value.params.postId;
        await gettingBlogPostById(postId)
    });
</script>

<template>
    <div v-if="blogPost" class="content-container">
        <h2>{{ blogPost[0].title}}</h2>
        <p v-html="blogPost[0].content "></p>
    </div>

    <ContactForm />
    <Footer></Footer>
</template>

<style scoped lang="scss">
    .content-container {
        width: 100vw;
        padding: 10vw 5vw;
        color: var(--sh-white);

        @media screen and (max-width: 768px) {
            
        }

        h2 {
            font-size: 4.5vw;
            text-align: center;

            @media screen and (max-width: 768px) {
                font-size: 6.5vw;
            }
        }

        p {
            font-size: 1.5vw;
            line-height: 2.5vw;
            margin-top: 5vw;
            text-align: justify;

            @media screen and (max-width: 768px) {
                font-size: 3.5vw;
                line-height: 4.5vw;
            }
        }
    }
</style>
