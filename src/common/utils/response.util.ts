import { HttpException, HttpStatus } from '@nestjs/common';
import { CoreOutputDto } from 'src/common/core/dtos/core.dto';

// Generic error response function

export function generateErrorResponse(
	message: string,
	statusCode: HttpStatus,
): HttpException {
	return new HttpException(
		{
			success: false,
			error: {
				message: [message],
			},
		},
		statusCode,
	);
}

export function generateOkResponse<T extends CoreOutputDto>(
	data: Partial<T> = {}, // 추가 데이터를 위한 매개변수
): T {
	return {
		success: true,
		...data,
	} as T;
}
