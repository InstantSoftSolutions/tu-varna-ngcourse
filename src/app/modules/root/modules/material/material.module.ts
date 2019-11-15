import { NgModule } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [
    MatDialogModule,
    MatCardModule
  ],
  exports: [
    MatDialogModule,
    MatCardModule
  ]
})
export class MaterialModule { }
