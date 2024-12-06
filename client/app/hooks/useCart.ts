import {useTypedSelector} from '@/app/hooks/useTypedSelector';
import {ICartItem} from '@/types/cartItem.interface';


export const useCart = () => {
	const cart: ICartItem[] = useTypedSelector(state => state.cart.items);
	const total: number = cart.reduce(
		(total: number, item: { product: { price: number }; quantity: number }) =>
			total + (item.product.price * item.quantity), 0);
	return { cart, total };
};
