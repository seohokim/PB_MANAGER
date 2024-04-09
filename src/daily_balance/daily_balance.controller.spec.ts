import { Test, TestingModule } from '@nestjs/testing';
import { DailyBalanceController } from './daily_balance.controller';

describe('DailyBalanceController', () => {
	let controller: DailyBalanceController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [DailyBalanceController],
		}).compile();

		controller = module.get<DailyBalanceController>(DailyBalanceController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
