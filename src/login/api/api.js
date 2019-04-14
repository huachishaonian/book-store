import { request } from '@/utils/request';

export default {
    login (params) {
        return request.get('http://localhost:8081/user/login', { params });
    },
    register (params) {
        return request.post('http://localhost:8081/user/register', params);
    }
}