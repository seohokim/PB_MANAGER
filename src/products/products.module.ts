import { Module } from '@nestjs/common';
import { ProductsController } from 'src/products/products.controller';
import { ProductsService } from 'src/products/products.service';

@Module({
	providers: [ProductsService],
	controllers: [ProductsController],
})
export class ProductsModule {}
