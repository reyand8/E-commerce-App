import { Product } from '@prisma/client';

export interface IProductPart extends Pick<Product, 'name' | 'images'> {}


export const products: IProductPart[] = [
	{
		name: 'Berry Morse and Cappuccino-Midnight Mint',
		images: [
			'/uploads/images/products/berry-morse.png',
			'/uploads/images/products/cappuccino.png',
		],
	},
	{
		name: 'Green tea',
		images: [
			'/uploads/images/products/green-tea.png',
		],
	},
	{
		name: 'Lemonade',
		images: [
			'/uploads/images/products/lemonade.png',
		],
	},
	{
		name: 'Mohito',
		images: [
			'/uploads/images/products/mohito.png',
		],
	},
	{
		name: 'Mokaccino',
		images: [
			'/uploads/images/products/mokaccino.png',
		],
	},
	{
		name: 'Caramelle',
		images: [
			'/uploads/images/products/caramelle.png',
		],
	},
	{
		name: 'Cappuccino',
		images: [
			'/uploads/images/products/capuccino.png',
		],
	},
];