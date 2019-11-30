import { Injectable } from '@angular/core';

import { Message } from './models/message.model';

@Injectable()
export class ContactsService {
  // TODO: Implement httpClient
  constructor() { }

  sendMessage(message: Message): void {
    //TODO: Implement http request logic and refactor 
  }
}
