import { HttpException, HttpStatus } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CoreOutputDto } from 'src/common/core/dtos/core.dto';
import { getPrismaFormattedError } from 'src/common/utils/error.util';

// Generic error response function

export function generateOkResponse<T extends CoreOutputDto>(
	data: Partial<T> = {}, // 추가 데이터를 위한 매개변수
): T {
	return {
		success: true,
		...data,
	} as T;
}

export function generateErrorResponse(error: any): HttpException {
	if (
		error instanceof Prisma.PrismaClientKnownRequestError ||
		error instanceof Prisma.PrismaClientUnknownRequestError ||
		error instanceof Prisma.PrismaClientValidationError ||
		error instanceof Prisma.PrismaClientInitializationError ||
		error instanceof Prisma.PrismaClientRustPanicError
	) {
		return getPrismaFormattedError(error);
	}
	return new HttpException(
		{
			success: false,
			error: {
				message: [error.message],
			},
		},
		error.statusCode,
	);
}
