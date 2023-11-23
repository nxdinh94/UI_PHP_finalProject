import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllServices } from '~/service/appServices';
const initialState = {
    value: [],
    status: 'idle',
};
export const handleGetAllServicesThunk = createAsyncThunk('ServicesSlice/handleGetAllServices', async () => {
    const res = await getAllServices();

    return res;
});
export const ServicesSlice = createSlice({
    name: 'ServicesSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(handleGetAllServicesThunk.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(handleGetAllServicesThunk.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value = [...action.payload];
            });
    },
});
export const {} = ServicesSlice.actions;
export default ServicesSlice.reducer;
