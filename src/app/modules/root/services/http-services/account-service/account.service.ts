import { Injectable } from '@angular/core';

import { ChangePassword } from './models/change-password.model';
import { Login } from './models/login.model';
import { Register } from './models/register.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AccountService {
  constructor(private httpClient: HttpClient) { }

  // POST method
  login(login: Login): void {
    // TODO: Implement http request.
  }

  register(register: Register): Observable<any> {
    return this.httpClient.post('http://185.89.125.89:8090/api/auth/signup', register);
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
