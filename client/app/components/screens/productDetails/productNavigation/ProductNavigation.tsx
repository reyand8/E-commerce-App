import { FC } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import cn from 'clsx';

import {useProductNavigation} from '@/app/components/screens/productDetails/productNavigation/UseProductNavigation';
import styles from './ProductNavigation.module.scss';
import {IProductNavigation} from '@/types/product.interface';


const ProductNavigation: FC<IProductNavigation> = ({ productId, products }) => {
	const { nextProductSlug, prevProductSlug } = useProductNavigation(productId, products);

	return (
			<div className={styles.nav}>
				<Link href={`/product/${prevProductSlug}`}
					className={cn({
						disabled: !prevProductSlug
					})}>
					<ChevronLeftIcon boxSize={45} color='#333'/>
				</Link>
				<Link href={`/product/${nextProductSlug}`}
					className={cn({
						disabled: !nextProductSlug
					})}>
					<ChevronRightIcon boxSize={45} color='#333'/>
				</Link>
			</div>
	);
};

export default ProductNavigation;