import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { carouselSlice } from '@/store/carousel/carousel.slice';
import { cartSlice } from '@/store/cart/cart.slice';

/**
 * Custom hook to bind actions from different slices to the Redux dispatch.
 *
 * The `useActions` hook binds the actions from both `cartSlice` and `carouselSlice` to the Redux dispatch
 * function, so they can be easily dispatched within components.
 */

const rootAction = {
	...cartSlice.actions,
	...carouselSlice.actions,
};

export const useActions = () => {
	const dispatch = useDispatch();
	return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch]);
};