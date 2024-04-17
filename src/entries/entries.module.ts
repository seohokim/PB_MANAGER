import { Module } from '@nestjs/common';
import { EntryController } from 'src/entries/entries.controller';
import { EntryService } from 'src/entries/entries.service';

@Module({
	controllers: [EntryController],
	providers: [EntryService],
})
export class EntriesModule {}
