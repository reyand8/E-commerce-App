import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {ICarouselInitialState} from '@/types/sliceCarousel.interface';


const initialState: ICarouselInitialState = {
    'Drinks': 0,
    'Desserts': 0,
    'All food': 0,
};

export const carouselSlice = createSlice({
    name: 'carousel',
    initialState,
    reducers: {
        nextSlide: (
            state,
            action: PayloadAction<{ carouselId: string; carouselLength: number }>
        ): void => {
            const { carouselId, carouselLength } = action.payload;
            if (state[carouselId] !== undefined && state[carouselId] < carouselLength - 1) {
                state[carouselId] += 1;
            }
        },
        prevSlide: (state, action: PayloadAction<{ carouselId: string }>): void => {
            const { carouselId } = action.payload;
            if (state[carouselId] !== undefined && state[carouselId] > 0) {
                state[carouselId] -= 1;
            }
        },
        selectSlide: (
            state,
            action: PayloadAction<{ carouselId: string; index: number }>
        ): void => {
            const { carouselId, index } = action.payload;
            if (state[carouselId] !== undefined) {
                state[carouselId] = index;
            }
        },
    },
});