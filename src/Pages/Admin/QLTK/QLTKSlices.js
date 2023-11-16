import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAccountData } from '~/service/adminService';

const initialState = {
    value: [],
    status: 'idle',
};
export const handleFetchAccountData = createAsyncThunk('QLTKSlice/handleFetchAccountData', async () => {
    const res = await fetchAccountData();

    return res;
});
export const QLTKSlice = createSlice({
    name: 'QLTKSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(handleFetchAccountData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(handleFetchAccountData.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value = [...action.payload];
            });
    },
});
export const {} = QLTKSlice.actions;
export default QLTKSlice.reducer;
