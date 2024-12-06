import * as dotenv from 'dotenv';
import { Prisma, PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { drinks, desserts, salads, burgers, IProductPart } from './products.data';

const prisma = new PrismaClient();

dotenv.config();


const toSlug = (name: string) => {
	return name.replace(/[^a-z0-9]/gi, '-').toLowerCase();
};


const fakerProduct = (product: IProductPart, category: any): Prisma.ProductCreateInput => {
	return {
		slug: toSlug(product.name),
		name: product.name,
		images: product.images,
		description: product.description,
		ingredients: product.ingredients,
		price: product.price,
		size: product.size,
		category: {
			connect: { id: category.id },
		},
		reviews: {
			createMany: {
				data: Array.from({ length: faker.number.int({ min: 1, max: 4 }) }).map(() => ({
					text: faker.lorem.paragraph(),
					rating: faker.number.int({ min: 1, max: 5 }),
				})),
			},
		},
	};
};

async function main(): Promise<void> {
	console.log('Database seeding started...');

	const categories = {
		Tea: await prisma.category.create({ data: { text: 'Tea' } }),
		Coffee: await prisma.category.create({ data: { text: 'Coffee' } }),
		Dessert: await prisma.category.create({ data: { text: 'Dessert' } }),
		Salad: await prisma.category.create({ data: { text: 'Salad' } }),
		Burger: await prisma.category.create({ data: { text: 'Burger' } }),
	};

	const products: IProductPart[] = [...drinks, ...desserts, ...salads, ...burgers];

	await Promise.all(
		products.map(async (product: IProductPart): Promise<void> => {
			const productData = fakerProduct(product, categories[product.category]);
			await prisma.product.create({ data: productData });
		})
	);

	console.log('Database was seeded successfully...');
}

main()
	.catch((e) => {
		console.error('Error seeding the database:', e);
	})
	.finally(async (): Promise<void> => {
		await prisma.$disconnect();
	});
