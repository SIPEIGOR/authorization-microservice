import { AdminModule } from '@adminjs/nestjs';
import { Database, Resource } from '@adminjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import AdminJS from 'adminjs';
import { options } from './adminjs/config/adminjs-options';
import { AuthorizationModule } from './authorization/authorization.module';
import { DatabaseModule } from './database/database.module';

AdminJS.registerAdapter({ Database, Resource });

// const DEFAULT_ADMIN = {
//   email: 'admin',
//   password: '07SX;Apk&U9u',
// };

// const authenticate = async (email: string, password: string) => {
//   if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
//     return Promise.resolve(DEFAULT_ADMIN);
//   }
//   return null;
// };

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot(),
    AdminModule.createAdminAsync({
      useFactory: () => ({
        adminJsOptions: options,
        // auth: {
        //   authenticate,
        //   cookieName: 'adminjs',
        //   cookiePassword: 'somePassword',
        // },
        sessionOptions: {
          resave: false,
          saveUninitialized: true,
          secret: 'someSecret',
          cookie: {
            maxAge: 1800000,
          },
          rolling: true,
        },
      }),
    }),
    HttpModule,
    DatabaseModule,
    AuthorizationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
