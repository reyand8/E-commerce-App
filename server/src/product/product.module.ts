import { Module } from '@nestjs/common';

import { PrismaService } from '../prisma.service';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ReviewService } from '../review/review.service';

@Module({
	controllers: [ProductController],
	providers: [ProductService, PrismaService, ReviewService],
})

export class ProductModule {}