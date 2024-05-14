import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { doubleCsrf } from 'csrf-csrf';
import { strict } from 'assert';
import * as session from 'express-session';
import * as passport from 'passport';

var cookieParser = require('cookie-parser')

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app
    .use(helmet())
    // .use(doubleCsrf)
    // .use(cookieParser())
    // .use(passport.initialize())
    // .use(passport.session())
    .enableCors();
  await app.listen(3000);
}
bootstrap();
