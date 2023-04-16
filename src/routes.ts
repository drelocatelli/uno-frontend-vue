import Index from './components/index/index.vue';
import {createWebHistory, createRouter} from 'vue-router';

const routes = [
    { path: '/', component: Index },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;