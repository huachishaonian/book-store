import { request } from '@/utils/request';

export default {
    login (params) {
        return request.get('', { params });
    },
    register (params) {
        return request.post('', params);
    }
}