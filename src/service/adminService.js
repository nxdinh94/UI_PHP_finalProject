import axios from '~/axios';
export function fetchAccountCompetentPersonnel() {
    return axios.get('/backend_pettu/api/dashboard/listCompetentPersonnel');
}
export function fetchAccountUsers() {
    return axios.get('/backend_pettu/api/dashboard/listUser');
}
export function handleStatusAccountApi(user_id, newStatus) {
    return axios.post('/backend_pettu/api/dashboard/updateStatusAccount', `user_id=${user_id}&status=${newStatus}`, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
}
export function handleGetPendingService() {
    return axios.get('/backend_pettu/api/dashboard/getPendingService', {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
}
export function handleAcceptRegisterServiceApi(userId, serviceId) {
    return axios.post(
        '/backend_pettu/api/dashboard/confirmRegisterService',
        `userId=${userId}&serviceId=${serviceId}`,
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        },
    );
}
export function handleDeleteProduct(productId) {
    return axios.post('/backend_pettu/api/dashboard/deleteProduct', `productid=${productId}`, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
}
export function handleUpdateProducts(...params) {
    const { productId } = params[0];

    const { product_name } = params[0];

    const { newSlug } = params[0];
    const { thumpnail2 } = params[0];
    const { description } = params[0];
    const { ingredient } = params[0];
    const { price } = params[0];
    const { dimensions } = params[0];
    const { color } = params[0];
    const { origin } = params[0];
    const { product_status } = params[0];
    const { promotionid } = params[0];
    const { quantity } = params[0];
    const { evaluate_quantity } = params[0];
    // console.log(evaluate_quantity);
    return axios.post(
        '/backend_pettu/api/dashboard/uppdateProduct',
        `productid=${productId}&product_name=${product_name}&slug=${newSlug}&thumpnail2=${thumpnail2}&description=${description}&ingredient=${ingredient}&price=${price}&dimensions=${dimensions}&origin=${origin}&product_status=${product_status}&quantity=${quantity}&color=${color}&evaluate_quantity=${evaluate_quantity}`,
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        },
    );
}
export function handleAddProduct(...params) {
    const { product_name } = params[0];
    const { newSlug } = params[0];
    const { thumpnail2 } = params[0];
    const { description } = params[0];
    const { ingredient } = params[0];
    const { price } = params[0];
    const { dimensions } = params[0];
    const { color } = params[0];
    const { origin } = params[0];
    const { product_status } = params[0];
    // const { promotionid } = params[0];
    const { quantity } = params[0];
    const { evaluate_quantity } = params[0];
    const { evaluate_star } = params[0];
    // console.log(evaluate_quantity, origin, description);
    return axios.post(
        '/backend_pettu/api/dashboard/addProduct',
        `evaluate_star=${evaluate_star}&product_name=${product_name}&slug=${newSlug}&thumpnail2=${thumpnail2}&description=${description}&ingredient=${ingredient}&price=${price}&dimensions=${dimensions}&origin=${origin}&product_status=${product_status}&quantity=${quantity}&color=${color}&evaluate_quantity=${evaluate_quantity}`,
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        },
    );
}
export function handleGetAllPendingBill() {
    return axios.get('backend_pettu/api/dashboard/getAllPendingBill ', {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
}
//duyet don hang
export function handleAcceptBill(billId) {
    return axios.post('/backend_pettu/api/dashboard/changeBillStatus', `billId=${billId}`, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
}
export function handleDeleteService(serviceId) {
    // console.log('delete service', serviceId);
    return axios.post('/backend_pettu/api/dashboard/deleteService', `serviceId=${serviceId}`, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
}
export function handleUpdateService(...params) {
    const { serviceId } = params[0];
    const { name } = params[0];
    const { newSlug } = params[0];
    const { icon } = params[0];
    const { descr } = params[0];
    const { content } = params[0];
    const { cost } = params[0];
    const { teamid } = params[0];
    return axios.post(
        '/backend_pettu/api/dashboard/updateService',
        `serviceId=${serviceId}&name=${name}&slug=${newSlug}&icon=${icon}&dersc=${descr}&content=${content}&cost=${cost}&teamid=${teamid}`,
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        },
    );
}
export function handleAddService(...params) {
    const { serviceName } = params[0];
    const { newSlug } = params[0];
    const { thumpnail2 } = params[0];
    const { description } = params[0];
    const { content } = params[0];
    const { price } = params[0];
    const { teamid } = params[0];

    return axios.post(
        '/backend_pettu/api/dashboard/addService',
        `name=${serviceName}&slug=${newSlug}&icon=${thumpnail2}&dersc=${description}&content=${content}&cost=${price}&teamid=${teamid}`,
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        },
    );
}

export function handleGetAllPaidAndUnPaidService() {
    // console.log('delete service', serviceId);
    return axios.get('/backend_pettu/api/dashboard/getUnpaidService', {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
}
export function handleAcceptPaidService(userId, serviceId) {
    // console.log('fads service', serviceId, userId);
    return axios.post(
        '/backend_pettu/api/dashboard/changeServicePaymentStatus',
        `userId=${userId}&serviceId=${serviceId}`,
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        },
    );
}

export function handleCountListStaff() {
    return axios.get('/backend_pettu/api/dashboard/countListExpert');
}
export function handleCountListUser() {
    return axios.get('/backend_pettu/api/dashboard/countListUser');
}
export function handleCountListProduct() {
    return axios.get('/backend_pettu/api/dashboard/countListProduct');
}
export function handleCountListService() {
    return axios.get('/backend_pettu/api/dashboard/countListService');
}
// dem so luong don hang chua duoc duyet
export function handleCountListStatusBill() {
    return axios.get('/backend_pettu/api/dashboard/countListStatusBill');
}
//dem so luong dich vu thanh toan cho duyet
export function handleCountListStatusUnpaymentServices() {
    return axios.get('/backend_pettu/api/dashboard/countListStatusPayment');
}
export function handleCountListPendingService() {
    return axios.get('/backend_pettu/api/dashboard/countListStatusUser_Service');
}
