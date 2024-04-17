import {
	Body,
	Controller,
	Get,
	Post,
	Query,
	ValidationPipe,
} from '@nestjs/common';
import {
	ApiBadRequestResponse,
	ApiOkResponse,
	ApiParam,
} from '@nestjs/swagger';
import { BalanceService } from 'src/balances/balances.service';
import {
	GetBalanceByDateRangeInputDto,
	GetBalanceByDateRangeOutputDto,
	GetLatestBalanceOutputDto,
} from 'src/balances/dtos/get-balance.dto';
import {
	CreateBalanceOutputDto,
	CreateInitialBalanceInputDto,
} from 'src/balances/dtos/post-balance.dto';

@Controller('balance')
export class BalanceController {
	constructor(private readonly balanceService: BalanceService) {}

	@ApiOkResponse({
		type: GetLatestBalanceOutputDto,
		description: 'Get the latest balance',
	})
	@ApiBadRequestResponse({
		description: 'Error details',
		type: GetLatestBalanceOutputDto,
	})
	@Get('latest')
	async findLatest(): Promise<GetLatestBalanceOutputDto> {
		return this.balanceService.findLatestBalance();
	}

	@ApiParam({
		name: 'startDate',
		required: true,
		type: String,
	})
	@ApiParam({
		name: 'endDate',
		required: true,
		type: String,
	})
	@Get()
	async findByDateRange(
		@Query(ValidationPipe) query: GetBalanceByDateRangeInputDto,
	): Promise<GetBalanceByDateRangeOutputDto> {
		return this.balanceService.findByDateRange(query);
	}

	@Post('init')
	async initBalance(
		@Body(ValidationPipe) body: CreateInitialBalanceInputDto,
	): Promise<CreateBalanceOutputDto> {
		return this.balanceService.initBalance(body);
	}

	@Post()
	async create(): Promise<CreateBalanceOutputDto> {
		return this.balanceService.createBalance();
	}
}
