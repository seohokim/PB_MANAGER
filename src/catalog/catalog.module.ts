import { Module } from '@nestjs/common';
import { CatalogController } from 'src/catalog/catalog.controller';
import { CatalogService } from 'src/catalog/catalog.service';

@Module({
	controllers: [CatalogController],
	providers: [CatalogService],
})
export class CatalogModule {}
