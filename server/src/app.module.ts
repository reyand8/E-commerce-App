import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { path } from 'app-root-path';

import { PrismaService } from './prisma.service';
import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';
import { PaymentModule } from './payment/payment.module';
import { CategoryModule } from './categories/category.module';


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