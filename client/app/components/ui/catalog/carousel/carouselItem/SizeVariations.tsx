import { FC } from 'react';
import cn from 'clsx';

import styles from '../Carousel.module.scss';
import {TypeSize} from "@/types/sliceCart.interface";
import {ICarouselVariations} from "@/types/carousel.interface";


const SIZES: TypeSize[] = ['SHORT', 'TALL', 'GRANDE', 'VENT'];


export const SizeVariations: FC<ICarouselVariations> = ({
	selectedSize, setSelectedSize,
	variant ='short',
}) => {

	return (
		<div className={cn(styles.variations, {
			[styles.medium]: variant === 'medium',
		})}>
			{SIZES.map(size =>(
				<button
					key={size}
					className={cn({
						[styles.active]: selectedSize === size
					})}
					onClick={ () => setSelectedSize(size) }

				>{ size }</button>
			))}
		</div>
	);
};
