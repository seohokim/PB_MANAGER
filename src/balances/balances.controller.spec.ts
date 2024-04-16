import { Test, TestingModule } from '@nestjs/testing';
import { Balance } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';

import { BalanceController } from 'src/balances/balances.controller';
import { BalanceService } from 'src/balances/balances.service';
import { BalanceDTO } from 'src/balances/dtos/balance.dto';
import { CreateInitialBalanceInputDto } from 'src/balances/dtos/post/post-balance.dto';

const mockBalanceService = {
	findLatestBalance: jest.fn(),
	findByDateRange: jest.fn(),
	initBalance: jest.fn(),
	createBalance: jest.fn(),
};

describe('BalanceController', () => {
	let balanceController: BalanceController;
	let balanceService: BalanceService;
	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [BalanceController],
			providers: [
				{
					provide: BalanceService,
					useValue: mockBalanceService,
				},
			],
		}).compile();
		balanceService = module.get<BalanceService>(BalanceService);
		balanceController = module.get<BalanceController>(BalanceController);
	});
	beforeEach(async () => {
		jest.clearAllMocks();
		jest.resetAllMocks();
		jest.restoreAllMocks();
	});

	it('should be defined', () => {
		expect(balanceController).toBeDefined();
		expect(balanceService).toBeDefined();
	});

	describe('initBalance', () => {
		it('should create a new initial balance', async () => {
			const createBalanceDTO: CreateInitialBalanceInputDto = {
				bill_million_count: 10,
				bill_100k_count: 10,
				bill_50k_count: 10,
				bill_10k_count: 10,
				bill_5k_count: 10,
				bill_1k_count: 10,
				bill_500_count: 10,
				bill_100_count: 10,
				bill_50_count: 10,
				bill_10_count: 10,
				retail_999_weight: 11.1,
				retail_9999_weight: 11.1,
				factory_995_weight: 11.1,
				factory_999_weight: 11.1,
				factory_9999_weight: 11.1,
				old_pure_gold_weight: 22.2,
				old_mixed_gold_weight: 22.2,
			};

			jest.spyOn(balanceService, 'initBalance').mockResolvedValueOnce({
				success: true,
			});
			const result =
				await balanceController.initBalance(createBalanceDTO);
			expect(mockBalanceService.initBalance).toHaveBeenCalledTimes(1);
			expect(mockBalanceService.initBalance).toHaveBeenCalledWith(
				createBalanceDTO,
			);
			console.log(result);

			expect(result).toEqual({ success: true });
		});
	});

	describe('create', () => {
		it('should create a new balance', async () => {
			jest.spyOn(balanceService, 'createBalance').mockResolvedValueOnce({
				success: true,
			});
			const result = await balanceController.create();
			expect(mockBalanceService.createBalance).toHaveBeenCalledTimes(1);
			expect(result).toEqual({ success: true });
		});
	});

	describe('getLatest', () => {
		const balance: BalanceDTO = {
			id: '1',
			created_at: new Date('2024-01-01'),
			updated_at: new Date(),
			last_balance_id: '1',
			gold_weight: 0,
			cash_amount: 1,
			bill_million_count: 1,
			bill_100k_count: 1,
			bill_50k_count: 1,
			bill_10k_count: 1,
			bill_5k_count: 1,
			bill_1k_count: 1,
			bill_500_count: 1,
			bill_100_count: 1,
			bill_50_count: 1,
			bill_10_count: 1,
			retail_999_weight: 1,
			retail_9999_weight: 1,
			factory_995_weight: 1,
			factory_999_weight: 1,
			factory_9999_weight: 1,
			old_pure_gold_weight: 1,
			old_mixed_gold_weight: 1,
			product_gold_weight: 1,
			advanced_gold_weight: 1,
			advanced_cash_amount: 1,
			unpaid_gold_weight: 1,
			unpaid_cash_amount: 1,
			lend_gold_weight: 1,
			borrow_gold_weight: 1,
		};

		it('should return the latest balance', async () => {
			jest.spyOn(
				balanceService,
				'findLatestBalance',
			).mockResolvedValueOnce({ success: true, data: balance });
			const result = await balanceController.findLatest();
			expect(mockBalanceService.findLatestBalance).toHaveBeenCalledTimes(
				1,
			);
			expect(result).toEqual({ success: true, data: balance });
		});
	});

	describe('findByDateRange', () => {
		const balance: BalanceDTO = {
			id: '1',
			created_at: new Date('2024-01-01'),
			updated_at: new Date(),
			last_balance_id: '1',
			gold_weight: 0,
			cash_amount: 1,
			bill_million_count: 1,
			bill_100k_count: 1,
			bill_50k_count: 1,
			bill_10k_count: 1,
			bill_5k_count: 1,
			bill_1k_count: 1,
			bill_500_count: 1,
			bill_100_count: 1,
			bill_50_count: 1,
			bill_10_count: 1,
			retail_999_weight: 1,
			retail_9999_weight: 1,
			factory_995_weight: 1,
			factory_999_weight: 1,
			factory_9999_weight: 1,
			old_pure_gold_weight: 1,
			old_mixed_gold_weight: 1,
			product_gold_weight: 1,
			advanced_gold_weight: 1,
			advanced_cash_amount: 1,
			unpaid_gold_weight: 1,
			unpaid_cash_amount: 1,
			lend_gold_weight: 1,
			borrow_gold_weight: 1,
		};

		it('should return the balance by date range', async () => {
			const query = {
				startDate: '2024-01-01',
				endDate: '2024-01-02',
			};

			jest.spyOn(balanceService, 'findByDateRange').mockResolvedValueOnce(
				{
					success: true,
					data: [balance],
				},
			);
			const result = await balanceController.findByDateRange(query);
			expect(mockBalanceService.findByDateRange).toHaveBeenCalledTimes(1);
			expect(mockBalanceService.findByDateRange).toHaveBeenCalledWith(
				query,
			);
			expect(result).toEqual({ success: true, data: [balance] });
		});
	});
});
