import { Test, TestingModule } from '@nestjs/testing';
import { Balance } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
import { testBalance, testBalanceDTO } from 'src/__test__/testBalance';

import { BalanceController } from 'src/balances/balances.controller';
import { BalanceService } from 'src/balances/balances.service';
import {
	GetBalanceByDateRangeOutputDto,
	GetLatestBalanceOutputDto,
} from 'src/balances/dtos/get-balance.dto';
import {
	CreateBalanceOutputDto,
	CreateInitialBalanceInputDto,
} from 'src/balances/dtos/post-balance.dto';
import { generateOkResponse } from 'src/common/utils/response.util';

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

		balanceController = module.get<BalanceController>(BalanceController);
		balanceService = module.get<BalanceService>(BalanceService);
	});

	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('should be defined', () => {
		expect(balanceController).toBeDefined();
		expect(balanceService).toBeDefined();
	});

	describe('findLatest', () => {
		it('should return the latest balance', async () => {
			const expectedBalance: Balance = testBalance;
			jest.spyOn(
				balanceService,
				'findLatestBalance',
			).mockResolvedValueOnce(
				generateOkResponse<GetLatestBalanceOutputDto>({
					data: expectedBalance,
				}),
			);

			const result = await balanceController.findLatest();

			expect(balanceService.findLatestBalance).toHaveBeenCalledTimes(1);
			expect(result).toEqual(
				generateOkResponse<GetLatestBalanceOutputDto>({
					data: expectedBalance,
				}),
			);
		});
	});

	describe('findByDateRange', () => {
		it('should return the balance by date range', async () => {
			const query = {
				startDate: '2024-01-01',
				endDate: '2024-05-02',
			};
			const expectedBalance: Balance[] = [testBalance];
			jest.spyOn(balanceService, 'findByDateRange').mockResolvedValueOnce(
				generateOkResponse<GetBalanceByDateRangeOutputDto>({
					data: expectedBalance,
				}),
			);

			const result = await balanceController.findByDateRange(query);

			expect(balanceService.findByDateRange).toHaveBeenCalledTimes(1);
			expect(balanceService.findByDateRange).toHaveBeenCalledWith(query);
			expect(result).toEqual(
				generateOkResponse<GetBalanceByDateRangeOutputDto>({
					data: expectedBalance,
				}),
			);
		});
	});

	describe('initBalance', () => {
		it('should create a new initial balance', async () => {
			const createBalanceDTO: CreateInitialBalanceInputDto =
				testBalanceDTO;
			jest.spyOn(balanceService, 'initBalance').mockResolvedValueOnce(
				generateOkResponse<CreateBalanceOutputDto>({
					data: {
						id: 'c2bec4c8-bf88-46b0-9525-f3e5c4f0adaf',
					},
				}),
			);

			const result =
				await balanceController.initBalance(createBalanceDTO);

			expect(balanceService.initBalance).toHaveBeenCalledTimes(1);
			expect(balanceService.initBalance).toHaveBeenCalledWith(
				createBalanceDTO,
			);
			expect(result).toEqual(
				generateOkResponse<CreateBalanceOutputDto>({
					data: {
						id: 'c2bec4c8-bf88-46b0-9525-f3e5c4f0adaf',
					},
				}),
			);
		});
	});

	describe('create', () => {
		it('should create a new balance', async () => {
			jest.spyOn(balanceService, 'createBalance').mockResolvedValueOnce(
				generateOkResponse<CreateBalanceOutputDto>({
					data: {
						id: 'c2bec4c8-bf88-46b0-9525-f3e5c4f0adaf',
					},
				}),
			);

			const result = await balanceController.create();

			expect(balanceService.createBalance).toHaveBeenCalledTimes(1);
			expect(result).toEqual(
				generateOkResponse<CreateBalanceOutputDto>({
					data: {
						id: 'c2bec4c8-bf88-46b0-9525-f3e5c4f0adaf',
					},
				}),
			);
		});
	});
});
