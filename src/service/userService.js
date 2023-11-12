import axios from '../axios';

export function handleLoginApi(email, password) {
    return axios.post('/backend_pettu/api/login', `username=${email}&password=${password}`, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
}
export function handleRegisterApi(fullName, email, password, rePassword) {
    return axios.post(
        '/backend_pettu/api/register',
        `fullname=${fullName}&email=${email}&password=${password}&re_password=${rePassword}`,
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        },
    );
}

export function Logout() {
    sessionStorage.clear();
}
