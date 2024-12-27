import {
	Controller, Get, Post,
	Body, Patch, Param, Delete,
	Query } from '@nestjs/common';

import { Product } from '@prisma/client';
import { sortType } from './types/sortType';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/createProduct.dto';
import { UpdateProductDto } from './dto/updateProduct.dto';


/**
 * Controller for managing product-related operations.
 *
 * This controller handles HTTP requests for:
 * - Creating a new product.
 * - Updating an existing product.
 * - Deleting a product by ID.
 * - Retrieving products with optional filters and sorting.
 * - Searching for products by a search string.
 * - Retrieving a single product by ID or slug.
 * - Fetching related products for a specific product.
 *
 * Routes:
 * - `POST /products`: Creates a new product.
 * - `PATCH /products/:id`: Updates a product by its ID.
 * - `DELETE /products/:id`: Deletes a product by its ID.
 * - `GET /products`: Retrieves all products with optional sorting and pagination.
 * - `GET /products/search`: Searches for products by a search string.
 * - `GET /products/:id`: Retrieves a product by its ID.
 * - `GET /products/slug/:slug`: Retrieves a product by its slug.
 * - `GET /products/relatives/:id`: Fetches related products for a given product ID.
 */
@Controller('products')
export class ProductController {
	constructor(private readonly productService: ProductService) {}

	@Post()
	async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
		return this.productService.create(createProductDto);
	}

	@Patch(':id')
	async update(@Param('id') id: string,
				 @Body() updateProductDto: UpdateProductDto): Promise<Product> {
		return this.productService.update(+id, updateProductDto);
	}

	@Delete(':id')
	async remove(@Param('id') id: string): Promise<void> {
		return this.productService.remove(+id);
	}

	@Get()
	async findAll(
		@Query('sortType') type?: sortType,
		@Query('take') take?: string,
		@Query('skip') skip?: string,
		@Query('categoryIds') categoryIds?: string,
	): Promise<Product[]> {
		const categoryIdsArray: number[] = categoryIds
			? categoryIds.split(',').map(id => +id)
			: undefined;
		return this.productService.findAll(
			type, +take, +skip, categoryIdsArray);
	}

	@Get('search')
	async findBySearchString(
		@Query('searchString') searchString?: string,
	): Promise<Product[]> {
		return this.productService.findBySearchString(searchString);
	}

	@Get(':id')
	async findById(@Param('id') id: string): Promise<Product | number> {
		return this.productService.findById(+id);
	}

	@Get('slug/:slug')
	async findBySlug(@Param('slug') slug: string): Promise<Product> {
		return this.productService.findBySlug(slug);
	}

	@Get('/relatives/:id')
	async findRelatives(@Param('id') id: string): Promise<Product[]> {
		return this.productService.findRelatives(+id);
	}
}