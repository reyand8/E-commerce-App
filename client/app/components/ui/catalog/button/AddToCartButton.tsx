import { Button } from '@chakra-ui/react';
import { FC } from 'react';

import {ISelectedProduct} from '@/types/product.interface';
import {useActions} from '@/app/hooks/useActions';
import {useCart} from '@/app/hooks/useCart';
import {COLORS} from '@/app/config/color.config';
import {ICartItem} from '@/types/cartItem.interface';


interface IAddToCartButton {
	product: ISelectedProduct;
	selectedSize: string;
	variant?: 'small' | 'medium';
}

export const AddToCartButton: FC<IAddToCartButton> = ({
														  product,
														  selectedSize,
														  variant = 'small' }) => {

	const { cart } = useCart();
	const { addToCart, removeFromCart } = useActions();

	const isSmall: boolean = variant === 'small';
	const currentElement: ICartItem | undefined = cart.find(
		(cartItem: any) => cartItem.product.id === product.id && cartItem.size === selectedSize
	);

	return (
		<div style={{ textAlign: 'center'}}>
			<Button onClick={() =>
				currentElement
					?
					removeFromCart({ id: currentElement.id })
					:
					addToCart({
				product,
				quantity: 1,
				size: selectedSize,
			})}
							color={isSmall ? COLORS.green : COLORS.white}
							backgroundColor={isSmall ? undefined : COLORS.green}
							_hover={{
								backgroundColor: isSmall ? undefined : COLORS['dark-green']
							}}
							className='tracking-widest font-normal'
							marginTop={8}
							borderRadius={20}
							fontWeight={500}
							textTransform='uppercase'
							fontSize={isSmall ? 12 : 16}
			>
				{ currentElement ? 'Remove from basket' : 'Add to basket' }
			</Button>
		</div>
	);
};