// import axios from 'axios';
import axios from '../axios';
export function getApiNews() {
    // return new Promise((resolve) => resolve(axios.request('https://jsonplaceholder.typicode.com/todos/1')));
    return axios.get('/backend_pettu/api/blogs/listBlog');
}

