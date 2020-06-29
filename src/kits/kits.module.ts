import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { KitsController } from './kits.controller';
import { KitsService } from './kits.service';
import { logger } from './middlewares/logger.middleware';

@Module({
  controllers: [KitsController],
  providers: [KitsService]
})
export class KitsModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(logger)
      .forRoutes(KitsController)
  }
}
