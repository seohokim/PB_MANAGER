import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { IsDateDDMMYYYY } from 'src/common/decorators/date.decorator';
import { CoreOutputDto } from 'src/common/core/dtos/core.dto';
import { BalanceDTO } from 'src/balances/dtos/balance.dto';

export class GetLatestBalanceOutputDto extends CoreOutputDto {
	data: BalanceDTO;
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
	data: BalanceDTO[];
}
