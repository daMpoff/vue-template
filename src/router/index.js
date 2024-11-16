import { createRouter, createWebHistory } from 'vue-router';
import AboutTemplate from '@/components/AboutTemplate.vue';

const routes = [
    {
        path: '/',
        name: 'About',
        component: AboutTemplate,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
