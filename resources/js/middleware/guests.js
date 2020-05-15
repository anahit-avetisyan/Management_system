import store from '../store'
import axios from 'axios'

export default (to, from, next) => {
    if (store.getters['auth/check']) {
        axios.get('/api/user-role').then(response => {
            next({ name: response.data.role })
        })
    } else {
        next()
    }
}
