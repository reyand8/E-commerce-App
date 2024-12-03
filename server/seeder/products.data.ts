import { Product } from '@prisma/client';

export interface IProductPart extends Pick<Product, 'name' | 'images'> {
	category: 'Tea' | 'Coffee';
	description: string;
	ingredients: string;
	price: number;
}


export const products: IProductPart[] = [
	{
		name: 'Berry Morse and Cappuccino-Midnight Mint',
		images: [
			'/uploads/images/products/berry-morse.png',
			'/uploads/images/products/cappuccino.png',
		],
		category: 'Coffee',
		description: 'Refreshing berry Morse paired with aromatic cappuccino and a hint of mint.',
		ingredients: 'Berries, milk, coffee, mint, sugar',
		price: 5.99,
	},
	{
		name: 'Green Tea',
		images: ['/uploads/images/products/green-tea.png'],
		category: 'Tea',
		description: 'Light and healthy green tea with a rich aroma.',
		ingredients: 'Green tea, water',
		price: 3.49,
	},
	{
		name: 'Lemonade',
		images: ['/uploads/images/products/lemonade.png'],
		category: 'Tea',
		description: 'Refreshing lemonade with natural lemon juice.',
		ingredients: 'Lemon, sugar, water, mint',
		price: 4.29,
	},
	{
		name: 'Mojito',
		images: ['/uploads/images/products/mohito.png'],
		category: 'Tea',
		description: 'Classic non-alcoholic mojito with lime and mint.',
		ingredients: 'Lime, mint, sugar, water, ice',
		price: 4.99,
	},
	{
		name: 'Mokaccino',
		images: ['/uploads/images/products/mokaccino.png'],
		category: 'Coffee',
		description: 'Rich mokaccino with creamy foam and a deep chocolate flavor.',
		ingredients: 'Coffee, milk, cocoa, sugar',
		price: 5.49,
	},
	{
		name: 'Caramelle',
		images: ['/uploads/images/products/caramelle.png'],
		category: 'Coffee',
		description: 'Coffee with a smooth caramel taste and velvety texture.',
		ingredients: 'Coffee, milk, caramel syrup, sugar',
		price: 5.79,
	},
	{
		name: 'Cappuccino',
		images: ['/uploads/images/products/cappuccino.png'],
		category: 'Coffee',
		description: 'Classic cappuccino with rich, frothy foam.',
		ingredients: 'Coffee, milk, sugar',
		price: 4.99,
	},
];
