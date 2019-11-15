import { NgModule } from '@angular/core';

import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';

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
