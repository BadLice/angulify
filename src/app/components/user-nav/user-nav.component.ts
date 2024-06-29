import { Component, inject } from '@angular/core';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css'],
})
export class UserNavComponent {
  displayName: string | undefined = undefined;
  usersService = inject(UsersService);

  ngOnInit() {
    this.usersService.$me.subscribe((me) => {
      this.displayName = me?.display_name;
    });
  }

  getWelcomeText() {
    if (!this.displayName) return;
    return `Welcome, ${this.displayName}`;
  }
}
