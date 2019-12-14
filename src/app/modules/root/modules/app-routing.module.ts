import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { AppComponent } from '../components/app-component/app.component';
import { HomeComponent } from '../components/home/home.component';
import { SearchComponent } from '../components/search/search.component';
import { OffersComponent } from '../components/offers/offers.component';
import { ContactsComponent } from '../components/contacts/contacts.component';
import { LoginContainerComponent } from '../components/login-container/login-container.component';
import { AuthGuard } from './guards/auth.guard';
import { UserRoleGuard } from './guards/user-role.guard';
import { AdminRoleGuard } from './guards/admin-role.guard';

// Check for more details about lazy loading feature modules: https://angular.io/guide/lazy-loading-ngmodules

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'search', component: SearchComponent
  },
  {
    path: 'offers', component: OffersComponent
  },
  {
    path: 'publish', component: OffersComponent
  },
  {
    path: 'contacts', component: ContactsComponent
  },
  {
    path: 'signin', component: LoginContainerComponent
  },
  {
    path: 'user', loadChildren: () => import('../../user/user.module').then(m => m.UserModule), canLoad: [AuthGuard, UserRoleGuard]
  },
  {
    path: 'admin', loadChildren: () => import('../../admin/admin.module').then(m => m.AdminModule), canLoad: [AuthGuard, AdminRoleGuard]
  },
  {
    path: "**", component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
