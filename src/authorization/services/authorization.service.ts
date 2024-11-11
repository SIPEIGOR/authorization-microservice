import {
  BadRequestException,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { LoginDto, RegisterDto } from '../dto/authorization.dto';
import { AuthorizationEntity } from '../entities/authorization.entity';
import { generateTokens } from '../utils/generate-tokens';
import { normalizeEmail } from '../utils/normalize-email';

@Injectable()
export class AuthorizationService {
  constructor(
    @InjectRepository(AuthorizationEntity)
    private readonly authorizationRepository: Repository<AuthorizationEntity>,
    private readonly jwtService: JwtService,
  ) {}

  private async isPasswordValid(
    password: string,
    hash: string,
  ): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }

  async registration(dto: RegisterDto) {
    const email = normalizeEmail(dto.email);
    const existingUser = await this.authorizationRepository.findOne({
      where: { email },
    });

    if (existingUser) {
      throw new BadRequestException(
        'Користувач з таким email вже зареєстрований',
      );
    }

    const newUser = this.authorizationRepository.create({
      ...dto,
      email,
    });

    return this.authorizationRepository.save(newUser);
  }

  async login(dto: LoginDto) {
    const email = normalizeEmail(dto.email);
    const user = await this.authorizationRepository.findOne({
      where: { email },
    });

    if (!user) {
      throw new BadRequestException('Користувач з таким email не знайдений');
    }

    user.tokenVersion += 1;

    const payload = {
      email: user.email,
      id: user.id,
      tokenVersion: user.tokenVersion,
    };
    const tokens = await generateTokens(payload);

    await this.authorizationRepository.save({
      ...user,
      isVerified: true,
      refreshToken: tokens.refreshToken,
    });

    return tokens;
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.authorizationRepository.findOne({
      where: { email },
    });

    if (user && (await this.isPasswordValid(password, user.password))) {
      const { password, refreshToken, ...result } = user;
      return result;
    }
    return null;
  }

  async findUserById(id: string) {
    return this.authorizationRepository.findOne({ where: { id } });
  }

  async refresh(refreshToken: string) {
    if (!refreshToken) {
      throw new UnauthorizedException('Refresh token is missing');
    }

    let payload;
    try {
      payload = this.jwtService.verify(refreshToken, {
        secret: process.env.JWT_SECRET,
      });
    } catch (error) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    const user = await this.authorizationRepository.findOne({
      where: { id: payload.id },
    });

    if (!user || user.refreshToken !== refreshToken) {
      console.error('Stored token does not match or user not found');
      throw new UnauthorizedException('Invalid refresh token');
    }

    const newTokens = await generateTokens({
      email: user.email,
      id: user.id,
      tokenVersion: user.tokenVersion,
    });

    user.refreshToken = newTokens.refreshToken;
    await this.authorizationRepository.save(user);

    return newTokens;
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;
    if (!authHeader) {
      throw new UnauthorizedException('Authorization header missing');
    }

    const token = authHeader.split(' ')[1];
    try {
      const payload = this.jwtService.verify(token);
      const user = await this.authorizationRepository.findOne({
        where: { id: payload.id },
      });
      if (!user || user.tokenVersion !== payload.tokenVersion) {
        throw new UnauthorizedException('Invalid token');
      }

      request.user = payload;
      return true;
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
