import * as dotenv from 'dotenv';
import { Prisma, PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

import { IProductPart, products } from './products.data';


const prisma  = new PrismaClient();

const toSlug = (name: string) => {
	return name.replace(/[^a-z0-9]/gi, '-').toLowerCase();
};

const fakerProduct = (product: IProductPart): Prisma.ProductCreateInput => ({
	slug: toSlug(product.name),
	name: product.name,
	images: product.images,
	description: faker.commerce.productDescription(),
	price: faker.number.float({ min: 0.89, max: 14.99}),
	reviews: {
		createMany: {
			data: Array.from({
				length:  faker.number.int({ min: 1, max: 4 })}).map(() => (
				{
					text: faker.lorem.paragraph(),
					rating: faker.number.int({ min: 1, max: 5 })
				}
			))
		},
	},
});

async function main(): Promise<void> {
	dotenv.config();
	console.log('Database was seeded successfully...');
	await Promise.all(products.map(async (product: IProductPart): Promise<void> => {
		await prisma.product.create({ data: fakerProduct(product) });
	}));
}


main()
	.catch((e) => console.error(e))
	.finally(async (): Promise<void> => {
		await prisma.$disconnect();
	});