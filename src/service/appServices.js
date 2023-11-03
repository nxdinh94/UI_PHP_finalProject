import axios from '../axios';

export const getAllPets = () => {
    return axios.get('/backend_pettu/api/pets/detailInfo/');
};
export const getAllInTeam = () => {
    return axios.get('backend_pettu/api/expert-team/detailInfo');
};
