import { Test, TestingModule } from '@nestjs/testing';
import { InRequestsController } from './in_requests.controller';

describe('InRequestsController', () => {
	let controller: InRequestsController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [InRequestsController],
		}).compile();

		controller = module.get<InRequestsController>(InRequestsController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
