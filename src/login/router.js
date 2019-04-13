export default {
    path: '/home',
    redirect: '/home',
    component: () => import(/* webpackChunkName: "login" */ '@/App.vue'),
    children: [
        {
            name: 'login',
            path: 'login',
            component: () => import(/* webpackChunkName: "login" */ '@/login/views/login.vue'),
        },
    ],
};
