import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Message } from './models/message.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContactsService {
  constructor(private httpClient: HttpClient) { }

  sendMessage(message: Message): Observable<any> {
     return this.httpClient.post('http://185.89.125.89:8090/api/contacts', message);
  }
}
