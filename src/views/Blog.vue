<script setup>
    import { getBlogs } from '../firebase';
    import { ref, onMounted } from 'vue';
    import { useI18n } from 'vue-i18n';

    // array for blogs
    const blogs = ref([]);

    onMounted(async () => {
        // getting all the blogs from the collection
        blogs.value = await getBlogs();
    })
</script>

<template>
    <div>
        <h1>Hello Blog</h1>
    </div>
</template>

<style scoped lang="scss">

</style>