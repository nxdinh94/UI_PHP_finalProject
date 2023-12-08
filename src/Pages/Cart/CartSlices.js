import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const initialState = {
    value: { quantityProductInCart: 1 },
    status: 'idol',
};
export const handleFetchQuantityProductInCartThunk = createAsyncThunk(
    'CartSlices/handleFetchQuantityProductInCart',
    async () => {},
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
                state.value.quantityProductInCart = action.payload;
            });
    },
});
export const {} = CartSlices.actions;
export default CartSlices.reducer;
