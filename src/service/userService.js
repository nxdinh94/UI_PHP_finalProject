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
    const { deliveryAddress } = params[0];
    console.log(fullname);
    // console.log(userId, fullname, email, address, phone, dob, twitter, facebook, aboutContent);
    return axios.post(
        '/backend_pettu/api/users/update',
        `user_id=${userId}&fullname=${fullname}&email=${email}&dob=${dob}&address=${address}&phone=${phone}&about_content=${aboutContent}&contact_facebook=${facebook}&contact_twitter=${twitter}&contact_linkedin=${linkedin}&contact_pinterest=${pinterest}&delivery_address=${deliveryAddress}`,
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
export function updateRegistedService(userId, serviceId, usingDate, periodTime) {
    return axios.post(
        '/backend_pettu/api/users/updatePeriodTime',
        `userId=${userId}&serviceId=${serviceId}&periodTime=${periodTime}&usingDate=${usingDate}`,
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        },
    );
}
export function handleAddProductToCartApi(userId, productId, quantity) {
    return axios.post(
        '/backend_pettu/api/users/addProductToCart',
        `userId=${userId}&productId=${productId}&quantity=${quantity}`,
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        },
    );
}
export function handleChangeQuantityProductInCartApi(userId, productId, quantity) {
    return axios.post(
        '/backend_pettu/api/users/updateQuantityInCart',
        `userId=${userId}&productId=${productId}&quantity=${quantity}`,
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        },
    );
}
export function handleDeleteProductInCartApi(userId, productId) {
    // console.log(userId, productId);
    return axios.post('/backend_pettu/api/users/deleteProductInCart', `userId=${userId}&productId=${productId}`, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
}
export function handleGetListProductInCartApi(userId) {
    return axios.post('/backend_pettu/api/users/getListProductCart', `userId=${userId}`, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
}
export function handleCountProductInCartApi(userId) {
    return axios.post('/backend_pettu/api/users/countListProductCart', `userId=${userId}`, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
}
export function handleGetAllFromBilldetail(userId, billId) {
    return axios.post('/backend_pettu/api/users/billDetail', `userId=${userId}&billId=${billId}`, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
}
export function handleGetAllPendingBill(userId) {
    return axios.post('/backend_pettu/api/dashboard/getPendingBill', `userId=${userId}`, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
}
export function handlGetAllApproveBill(userId) {
    return axios.post('/backend_pettu/api/users/getApprovedBill', `userId=${userId}`, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
}
