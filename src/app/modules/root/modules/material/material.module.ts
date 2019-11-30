import { NgModule } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  imports: [
    MatCardModule,
    MatDialogModule,
    MatTabsModule
  ],
  exports: [
    MatCardModule,
    MatDialogModule,
    MatTabsModule
  ]
})
export class MaterialModule { }
