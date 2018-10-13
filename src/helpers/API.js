import axios from 'axios';
import queryString from 'query-string';

API_BASE_URL = 'http://eb66bc8f.ngrok.io/api/'

export default class API {
    static get(resource, params={}) {
        const query = queryString.stringify(params)
        const url = `${API_BASE_URL}/${resource}/${query}`
        axios.get(url).then(res => res)
    }

    static post(resource, data) {

    }

    static update(resource, data) {

    }

    static delete(resource, data) {

    }
}