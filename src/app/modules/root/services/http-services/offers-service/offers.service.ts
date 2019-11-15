import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Offer } from './models/offer.model';
import { Comment } from './models/comment.model';

import { BASE_URL } from 'src/app/utilities/consts';

@Injectable()
export class OffersService {
  constructor(private httpClient: HttpClient) { }

  // GET method
  getOffers(): Observable<Offer[]> {
    return this.httpClient.get<Offer[]>(BASE_URL + 'offers');
  }

  // GET method
  getOfferById(id: string): void {
    // TODO: Implement http request logic.
  }

  // GET method
  getOffersByLocation(): void {
    // TODO: Implement http request logic.
    // Should returns array of Offer model.
  }

  // POST method
  addOffer(model: Offer): void {
    // TODO: Implement http request logic.
  }

  // PUT method
  editOffer(model: Offer): void {
    // TODO: Implement http request logic.
  }

  // DELETE method 
  removeOffer(id: string): void {
    // TODO: Implement http request logic.
  }

  // POST method
  addComment(model: Comment): void {
    // TODO: Implement http request logic.
  }

  // PUT method
  likeOffer(id: string): void {
    // TODO: Implement http request logic.
  }
}
