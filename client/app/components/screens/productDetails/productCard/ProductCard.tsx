import { FC, useState } from 'react';

import styles from './ProductCard.module.scss';
import { IProductCard } from '@/types/product.interface';
import ProductInformation from '@/app/components/screens/productDetails/productCard/ProductInformation';
import ProductImage from '@/app/components/screens/productDetails/productCard/ProductImage';
import ProductVariations from '@/app/components/screens/productDetails/productCard/ProductVariations';


const ProductCard: FC<IProductCard> = ({ product }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [ selItemSize, setSelItemSize] = useState<string>(product.size[0]);
	const [ sizePrise, setSizePrise ] = useState<number>(0)

	const handleSizeChange = (size: string, index: number): void => {
		setSelItemSize(size)
		setSizePrise(index)
	}

	return (
		<div className={styles.card}>
			<ProductInformation
				product={product}
				currentImageIndex={currentImageIndex}
				setCurrentImageIndex={setCurrentImageIndex}
			/>
			<ProductImage product={{...product, price: product.price[sizePrise]}}
						  currentImageIndex={currentImageIndex} />
			<ProductVariations product={product} selItemSize={selItemSize} setSelectedSize={handleSizeChange}/>
		</div>
	);
};

export default ProductCard;