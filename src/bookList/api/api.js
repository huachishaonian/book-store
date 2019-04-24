import { request } from '@/utils/request';

export default {
    bookList(params) {
        return request.post('http://localhost:8081/book/querybookbyname', params);
    },
    bookListByType(params) {
        return request.post('http://localhost:8081/book/querybookbytype', params);
    },
    getBookDetail(params) {
        return request.post('http://localhost:8081/book/querybookdetail', params);
    },
    addCart(params) {
        return request.post('http://localhost:8081/order/addcart', params);
    },
}