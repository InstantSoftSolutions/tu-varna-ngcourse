import { Injectable } from '@angular/core';

import { Base64 } from 'js-base64';

import { TOKEN_KEY } from 'src/app/utilities/consts';
import { TokenData } from './models/token-data.model';

// Check your token here : https://jwt.io/

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  getToken(): string | null {
    let localStorageToken = localStorage.getItem(TOKEN_KEY);

    if(localStorageToken !== null && localStorageToken !== undefined) {
      return localStorageToken;
    }

    return null;
  }

  getTokenDataObject(): TokenData | null {
    let token = this.getToken();

    if (token === null || token === undefined || token === '') {
      return null;
    }

    let tokenData = token.split('.')[1];

    let decodedTokenData = Base64.decode(tokenData);

    return <TokenData>JSON.parse(decodedTokenData);
  }

  setToken(token: string): void {
    this.removeToken(); // Clear storage if there is token

    localStorage.setItem(TOKEN_KEY, token)
  }

  removeToken(): void {
    localStorage.removeItem(TOKEN_KEY);
  }
}
