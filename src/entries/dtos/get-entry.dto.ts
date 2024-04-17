import { Entry } from '@prisma/client';
import { IsDateDDMMYYYY } from 'src/common/decorators/date.decorator';
import { CoreOutputDto } from 'src/common/core/dtos/core.dto';
import { IsNotEmpty } from 'class-validator';

export class GetEntryByDateRangeInputDto {
	@IsDateDDMMYYYY({
		message: 'Start date format is invalid. Please use DD-MM-YYYY',
	})
	@IsNotEmpty()
	startDate: string;

	@IsDateDDMMYYYY({
		message: 'End date format is invalid. Please use DD-MM-YYYY',
	})
	@IsNotEmpty()
	endDate: string;
}

export class GetEntryByDateRangeOutputDto extends CoreOutputDto {
	data: Entry[];
}

export class GetLatestEntryOutput extends CoreOutputDto {
	data: Entry;
}
