import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { 
    persistReducer, persistStore,
    FLUSH, REHYDRATE, PAUSE, PERSIST,
    PURGE, REGISTER,
} from 'redux-persist';
import {Persistor} from 'redux-persist/es/types';

import { cartSlice } from '@/store/cart/cart.slice';
import { carouselSlice } from '@/store/carousel/carousel.slice';


const rootReducer = combineReducers({
    cart: cartSlice.reducer,
    carousel: carouselSlice.reducer,
});

const persistConfig = {
    key: 'online-shop',
    storage,
    whitelist: ['cart']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor: Persistor = persistStore(store);

export type TypeRootState = ReturnType<typeof rootReducer>;