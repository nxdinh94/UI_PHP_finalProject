import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
    handleCountListStaff,
    handleCountListUser,
    handleCountListProduct,
    handleCountListService,
    handleCountListPendingService,
    handleCountListStatusBill,
    handleCountListStatusUnpaymentServices,
} from '~/service/adminService';

const initialState = {
    value: {
        countStaff: 0,
        countUser: 0,
        countProduct: 0,
        countServices: 0,
        countPendingServices: 0,
        countpendingBill: 0,
        countServiesPaid: 0,
    },
    status: 'idle',
};
export const handleCountListStaffThunk = createAsyncThunk('CountQuantitySlices/handleCountListStaffThunk', async () => {
    const res = await handleCountListStaff();
    // console.log('team', res);
    if (res.status) {
        return res.data;
    } else return 0;
});
export const handleCountListUserThunk = createAsyncThunk('CountQuantitySlices/handleCountListUserThunk', async () => {
    const res = await handleCountListUser();
    // console.log('team', res);
    if (res.status) {
        return res.data;
    } else return 0;
});
export const handleCountListProductThunk = createAsyncThunk(
    'CountQuantitySlices/handleCountListProductThunk',
    async () => {
        const res = await handleCountListProduct();
        // console.log('team', res);
        if (res.status) {
            return res.data;
        } else return 0;
    },
);
export const handleCountListServicesThunk = createAsyncThunk(
    'CountQuantitySlices/handleCountListServicesThunk',
    async () => {
        const res = await handleCountListService();
        // console.log('team', res);
        if (res.status) {
            return res.data;
        } else return 0;
    },
);
export const handleCountListPendingServiceThunk = createAsyncThunk(
    'CountQuantitySlices/handleCountListPendingServiceThunk',
    async () => {
        const res = await handleCountListPendingService();
        // console.log('team', res);
        if (res.status) {
            return res.data;
        } else return 0;
    },
);
export const handleCountListPendingBillThunk = createAsyncThunk(
    'CountQuantitySlices/handleCountListPendingBillThunk',
    async () => {
        const res = await handleCountListStatusBill();
        // console.log('team', res);
        if (res.status) {
            return res.data;
        } else return 0;
    },
);
export const handleCountListStatusUnpaymentServicesThunk = createAsyncThunk(
    'CountQuantitySlices/handleCountListStatusUnpaymentServicesThunk',
    async () => {
        const res = await handleCountListStatusUnpaymentServices();
        // console.log('team', res);
        if (res.status) {
            return res.data;
        } else return 0;
    },
);

export const CountQuantitySlices = createSlice({
    name: 'CountQuantitySlices',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(handleCountListStaffThunk.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(handleCountListStaffThunk.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value.countStaff = action.payload;
            })
            .addCase(handleCountListUserThunk.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(handleCountListUserThunk.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value.countUser = action.payload;
            })
            .addCase(handleCountListProductThunk.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(handleCountListProductThunk.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value.countProduct = action.payload;
            })
            .addCase(handleCountListServicesThunk.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(handleCountListServicesThunk.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value.countServices = action.payload;
            })
            .addCase(handleCountListPendingServiceThunk.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(handleCountListPendingServiceThunk.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value.countPendingServices = action.payload;
            })
            .addCase(handleCountListPendingBillThunk.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(handleCountListPendingBillThunk.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value.countpendingBill = action.payload;
            })
            .addCase(handleCountListStatusUnpaymentServicesThunk.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(handleCountListStatusUnpaymentServicesThunk.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value.countServiesPaid = action.payload;
            });
    },
});
export const {} = CountQuantitySlices.actions;
export default CountQuantitySlices.reducer;
