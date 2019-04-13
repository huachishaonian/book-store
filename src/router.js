import Vue from 'vue';
import Router from 'vue-router';
import homeRouter from '@/home/router';
import loginRouter from '@/login/router';
import bookListRouter from '@/bookList/router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        homeRouter,
        loginRouter,
        bookListRouter,
    ],
});
