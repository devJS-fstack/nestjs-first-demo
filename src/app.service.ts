import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHomepage(): string {
    return 'Home page';
  }

  getProfilePage(): any {
    return 'Profile page'
  }

}
