import axios from 'axios';
import queryString from 'query-string';
import { API_BASE_URL } from './constants';


export default class API {
  static get(resource, params = {}) {
    return new Promise((resolve, reject) => {
      const query = queryString.stringify(params)
      const url = `${API_BASE_URL}/${resource}?${query}`
      console.log('url', url)
      axios
        .get(url)
        .then(res => resolve({ data: res.data, status: res.status }))
        .catch(err => reject(err))
    })
  }

  static post(resource, data = {}) {
    return new Promise((resolve, reject) => {
      const url = `${API_BASE_URL}/${resource}`
      axios
        .post(url, data)
        .then(res => resolve({ data: res.data, status: res.status }))
        .catch(err => reject({ errors: err.response.data, status: err.response.status }))
    })
  }

  static update(resource, id, data = {}) {
    return new Promise((resolve, reject) => {
      const url = `${API_BASE_URL}/${resource}/${id}`
      axios
        .put(url, data)
        .then(res => resolve({ data: res.data, status: res.status }))
        .catch(err => reject(err))
    })
  }

  static delete(resource, id) {
    return new Promise((resolve, reject) => {
      const url = `${API_BASE_URL}/${resource}/${id}`
      axios
        .delete(url)
        .then(res => resolve({ status: res.status }))
        .catch(err => reject(err))
    })
  }
}
