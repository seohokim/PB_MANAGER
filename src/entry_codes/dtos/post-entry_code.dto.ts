import { PickType } from '@nestjs/mapped-types';
import { $Enums, EntryCode } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CoreOutputDto } from 'src/common/core/dtos/core.dto';

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
