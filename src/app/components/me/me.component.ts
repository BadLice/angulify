import { Component, inject } from '@angular/core';
import { User } from '../../interfaces/User';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css'],
})
export class MeComponent {
  me: User | undefined;
  usersService = inject(UsersService);
  protected readonly JSON = JSON;

  ngOnInit() {
    this.usersService.$me.subscribe((me) => (this.me = me));
  }
}
