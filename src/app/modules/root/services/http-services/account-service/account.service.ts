import { Injectable } from '@angular/core';

import { ChangePassword } from './models/change-password.model';
import { Login } from './models/login.model';
import { Register } from './models/register.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  // TODO: Implement httpClient
  constructor() { }

  // POST method
  login(login: Login): void {
    // TODO: Implement http request.
  }

  // POST method
  register(register: Register): void {
    // TODO: Implement http request.
  }

  // PUT method
  changePassword(model: ChangePassword): void {
    // TODO: Implement http request.
  }

  // GET method
  getProfile(): void {
    // TODO: Implement http request.
    // Should returns Profile model.
  }
}
