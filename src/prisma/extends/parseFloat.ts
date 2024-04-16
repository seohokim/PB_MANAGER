import { Balance } from '@prisma/client';
import { BalanceDTO } from 'src/balances/dtos/balance.dto';
import defaultPrisma from 'src/prisma/extends/default';

const parseFloatPrisma = defaultPrisma.$extends({
	result: {
		balance: {
			convertWeights: {
				needs: {},
				compute(balance: Balance) {
					const converted = {} as BalanceDTO;
					for (const key in balance) {
						if (key.endsWith('weight') && balance[key] !== null) {
							converted[key] = parseFloat(balance[key]);
						} else {
							converted[key] = balance[key];
						}
					}
					return converted;
				},
			},
		},
	},
});

export default parseFloatPrisma;
