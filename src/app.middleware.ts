import { Injectable, NestMiddleware, Req } from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'

@Injectable()
export class AppMiddleware implements NestMiddleware {
    use(@Req() req: Request, res: Response, next: NextFunction) {
        console.log('Handle before go to controller 123...')
        next();
    }
}