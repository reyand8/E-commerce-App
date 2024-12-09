import { FC } from 'react';
import Image from 'next/image';
import cn from 'clsx';

import { IProductInformation} from '@/types/product.interface';
import styles from './ProductCard.module.scss';


const ProductInformation: FC<IProductInformation> = ({ product, currentImageIndex, setCurrentImageIndex }) => {
	const {name, description, ingredients, images} = product
	return (
		<div className={styles.information}>
			<h2>{name}</h2>
			<div>
				<p>
					{description}
				</p>
			</div>
			<h4>Ingredients</h4>
			<div>
				<p>
					{ingredients}
				</p>
			</div>
			{images.map((image: string, index: number) => (
				<button key={image} onClick={() => setCurrentImageIndex(index)}
						className={cn({
							[styles.active]: index === currentImageIndex
						})}>
					<Image src={image} alt='' width={72} height={72} />
				</button>
			))}
		</div>
	);
};

export default ProductInformation;
