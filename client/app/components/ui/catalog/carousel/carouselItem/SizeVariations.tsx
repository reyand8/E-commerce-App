import { FC } from 'react';
import cn from 'clsx';

import styles from '../Carousel.module.scss';
import {ICarouselVariations} from "@/types/carousel.interface";


export const SizeVariations: FC<ICarouselVariations> = ({
	selectedSize, setSelectedSize,
	variant ='short', size
}) => {

	return (
		<div className={cn(styles.variations, {
			[styles.medium]: variant === 'medium',
		})}>
			{size.map((sizeItem: string, index: number) =>(
				<button
					key={sizeItem}
					className={cn({
						[styles.active]: selectedSize === sizeItem
					})}
					onClick={ () => setSelectedSize(sizeItem, index) }
				>{ sizeItem }</button>
			))}
		</div>
	);
};
