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

export function handleUpdateProfileApi(...params) {
    const { userId } = params[0];
    const { fullname } = params[0];
    const { email } = params[0];
    const { address } = params[0];
    const { phone } = params[0];
    const { dob } = params[0];
    const { pinterest } = params[0];
    const { linkedin } = params[0];
    const { twitter } = params[0];
    const { facebook } = params[0];
    const { aboutContent } = params[0];
    console.log(userId, fullname, email, address, phone, dob, twitter, facebook, aboutContent);
    return axios.post(
        '/backend_pettu/api/users/update',
        `user_id=${userId}&fullname=${fullname}&email=${email}&dob=${dob}&address=${address}&phone=${phone}&about_content=${aboutContent}&contact_facebook=${facebook}&contact_twitter=${twitter}&contact_linkedin=${linkedin}&contact_pinterest=${pinterest}`,
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        },
    );
}

export function handleGetRegistedServices(userId) {
    return axios.post('/backend_pettu/api/users/getService', `userId=${userId}`, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
}

export function handleRegisterService(userId, serviceId, register_day, periodTime) {
    return axios.post(
        '/backend_pettu/api/users/registerService',
        `userId=${userId}&serviceId=${serviceId}&register_day=${register_day}&periodTime=${periodTime}`,
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        },
    );
}

export function Logout(userId) {
    sessionStorage.clear();

    return axios.post('/backend_pettu/api/logout', `userId=${userId}`, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
}
export function cancelService(userId, serviceId) {
    return axios.post('/backend_pettu/api/users/deleteService', `userId=${userId}&serviceId=${serviceId}`, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
}

