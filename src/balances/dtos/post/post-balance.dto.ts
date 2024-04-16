import { IsNotEmpty, IsNumber } from 'class-validator';
import { CoreOutputDto } from 'src/common/core/dtos/core.dto';

export class CreateInitialBalanceInputDto {
	@IsNotEmpty()
	@IsNumber()
	bill_million_count: number;

	@IsNotEmpty()
	@IsNumber()
	bill_100k_count: number;

	@IsNotEmpty()
	@IsNumber()
	bill_50k_count: number;

	@IsNotEmpty()
	@IsNumber()
	bill_10k_count: number;

	@IsNotEmpty()
	@IsNumber()
	bill_5k_count: number;

	@IsNotEmpty()
	@IsNumber()
	bill_1k_count: number;

	@IsNotEmpty()
	@IsNumber()
	bill_500_count: number;

	@IsNotEmpty()
	@IsNumber()
	bill_100_count: number;

	@IsNotEmpty()
	@IsNumber()
	bill_50_count: number;

	@IsNotEmpty()
	@IsNumber()
	bill_10_count: number;

	@IsNotEmpty()
	@IsNumber()
	retail_999_weight: number;

	@IsNotEmpty()
	@IsNumber()
	retail_9999_weight: number;

	@IsNotEmpty()
	@IsNumber()
	factory_995_weight: number;

	@IsNotEmpty()
	@IsNumber()
	factory_999_weight: number;

	@IsNotEmpty()
	@IsNumber()
	factory_9999_weight: number;

	@IsNotEmpty()
	@IsNumber()
	old_pure_gold_weight: number;

	@IsNotEmpty()
	@IsNumber()
	old_mixed_gold_weight: number;
}

export class CreateBalanceOutputDto extends CoreOutputDto {}
