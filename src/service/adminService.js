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
    console.log(userId, serviceId);
    return axios.post('/backend_pettu/api/dashboard/confirmRegisterService',`userId=${userId}&serviceId=${serviceId}`, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
}
