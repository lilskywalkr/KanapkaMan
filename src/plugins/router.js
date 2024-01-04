import { createRouter, createWebHistory } from "vue-router";
import BlogPostDetail from '@/views/BlogPostDetail.vue';

const routes = [
    {path: '/', name: 'home', component: () => import('@/views/Home.vue')},
    {path: '/services', name: 'services', component: () => import('@/views/Services.vue')},
    {path: '/about', name: 'about', component: () => import('@/views/About.vue')},
    {path: '/team', name: 'team', component: () => import('@/views/Team.vue')},
    {path: '/cookies', name: 'cookies', component: () => import('@/views/Cookies.vue')},
    {path: '/policy', name: 'policy', component: () => import('@/views/Policy.vue')},
    {path: '/blog', name: 'blog', component: () => import('@/views/Blog.vue')},
    {path: '/blog/:postId/:postName', name: 'blogPostDetail', component: BlogPostDetail},
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router
