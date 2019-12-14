import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ContactsService } from '../../services/http-services/contact-service/contacts.service';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit, OnDestroy {
  /*
    Ще използваме реактивни форми. Следователно е важно да си добавим модулите за тях.
    Тъй като компонента, в който работим е част от app.module, то двата модула, с които си добавяме сървисите и
    интерфейсите на формите трябва да са импортнати там.

  */
  contactForm: FormGroup; // Необходима ни е, за да я закачим за темплейта след малко.

  // Чрез използване на async pipe, а вторият е чрез Subscription контейнер
  private subscription: Subscription;

  constructor(private formBuilder: FormBuilder, private contactService: ContactsService) {
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this.contactForm = this.generateContactForm();
  }

  onSendButtonClicked(): void {
    if (this.contactForm.valid) {
      // Следва да се направи заявката към сървъра
      this.subscription.add(this.contactService.sendMessage(this.contactForm.value)
      .subscribe( (response: any) => {
        // Тук имаме данни, с които да работим. Заявката е изпълнена успешно. 
        console.log(response);
        this.contactForm.reset(); //Изчиства съдържанието на полетата, като запазва техните валидации.
      }, (errorResponse: HttpErrorResponse) => {
        console.log(errorResponse.message);
      }));
    }
    else {
      this.contactForm.markAllAsTouched(); // Активираме механизма за валидиране на формата.
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // Изчиства паметта на браузъра, тази част, която е свързана с компонента!
  }

  private generateContactForm(): FormGroup {
    let subjectFormControl = this.formBuilder.control(null, [
      Validators.required
    ]);

    let authorFormControl = this.formBuilder.control(null);

    let messageFormControl = this.formBuilder.control(null, [
      Validators.required
    ]);

    return this.formBuilder.group({
      subject: subjectFormControl, // Името на свойството съвпада с текста, който трябва да подадем на formControlName.
      message: messageFormControl,
      author: authorFormControl
    });
  }

}
