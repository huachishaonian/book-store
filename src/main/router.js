export default {
    path: '/home',
    component: () => import(/* webpackChunkName: "main" */ '@/home/views/home.vue'),
    children: [
        {
            name: 'main',
            path: 'main',
            component: () => import(/* webpackChunkName: "main" */ '@/main/views/main.vue'),
        },
    ],
};
