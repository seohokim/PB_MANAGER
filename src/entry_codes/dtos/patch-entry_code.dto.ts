import { CoreOutputDto } from 'src/common/core/dtos/core.dto';

export class SetEntryCodeObsoleteOutputDto extends CoreOutputDto {
	data: {
		id: number;
		code: number;
	};
}
