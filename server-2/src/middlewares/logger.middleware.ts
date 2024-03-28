import { Injectable, NestMiddleware } from '@nestjs/common';
import { Log4jsLogger } from '@nestx-log4js/core';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private logger: Log4jsLogger) {}

  use(req: Request, res: any, next: (error?: any) => void) {
    console.log('Authentication ...');

    this.logger.log(`LOG: Method: ${req.method}: ${req.url}`);
    next();
  }
}
