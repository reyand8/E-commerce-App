import { Product } from '@prisma/client';


export interface IProductPart extends Pick<Product, 'name' | 'images'> {
	category: 'Tea' | 'Coffee' | 'Dessert' | 'Salad' | 'Burger';
	description: string;
	ingredients: string;
	size: string[];
	price: number[];
}


export const drinks: IProductPart[] = [
	{
		name: 'Berry Morse and Cappuccino-Midnight Mint',
		images: ['/uploads/images/products/drinks/berry-morse.png', '/uploads/images/products/drinks/cappuccino.png'],
		category: 'Coffee',
		description: 'Refreshing berry Morse paired with aromatic cappuccino and a hint of mint.',
		ingredients: 'Berries, milk, coffee, mint, sugar',
		size: ['240 ml', '350 ml', '470 ml', '590 ml'],
		price: [3.99, 4.99, 5.99, 7.49],
	},
	{
		name: 'Green Tea',
		images: ['/uploads/images/products/drinks/green-tea.png'],
		category: 'Tea',
		description: 'Light and healthy green tea with a rich aroma.',
		ingredients: 'Green tea, water',
		size: ['240 ml', '350 ml', '470 ml', '590 ml'],
		price: [2.49, 3.49, 4.49, 5.99],
	},
	{
		name: 'Lemonade',
		images: ['/uploads/images/products/drinks/lemonade.png'],
		category: 'Tea',
		description: 'Refreshing lemonade with natural lemon juice.',
		ingredients: 'Lemon, sugar, water, mint',
		size: ['240 ml', '350 ml', '470 ml', '590 ml'],
		price: [3.29, 4.29, 5.29, 6.79],
	},
	{
		name: 'Mojito',
		images: ['/uploads/images/products/drinks/mohito.png'],
		category: 'Tea',
		description: 'Classic non-alcoholic mojito with lime and mint.',
		ingredients: 'Lime, mint, sugar, water, ice',
		size: ['240 ml', '350 ml', '470 ml', '590 ml'],
		price: [3.99, 4.99, 6.49, 7.99],
	},
	{
		name: 'Mokaccino',
		images: ['/uploads/images/products/drinks/mokaccino.png'],
		category: 'Coffee',
		description: 'Rich mokaccino with creamy foam and a deep chocolate flavor.',
		ingredients: 'Coffee, milk, cocoa, sugar',
		size: ['240 ml', '350 ml', '470 ml', '590 ml'],
		price: [4.49, 5.49, 6.99, 8.49],
	},
	{
		name: 'Caramelle',
		images: ['/uploads/images/products/drinks/caramelle.png'],
		category: 'Coffee',
		description: 'Coffee with a smooth caramel taste and velvety texture.',
		ingredients: 'Coffee, milk, caramel syrup, sugar',
		size: ['240 ml', '350 ml', '470 ml', '590 ml'],
		price: [4.79, 5.79, 7.29, 8.79],
	},
	{
		name: 'Cappuccino',
		images: ['/uploads/images/products/drinks/cappuccino.png'],
		category: 'Coffee',
		description: 'Classic cappuccino with rich, frothy foam.',
		ingredients: 'Coffee, milk, sugar',
		size: ['240 ml', '350 ml', '470 ml', '590 ml'],
		price: [3.99, 4.99, 6.49, 7.99],
	},
];

