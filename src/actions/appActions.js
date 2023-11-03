import { getAllPets, getAllInTeam } from '~/service/appServices';

export const getAllPetsAction = () =>{
    return  getAllPets();
}

export const getAllInTeamAction = () =>{
    return  getAllInTeam();
}