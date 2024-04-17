import {
	HttpException,
	HttpStatus,
	Injectable,
	UnprocessableEntityException,
} from '@nestjs/common';
import {
	GetBalanceByDateRangeInputDto,
	GetBalanceByDateRangeOutputDto,
	GetLatestBalanceOutputDto,
} from 'src/balances/dtos/get-balance.dto';
import {
	CreateBalanceOutputDto,
	CreateInitialBalanceInputDto,
} from 'src/balances/dtos/post-balance.dto';
import {
	generateErrorResponse,
	generateOkResponse,
} from 'src/common/utils/response.util';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BalanceService {
	constructor(private readonly prismaService: PrismaService) {}

	async findLatestBalance() {
		try {
			const result = await this.prismaService.balance.findFirst({
				orderBy: {
					created_at: 'desc',
				},
			});

			return generateOkResponse<GetLatestBalanceOutputDto>({
				data: result,
			});
		} catch (error) {
			if (error instanceof HttpException) {
				throw error;
			}
			console.log(error.message);
			throw generateErrorResponse(error);
		}
	}

	async findByDateRange(query: GetBalanceByDateRangeInputDto) {
		try {
			const { startDate, endDate } = query;
			const endDateObj = new Date(convertToKST(endDate));
			endDateObj.setHours(23, 59, 59);
			const realEndDate = endDateObj.toISOString();

			const result = await this.prismaService.balance.findMany({
				where: {
					created_at: {
						gte: convertToKST(startDate),
						lte: realEndDate,
					},
				},
				orderBy: {
					created_at: 'desc',
				},
			});

			return generateOkResponse<GetBalanceByDateRangeOutputDto>({
				data: result,
			});
		} catch (error) {
			if (error instanceof HttpException) {
				throw error;
			}
			throw generateErrorResponse(error);
		}
	}

	async initBalance(body: CreateInitialBalanceInputDto) {
		try {
			const result = await this.prismaService.balance.create({
				data: {
					bill_million_count: body.bill_million_count,
					bill_100k_count: body.bill_100k_count,
					bill_50k_count: body.bill_50k_count,
					bill_10k_count: body.bill_10k_count,
					bill_5k_count: body.bill_5k_count,
					bill_1k_count: body.bill_1k_count,
					bill_500_count: body.bill_500_count,
					bill_100_count: body.bill_100_count,
					bill_50_count: body.bill_50_count,
					bill_10_count: body.bill_10_count,
					retail_999_weight: body.retail_999_weight,
					retail_9999_weight: body.retail_9999_weight,
					factory_995_weight: body.factory_995_weight,
					factory_999_weight: body.factory_999_weight,
					factory_9999_weight: body.factory_9999_weight,
					old_pure_gold_weight: body.old_pure_gold_weight,
					old_mixed_gold_weight: body.old_mixed_gold_weight,
				},
			});
			return generateOkResponse<CreateBalanceOutputDto>({
				data: {
					id: result.id,
				},
			});
		} catch (error) {
			if (error instanceof HttpException) {
				throw error;
			}
			throw generateErrorResponse(error);
		}
	}

	async createBalance() {
		try {
			const lastBalance = await this.prismaService.balance.findFirst({
				orderBy: {
					created_at: 'desc',
				},
			});

			if (lastBalance) {
				//KST 기준으로 만약에 lastBalance가 오늘 날짜가 아니라면 새로운 balance를 만든다.
				const lastBalanceDate = new Date(lastBalance.created_at);
				const today = new Date();
				today.setHours(today.getHours() + 9);
				lastBalanceDate.setHours(lastBalanceDate.getHours() + 9);

				if (lastBalanceDate.getDate() !== today.getDate()) {
					const result = await this.prismaService.balance.create({
						data: {
							last_balance_id: lastBalance.id,
							bill_million_count: lastBalance.bill_million_count,
							bill_100k_count: lastBalance.bill_100k_count,
							bill_50k_count: lastBalance.bill_50k_count,
							bill_10k_count: lastBalance.bill_10k_count,
							bill_5k_count: lastBalance.bill_5k_count,
							bill_1k_count: lastBalance.bill_1k_count,
							bill_500_count: lastBalance.bill_500_count,
							bill_100_count: lastBalance.bill_100_count,
							bill_50_count: lastBalance.bill_50_count,
							bill_10_count: lastBalance.bill_10_count,
							retail_999_weight: lastBalance.retail_999_weight,
							retail_9999_weight: lastBalance.retail_9999_weight,
							factory_995_weight: lastBalance.factory_995_weight,
							factory_999_weight: lastBalance.factory_999_weight,
							factory_9999_weight:
								lastBalance.factory_9999_weight,
							old_pure_gold_weight:
								lastBalance.old_pure_gold_weight,
							old_mixed_gold_weight:
								lastBalance.old_mixed_gold_weight,
							product_gold_weight:
								lastBalance.product_gold_weight,
						},
					});
					return generateOkResponse<CreateBalanceOutputDto>({
						data: {
							id: result.id,
						},
					});
				} else {
					throw generateErrorResponse(
						new UnprocessableEntityException(
							'already created today',
						),
					);
				}
			}
			throw generateErrorResponse(
				new UnprocessableEntityException('no balance data found'),
			);
		} catch (error) {
			throw generateErrorResponse(error);
		}
	}
}

function convertToKST(date: string): string {
	const dateRegex = /^(\d{2})-(\d{2})-(\d{4})$/;
	const match = date.match(dateRegex);
	if (!match) {
		return '';
	}

	const [_, day, month, year] = match || [];
	// date is KST but DB Date is UTC
	const dateObj = new Date(`${year}-${month}-${day}`);
	dateObj.setHours(dateObj.getHours() - 9);
	return dateObj.toISOString();
}
