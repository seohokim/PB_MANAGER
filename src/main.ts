import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpLoggingInterceptor } from 'src/common/logging.interceptor';
import { setupSwagger } from 'src/common/utils/swagger.util';

import { PrismaService } from 'src/prisma/prisma.service';

async function bootstrap() {
	const app = await NestFactory.create(AppModule, {
		logger: ['error', 'warn', 'log', 'debug'],
	});

	const prismaService = app.get(PrismaService);
	await prismaService.enableShutdownHooks(app);
	app.useGlobalInterceptors(new HttpLoggingInterceptor());
	app.useGlobalPipes(new ValidationPipe());
	app.setGlobalPrefix('pb-manager/api');
	setupSwagger(app);
	await app.listen(3000);
}
bootstrap();
