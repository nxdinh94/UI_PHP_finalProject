import axios from '../axios';

export const getAllPets = () => {
    return axios.get('/backend_pettu/api/pets/petsInfo');
};
export const getAllInTeam = () => {
    return axios.get('/backend_pettu/api/expert_team/teamInfo');
};
export const getAllServices = () => {
    return axios.get('/backend_pettu/api/services/servicesInfo');
}