import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(private readonly configService: ConfigService) {}

  async isKeyValid(key: string) {
    if (key !== this.configService.get<string>('API_KEY')) {
      throw new UnauthorizedException();
    }
    return true;
  }
}
