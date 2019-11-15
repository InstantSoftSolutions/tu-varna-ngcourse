import { Component, OnInit, OnDestroy } from '@angular/core';

import { OffersService } from '../../services/http-services/offers-service/offers.service';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators'
import { Offer } from '../../services/http-services/offers-service/models/offer.model';
import { OfferDetailsComponent } from '../offer-details/offer-details.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit, OnDestroy {
  offers$: Observable<Offer[]>;

  constructor(public offersService: OffersService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.offers$ = this.offersService.getOffers().pipe(delay(2000));
  }

  onDetailsButtonClicked(model: Offer): void {
    let dialogRef = this.dialog.open(OfferDetailsComponent, {
      data: model,
    });
    console.log(model);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnDestroy(): void {

  }

}
