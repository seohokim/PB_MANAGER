import { Test, TestingModule } from '@nestjs/testing';
import { EntryController } from './entries.controller';

describe('EntryController', () => {
	let controller: EntryController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [EntryController],
		}).compile();

		controller = module.get<EntryController>(EntryController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
