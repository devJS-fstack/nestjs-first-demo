import { HttpException, HttpStatus } from '@nestjs/common'


export class AuthorizationException extends HttpException {
    constructor(err: any) {
        super({
            code: HttpStatus.UNAUTHORIZED,
            ...err
        }, HttpStatus.UNAUTHORIZED);

    }
}