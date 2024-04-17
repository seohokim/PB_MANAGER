import { CoreOutputDto } from 'src/common/core/dtos/core.dto';

export class CreateEntryInputDto {
	title: string;
	content: string;
	isPublished: boolean;
	userId: number;
}

export class CreateEntryOutputDto extends CoreOutputDto {}
