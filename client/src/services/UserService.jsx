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
}