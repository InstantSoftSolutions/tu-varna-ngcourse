import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  /*
    Ще използваме реактивни форми. Следователно е важно да си добавим модулите за тях.
    Тъй като компонента, в който работим е част от app.module, то двата модула, с които си добавяме сървисите и
    интерфейсите на формите трябва да са импортнати там.

  */
  contactForm: FormGroup; // Необходима ни е, за да я закачим за темплейта след малко.
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.generateContactForm();
  }

  onSendButtonClicked(): void {
    if (this.contactForm.valid) {

    }
    else {
      this.contactForm.markAllAsTouched(); // Активираме механизма за валидиране на формата.
    }
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