export const desserts: IProductPart[] = [
	{
		name: 'Cinnabon',
		images: ['/uploads/images/products/desserts/cinnamon.png'],
		category: 'Dessert',
		description: 'Warm, soft cinnabon topped with creamy frosting and cinnamon.',
		ingredients: 'Flour, sugar, cinnamon, butter, cream cheese',
		size: ['120 g'],
		price: [3.99],
	},
	{
		name: 'Macaron',
		images: ['/uploads/images/products/desserts/macaron.png'],
		category: 'Dessert',
		description: 'Delicate French macarons with a crispy shell and creamy filling.',
		ingredients: 'Almond flour, sugar, egg whites, butter, flavorings',
		size: ['80 g'],
		price: [2.49],
	},
	{
		name: 'Fruit Cake',
		images: ['/uploads/images/products/desserts/cake3.png'],
		category: 'Dessert',
		description: 'A light and refreshing cake filled with fresh seasonal fruits.',
		ingredients: 'Flour, sugar, eggs, fresh fruits, cream',
		size: ['200 g'],
		price: [6.99],
	},
	{
		name: 'Sponge Cake',
		images: ['/uploads/images/products/desserts/cake2.png'],
		category: 'Dessert',
		description: 'Fluffy sponge cake with layers of whipped cream and vanilla.',
		ingredients: 'Flour, sugar, eggs, cream, vanilla',
		size: ['350 g'],
		price: [5.49],
	},
	{
		name: 'Nut Cake',
		images: ['/uploads/images/products/desserts/cake4.png'],
		category: 'Dessert',
		description: 'Rich nut cake with crunchy nuts and a hint of caramel.',
		ingredients: 'Flour, sugar, eggs, nuts, caramel',
		size: ['380 g'],
		price: [6.49],
	},
	{
		name: 'Chocolate Cake',
		images: ['/uploads/images/products/desserts/cake1.png'],
		category: 'Dessert',
		description: 'Decadent chocolate cake with rich chocolate layers and creamy frosting.',
		ingredients: 'Flour, sugar, cocoa, eggs, butter, cream',
		size: ['150 g'],
		price: [6.99],
	},
];

export const salads: IProductPart[] = [
	{
		name: 'Greek Salad',
		images: ['/uploads/images/products/salads/salad1.png'],
		category: 'Salad',
		description: 'A classic salad with fresh tomatoes, cucumbers, onions, olives, and feta cheese.',
		ingredients: 'Tomatoes, cucumbers, onions, olives, feta cheese, olive oil, oregano',
		size: ['220 g'],
		price: [4.99],
	},
	{
		name: 'Caesar Salad',
		images: ['/uploads/images/products/salads/salad2.png'],
		category: 'Salad',
		description: 'Crispy romaine lettuce with croutons, Parmesan cheese, and Caesar dressing.',
		ingredients: 'Romaine lettuce, croutons, Parmesan cheese, Caesar dressing',
		size: ['240 g'],
		price: [5.49],
	},
	{
		name: 'Garden Salad',
		images: ['/uploads/images/products/salads/salad3.png'],
		category: 'Salad',
		description: 'Fresh and healthy salad with a mix of lettuce, tomatoes, cucumbers, and carrots.',
		ingredients: 'Lettuce, tomatoes, cucumbers, carrots, olive oil, vinegar',
		size: ['260 g'],
		price: [7.99],
	},
];

export const burgers: IProductPart[] = [
	{
		name: 'Classic Beef Burger',
		images: ['/uploads/images/products/burgers/burger4.png'],
		category: 'Burger',
		description: 'Juicy beef patty with lettuce, tomato, onion, pickles, and special sauce in a toasted bun.',
		ingredients: 'Beef patty, lettuce, tomato, onion, pickles, bun, special sauce',
		size: ['450 g'],
		price: [9.99],
	},
	{
		name: 'Chicken Burger',
		images: ['/uploads/images/products/burgers/burger3.png'],
		category: 'Burger',
		description: 'Crispy chicken fillet with fresh lettuce, tomato, and mayo in a soft bun.',
		ingredients: 'Chicken fillet, lettuce, tomato, mayo, bun',
		size: ['420 g'],
		price: [6.99],
	},
	{
		name: 'Veggie Burger',
		images: ['/uploads/images/products/burgers/burger2.png'],
		category: 'Burger',
		description: 'A plant-based patty with lettuce, tomato, onion, and vegan mayo in a whole grain bun.',
		ingredients: 'Veggie patty, lettuce, tomato, onion, vegan mayo, whole grain bun',
		size: ['240 g'],
		price: [7.49],
	},
	{
		name: 'BBQ Bacon Burger',
		images: ['/uploads/images/products/burgers/burger1.png'],
		category: 'Burger',
		description: 'Smoky BBQ sauce, crispy bacon, cheddar cheese, and beef patty in a toasted bun.',
		ingredients: 'Beef patty, bacon, cheddar cheese, BBQ sauce, bun',
		size: ['320 g'],
		price: [8.49],
	},
];