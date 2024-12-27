import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Review } from '@prisma/client';

import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/createReview.dto';
import { UpdateReviewDto } from './dto/updateReview.dto';


/**
 * Controller for handling review-related API requests.
 *
 * The `ReviewController` provides the following routes:
 *
 * - `POST /reviews`: Create a new review for a product.
 * - `GET /reviews`: Retrieve all reviews, ordered by creation date (desc).
 * - `GET /reviews/:id`: Retrieve a specific review by ID.
 * - `PATCH /reviews/:id`: Update an existing review by ID.
 * - `DELETE /reviews/:id`: Delete a review by ID.
 */
@Controller('reviews')
export class ReviewController {
	constructor(private readonly reviewService: ReviewService) {}

	@Post()
	async create(@Body() createReviewDto: CreateReviewDto): Promise<Review> {
		return this.reviewService.create(createReviewDto);
	}

	@Get()
	async findAll(): Promise<Review[]> {
		return this.reviewService.findAll();
	}

	@Get(':id')
	async findById(@Param('id') id: string): Promise<Review> {
		return this.reviewService.findById(+id);
	}

	@Patch(':id')
	async update(@Param('id') id: string,
							 @Body() updateReviewDto: UpdateReviewDto): Promise<Review> {
		return this.reviewService.update(+id, updateReviewDto);
	}

	@Delete(':id')
	async remove(@Param('id') id: string): Promise<void> {
		return this.reviewService.remove(+id);
	}
}