export default {
    path: '/',
    redirect: '/home',
    component: () => import(/* webpackChunkName: "home" */ '@/App.vue'),
    children: [
        {
            name: 'Home',
            path: 'home',
            component: () => import(/* webpackChunkName: "account" */ '@/home/views/home.vue'),
        },
    ],
};
