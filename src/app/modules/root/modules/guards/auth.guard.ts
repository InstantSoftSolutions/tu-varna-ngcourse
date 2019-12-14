import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';

import { AuthService } from 'src/app/modules/shared/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService, private routerService: Router) {

  }

  canLoad(): boolean {
    console.log('AUTH-GUARD')
    if (this.authService.isAuthenticated()) {
      return true;
    }
    else {
      this.routerService.navigate(['/']);

      return false;
    }
  }
}
