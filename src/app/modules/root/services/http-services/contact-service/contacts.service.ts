import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Message } from './models/message.model';

const SERVER_URL = 'http://185.89.125.89:8090/api/'

@Injectable()
export class ContactsService {
  constructor(private httpClient: HttpClient) { }

  //POST - за създаване на нов запис в базата
  //PUT - за редакция на запис
  //GET - за извличане на запис
  //DELETE - се използва за изтриване на запис
  sendMessage(message: Message): Observable<any> {
    return this.httpClient.post<any>(SERVER_URL + 'contacts', message );
  }
}
