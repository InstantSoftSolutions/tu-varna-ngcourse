import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'; // Това е необходимо, за да се използват форми, като следва да се добави и по-долу в масива с импорти.

import { AppRoutingModule } from './/modules/app-routing.module';
import { MaterialModule } from './modules/material/material.module';

import { AppComponent } from './components/app-component/app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { OffersComponent } from './components/offers/offers.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { OfferDetailsComponent } from './components/offer-details/offer-details.component';

import { ContactsService } from './services/http-services/contact-service/contacts.service';
import { OffersService } from './services/http-services/offers-service/offers.service';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginContainerComponent } from './components/login-container/login-container.component';

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
    RegisterComponent,
    LoginContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    ContactsService,
    OffersService
  ],
  entryComponents: [
    OfferDetailsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
