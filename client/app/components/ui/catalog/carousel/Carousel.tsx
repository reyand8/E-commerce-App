import { FC } from 'react';

import styles from './Carousel.module.scss';
import { IProduct } from '@/types/product.interface';
import { CarouselItem } from '@/app/components/ui/catalog/carousel/carouselItem/CarouselItem';


export const Carousel: FC<{ products: IProduct[]; cat: string }> = ({ products, cat }) => {
	return (
		<section className={styles.carousel}>
			{ products.map((product: IProduct, index: number) =>
				<CarouselItem
					product={product}
					qty={products.length}
					key={index}
					index={index}
					cat={cat}
				/>
			)}
		</section>
	);
};