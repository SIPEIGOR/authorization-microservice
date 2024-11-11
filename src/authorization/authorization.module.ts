import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorizationController } from './controllers/authorization.controller';
import { AuthorizationEntity } from './entities/authorization.entity';
import { AuthorizationService } from './services/authorization.service';
import { LocalStrategy } from './strategy/local.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'your_jwt_secret_key',
      signOptions: { expiresIn: '1h' },
    }),
    TypeOrmModule.forFeature([AuthorizationEntity]),
  ],
  controllers: [AuthorizationController],
  providers: [AuthorizationService, LocalStrategy],
  exports: [AuthorizationService, LocalStrategy],
})
export class AuthorizationModule {}
