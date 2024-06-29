import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private authenticationService = inject(AuthenticationService);

  constructor() {}

  async ngOnInit() {
    this.route.fragment.subscribe((fragment) => {
      if (!fragment) return;
      const { accessToken, tokenType } =
        this.authenticationService.parseTokenFromUrlFragment(fragment);
      this.authenticationService.setToken(accessToken, tokenType);
    });
    this.router.navigate(['/me']);
  }
}
