import axios from '~/axios';
export function fetchAccountData() {
    return axios.get('/backend_pettu/api/dashboard/listCompetentPersonnel');
}
export function handleStatusAccountApi(user_id, newStatus) {
    return axios.post('/backend_pettu/api/dashboard/updateStatusAccount', `user_id=${user_id}&status=${newStatus}`, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
}
