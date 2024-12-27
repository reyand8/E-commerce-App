import {useTypedSelector} from '@/app/hooks/useTypedSelector';
import {ICartItem} from '@/types/cartItem.interface';

/**
 * Custom hook to retrieve the cart items and calculate the total price.
 *
 * The `useCart` hook provides access to the current items in the cart and calculates
 * the total price based on the price and quantity of each item.
 */
export const useCart = () => {
	const cart: ICartItem[] = useTypedSelector(state => state.cart.items);
	const total: number = cart.reduce(
		(total: number, item: { product: { price: number }; quantity: number }) =>
			total + (item.product.price * item.quantity), 0);
	return { cart, total };
};
