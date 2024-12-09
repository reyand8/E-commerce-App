import { FC } from 'react';

import { IProduct } from '@/types/product.interface';
import {Carousel} from '@/app/components/ui/catalog/carousel/Carousel';
import styles from '@/app/components/ui/catalog/Catalog.module.scss';


export const Catalog: FC<{ products: IProduct[]; cat: string; relative?: boolean;  }> = ({ products, cat, relative }) => {

	return (
		<div className='relative'>
			<div className={styles.category}>
				{
					relative
						? <span>Relative Products</span>
						: <span>{cat}</span>
				}
			</div>
			<Carousel products={products} cat={cat}/>
		</div>
	);
};
