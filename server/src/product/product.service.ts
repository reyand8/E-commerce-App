import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '@prisma/client';

import { PrismaService } from '../prisma.service';
import { sortType } from './types/sortType';
import { CreateProductDto } from './dto/createProduct.dto';
import { UpdateProductDto } from './dto/updateProduct.dto';
import { ReviewService } from '../review/review.service';


@Injectable()
export class ProductService {
	constructor(
		private prisma: PrismaService, private reviewService: ReviewService) {}

	async findAll(
		type?: sortType,
		take?: number,
		skip?: number,
		categoryIds?: number[]
	): Promise<Product[]> {
		const DEFAULT_TAKE: 100 = 100;
		const DEFAULT_SKIP: 0 = 0;

		if(!take || !skip) {
			take = DEFAULT_TAKE;
			skip = DEFAULT_SKIP;
		}

		const isSortByPrice: boolean =
			type === 'high-to-low' || type === 'low-to-high';
		const isAsc: boolean =
			type === 'oldest' || type === 'low-to-high';
		const orderBy: {[p: string]: string} = {
			[isSortByPrice ? 'price' : 'createdAt']: isAsc ? 'asc' : 'desc',
		};
		const catCondition = categoryIds && categoryIds.length > 0
			? { categoryId: { in: categoryIds } }
			: {};

		return this.prisma.product.findMany({
			where: {
				...catCondition,
			},
			skip,
			take,
			orderBy,
		});
	}

	async create(createProductDto: CreateProductDto): Promise<Product> {
		return this.prisma.product.create({
			data: { ...createProductDto },
		});
	}

	async update(id: number, updateProductDto: UpdateProductDto): Promise<Product> {
		const product =
			await this.prisma.product.findUnique({ where: { id }});
		if (!product)
			throw new NotFoundException(`Product with id: ${id} not found`);
		return this.prisma.product.upsert({
			create: { ...product },
			update: { ...updateProductDto },
			where: { id },
		});
	}

	async remove(id: number): Promise<void> {
		const product =
			await this.prisma.product.findUnique({ where: { id } });
		if (!product) throw new NotFoundException(`Product with id: ${id} not found`);
		await this.prisma.product.deleteMany({ where: { id } });
	}

	async findBySearchString(searchString?: string): Promise<Product[]> {
		return this.prisma.product.findMany({
			where: {
				OR: [
					{
						name: {
							contains: searchString,
							mode: 'insensitive'
						}
					},
					{
						description: {
							contains: searchString,
							mode: 'insensitive'
						}
					}
				]
			}
		});
	}

	async findById(id: number): Promise<Product | number> {
		const product =
			await this.prisma.product.findUnique({
			where: {
				id
			},
			include: {
				reviews: true,
			},
		});
		if (!product)
			throw new NotFoundException(`Product with id: ${id} not found`);

		const averageRating: {rating: number} =
			await this.reviewService.getAverageReviewRatingByProductId(id);

		return { ...product, ...averageRating };
	}

	async findBySlug(slug: string): Promise<Product> {
		const product =
			await this.prisma.product.findUnique({ where: { slug } });
		if (!product)
			throw new NotFoundException(`Product with slug: ${slug} not found`);
		return product;
	}

	async findRelatives(catId: number): Promise<Product[]> {
		const product =
			await this.prisma.product.findMany({
			where: {
				categoryId: {
					in: [catId],
				}
			}
		});
		if (!product)
			throw new NotFoundException(`Product with category id: ${catId} not found`);
		return product;
	}
}