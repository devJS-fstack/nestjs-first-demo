import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfileService {
    getProfilePage(): any {
        return 'Profile page'
    }

}
