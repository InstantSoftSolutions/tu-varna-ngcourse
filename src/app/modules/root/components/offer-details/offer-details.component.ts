import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Offer } from '../../services/http-services/offers-service/models/offer.model';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.scss']
})
export class OfferDetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Offer) { }

  ngOnInit(): void {
  }

}
