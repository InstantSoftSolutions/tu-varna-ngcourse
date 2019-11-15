import { NgModule } from '@angular/core';

import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';

@NgModule({
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

/*
  Премахваме CommonModule, защото чрез него си осигуряваме възможност за използване на стандартните
  директиви - ngIf, ngFor и т.н, нещо което в случая не ни е необходимо.

  Единствената роля, която ще изпълнява този модул е да импортва и експортва абсолютно всички подмо-
  дули, които ще се включват от material пакета.

*/