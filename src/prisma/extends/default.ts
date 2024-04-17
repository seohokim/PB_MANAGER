import { INestApplication } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

const defaultPrisma = new PrismaClient().$extends({
	client: {
		async onModuleInit() {
			await Prisma.getExtensionContext(this).$connect();
		},
		async enableShutdownHooks(app: INestApplication) {
			Prisma.getExtensionContext(this).$on('beforeExit', async () => {
				await app.close();
			});
		},
	},
});

export default defaultPrisma;
