import { Component, OnInit } from '@angular/core';
import { OffersService } from '../../services/http-services/offers-service/offers.service';
import { Observable } from 'rxjs';
import { Offer } from '../../services/http-services/offers-service/models/offer.model';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  offers$: Observable<Offer[]>;
  constructor(private offersService: OffersService) { }

  ngOnInit(): void {
    this.offers$ = this.offersService.getOffers();
  }

  onOfferDetailsButtonClicked(model: Offer): void {
    console.log(model);
  }

}
