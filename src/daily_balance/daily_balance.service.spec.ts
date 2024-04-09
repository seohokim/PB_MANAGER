import { Test, TestingModule } from '@nestjs/testing';
import { DailyBalanceService } from './daily_balance.service';

describe('DailyBalanceService', () => {
	let service: DailyBalanceService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [DailyBalanceService],
		}).compile();

		service = module.get<DailyBalanceService>(DailyBalanceService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
