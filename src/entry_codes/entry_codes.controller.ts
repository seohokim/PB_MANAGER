import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
} from '@nestjs/common';
import { SetEntryCodeObsoleteOutputDto } from 'src/entry_codes/dtos/patch-entry_code.dto';
import { GetAllEntryCodeOutputDto } from 'src/entry_codes/dtos/get-entry_code.dto';
import {
	CreateEntryCodeInputDto,
	CreateEntryCodeOutputDto,
} from 'src/entry_codes/dtos/post-entry_code.dto';
import { EntryCodesService } from 'src/entry_codes/entry_codes.service';

@Controller('entry/code')
export class EntryCodesController {
	constructor(private readonly entryCodesService: EntryCodesService) {}

	@Get()
	async findAll(): Promise<GetAllEntryCodeOutputDto> {
		return this.entryCodesService.findAll();
	}

	@Post()
	async create(
		@Body() body: CreateEntryCodeInputDto,
	): Promise<CreateEntryCodeOutputDto> {
		return this.entryCodesService.create(body);
	}

	@Patch('obsolete/:code')
	async setObsolete(
		@Param('code') code: string,
	): Promise<SetEntryCodeObsoleteOutputDto> {
		return this.entryCodesService.setObsolete(code);
	}
}
