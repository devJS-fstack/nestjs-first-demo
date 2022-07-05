import { Controller, Get, Req, Res, Body, Query, Ip } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHomepage(@Body() body: any, @Res() res: Response, @Query() query: any, @Ip() ip: any): any {
    // const body = JSON.parse(event)
    res.status(200).json({
      code: 200,
      message: 'success',
      page: 'Home Page',
      data: body.data,
      query,
      ip
    })
  }
  @Get('/profile')
  getProfile(@Req() req: Request, @Res() res: Response): any {
    res.status(200).json({
      code: 200,
      message: 'success',
      page: 'Profile Page'
    })
  }
}
