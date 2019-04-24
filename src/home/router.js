export default {
    path: '/',
    redirect: '/home',
    component: () => import(/* webpackChunkName: "home" */ '@/App.vue'),
    children: [
        {
            name: 'Home',
            path: 'home',
            component: () => import(/* webpackChunkName: "home" */ '@/home/views/home.vue'),
            redirect: { name: 'main' },
            children: [
                {
                    name: 'main',
                    path: 'main',
                    component: () => import(/* webpackChunkName: "home" */ '@/main/views/main.vue'),
                },
                {
                    name: 'bookList',
                    props: true,
                    path: 'bookList/:bookName/:type',
                    component: () => import(/* webpackChunkName: "home" */ '@/bookList/views/book-list.vue'),
                },
                {
                    name: 'bookDetail',
                    props: true,
                    path: 'bookDetail/:bookId',
                    component: () => import(/* webpackChunkName: "home" */ '@/home/views/book-detail.vue'),
                },
            ]
        },
    ],
};
