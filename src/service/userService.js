import axios from '../axios';

export function handleLoginApi(email, password) {
    return axios.post('/backend_pettu/api/login', `username=${email}&password=${password}`, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
}

export function Logout(){
    sessionStorage.clear();
}
