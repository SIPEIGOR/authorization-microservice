import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthorizationService } from '../services/authorization.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authorizationService: AuthorizationService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: any) {
    const auth = await this.authorizationService.findUserById(payload.sub);
    return {
      userId: payload.sub,
      email: payload.email,
      user: auth,
      role: payload.role,
    };
  }
}
