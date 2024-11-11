import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { normalizeEmail } from '../utils/normalize-email';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  async canActivate(context: ExecutionContext): Promise<any> {
    const request = context.switchToHttp().getRequest();
    if (request.body && request.body.email) {
      request.body.email = normalizeEmail(request.body.email);
    }
    return super.canActivate(context);
  }
}
