import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAccountCompetentPersonnel, fetchAccountUsers } from '~/service/adminService';

const initialState = {
    value: {
        competentPersonnel: [],
        usersPersonnel: [],
    },
    status: 'idle',
};

export const handleFetchAccountDataCompetentPersonnelThunk = createAsyncThunk(
    'QLTKSlice/handleFetchAccountDataCompetentPersonnelThunk',
    async () => {
        const res = await fetchAccountCompetentPersonnel();
       
        return res;
    },
);

export const handleFetchAccountDataUsertsThunk = createAsyncThunk(
    'QLTKSlice/handleFetchAccountDataUsertsThunk',
    async () => {
        const res = await fetchAccountUsers();
        return res;
    },
);

export const QLTKSlice = createSlice({
    name: 'QLTKSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(handleFetchAccountDataCompetentPersonnelThunk.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(handleFetchAccountDataCompetentPersonnelThunk.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value = {
                    ...state.value,
                    competentPersonnel: [...action.payload],
                };
            })
            .addCase(handleFetchAccountDataUsertsThunk.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(handleFetchAccountDataUsertsThunk.fulfilled, (state, action) => {
                state.status = 'idle';
                console.log(action.payload)
                state.value = {
                    ...state.value,
                    usersPersonnel: [...action.payload],
                };
            });
    },
});

export const {} = QLTKSlice.actions;
export default QLTKSlice.reducer;
