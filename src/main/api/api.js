import { request } from '@/utils/request';

export default {
    favor (params) {
        return request.post('http://localhost:8081/book/querybyfavor', params);
    },
    topList () {
        return request.get('http://localhost:8081/book/queryordersold');
    },
    type () {
        return request.get('http://localhost:8081/book/querybooktype');
    },
    bookList(params) {
        return request.post('http://localhost:8081/book/querybookbyname', params);
    },
}