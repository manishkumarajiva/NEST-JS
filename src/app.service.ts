import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService){}

  getHello(): string {
    const port = this.configService.get('app.port');
    return `<h1>Server is listening on http://localhost:${port}</h1>`;
  }
}
