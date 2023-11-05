import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {path: '/', name: 'home', component: () => import('@/views/Home.vue')},
    {path: '/services', name: 'services', component: () => import('@/views/Services.vue')},
    {path: '/about', name: 'about', component: () => import('@/views/About.vue')},
    {path: '/contact', name: 'contact', component: () => import('@/views/Contact.vue')},
    {path: '/projects', name: 'projects', component: () => import('@/views/Projects.vue')},
]

const router = createRouter({
    routes,
    history: createWebHashHistory(),
})

export default router
