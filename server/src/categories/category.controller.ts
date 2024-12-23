import { Controller, Get } from '@nestjs/common';

import { Category } from '@prisma/client';
import { CategoryService } from './category.service';


@Controller('categories')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}
    @Get()
    async findAll(): Promise<Category[]> {
        return this.categoryService.findAll();
    }
}