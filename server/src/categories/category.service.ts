import { Injectable } from '@nestjs/common';

import { Category } from '@prisma/client';
import { PrismaService } from '../prisma.service';


/**
 * Service for handling category-related logic.
 *
 * This service provides methods to interact with the `Category` entity
 * through the Prisma ORM.
 */
@Injectable()
export class CategoryService {
    constructor(private prisma: PrismaService) {}
    async findAll(): Promise<Category[]> {
        return this.prisma.category.findMany();
    }
}