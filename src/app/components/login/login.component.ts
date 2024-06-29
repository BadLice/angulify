import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  route = inject(ActivatedRoute);
  authenticationService: AuthenticationService = inject(AuthenticationService);

  constructor(private router: Router) {
    this.route.fragment.subscribe((fragment) => {
      if (!fragment) return;
      const { accessToken, tokenType } =
        this.authenticationService.parseTokenFromUrlFragment(fragment);
      this.authenticationService.setToken(accessToken, tokenType);
    });
    router.navigate(['/login']);
  }
}
