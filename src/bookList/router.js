export default {
    path: '/home',
    redirect: '/home',
    component: () => import(/* webpackChunkName: "bookList" */ '@/App.vue'),
    children: [
        {
            name: 'bookList',
            props: true,
            path: 'bookList/:bookName',
            component: () => import(/* webpackChunkName: "login" */ '@/bookList/views/book-list.vue'),
        },
    ],
};