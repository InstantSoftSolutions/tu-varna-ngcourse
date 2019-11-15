import { Component, OnInit, OnDestroy } from '@angular/core';
import { OffersService } from '../../services/http-services/offers-service/offers.service';
import { Observable, Subscription } from 'rxjs';
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
  syncOffers: Offer[];

  private subscription: Subscription;

  constructor(private offersService: OffersService, private dialog: MatDialog ) {
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this.offers$ = this.offersService.getOffers();

    this.subscription.add(this.offersService.getOffers().subscribe((data: Offer[]) => {
        this.syncOffers = data;
    }))
  }

  onOfferDetailsButtonClicked(model: Offer): void {
    let dialogRef = this.dialog.open(OfferDetailsComponent, {
      data: model,
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
