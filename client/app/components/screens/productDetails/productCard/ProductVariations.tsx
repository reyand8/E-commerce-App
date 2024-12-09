import { FC } from 'react';

import { IProductVariations } from '@/types/product.interface';
import styles from './ProductCard.module.scss';
import ProductRating from "@/app/components/screens/productDetails/productCard/productVariations/ProductRating";
import {SizeVariations} from '@/app/components/ui/catalog/carousel/carouselItem/SizeVariations';
import {AddToCartButton} from '@/app/components/ui/catalog/button/AddToCartButton';


const ProductVariations: FC<IProductVariations> = ({ product, selItemSize, setSelectedSize }) => {
	const priseIndex: number = product.size.indexOf(selItemSize);
	return (
		<div className={styles.variations}>
			{/*<ProductRating product={product} />*/}
			<SizeVariations
				selectedSize={selItemSize}
				setSelectedSize={setSelectedSize}
				size={product.size}
				variant='medium'
			/>
			<AddToCartButton
				product={{...product, price: product.price[priseIndex]}}
				selectedSize={selItemSize}
				variant='medium'
			/>
		</div>
	);
};

export default ProductVariations;