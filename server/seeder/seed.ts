import * as dotenv from 'dotenv';
import { Prisma, PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

import { IProductPart, products } from './products.data';

const prisma = new PrismaClient();

const toSlug = (name: string) => {
	return name.replace(/[^a-z0-9]/gi, '-').toLowerCase();
};

const fakerProduct = (product: IProductPart, teaCategory: any, coffeeCategory: any): Prisma.ProductCreateInput => {
	const category = product.category === 'Tea' ? teaCategory : coffeeCategory;
	return {
		slug: toSlug(product.name),
		name: product.name,
		images: product.images,
		description: product.description,
		ingredients: product.ingredients,
		price: product.price,
		category: {
			connect: { id: category.id },
		},
		reviews: {
			createMany: {
				data: Array.from({
					length: faker.number.int({ min: 1, max: 4 })
				}).map(() => ({
					text: faker.lorem.paragraph(),
					rating: faker.number.int({ min: 1, max: 5 })
				}))
			}
		}
	};
};

async function main(): Promise<void> {
	dotenv.config();
	console.log('Database seeding started...');

	const teaCategory = await prisma.category.create({
		data: {
			text: 'Tea',
		}
	});

	const coffeeCategory = await prisma.category.create({
		data: {
			text: 'Coffee',
		}
	});

	await Promise.all(products.map(async (product: IProductPart): Promise<void> => {
		const productData = fakerProduct(product, teaCategory, coffeeCategory);
		await prisma.product.create({ data: productData });
	}));

	console.log('Database was seeded successfully...');
}

main()
	.catch((e) => console.error(e))
	.finally(async (): Promise<void> => {
		await prisma.$disconnect();
	});