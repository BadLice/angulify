import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  setToken(token: string, tokenType: string) {
    localStorage.setItem('authenticationToken', token);
    localStorage.setItem('authenticationTokenType', tokenType);
  }

  getToken() {
    const token = localStorage.getItem('authenticationToken');
    const tokenType = localStorage.getItem('authenticationTokenType');
    if (!token || !tokenType) return {};
    return { token, tokenType };
  }

  parseTokenFromUrlFragment(fragment: string) {
    const url = new URLSearchParams(fragment);
    const accessToken = url.get('access_token');
    const tokenType = url.get('token_type');
    const expires = url.get('expires_in');
    if (!accessToken) throw new Error('Unable to parse accessToken');
    if (!tokenType) throw new Error('Unable to parse tokenType');
    if (!expires) throw new Error('Unable to parse expires');
    return {
      accessToken,
      tokenType,
      expires,
    };
  }

  getAuthRedirectUrl() {
    const redirect_uri = 'http://localhost:4200/login';
    const scope = 'user-read-private user-read-email';
    return `https://accounts.spotify.com/authorize?response_type=token&client_id=${encodeURIComponent(environment.clientId)}&scope=${encodeURIComponent(scope)}&redirect_uri=${encodeURIComponent(redirect_uri)}`;
  }
}
