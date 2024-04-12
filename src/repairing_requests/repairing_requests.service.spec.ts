import { Test, TestingModule } from '@nestjs/testing';
import { RepairingRequestsService } from 'src/repairing_requests/repairing_requests.service';

describe('RepairingRequestsService', () => {
	let service: RepairingRequestsService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [RepairingRequestsService],
		}).compile();

		service = module.get<RepairingRequestsService>(
			RepairingRequestsService,
		);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
