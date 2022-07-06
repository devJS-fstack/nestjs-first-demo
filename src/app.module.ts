import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileService } from './profile.service';
import { AppMiddleware } from './app.middleware'

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ProfileService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AppMiddleware)
      .exclude('/')
      .forRoutes(AppController)
  }
}
