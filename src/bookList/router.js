export default {
    path: '/home',
    redirect: '/home',
    component: () => import(/* webpackChunkName: "bookList" */ '@/App.vue'),
    children: [
        {
            name: 'bookList',
            path: 'BookList',
            component: () => import(/* webpackChunkName: "login" */ '@/bookList/views/book-list.vue'),
        },
    ],
};