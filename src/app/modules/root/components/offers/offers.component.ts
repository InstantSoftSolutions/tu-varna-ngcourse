import { Component, OnInit, OnDestroy } from '@angular/core';
import { OffersService } from '../../services/http-services/offers-service/offers.service';
import { Observable, Subscription } from 'rxjs';
import { Offer } from '../../services/http-services/offers-service/models/offer.model';
import { delay } from 'rxjs/operators';
import { OfferDetailsComponent } from '../offer-details/offer-details.component';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit, OnDestroy {
  idForm: FormGroup;

  offers$: Observable<Offer[]>;
  //Container for all subscriptions
  private subscription: Subscription;

  constructor(private formBuilder: FormBuilder, private offersService: OffersService, private dialog: MatDialog) {
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this.idForm = this.generateForm();

    this.offers$ = this.offersService.getOffers().pipe(delay(5000));
  }

  ngOnDestroy(): void {
    // Clear memory leaks
    this.subscription.unsubscribe();
  }

  onDoneButtonClicked(): void {
    this.getOfferById(this.idForm.get('id').value)
  }

  onOfferDetailsButtonClicked(model: Offer): void {
    let dialogRef = this.dialog.open(OfferDetailsComponent, {
      data: model,
    });
  }

  getOfferById(id: number): void {
    this.subscription.add(this.offersService.getOfferById(id)
    .subscribe((model: Offer)=> {
      this.onOfferDetailsButtonClicked(model);
    }))
  }

  private generateForm(): FormGroup {
    let idFormControl = this.formBuilder.control(null);

    return this.formBuilder.group({
      id: idFormControl
    })
  }
}
