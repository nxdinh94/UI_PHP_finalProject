import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { handleCountProductInCartApi } from '~/service/userService';
const initialState = {
    value: { quantityProductInCart: 1 },
    status: 'idol',
};
export const handleFetchQuantityProductInCartThunk = createAsyncThunk(
    'CartSlices/handleFetchQuantityProductInCart',
    async (userId) => {
        const res = await handleCountProductInCartApi(userId);
        return res;
    },
);
export const CartSlices = createSlice({
    name: 'CartSlices',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(handleFetchQuantityProductInCartThunk.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(handleFetchQuantityProductInCartThunk.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value = { ...state.value, quantityProductInCart: action.payload };
            });
    },
});
export const {} = CartSlices.actions;
export default CartSlices.reducer;
