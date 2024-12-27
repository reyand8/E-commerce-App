import { Injectable, NotFoundException } from '@nestjs/common';
import { Review } from '@prisma/client';

import { PrismaService } from '../prisma.service';
import { CreateReviewDto } from './dto/createReview.dto';
import { UpdateReviewDto } from './dto/updateReview.dto';


/**
 * Service for handling review-related operations.
 *
 * The `ReviewService` provides methods to:
 * - `findAll()`: Retrieve all reviews, ordered by creation date (descending).
 * - `findById(id: number)`: Retrieve a review by its ID.
 * - `getAverageReviewRatingByProductId(productId: number)`: Calculate the average rating for a product based on reviews.
 * - `create(createReviewDto: CreateReviewDto)`: Create a new review for a product, ensuring the product exists.
 * - `update(id: number, updateReviewDto: UpdateReviewDto)`: Update an existing review by ID.
 * - `remove(id: number)`: Delete a review by ID.
 */
@Injectable()
export class ReviewService {
	constructor(private prisma: PrismaService) {}

	async findAll(): Promise<Review[]> {
		return this.prisma.review.findMany({
			orderBy: {
				createdAt: 'desc',
			}
		});
	}

	async findById(id: number): Promise<Review> {
		const review = await this.prisma.review.findUnique({ where: { id } });
		if (!review)
			throw new NotFoundException(`Review with id: ${id} not found`);
		return review;
	}

	async getAverageReviewRatingByProductId(productId: number)
		: Promise<{ rating: number}> {
		return this.prisma.review.aggregate({
			where: { productId },
			_avg: { rating: true }
		}).then(data => data._avg);
	}

	async create(createReviewDto: CreateReviewDto): Promise<Review> {
		const { productId } = createReviewDto;
		const product = await this.prisma.product.findUnique({ where: { id: productId } });
		if (!product)
			throw new NotFoundException
			(`Can't create review, product with id: ${productId} not found`);
		return this.prisma.review.create({
			data: { ...createReviewDto },
		});
	}

	async update(id: number, updateReviewDto: UpdateReviewDto): Promise<Review> {
		const review = await this.prisma.review.findUnique({ where: { id }});
		if (!review) throw new NotFoundException(`Review with id: ${id} not found`);
		return this.prisma.review.upsert({
			create: { ...review },
			update: { ...updateReviewDto },
			where: { id },
		});
	}

	async remove(id: number): Promise<void> {
		const review = await this.prisma.review.findUnique({ where: { id } });
		if (!review) throw new NotFoundException(`Review with id: ${id} not found`);
		await this.prisma.review.deleteMany({ where: { id } });
	}
}