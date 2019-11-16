import { Component, OnInit } from '@angular/core';
import { OffersService } from '../../services/http-services/offers-service/offers.service';
import { Observable } from 'rxjs';
import { Offer } from '../../services/http-services/offers-service/models/offer.model';
import { delay } from 'rxjs/operators';
import { OfferDetailsComponent } from '../offer-details/offer-details.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  offers$: Observable<Offer[]>;
  constructor(private offersService: OffersService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.offers$ = this.offersService.getOffers().pipe(delay(5000));
  }

  onOfferDetailsButtonClicked(model: Offer): void {
    let dialogRef = this.dialog.open(OfferDetailsComponent, {
      data: model,
    });
  }

}
