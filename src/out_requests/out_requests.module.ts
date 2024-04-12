import { Module } from '@nestjs/common';
import { OutRequestsController } from 'src/out_requests/out_requests.controller';
import { OutRequestsService } from 'src/out_requests/out_requests.service';

@Module({
	providers: [OutRequestsService],
	controllers: [OutRequestsController],
})
export class OutRequestsModule {}
