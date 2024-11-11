import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { LoginDto, RegisterDto } from '../dto/authorization.dto';
import { AuthorizationEntity } from '../entities/authorization.entity';
import { generateTokens } from '../utils/generate-tokens';

@Injectable()
export class AuthorizationService {
  constructor(
    @InjectRepository(AuthorizationEntity)
    private readonly authorizationRepository: Repository<AuthorizationEntity>,
    private readonly jwtService: JwtService,
  ) {}

  async registration(dto: RegisterDto) {
    const email = dto.email.toLowerCase().trim();
    const candidate = await this.authorizationRepository.findOne({
      where: { email },
    });

    if (candidate) {
      throw new BadRequestException(
        'Користувач з таким email вже зареєстрований',
      );
    }

    const newUser = this.authorizationRepository.create({
      ...dto,
      email,
    });

    return await this.authorizationRepository.save(newUser);
  }

  async login(dto: LoginDto) {
    const email = dto.email.toLowerCase().trim();
    const user = await this.authorizationRepository.findOne({
      where: { email },
    });

    if (!user) {
      throw new BadRequestException('Користувач з таким email не знайдений');
    }

    const payload = { email: user.email, id: user.id };
    const tokens = await generateTokens(payload);

    user.isVerified = true;
    user.refreshToken = tokens.refreshToken;
    await this.authorizationRepository.save(user);

    return tokens;
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.authorizationRepository.findOne({
      where: { email },
    });

    if (user && bcrypt.compareSync(password, user.password)) {
      const { ...result } = user;
      return result;
    }
    return null;
  }

  async findUserById(id: string) {
    return await this.authorizationRepository.findOne({
      where: { id },
    });
  }
}
