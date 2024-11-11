import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { AuthorizationEntity } from '../entities/authorization.entity';

export class RegisterDto implements Partial<AuthorizationEntity> {
  @IsEmail({}, { message: 'Некоректний формат email' })
  email: string;

  @IsNotEmpty({ message: 'Пароль не може бути порожнім' })
  @MinLength(6, { message: 'Пароль повинен містити мінімум 6 символів' })
  password: string;
}

export class LoginDto implements Partial<AuthorizationEntity> {
  @IsEmail({}, { message: 'Некоректний формат email' })
  email: string;

  @IsNotEmpty({ message: 'Пароль не може бути порожнім' })
  password: string;
}
