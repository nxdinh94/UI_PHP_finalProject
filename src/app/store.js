import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import { fetchNewsAsyn } from '../Pages/News/NewsSlice';

import newsSlices from '../Pages/News/NewsSlice';
import languageReducer from '~/components/Navbar/languageSlice';

import { changeLanguage } from '~/components/Navbar/languageSlice';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    newsSlices: newsSlices,
    language: languageReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
});
export const persistor = persistStore(store);

//dispatch immediately when bootstrap app
store.dispatch(fetchNewsAsyn());
// store.dispatch(changeLanguage());
