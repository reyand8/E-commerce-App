import { FC } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

import styles from './CarouselNavigation.module.scss';
import {useActions} from '@/app/hooks/useActions';
import {ICarouselNavigation} from '@/types/carousel.interface';


export const CarouselNavigation: FC<ICarouselNavigation> = ({
																product, isActive, onSelectedSlide,
																qty, cat }) => {
	const { prevSlide, nextSlide } = useActions();

	return (
		<div className={styles.navigation} style={{ display: 'flex', flexDirection: 'row' }}>
			{isActive && (
				<div className={styles.arrows}>
					<button className={styles.arrow} onClick={() => prevSlide({ carouselId: cat })}>
						<ChevronLeftIcon boxSize={66} />
					</button>
					<button
						className={styles.arrow}
						onClick={() => nextSlide({ carouselId: cat, carouselLength: qty })}>
						<ChevronRightIcon boxSize={66} />
					</button>
				</div>
			)}
			<button className={styles.image} onClick={() => onSelectedSlide()}>
				<Image
					alt={product.name}
					src={product.images[0]} width={315}
					height={315}
					draggable={false}
				/>
			</button>
		</div>
	);
};