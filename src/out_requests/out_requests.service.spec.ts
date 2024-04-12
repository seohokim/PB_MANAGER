import { Test, TestingModule } from '@nestjs/testing';
import { OutRequestsService } from 'src/out_requests/out_requests.service';

describe('OutRequestsService', () => {
	let service: OutRequestsService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [OutRequestsService],
		}).compile();

		service = module.get<OutRequestsService>(OutRequestsService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
