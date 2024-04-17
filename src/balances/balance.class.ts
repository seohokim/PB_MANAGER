import { PickType } from '@nestjs/mapped-types';
import { Balance } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
import { IsNotEmpty } from 'class-validator';

export class BalanceClass {
	id: string;
	created_at: Date;
	updated_at: Date;
	last_balance_id: string | null;
	gold_weight: Decimal;
	cash_amount: number;
	bill_million_count: number;
	bill_100k_count: number;
	bill_50k_count: number;
	bill_10k_count: number;
	bill_5k_count: number;
	bill_1k_count: number;
	bill_500_count: number;
	bill_100_count: number;
	bill_50_count: number;
	bill_10_count: number;
	retail_999_weight: Decimal;
	retail_9999_weight: Decimal;
	factory_995_weight: Decimal;
	factory_999_weight: Decimal;
	factory_9999_weight: Decimal;
	old_pure_gold_weight: Decimal;
	old_mixed_gold_weight: Decimal;
	product_gold_weight: Decimal;
	advanced_gold_weight: Decimal;
	advanced_cash_amount: number;
	unpaid_gold_weight: Decimal;
	unpaid_cash_amount: number;
	lend_gold_weight: Decimal;
	borrow_gold_weight: Decimal;

	constructor({
		id,
		created_at,
		updated_at,
		last_balance_id,
		gold_weight,
		cash_amount,
		bill_million_count,
		bill_100k_count,
		bill_50k_count,
		bill_10k_count,
		bill_5k_count,
		bill_1k_count,
		bill_500_count,
		bill_100_count,
		bill_50_count,
		bill_10_count,
		retail_999_weight,
		retail_9999_weight,
		factory_995_weight,
		factory_999_weight,
		factory_9999_weight,
		old_pure_gold_weight,
		old_mixed_gold_weight,
		product_gold_weight,
		advanced_gold_weight,
		advanced_cash_amount,
		unpaid_gold_weight,
		unpaid_cash_amount,
		lend_gold_weight,
		borrow_gold_weight,
	}: Balance) {
		this.id = id;
		this.created_at = created_at;
		this.updated_at = updated_at;
		this.last_balance_id = last_balance_id;
		this.gold_weight = gold_weight;
		this.cash_amount = cash_amount;
		this.bill_million_count = bill_million_count;
		this.bill_100k_count = bill_100k_count;
		this.bill_50k_count = bill_50k_count;
		this.bill_10k_count = bill_10k_count;
		this.bill_5k_count = bill_5k_count;
		this.bill_1k_count = bill_1k_count;
		this.bill_500_count = bill_500_count;
		this.bill_100_count = bill_100_count;
		this.bill_50_count = bill_50_count;
		this.bill_10_count = bill_10_count;
		this.retail_999_weight = retail_999_weight;
		this.retail_9999_weight = retail_9999_weight;
		this.factory_995_weight = factory_995_weight;
		this.factory_999_weight = factory_999_weight;
		this.factory_9999_weight = factory_9999_weight;
		this.old_pure_gold_weight = old_pure_gold_weight;
		this.old_mixed_gold_weight = old_mixed_gold_weight;
		this.product_gold_weight = product_gold_weight;
		this.advanced_gold_weight = advanced_gold_weight;
		this.advanced_cash_amount = advanced_cash_amount;
		this.unpaid_gold_weight = unpaid_gold_weight;
		this.unpaid_cash_amount = unpaid_cash_amount;
		this.lend_gold_weight = lend_gold_weight;
		this.borrow_gold_weight = borrow_gold_weight;
	}
}

export class BalanceClassConvertedWeight extends PickType(BalanceClass, [
	'id',
	'created_at',
	'updated_at',
	'last_balance_id',
	'gold_weight',
	'cash_amount',
	'bill_million_count',
	'bill_100k_count',
	'bill_50k_count',
	'bill_10k_count',
	'bill_5k_count',
	'bill_1k_count',
	'bill_500_count',
	'bill_100_count',
	'bill_50_count',
	'bill_10_count',
	'advanced_cash_amount',
	'unpaid_cash_amount',
]) {
	retail_999_weight: number;
	retail_9999_weight: number;
	factory_995_weight: number;
	factory_999_weight: number;
	factory_9999_weight: number;
	old_pure_gold_weight: number;
	old_mixed_gold_weight: number;
	product_gold_weight: number;
	advanced_gold_weight: number;
	unpaid_gold_weight: number;
	lend_gold_weight: number;
	borrow_gold_weight: number;
}
