import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { instance } from '../../interceptors/authentication.interceptor';
import { User } from '../../interfaces/User';
import { BehaviorSubject } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  $me: BehaviorSubject<User | undefined>;
  authenticationService = inject(AuthenticationService);

  constructor() {
    this.$me = new BehaviorSubject<User | undefined>(undefined);
    this.authenticationService.isAuthenticated$.subscribe((isAuthenticated) => {
      this.getMe().then((me) => {
        this.$me.next(me);
      });
    });
  }

  async getMe(): Promise<User> {
    return (await instance.get(`${environment.baseUrl}/me`)).data;
  }
}
