import { createSlice } from '@reduxjs/toolkit';



// const { i18n } = useTranslation();
export const languageSlice = createSlice({
    name: 'counter',
    initialState: {
        lang: 'en',
    },
    reducers: {
        changeLanguage: (state) => {
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
