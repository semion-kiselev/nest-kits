import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KitsModule } from './kits/kits.module';

@Module({
  imports: [KitsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
