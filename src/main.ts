import { NestFactory } from '@nestjs/core';
import cors from 'cors';
import helmet from 'helmet';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  app.use(helmet());
  await app.listen(3000);
}

bootstrap();
