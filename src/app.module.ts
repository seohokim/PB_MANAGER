import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntriesService } from './entries/entries.service';
import { EntriesController } from './entries/entries.controller';
import { EntriesModule } from './entries/entries.module';
import { StoresService } from './stores/stores.service';
import { StoresController } from './stores/stores.controller';
import { StoresModule } from './stores/stores.module';
import { ProductsModule } from './products/products.module';
import { CatalogController } from './catalog/catalog.controller';
import { CatalogModule } from './catalog/catalog.module';
import { InRequestsService } from './in_requests/in_requests.service';
import { InRequestsController } from './in_requests/in_requests.controller';
import { InRequestsModule } from './in_requests/in_requests.module';
import { OutRequestsModule } from './out_requests/out_requests.module';
import { RepairingRequestsController } from './repairing_requests/repairing_requests.controller';
import { RepairingRequestsService } from './repairing_requests/repairing_requests.service';
import { RepairingRequestsModule } from './repairing_requests/repairing_requests.module';
import { AdminsService } from './admins/admins.service';
import { AdminsController } from './admins/admins.controller';
import { AdminsModule } from './admins/admins.module';
import { PrismaModule } from './prisma/prisma.module';
import { BalanceModule } from 'src/balances/balances.module';
import { BalanceController } from 'src/balances/balances.controller';
import { BalanceService } from 'src/balances/balances.service';

@Module({
	imports: [
		BalanceModule,
		EntriesModule,
		StoresModule,
		ProductsModule,
		CatalogModule,
		InRequestsModule,
		OutRequestsModule,
		RepairingRequestsModule,
		AdminsModule,
		PrismaModule,
	],
	controllers: [
		AppController,
		BalanceController,
		EntriesController,
		StoresController,
		CatalogController,
		InRequestsController,
		RepairingRequestsController,
		AdminsController,
	],
	providers: [
		AppService,
		BalanceService,
		EntriesService,
		StoresService,
		InRequestsService,
		RepairingRequestsService,
		AdminsService,
	],
})
export class AppModule {}
