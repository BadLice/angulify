import { inject, Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
  authenticationService = inject(AuthenticationService);

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    const { token, tokenType } = this.authenticationService.getToken();
    if (!token) return next.handle(request);
    const modifiedRequest = request.clone({
      setHeaders: {
        Authorization: `${tokenType} ${token}`,
      },
    });
    return next.handle(modifiedRequest);
  }
}
