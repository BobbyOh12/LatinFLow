import axios from 'axios'

export default class UrlService {
    static create(data, onSucces, onError) {
        axios
            .post('api/url', data, { withCredentials: true })
            .then(onSuccess)
            .catch(onError)
    }

    static selectAll(onSuccess, onError) {
        axios
            .get('api/url/selectall', { withCredentials: true })
            .then(onSuccess)
            .catch(onError)
    }

    static selectById(id, onSuccess, onError) {
        axios
            .get(`api/url/${id}`, { withCredentials: true })
            .then(onSuccess)
            .catch(onError)
    }
} 