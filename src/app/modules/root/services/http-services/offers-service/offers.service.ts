import { Injectable } from '@angular/core';

import { Offer } from './models/offer.model';
import { Comment } from './models/comment.model';

@Injectable()
export class OffersService {
  // TODO: Implements httpClient
  constructor() { }

  // GET method
  getOffers(): void {
    // TODO: Implement http request logic.
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
