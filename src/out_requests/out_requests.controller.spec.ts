import { Test, TestingModule } from '@nestjs/testing';
import { OutRequestsController } from './out_requests.controller';

describe('OutRequestsController', () => {
	let controller: OutRequestsController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [OutRequestsController],
		}).compile();

		controller = module.get<OutRequestsController>(OutRequestsController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
