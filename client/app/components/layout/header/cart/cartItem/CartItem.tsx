import { FC } from 'react';
import Image from 'next/image';

import styles from './../Cart.module.scss';
import {ICartItem} from '@/types/cartItem.interface';
import {editCurrencyFormat} from "@/app/utils/editCurrencyFormat";
import {CartActions} from '@/app/components/layout/header/cart/cartItem/cartActions/CartActions';


export const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
	const { name, price, images } = item.product;

	return (
		<div className={styles.item}>
			<Image src={images[0]} width={100} height={100} alt={name} />
			<div>
				<div className={styles.name}>{name}</div>
				<div className={styles.price}>
					{ editCurrencyFormat(price) }
				</div>
				<div className={styles.variation}>
					{ item.size }
				</div>
				<CartActions item={item} />
			</div>
		</div>
	);
};
