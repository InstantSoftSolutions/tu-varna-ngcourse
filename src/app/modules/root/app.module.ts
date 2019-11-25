import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './/modules/app-routing.module';

import { AppComponent } from './components/app-component/app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { OffersComponent } from './components/offers/offers.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { OffersService } from './services/http-services/offers-service/offers.service';
import { OfferDetailsComponent } from './components/offer-details/offer-details.component';
import { MaterialModule } from './modules/material/material.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactsService } from './services/http-services/contact-service/contacts.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    OffersComponent,
    ContactsComponent,
    PageNotFoundComponent,
    OfferDetailsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    OffersService,
    ContactsService
  ],
  entryComponents: [
    OfferDetailsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
