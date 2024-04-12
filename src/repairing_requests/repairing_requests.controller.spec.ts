import { Test, TestingModule } from '@nestjs/testing';
import { RepairingRequestsController } from 'src/repairing_requests/repairing_requests.controller';

describe('RepairingRequestsController', () => {
	let controller: RepairingRequestsController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [RepairingRequestsController],
		}).compile();

		controller = module.get<RepairingRequestsController>(
			RepairingRequestsController,
		);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
