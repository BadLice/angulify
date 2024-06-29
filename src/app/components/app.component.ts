import { Component, inject } from '@angular/core';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  authenticationService = inject(AuthenticationService);
  isAuthenticated!: boolean;

  ngOnInit() {
    this.authenticationService
      .isAuthenticated()
      .subscribe(async (isAuthenticated) => {
        console.log('=>(app.component.ts:26) isAuthenticated', isAuthenticated);
        this.isAuthenticated = isAuthenticated;
        if (!isAuthenticated) return;
      });
  }
}
