import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { HttpLoggingInterceptor } from 'src/common/logging.interceptor';

async function bootstrap() {
	const app = await NestFactory.create(AppModule, {
		logger: ['error', 'warn', 'log'],
	});

	const prismaService = app.get(PrismaService);
	await prismaService.enableShutdownHooks(app);
	app.useGlobalInterceptors(new HttpLoggingInterceptor());
	app.useGlobalPipes(new ValidationPipe());
	await app.listen(3000);
}
bootstrap();
