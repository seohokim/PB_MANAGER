import { HttpStatus, Injectable } from '@nestjs/common';
import {
	generateErrorResponse,
	generateOkResponse,
} from 'src/common/utils/response.util';
import {
	GetEntryByDateRangeInputDto,
	GetEntryByDateRangeOutputDto,
} from 'src/entries/dtos/get-entry.dto';
import {
	CreateEntryInputDto,
	CreateEntryOutputDto,
} from 'src/entries/dtos/post-entry.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EntryService {
	constructor(private readonly prismaService: PrismaService) {}

	async findByDateRange(
		query: GetEntryByDateRangeInputDto,
	): Promise<GetEntryByDateRangeOutputDto> {
		try {
			const { startDate, endDate } = query;
			const endDateObj = new Date(convertToKST(endDate));
			endDateObj.setHours(23, 59, 59);
			const realEndDate = endDateObj.toISOString();
			const entries = await this.prismaService.entry.findMany({
				where: {
					created_at: {
						gte: convertToKST(startDate),
						lte: realEndDate,
					},
				},
			});
			return generateOkResponse<GetEntryByDateRangeOutputDto>({
				data: entries,
			});
		} catch (error) {
			throw generateErrorResponse(error);
		}
	}

	async createEntry(newEntry: CreateEntryInputDto) {
		try {
			return generateOkResponse<CreateEntryOutputDto>();
		} catch (error) {
			throw generateErrorResponse(error);
		}
	}
}

function convertToKST(date: string): string {
	const dateRegex = /^(\d{2})-(\d{2})-(\d{4})$/;
	const match = date.match(dateRegex);
	if (!match) {
		return '';
	}

	const [_, day, month, year] = match || [];
	// date is KST but DB Date is UTC
	const dateObj = new Date(`${year}-${month}-${day}`);
	dateObj.setHours(dateObj.getHours() - 9);
	return dateObj.toISOString();
}
