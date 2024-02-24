import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import userSlice from './User/userSlice';

const rootReducer = combineReducers({
    user: userSlice
})

const persistConfig = {
    key: 'root',
    storage,
    version: 1,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})


export const persistor = persistStore(store);