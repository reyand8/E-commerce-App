import { FC } from 'react';
import { IProductImage} from '@/types/product.interface';
import Image from 'next/image';

import styles from './ProductCard.module.scss';
import {editCurrencyFormat} from '@/app/utils/editCurrencyFormat';


const ProductImage: FC<IProductImage> = ({ product, currentImageIndex }) => {
	return (
		<div className={styles.image}>
			<div className={styles.main}>
				<Image
					src={product.images[currentImageIndex]}
					alt={product.name}
					width={260} height={260}
				/>
			</div>
			<div className={styles.price}>{ editCurrencyFormat(product.price) }</div>
		</div>
	);
};

export default ProductImage;