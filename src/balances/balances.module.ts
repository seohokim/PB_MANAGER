import { Module } from '@nestjs/common';
import { BalanceController } from 'src/balances/balances.controller';
import { BalanceService } from 'src/balances/balances.service';

@Module({
	controllers: [BalanceController],
	providers: [BalanceService],
})
export class BalanceModule {}
