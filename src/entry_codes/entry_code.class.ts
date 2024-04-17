import { $Enums, EntryCode } from '@prisma/client';

export class EntryCodeClass {
	id: number;
	code: number;
	name: string;
	created_at: Date;
	updated_at: Date;
	type: $Enums.entry_type;

	constructor({ id, code, name, created_at, updated_at, type }: EntryCode) {
		this.id = id;
		this.code = code;
		this.name = name;
		this.created_at = created_at;
		this.updated_at = updated_at;
		this.type = type;
	}
}
