import {
  Controller, Get, Post, Req, Res, Body, Query, Ip, Param,
  Header,
  HttpStatus, HttpException, BadRequestException,
  ParseIntPipe
} from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';
import { AuthorizationException } from './utils/exception.module'
interface User {
  name: string,
  age: number
}
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }
  @Get(':id')
  @Header('Content-Type', 'application/json')
  @Header('Authorization', 'some token value')
  getHomepage(@Req() req: Request, @Body() body: User, @Res() res: Response, @Query() query: any, @Param('id', ParseIntPipe) params: number): any {
    // const body = JSON.parse(event)
    // res.setHeader('Content-Type', 'application/json');
    // res.setHeader('Authorization', 'some access token or id token')
    console.log(req.body)
    res.status(200).json({
      code: 200,
      message: 'success',
      page: 'Home Page',
      data: body,
      query,
      params
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

  @Post('/login')
  postLogin(@Req() req: Request, @Res() res: Response) {
    res.status(200).json({
      code: 200,
      message: 'success',
      page: 'Post Login Page'
    })
  }

  @Get('/login')
  getLogin(@Req() req: Request, @Res() res: Response) {
    // throw new AuthorizationException({
    //   message: 'Invalid username or password',  => custom exception
    //   status: 'Authorization Failed'
    // })

    throw new BadRequestException()
    res.status(200).json({
      code: 200,
      message: 'success',
      page: 'Get Login Page'
    })
  }
}
