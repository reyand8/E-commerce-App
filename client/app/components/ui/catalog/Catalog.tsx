import { FC } from 'react';

import { IProduct } from '@/types/product.interface';
import {Carousel} from '@/app/components/ui/catalog/carousel/Carousel';
import styles from '@/app/components/ui/catalog/Catalog.module.scss';


export const Catalog: FC<{ products: IProduct[]; cat: string  }> = ({ products, cat }) => {

	return (
		<div className='relative'>
			<div className={styles.category}>
				<span>{cat}</span>
			</div>
			<Carousel products={products} cat={cat}/>
		</div>
	);
};
