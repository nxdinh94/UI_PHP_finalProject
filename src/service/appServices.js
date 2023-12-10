import axios from '../axios';

export const getAllPets = () => {
    return axios.get('/backend_pettu/api/pets/petsInfo');
};
// lay tat ca thanh vien
export const getAllInTeam = () => {
    return axios.get('/backend_pettu/api/expert_team/teamInfo');
};
export const getAllServices = () => {
    return axios.get('/backend_pettu/api/services/servicesInfo');
};
export const getTimeUsingService = () => {
    return axios.get('/backend_pettu/api/services/getTimeWorking');
};
export const isRegisteredService = (userId, serviceId) => {
    return axios.post('/backend_pettu/api/dashboard/isRegistered', `userId=${userId}&serviceId=${serviceId}`, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
};
export const getAllProduct = () => {
    return axios.get('/backend_pettu/api/products/listProduct');
};
// them san pham muon mua vao billdetail, json
export const addToBillDetail = (userId, paymentProduct) => {
    console.log(userId, paymentProduct);
    return axios.post(
        '/backend_pettu/api/users/checkOutCart',
        { userId: userId, paymentProduct: paymentProduct },
        {
            headers: {
                'Content-Type': 'application/json',
            },
        },
    );
};
// buoc thanh toan
export const handleAddToBill = (userId, paymentProduct, paymentMethod) => {
    // console.log(userId, paymentProduct);
    return axios.post(
        '/backend_pettu/api/users/paymentCart',
        { userId: userId, payment_method: paymentMethod, paymentProduct: paymentProduct },
        {
            headers: {
                'Content-Type': 'application/json',
            },
        },
    );
};
