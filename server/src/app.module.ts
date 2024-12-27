import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { path } from 'app-root-path';

import { PrismaService } from './prisma.service';
import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';
import { PaymentModule } from './payment/payment.module';
import { CategoryModule } from './categories/category.module';

/**
 * Main application module.
 *
 * The `AppModule` imports essential modules for the application to function:
 * - `ConfigModule`: Loads environment configuration and makes it globally available.
 * - `ServeStaticModule`: Serves static files from the `/uploads` directory.
 * - `ProductModule`: Manages product-related functionality.
 * - `CategoryModule`: Manages category-related functionality.
 * - `ReviewModule`: Handles review-related functionality.
 * - `PaymentModule`: Manages payment functionality.
 *
 * It also provides the `PrismaService` for database interactions.
 */
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: `${path}/uploads`,
      serveRoot: '/uploads',
    }),
    ProductModule,
    CategoryModule,
    ReviewModule,
    PaymentModule,
  ],
  controllers: [],
  providers: [PrismaService],
})

export class AppModule {}