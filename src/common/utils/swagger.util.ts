import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication): void {
	const options = new DocumentBuilder()
		.setTitle('PB Manger API Docs')
		.setDescription('The PB Manager API description')
		.setVersion('1.0.0')
		.build();

	const document = SwaggerModule.createDocument(app, options);
	SwaggerModule.setup('api-docs', app, document);
}
