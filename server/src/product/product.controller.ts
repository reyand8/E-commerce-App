import {
	Controller, Get, Post,
	Body, Patch, Param, Delete,
	Query } from '@nestjs/common';

import { Product } from '@prisma/client';
import { sortType } from './types/sortType';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/createProduct.dto';
import { UpdateProductDto } from './dto/updateProduct.dto';


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