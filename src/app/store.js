import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';


import counterReducer from '../features/counter/counterSlice';
import postsReducer from '../features/posts/postsSlice';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    posts: postsReducer,
    counter: counterReducer, 
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
});
export const persistor = persistStore(store);
 
