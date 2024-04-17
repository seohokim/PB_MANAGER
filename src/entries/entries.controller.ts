import {
	Body,
	Controller,
	Get,
	Post,
	Query,
	ValidationPipe,
} from '@nestjs/common';
import {
	GetEntryByDateRangeOutputDto,
	GetEntryByDateRangeInputDto,
} from 'src/entries/dtos/get-entry.dto';
import {
	CreateEntryInputDto,
	CreateEntryOutputDto,
} from 'src/entries/dtos/post-entry.dto';
import { EntryService } from 'src/entries/entries.service';

@Controller('entry')
export class EntryController {
	constructor(private readonly entriesService: EntryService) {}

	@Get()
	async findByDateRange(
		@Query(ValidationPipe) query: GetEntryByDateRangeInputDto,
	): Promise<GetEntryByDateRangeOutputDto> {
		return this.entriesService.findByDateRange(query);
	}

	@Post()
	async create(
		@Body(ValidationPipe) newEntry: CreateEntryInputDto,
	): Promise<CreateEntryOutputDto> {
		return this.entriesService.createEntry(newEntry);
	}
}
