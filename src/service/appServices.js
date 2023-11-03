import axios from '../axios';

export const getAllPets = () => {
    return axios.get('/backend_pettu/api/pets/detailInfo/');
};
