import { Test, TestingModule } from '@nestjs/testing';
import { BalanceService } from 'src/balances/balances.service';

describe('DailyBalanceService', () => {
	let service: BalanceService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [BalanceService],
		}).compile();

		service = module.get<BalanceService>(BalanceService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
