import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { User } from '../../interfaces/User';
import { BehaviorSubject } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  $me: BehaviorSubject<User | undefined>;
  authenticationService = inject(AuthenticationService);
  http = inject(HttpClient);

  constructor() {
    this.$me = new BehaviorSubject<User | undefined>(undefined);
    this.authenticationService.isAuthenticated$.subscribe((isAuthenticated) => {
      if (!isAuthenticated) return;
      this.getMe().subscribe((me) => {
        this.$me.next(me);
      });
    });
  }

  getMe() {
    return this.http.get<User>(`${environment.baseUrl}/me`);
  }
}
