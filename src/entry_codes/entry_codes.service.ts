import { Injectable } from '@nestjs/common';

import { SetEntryCodeObsoleteOutputDto } from 'src/entry_codes/dtos/patch-entry_code.dto';
import { GetAllEntryCodeOutputDto } from 'src/entry_codes/dtos/get-entry_code.dto';
import {
	CreateEntryCodeInputDto,
	CreateEntryCodeOutputDto,
} from 'src/entry_codes/dtos/post-entry_code.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import {
	generateErrorResponse,
	generateOkResponse,
} from 'src/common/utils/response.util';

@Injectable()
export class EntryCodesService {
	constructor(private readonly prismaService: PrismaService) {}

	async findAll(): Promise<GetAllEntryCodeOutputDto> {
		try {
			const entryCodes = await this.prismaService.entryCode.findMany({
				where: {
					isObsolete: false,
				},
			});
			return generateOkResponse<GetAllEntryCodeOutputDto>({
				data: entryCodes,
			});
		} catch (error) {
			throw generateErrorResponse(error);
		}
	}

	async create(
		body: CreateEntryCodeInputDto,
	): Promise<CreateEntryCodeOutputDto> {
		const { code, name, type } = body;
		try {
			const result = await this.prismaService.entryCode.create({
				data: {
					code,
					name,
					type,
				},
			});
			return generateOkResponse<CreateEntryCodeOutputDto>({
				data: {
					id: result.id,
				},
			});
		} catch (error) {
			throw generateErrorResponse(error);
		}
	}

	async setObsolete(param: string): Promise<SetEntryCodeObsoleteOutputDto> {
		try {
			const result = await this.prismaService.entryCode.update({
				where: {
					code: parseInt(param),
				},
				data: {
					isObsolete: true,
				},
			});

			return generateOkResponse<SetEntryCodeObsoleteOutputDto>({
				data: {
					id: result.id,
					code: result.code,
				},
			});
		} catch (error) {
			throw generateErrorResponse(error);
		}
	}
}
