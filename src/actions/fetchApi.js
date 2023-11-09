import axios from 'axios';

export function getApiFake() {
    return new Promise((resolve) => resolve(axios.request('https://jsonplaceholder.typicode.com/todos/1')));
}
