import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    value: [{ id: 0, quantity: 0, intoMoney: 0 }],
    status: 'idle',
};
// export const handleFetchAllTeamThunk = createAsyncThunk('TeamSlices/handleFetchAllTeamThunk', async () => {});
export const PaymentSlices = createSlice({
    name: 'paymentSlices',
    initialState,
    reducers: {
        addProductToBill: (state, action) => {
            state.value = [...state.value, action.payload];
        },
        deleteProductFromBill: (state, action) => {
            state.value.splice(action.payload.index, 1);
        },
        deleteAllProductFromBill: (state) => {
            state.value = [{ id: 0, quantity: 0, intoMoney: 0 }];
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(handleFetchAllTeamThunk.pending, (state) => {
    //             state.status = 'loading';
    //         })
    //         .addCase(handleFetchAllTeamThunk.fulfilled, (state, action) => {
    //             state.status = 'idle';
    //             state.value = [...action.payload];
    //         });
    // },
});
export const { addProductToBill, deleteAllProductFromBill, deleteProductFromBill } = PaymentSlices.actions;
export default PaymentSlices.reducer;
