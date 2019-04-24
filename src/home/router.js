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
                {
                    name: 'cart',
                    path: 'cart',
                    component: () => import(/* webpackChunkName: "home" */ '@/cart/views/cart.vue'),
                },
                {
                    name: 'order',
                    path: 'order',
                    component: () => import(/* webpackChunkName: "home" */ '@/order/views/order.vue'),
                },
                {
                    name: 'manage',
                    path: 'manage',
                    component: () => import(/* webpackChunkName: "home" */ '@/manage/views/manage.vue'),
                },
            ]
        },
    ],
};
