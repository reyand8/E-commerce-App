import { FC, useEffect, useState } from 'react';

import { IProductDetails } from '@/types/product.interface';
import Layout from '@/app/components/layout/Layout';
import Breadcrumbs from '@/app/components/screens/productDetails/breadcrumbs/Breadcrumbs';
import ProductNavigation from '@/app/components/screens/productDetails/productNavigation/ProductNavigation';
import ProductCard from '@/app/components/screens/productDetails/productCard/ProductCard';
import { Catalog } from '@/app/components/ui/catalog/Catalog';


const ProductDetails: FC<IProductDetails> = ({ product, products }) => {
	const [cat, setCat] = useState<string>('');

	useEffect((): void => {
		if (product.categoryId === 1 || product.categoryId === 2) {
			setCat('Drinks');
		} else if (product.categoryId === 3) {
			setCat('Desserts');
		} else {
			setCat('All food');
		}
	}, [product.categoryId]);

	return (
		<Layout title={product.name}
			description={`${product.description}`}>
			<div>
				<Breadcrumbs product={product} />
				<ProductNavigation products={products} productId={product.id} />
			</div>
			<ProductCard product={product} />
			{cat && <Catalog products={products} cat={cat} relative={true}/>}
		</Layout>
	);
};

export default ProductDetails;
