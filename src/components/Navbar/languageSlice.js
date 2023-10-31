import { createSlice } from '@reduxjs/toolkit';

import { useTranslation } from 'react-i18next';


// const { i18n } = useTranslation();
export const languageSlice = createSlice({
    name: 'counter',
    initialState: {
        lang: 'vi',
    },
    reducers: {
        changeLanguage: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            if (state.value === 'vi') {
                state.value = 'en';
                // i18n.changeLanguage(state.value);
            } else {
                state.value = 'vi';
                // i18n.changeLanguage(state.value);

                
            }
        },
    },
});

// Action creators are generated for each case reducer function
export const { changeLanguage } = languageSlice.actions;

export default languageSlice.reducer;
