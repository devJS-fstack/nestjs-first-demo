import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileService } from './profile.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ProfileService],
})
export class AppModule { }
