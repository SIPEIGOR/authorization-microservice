import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { LoginDto, RegisterDto } from '../dto/authorization.dto';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { AuthorizationService } from '../services/authorization.service';

@Controller('authorization')
export class AuthorizationController {
  constructor(private readonly authorizationService: AuthorizationService) {}

  @Post('registration')
  async registration(@Body() dto: RegisterDto) {
    return this.authorizationService.registration(dto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() dto: LoginDto) {
    return this.authorizationService.login(dto);
  }
}
