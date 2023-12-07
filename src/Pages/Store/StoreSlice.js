import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllProduct } from '~/service/appServices';
const initialState = {
    value: [],
    status: 'idle',
};
export const handleFetchAllProductThunk = createAsyncThunk('StoreSlices/handleFetchAllProductThunk', async () => {
    const res = await getAllProduct();

    return res;
});
export const StoreSlices = createSlice({
    name: 'StoreSlices',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(handleFetchAllProductThunk.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(handleFetchAllProductThunk.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value = [...action.payload];
            });
    },
});
export const {} = StoreSlices.actions;
export default StoreSlices.reducer;
