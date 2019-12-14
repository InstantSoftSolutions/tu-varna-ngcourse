import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ChangePassword } from './models/change-password.model';
import { Login } from './models/login.model';
import { Register } from './models/register.model';
import { Observable } from 'rxjs';

const SERVER_URL = 'http://185.89.125.89:8090/api/'

@Injectable()
export class AccountService {
  constructor(private httpClient: HttpClient) { }

  // POST method
  login(login: Login): Observable<any> {
    return this.httpClient.post<any>(SERVER_URL + 'auth/signin', login);
  }

  // POST method
  register(register: Register): Observable<any> {
    return this.httpClient.post<any>(SERVER_URL + 'auth/signup', register);
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
