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
    getOrder(params) {
        return request.post('http://localhost:8081/order/querybyname', params);
    },
    searchOrder(params) {
        return request.post('http://localhost:8081/order/querybyid', params);
    },
    deleteOrder(params) {
        return request.delete('http://localhost:8081/order/delorder', { data: params });
    },
    comBook(params) {
        return request.post('http://localhost:8081/book/evaluatebook', params);
    },
}