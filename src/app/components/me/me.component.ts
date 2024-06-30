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

  ngOnInit() {
    this.usersService.$me.subscribe((me) => (this.me = me));
  }

  getImageUrl() {
    return (
      this.me?.images.sort(({ height: a }, { height: b }) => b - a)?.[0]?.url ??
      ''
    );
  }
}
