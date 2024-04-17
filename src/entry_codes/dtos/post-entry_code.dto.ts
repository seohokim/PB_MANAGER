import { $Enums, EntryCode } from '@prisma/client';

import { CoreOutputDto } from '../../common/core/dtos/core.dto';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateEntryCodeInputDto {
	@IsNotEmpty()
	@IsNumber()
	code: number;

	@IsNotEmpty()
	@IsString()
	name: string;

	@IsNotEmpty()
	@IsEnum($Enums.entry_type)
	type: $Enums.entry_type;
}

export class CreateEntryCodeOutputDto extends CoreOutputDto {
	data: {
		id: number;
	};
}
