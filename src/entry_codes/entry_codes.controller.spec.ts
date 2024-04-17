import { Test, TestingModule } from '@nestjs/testing';
import { EntryCodesController } from './entry_codes.controller';
import { EntryCodesService } from 'src/entry_codes/entry_codes.service';
import { testEntryCodeDTO, testEntryCodes } from 'src/__test__/testEntrycode';

import { GetAllEntryCodeOutputDto } from 'src/entry_codes/dtos/get-entry_code.dto';
import {
	CreateEntryCodeInputDto,
	CreateEntryCodeOutputDto,
} from 'src/entry_codes/dtos/post-entry_code.dto';

import { EntryCode } from '@prisma/client';
import { SetEntryCodeObsoleteOutputDto } from 'src/entry_codes/dtos/patch-entry_code.dto';
import { generateOkResponse } from 'src/common/utils/response.util';

const mockEntryCodeService = {
	findAll: jest.fn(),
	create: jest.fn(),
	setObsolete: jest.fn(),
};

describe('EntryCodesController', () => {
	let controller: EntryCodesController;
	let service: EntryCodesService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [EntryCodesController],
			providers: [
				{
					provide: EntryCodesService,
					useValue: mockEntryCodeService,
				},
			],
		}).compile();

		service = module.get<EntryCodesService>(EntryCodesService);
		controller = module.get<EntryCodesController>(EntryCodesController);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
		expect(controller).toBeDefined();
	});

	describe('findAll', () => {
		it('should return all entry codes', async () => {
			const entryCodes: EntryCode[] = testEntryCodes;

			const expectedOutputDto: GetAllEntryCodeOutputDto =
				generateOkResponse<GetAllEntryCodeOutputDto>({
					data: entryCodes,
				});
			jest.spyOn(service, 'findAll').mockResolvedValueOnce(
				generateOkResponse<GetAllEntryCodeOutputDto>({
					data: entryCodes,
				}),
			);

			const result = await controller.findAll();
			console.log(result);
			expect(result).toEqual(expectedOutputDto);
		});
	});

	describe('create', () => {
		it('should create a new entry code', async () => {
			const inputDto: CreateEntryCodeInputDto = testEntryCodeDTO;

			const expectedOutputDto: CreateEntryCodeOutputDto =
				generateOkResponse<CreateEntryCodeOutputDto>({
					data: {
						id: 1,
					},
				});

			jest.spyOn(service, 'create').mockResolvedValueOnce(
				expectedOutputDto,
			);

			const result = await controller.create(inputDto);
			expect(result).toEqual(expectedOutputDto);
		});
	});

	describe('setObsolete', () => {
		it('should delete an entry code', async () => {
			const testId = 1;
			const testCode = 10;
			const expectedOutputDto: SetEntryCodeObsoleteOutputDto =
				generateOkResponse<SetEntryCodeObsoleteOutputDto>({
					data: {
						id: testId,
						code: testCode,
					},
				});

			jest.spyOn(service, 'setObsolete').mockResolvedValueOnce(
				expectedOutputDto,
			);

			const result = await controller.setObsolete(testId.toString());
			expect(result).toEqual(expectedOutputDto);
		});
	});
});
