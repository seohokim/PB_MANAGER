import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DailyBalanceController } from './daily_balance/daily_balance.controller';
import { DailyBalanceService } from './daily_balance/daily_balance.service';
import { DailyBalanceModule } from './daily_balance/daily_balance.module';

@Module({
	imports: [DailyBalanceModule],
	controllers: [AppController, DailyBalanceController],
	providers: [AppService, DailyBalanceService],
})
export class AppModule {}
