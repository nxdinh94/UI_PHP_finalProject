import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import { fetchNewsAsyn } from '../Pages/News/NewsSlice';

import newsSlices from '../Pages/News/NewsSlice';
import languageReducer from '~/components/Navbar/languageSlice';

import StoreSlices from '~/Pages/Store/StoreSlice';
import { handleFetchAllProductThunk } from '~/Pages/Store/StoreSlice';

import QLTKSlice from '~/Pages/Admin/QLTK/QLTKSlices';
import {
    handleFetchAccountDataCompetentPersonnelThunk,
    handleFetchAccountDataUsertsThunk,
} from '~/Pages/Admin/QLTK/QLTKSlices';

import TeamSlices from '~/Pages/Team/TeamSlices';
import { handleFetchAllTeamThunk } from '~/Pages/Team/TeamSlices';

import ServicesSlices from '~/Pages/Service/ServicesSlice';
import { handleGetAllServicesThunk } from '~/Pages/Service/ServicesSlice';

// import { changeLanguage } from '~/components/Navbar/languageSlice';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    newsSlices: newsSlices,
    language: languageReducer,
    QLTKSlice: QLTKSlice,
    teamSlices: TeamSlices,
    servicesSlices: ServicesSlices,
    storeSlices: StoreSlices,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
});
export const persistor = persistStore(store);

//dispatch immediately when bootstrap app
store.dispatch(fetchNewsAsyn());
store.dispatch(handleFetchAccountDataCompetentPersonnelThunk());
store.dispatch(handleFetchAccountDataUsertsThunk());
store.dispatch(handleFetchAllTeamThunk());
store.dispatch(handleGetAllServicesThunk());
store.dispatch(handleFetchAllProductThunk());
