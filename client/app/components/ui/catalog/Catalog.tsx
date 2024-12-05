import { FC, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import styles from './Catalog.module.scss';
import { IProduct } from '@/types/product.interface';
import {EnumSorting} from "@/app/components/ui/catalog/sorting/sorting.interface";
import {ProductService} from "@/services/productService";
import {Sorting} from "@/app/components/ui/catalog/sorting/Sorting";
import Loader from "@/app/components/ui/loader/Loader";
import {Carousel} from "@/app/components/ui/catalog/carousel/Carousel";


export const Catalog: FC<{ products: IProduct[] }> = ({ products }) => {
	const [sortType, setSortType] = useState<EnumSorting>(EnumSorting.NEWEST);
	const { data, isLoading } = useQuery({
		queryKey: ['products', sortType],
		queryFn: () => ProductService.getProducts(sortType),
		initialData: products,
	});

	return (
		<div className='relative'>
			<div className={styles.sorting}>
				<Sorting sortType={ sortType } setSortType={setSortType}/>
			</div>
			{ isLoading ? <Loader />
				: <Carousel products={data} /> }
		</div>
	);
};
