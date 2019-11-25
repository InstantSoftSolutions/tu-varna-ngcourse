import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from '../../services/http-services/contact-service/contacts.service';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit, OnDestroy {
  contactForm: FormGroup;

  private subscription: Subscription; // Container for all subscriptions in the component
  constructor(private formBuilder: FormBuilder, private contactsService: ContactsService) {
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this.contactForm = this.generateContactForm();
  }

  onSubmitButtonClicked(): void {
    if (this.contactForm.valid) {
      // Do http request to server (Post request)
      this.subscription.add(this.contactsService.sendMessage(this.contactForm.value)
      .subscribe((response: any) => {
        console.log(response);

        this.contactForm.reset();
      }, (errorResponse: HttpErrorResponse) => {
        console.log(errorResponse.message);
      }));
    }
    else {
      this.contactForm.markAllAsTouched();
    }
  }

  ngOnDestroy(): void {
    // Clean momory - prevent memory leaks
    this.subscription.unsubscribe();
  }

  private generateContactForm(): FormGroup {
    let subjectFormControl = this.formBuilder.control(null,[
      Validators.required
    ]);

    let authorFormControl = this.formBuilder.control(null);

    let messageFormControl = this.formBuilder.control(null,[
      Validators.required
    ]);

    return this.formBuilder.group({
      subject: subjectFormControl,
      author: authorFormControl,
      message: messageFormControl
    });
  }
}
