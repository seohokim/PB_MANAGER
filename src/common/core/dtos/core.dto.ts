import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
	ArrayNotEmpty,
	IsArray,
	IsBoolean,
	IsNotEmpty,
	IsOptional,
	IsString,
	ValidateNested,
} from 'class-validator';

class Message {
	@ApiProperty({ description: 'The content of the message' })
	@IsString()
	@IsNotEmpty()
	content: string;
}

class Error {
	@ApiProperty({
		type: [Message],
		description: 'List of error messages',
		isArray: true,
	})
	@IsArray()
	@ArrayNotEmpty()
	@ValidateNested({ each: true })
	@Type(() => Message)
	messages: Message[]; // 메시지 배열
}

export class CoreOutputDto {
	@ApiProperty({
		description: 'Indicates if the operation was successful',
		required: true,
	})
	@IsBoolean()
	@IsNotEmpty()
	success: boolean;

	@ApiProperty({
		description: 'Error details',
		required: false,
	})
	@ValidateNested()
	@Type(() => Error)
	@IsOptional()
	error?: Error;
}
