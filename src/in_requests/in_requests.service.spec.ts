import { Test, TestingModule } from '@nestjs/testing';
import { InRequestsService } from './in_requests.service';

describe('InRequestsService', () => {
	let service: InRequestsService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [InRequestsService],
		}).compile();

		service = module.get<InRequestsService>(InRequestsService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
