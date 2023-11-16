import axios from '~/axios';
export function fetchAccountData() {
    return axios.get('/backend_pettu/api/dashboard/listCompetentPersonnel');
}
