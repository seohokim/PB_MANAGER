import { Test, TestingModule } from '@nestjs/testing';
import { BalanceService } from './balances.service';
import { PrismaService } from '../prisma/prisma.service';

import { HttpException, HttpStatus } from '@nestjs/common';
import {
	GetBalanceByDateRangeInputDto,
	GetBalanceByDateRangeOutputDto,
	GetLatestBalanceOutputDto,
} from 'src/balances/dtos/get-balance.dto';
import {
	generateErrorResponse,
	generateOkResponse,
} from 'src/common/utils/response.util';
import {
	CreateBalanceOutputDto,
	CreateInitialBalanceInputDto,
} from 'src/balances/dtos/post-balance.dto';
import {
	testBalance,
	testBalanceDTO,
	testGenesisBalance,
	testSecondBalance,
	testThirdBalance,
} from 'src/__test__/testBalance';

describe('BalanceService', () => {
	let balanceService: BalanceService;
	let prismaService: PrismaService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				BalanceService,
				{
					provide: PrismaService,
					useValue: {
						balance: {
							findFirst: jest.fn(),
							findMany: jest.fn(),
							create: jest.fn(),
						},
					},
				},
			],
		}).compile();

		balanceService = module.get<BalanceService>(BalanceService);
		prismaService = module.get<PrismaService>(PrismaService);
	});

	it('should be defined', () => {
		expect(balanceService).toBeDefined();
		expect(prismaService).toBeDefined();
	});

	describe('findLatestBalance', () => {
		it('should return the latest balance', async () => {
			jest.spyOn(prismaService.balance, 'findFirst').mockResolvedValue(
				testBalance,
			);

			const result = await balanceService.findLatestBalance();

			expect(result).toEqual(
				generateOkResponse<GetLatestBalanceOutputDto>({
					success: true,
					data: testBalance,
				}),
			);
		});

		it('should throw an error if an exception occurs', async () => {
			const mockError = new Error('Internal Server Error');

			jest.spyOn(prismaService.balance, 'findFirst').mockRejectedValue(
				mockError,
			);

			await expect(balanceService.findLatestBalance()).rejects.toThrow(
				generateErrorResponse(
					'Internal Server Error',
					HttpStatus.INTERNAL_SERVER_ERROR,
				),
			);
		});
	});

	describe('findByDateRange', () => {
		it('should return balances within the specified date range', async () => {
			const mockQuery: GetBalanceByDateRangeInputDto = {
				startDate: '01-01-2024',
				endDate: '01-05-2024',
			};

			const mockResult: GetBalanceByDateRangeOutputDto = {
				success: true,
				data: [testBalance],
			};

			jest.spyOn(prismaService.balance, 'findMany').mockResolvedValue([
				testBalance,
			]);

			const result = await balanceService.findByDateRange(mockQuery);

			expect(result).toEqual(
				generateOkResponse<GetBalanceByDateRangeOutputDto>(mockResult),
			);
		});

		it('should throw an error if an exception occurs', async () => {
			const mockQuery: GetBalanceByDateRangeInputDto = {
				startDate: '01-01-2024',
				endDate: '01-05-2024',
			};

			const mockError = new Error('Internal Server Error');

			jest.spyOn(prismaService.balance, 'findMany').mockRejectedValue(
				mockError,
			);

			await expect(
				balanceService.findByDateRange(mockQuery),
			).rejects.toThrow(
				generateErrorResponse(
					'Internal Server Error',
					HttpStatus.INTERNAL_SERVER_ERROR,
				),
			);
		});
	});

	describe('initBalance', () => {
		it('should create a new balance', async () => {
			const mockBody: CreateInitialBalanceInputDto = testBalanceDTO;

			jest.spyOn(prismaService.balance, 'create').mockResolvedValue(
				testGenesisBalance,
			);

			const result = await balanceService.initBalance(mockBody);

			expect(result).toEqual(
				generateOkResponse<CreateBalanceOutputDto>({
					data: {
						id: testGenesisBalance.id,
					},
				}),
			);
		});

		it('should throw an error if an exception occurs', async () => {
			const mockBody: CreateInitialBalanceInputDto = testBalanceDTO;

			const mockError = new Error('Internal Server Error');

			jest.spyOn(prismaService.balance, 'create').mockRejectedValue(
				mockError,
			);

			await expect(balanceService.initBalance(mockBody)).rejects.toThrow(
				generateErrorResponse(
					'Internal Server Error',
					HttpStatus.INTERNAL_SERVER_ERROR,
				),
			);
		});
	});

	describe('createBalance', () => {
		it('should create a new balance if the last balance is not from today', async () => {
			const mockLastBalance = testThirdBalance;
			const mockNewBalance = testSecondBalance;
			jest.spyOn(prismaService.balance, 'findFirst').mockResolvedValue(
				mockLastBalance,
			);
			jest.spyOn(prismaService.balance, 'create').mockResolvedValue(
				mockNewBalance,
			);

			const result = await balanceService.createBalance();

			expect(result).toEqual(
				generateOkResponse<CreateBalanceOutputDto>({
					success: true,
					data: {
						id: mockNewBalance.id,
					},
				}),
			);
		});

		it('should throw an error if the last balance is from today', async () => {
			const mockLastBalance = testBalance;

			jest.spyOn(prismaService.balance, 'findFirst').mockResolvedValue(
				mockLastBalance,
			);

			await expect(balanceService.createBalance()).rejects.toThrow(
				generateErrorResponse(
					'already created today',
					HttpStatus.UNPROCESSABLE_ENTITY,
				),
			);
		});

		it('should throw an error if there is no balance', async () => {
			jest.spyOn(prismaService.balance, 'findFirst').mockResolvedValue(
				null,
			);

			await expect(balanceService.createBalance()).rejects.toThrow(
				generateErrorResponse(
					'no balance',
					HttpStatus.UNPROCESSABLE_ENTITY,
				),
			);
		});

		it('should throw an error if an exception occurs', async () => {
			const mockError = new Error('Internal Server Error');

			jest.spyOn(prismaService.balance, 'findFirst').mockRejectedValue(
				mockError,
			);

			await expect(balanceService.createBalance()).rejects.toThrow(
				generateErrorResponse(
					'Internal Server Error',
					HttpStatus.INTERNAL_SERVER_ERROR,
				),
			);
		});
	});
});
