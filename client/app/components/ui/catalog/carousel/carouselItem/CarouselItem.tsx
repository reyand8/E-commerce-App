import { FC, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import cn from 'clsx';

import { AddToCartButton } from '@/app/components/ui/catalog/button/AddToCartButton';
import { SizeVariations } from '@/app/components/ui/catalog/carousel/carouselItem/SizeVariations';
import { CarouselNavigation } from '@/app/components/ui/catalog/carousel/carouselItem/carouselNavigation/CarouselNavigation';
import { useCarousel } from '@/app/components/ui/catalog/carousel/carouselItem/useCarousel';
import { ICarouselItem } from '@/types/carousel.interface';
import {TypeSize} from '@/types/sliceCart.interface';
import {useActions} from '@/app/hooks/useActions';
import styles from '../Carousel.module.scss';


export const CarouselItem: FC<ICarouselItem> = ({ product, qty, index, key, cat }) => {
	const [selectedSize, setSelectedSize] = useState<TypeSize>('SHORT');
	const { selectedItemIndex } = useCarousel(cat);
	const { selectSlide } = useActions();
	const isActive = index === selectedItemIndex;

	return (
		<motion.div
			className={cn(styles.item, { [styles.active]: isActive })}
			initial={{ scale: 1 }}
			animate={isActive ? { scale: 1.19 } : {}}
			transition={{ duration: 0.6, type: 'tween' }}
			aria-label="Select-item"
			role="button"
			key={key}>
			<div>
				<CarouselNavigation
					onSelectedSlide={() => selectSlide({ carouselId: cat, index })}
					product={product}
					isActive={isActive}
					qty={qty}
					cat={cat}
				/>
				<div className={styles.heading} onClick={() => selectSlide({ carouselId: cat, index })}>
					<span>{product.name}</span>
				</div>
				{isActive ? (
					<>
						{
							cat === 'Drinks' ? (
								<SizeVariations selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
							) : <></>
						}
						<AddToCartButton product={product} selectedSize={selectedSize} />
						<Link href={`/product/${product.slug}`} className={styles.link}>More details</Link>
					</>
				) : (
					<div className={styles.information}>{product.description}</div>
				)}
			</div>
		</motion.div>
	);
};