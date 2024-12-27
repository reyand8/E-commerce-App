import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {ICarouselInitialState} from '@/types/sliceCarousel.interface';


const initialState: ICarouselInitialState = {
    'Drinks': 0,
    'Desserts': 0,
    'All food': 0,
};

/**
 * Redux slice for managing carousel state.
 *
 * The `carouselSlice` contains the following actions:
 *
 * - `nextSlide`: Moves the carousel to the next slide, based on the current `carouselId` and its `carouselLength`.
 * - `prevSlide`: Moves the carousel to the previous slide, based on the current `carouselId`.
 * - `selectSlide`: Sets the carousel to a specific slide based on the given `carouselId` and `index`.
 */
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