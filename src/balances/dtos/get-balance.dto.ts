import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

import { Balance } from '@prisma/client';
import { IsDateDDMMYYYY } from '../../common/decorators/date.decorator';
import { CoreOutputDto } from '../../common/core/dtos/core.dto';

export class GetLatestBalanceOutputDto extends CoreOutputDto {
	@ApiProperty()
	data: Balance | null;
}

export class GetBalanceByDateRangeInputDto {
	@ApiProperty({
		name: 'startDate',
		type: String,
		example: '01-01-2021',
	})
	@IsDateDDMMYYYY({
		message: 'Start date must be in DD-MM-YYYY format',
	})
	@IsNotEmpty()
	startDate: string;

	@ApiProperty({
		name: 'endDate',
		type: String,
		example: '01-01-2022',
	})
	@IsDateDDMMYYYY({
		message: 'End date must be in DD-MM-YYYY format',
	})
	@IsNotEmpty()
	endDate: string;
}

export class GetBalanceByDateRangeOutputDto extends CoreOutputDto {
	@ApiProperty({})
	data: Balance[];
}
