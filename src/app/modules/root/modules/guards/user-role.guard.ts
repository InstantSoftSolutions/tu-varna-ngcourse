import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';

import { TokenService } from 'src/app/modules/shared/services/token/token.service';

@Injectable({
  providedIn: 'root'
})
export class UserRoleGuard implements CanLoad {
  constructor( private tokenService: TokenService) {}
  canLoad(): boolean {
    let tokenData = this.tokenService.getTokenDataObject();

    if (tokenData !== null && tokenData !== undefined) {
      if(tokenData.roles !== null && tokenData.roles !== undefined) {
        if (tokenData.roles.includes('ROLE_USER')) {
          return true;
        }
        else {
          return false;
        }
      }
    }

    return false;
  }
}
