import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { TokenData } from '../token/models/token-data.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private tokenService: TokenService) { }

  isAuthenticated(): boolean {
    let token = this.tokenService.getToken();

    if (token === null || token === undefined || token === '') {
      return false;
    }

    if (this.isTokenExpired(this.tokenService.getTokenDataObject())) {
      return false;
    }

    return true;
  }

  private isTokenExpired(tokenData: TokenData): boolean {
    let expDate = new Date(0).setUTCSeconds(tokenData.exp);

    return !(expDate.valueOf() > new Date().valueOf())
  }
}
