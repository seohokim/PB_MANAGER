import { EntryCode } from '@prisma/client';
import { CoreOutputDto } from 'src/common/core/dtos/core.dto';

export class GetAllEntryCodeOutputDto extends CoreOutputDto {
	data: EntryCode[];
}
