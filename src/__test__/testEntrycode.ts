import { EntryCode } from '@prisma/client';
import { CreateEntryCodeInputDto } from 'src/entry_codes/dtos/post-entry_code.dto';

export const testEntryCodes: EntryCode[] = [
	{
		id: 1,
		code: 1,
		name: 'test',
		created_at: new Date(),
		updated_at: new Date(),
		type: 'outGoing',
		isObsolete: false,
	},
	{
		id: 2,
		code: 2,
		name: 'test',
		created_at: new Date(),
		updated_at: new Date(),
		type: 'paying',
		isObsolete: false,
	},
	{
		id: 3,
		code: 3,
		name: 'test',
		created_at: new Date(),
		updated_at: new Date(),
		type: 'receiving',
		isObsolete: false,
	},
];

export const testEntryCode: EntryCode = {
	id: 1,
	code: 1,
	name: 'test',
	type: 'receiving',
	isObsolete: false,
	created_at: new Date(),
	updated_at: new Date(),
};

export const testEntryCodeDTO: CreateEntryCodeInputDto = {
	code: 1,
	name: 'test',
	type: 'receiving',
};
