import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { LoginDto, RegisterDto } from '../dto/authorization.dto';
import { JwtAuthGuard } from '../guards/jwt.guard';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { AuthorizationService } from '../services/authorization.service';

@Controller('authorization')
export class AuthorizationController {
  constructor(private readonly authorizationService: AuthorizationService) {}

  @Post('registration')
  @HttpCode(HttpStatus.CREATED)
  async registration(@Body() dto: RegisterDto): Promise<{ message: string }> {
    await this.authorizationService.registration(dto);
    return { message: 'Реєстрація успішна' };
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(
    @Body() dto: LoginDto,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    return this.authorizationService.login(dto);
  }

  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  async refresh(
    @Body('refreshToken') refreshToken: string,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    return this.authorizationService.refresh(refreshToken);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  @HttpCode(HttpStatus.OK)
  async me(): Promise<{ message: string }> {
    return { message: 'Ви успішно авторизовані' };
  }
}
