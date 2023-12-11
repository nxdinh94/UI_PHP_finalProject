import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllInTeam } from '~/service/appServices';

const initialState = {
    value: [],
    status: 'idle',
};
export const handleFetchAllTeamThunk = createAsyncThunk('TeamSlices/handleFetchAllTeamThunk', async () => {
    const res = await getAllInTeam();
    console.log('team', res);
    return res;
});
export const TeamSlices = createSlice({
    name: 'TeamSlices',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(handleFetchAllTeamThunk.pending, (state) => {
                state.status = 'loading'; 
            })
            .addCase(handleFetchAllTeamThunk.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value = [...action.payload];
            });
    },
});
export const {} = TeamSlices.actions;
export default TeamSlices.reducer;
