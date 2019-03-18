import axios from 'axios'

export default class UserService {
    static login(data, onSuccess, onError) {
        axios
            .post('api/user/login', data, { withCredentials: true })
            .then(onSuccess)
            .catch(onError)
    }

    static create(data, onSuccess, onError) {
        axios
            .post('api/user/create', data, { withCredentials: true })
            .then(onSuccess)
            .catch(onError)
    }

    static selectById(id, onSuccess, onError) {
        axios
            .get(`api/user/${id}`, { withCredentials: true })
            .then(onSuccess)
            .catch(onError)
    }

    static selectAll(onSuccess, onError) {
        axios
            .get('api/user/selectall', { withCredentials: true })
            .then(onSuccess)
            .catch(onError)
    }

    static delete(id, onSuccess, onError) {
        axios
            .delete(`api/user/${id}`, { withCredentials: true })
            .then(onSuccess)
            .catch(onError)
    }

    static update(id, data, onSuccess, onError) {
        axios
            .put(`api/user/${id}`, data, { withCredentials: true })
            .then(onSuccess)
            .catch(onError)
    }
} 