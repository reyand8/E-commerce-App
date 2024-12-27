interface IProduct {
	id: number;
	slug: string;
	name: string;
	description?: string;
	images: [string];
	price: number;
	createdAt: string;
	updatedAt: string;
}

interface IProductItem {
	id: number;
	product: IProduct;
	quantity: number;
	size: string;
}

export type Cart = IProductItem[];