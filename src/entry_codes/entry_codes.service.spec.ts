import { Test, TestingModule } from '@nestjs/testing';
import { EntryCodesService } from './entry_codes.service';
import { PrismaService } from '../prisma/prisma.service';
import {
	testEntryCode,
	testEntryCodeDTO,
	testEntryCodes,
} from 'src/__test__/testEntrycode';
import { EntryCode, Prisma } from '@prisma/client';
import {
	CreateEntryCodeInputDto,
	CreateEntryCodeOutputDto,
} from 'src/entry_codes/dtos/post-entry_code.dto';

import { GetAllEntryCodeOutputDto } from 'src/entry_codes/dtos/get-entry_code.dto';
import { SetEntryCodeObsoleteOutputDto } from 'src/entry_codes/dtos/patch-entry_code.dto';
import {
	generateErrorResponse,
	generateOkResponse,
} from 'src/common/utils/response.util';

describe('EntryCodesService', () => {
	let service: EntryCodesService;
	let prismaService: PrismaService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				EntryCodesService,
				{
					provide: PrismaService,
					useValue: {
						entryCode: {
							findMany: jest.fn(),
							create: jest.fn(),
							setObsolete: jest.fn(),
						},
					},
				},
			],
		}).compile();

		service = module.get<EntryCodesService>(EntryCodesService);
		prismaService = module.get<PrismaService>(PrismaService);
	});
	it('should be defined', () => {
		expect(service).toBeDefined();
		expect(prismaService).toBeDefined();
	});

	describe('findAll', () => {
		it('should return all entry codes', async () => {
			const entryCodes: EntryCode[] = testEntryCodes;
			jest.spyOn(prismaService.entryCode, 'findMany').mockResolvedValue(
				entryCodes,
			);

			const result = await service.findAll();

			expect(result).toEqual(
				generateOkResponse<GetAllEntryCodeOutputDto>({
					data: entryCodes,
				}),
			);
			expect(prismaService.entryCode.findMany).toHaveBeenCalled();
		});

		it('should throw an internal server error if an exception occurs', async () => {
			const mockError = new Prisma.PrismaClientRustPanicError(
				'Database error',
				'2.19.1',
			);

			jest.spyOn(prismaService.entryCode, 'findMany').mockRejectedValue(
				mockError,
			);

			await expect(service.findAll()).rejects.toThrow(
				generateErrorResponse(mockError),
			);
			expect(prismaService.entryCode.findMany).toHaveBeenCalled();
		});
	});

	describe('create', () => {
		it('should create a new entry code', async () => {
			const input: CreateEntryCodeInputDto = testEntryCodeDTO;
			const createdEntryCode: EntryCode = testEntryCode;
			jest.spyOn(prismaService.entryCode, 'create').mockResolvedValue(
				createdEntryCode,
			);

			const result = await service.create(input);

			expect(result).toEqual(
				generateOkResponse<CreateEntryCodeOutputDto>({
					data: {
						id: createdEntryCode.id,
					},
				}),
			);
			expect(prismaService.entryCode.create).toHaveBeenCalledWith({
				data: input,
			});
		});

		it('should throw an internal server error if an exception occurs', async () => {
			const input: CreateEntryCodeInputDto = testEntryCodeDTO;
			const mockError = new Prisma.PrismaClientRustPanicError(
				'Database error',
				'2.19.1',
			);
			jest.spyOn(prismaService.entryCode, 'create').mockRejectedValue(
				mockError,
			);

			await expect(service.create(input)).rejects.toThrow(
				generateErrorResponse(mockError),
			);

			expect(prismaService.entryCode.create).toHaveBeenCalledWith({
				data: input,
			});
		});
	});

	describe('setObsolete', () => {
		it('should setObsolete an entry code', async () => {
			const paramCode = '1';
			jest.spyOn(prismaService.entryCode, 'update').mockResolvedValue({
				...testEntryCode,
				isObsolete: true,
			});

			const result = await service.setObsolete(paramCode);

			expect(result).toEqual(
				generateOkResponse<SetEntryCodeObsoleteOutputDto>({
					data: {
						id: testEntryCode.id,
						code: testEntryCode.code,
					},
				}),
			);
			expect(prismaService.entryCode.update).toHaveBeenCalledWith({
				where: {
					code: Number(paramCode),
				},
			});
		});

		it('should throw an internal server error if an exception occurs', async () => {
			const paramCode = '1';
			const mockError = new Prisma.PrismaClientRustPanicError(
				'Database error',
				'2.19.1',
			);
			jest.spyOn(prismaService.entryCode, 'update').mockRejectedValue(
				mockError,
			);

			await expect(service.setObsolete(paramCode)).rejects.toThrow(
				generateErrorResponse(mockError),
			);
			expect(prismaService.entryCode.update).toHaveBeenCalledWith({
				where: {
					code: Number(paramCode),
				},
			});
		});
	});
});
