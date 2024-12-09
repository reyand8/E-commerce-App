import {IProduct} from '@/types/product.interface';


export const useProductNavigation = (productId: number, products: IProduct[]) => {
	const currentIndex: number = products.findIndex((product: IProduct) => product.id === productId);

	if (currentIndex === -1) {
		return {
			nextProductSlug: undefined,
			prevProductSlug: undefined,
		};
	}

	const nextProduct: IProduct = products[currentIndex + 1];
	const prevProduct: IProduct = products[currentIndex - 1];

	const nextProductSlug: string = nextProduct?.slug;
	const prevProductSlug: string = prevProduct?.slug;

	return {
		nextProductSlug,
		prevProductSlug,
	};
};
