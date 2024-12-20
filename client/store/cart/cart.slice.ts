import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {IAddCartPayload, ICartInitialState, IChangeQuantityCardPayload} from '@/types/sliceCart.interface';


const initialState: ICartInitialState = {
    items: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IAddCartPayload>) => {
            const isExistSizeAndProduct = state.items.some(
                (item) => item.size === action.payload.size
                    && item.product.id === action.payload.product.id
            );
            if (!isExistSizeAndProduct) {
                state.items.push({ ...action.payload, id: state.items.length });
            }
        },

        removeFromCart: (state, action: PayloadAction<{ id: number }> ) => {
            state.items = state.items.filter(
                item => item.id !== action.payload.id
            );
        },

        changeQuantity: (state, action: PayloadAction<IChangeQuantityCardPayload>) => {
            const { id, type } = action.payload;
            const item = state.items.find(item => item.id === id);
            if (item) {
                if (type === 'increase') item.quantity++;
                console.log(item.quantity)
                console.log(action.payload)
                if (type === 'decrease' && item.quantity > 1) item.quantity--;
            }
        },

        resetCart: (state) => {
            state.items = [];
        }
    }
});